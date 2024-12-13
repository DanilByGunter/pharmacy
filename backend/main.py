from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordRequestForm
from passlib.hash import bcrypt
from sqlalchemy.orm import Session
from datetime import datetime, timedelta
from bson import ObjectId
from models import Base, User, UserInDB, UserIn, Token, Employee, Clients, \
    Medicines, Medicines_all, List, Order, AddToOrder
from database import engine, SECRET_KEY, ALGORITHM, oauth2_scheme, \
    SessionLocal, ACCESS_TOKEN_EXPIRE_MINUTES, db
import jwt

app = FastAPI(root_path='/api')

# Enable CORS
origins = [
    "http://localhost:8000",
    "http://localhost:3000",
    "http://localhost",
    "http://51.250.112.186:8000",
    "http://51.250.112.186:3000",
    "http://51.250.112.186"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # You can also use ["*"] to allow all origins.
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

Base.metadata.create_all(bind=engine)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


def create_access_token(data: dict, expires_delta: timedelta = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt


def verify_password(plain_password, password):
    return bcrypt.verify(plain_password, password)


def get_password_hash(password):
    return bcrypt.hash(password)


def authenticate_user(db: Session, username: str, password: str):
    user = db.query(User).filter(User.username == username).first()
    if not user:
        return False
    if not verify_password(password, user.password):
        return False
    return user


async def get_current_user(token: str = Depends(oauth2_scheme),
                           db: Session = Depends(get_db)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            raise credentials_exception
    except jwt.PyJWTError as e:
        print(e)
        raise credentials_exception
    user = db.query(User).filter(User.username == username).first()
    if user is None:
        raise credentials_exception
    return user


@app.post("/register", response_model=UserInDB, tags=['Register'])
async def register(user: UserIn, db: Session = Depends(get_db)):
    db_user = db.query(User).filter(User.username == user.username).first()
    if db_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Username already registered"
        )
    password = get_password_hash(user.password)
    db_user = User(username=user.username, password=password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return UserInDB(username=db_user.username, password=db_user.password)


@app.post("/token", response_model=Token, tags=['Token'])
async def login_for_access_token(
        form_data: OAuth2PasswordRequestForm = Depends(),
        db: Session = Depends(get_db)):
    user = authenticate_user(db, form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.username}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}


@app.get("/staff", tags=['Users'])
async def read_users_all(db: Session = Depends(get_db)):
    return db.query(Employee).all()


@app.get("/users/me/{login}", tags=['Users', 'Me'])
async def read_users_me(login, db: Session = Depends(get_db)):
    db_user = db.query(Employee).filter(Employee.login == login).first()
    return db_user


@app.get("/medicines", response_model=list[Medicines], tags=['Items'])
async def get_medicines(current_user: UserInDB = Depends(get_current_user)):
    products_cursor = db.medicines.find()
    products = await products_cursor.to_list(length=10000)
    for product in products:
        product['id'] = str(product['_id'])
    return products


@app.get("/medicines/{id_product}",
         response_model=Medicines_all,
         tags=['Items'])
async def get_medicines_id(
        id_product: str,
        current_user: UserInDB = Depends(get_current_user)):
    products_cursor = db.medicines.aggregate([
        {'$match': {'_id': ObjectId(id_product)}},
        {'$lookup':
            {
                'from': 'categories',
                'localField': 'category_id',
                'foreignField': '_id',
                'as': 'category'
            }},
        {
                '$unwind': '$category'
            },
        {'$project':
            {
                '_id': 1,
                'title': 1,
                'count': 1,
                'price': 1,
                'description': 1,
                'prescription': 1,
                'image_path': 1,
                'category': '$category.name'
            }}
        ])
    products = await products_cursor.to_list(length=1)
    product = products[0]
    product['id'] = str(product['_id'])
    return product


@app.get("/clients/me/{username}",
         response_model=Clients,
         tags=['Users', 'Me'])
async def get_clients(
        username: str,
        current_user: UserInDB = Depends(get_current_user)):
    clients_cursor = db.clients.aggregate([{'$match': {'login': username}}])
    clients = await clients_cursor.to_list(length=1)
    client = clients[0]
    client['id'] = str(client['_id'])
    client['name'] = client['full_name']['name']
    client['surname'] = client['full_name']['surname']
    client['patronymic'] = client['full_name']['patronymic']
    return client


@app.post("/order", tags=['Order'])
async def add_to_cart(
        item: AddToOrder,
        current_user: UserInDB = Depends(get_current_user)):
    print(item.id)
    result = db.medicines.update_one(
        {'_id': ObjectId(item.id)},
        {'$inc': {'count': -1}}
        )
    if not result:
        raise HTTPException(status_code=404, detail="Product not found")
    return True


@app.get("/bucket/me", response_model=Order, tags=['Order', 'Me'])
async def add_to_cart_item(current_user: UserInDB = Depends(get_current_user)):
    result = db.orders.aggregate([
        {'$lookup': {'from': "statuses",
                     'localField': "status",
                     'foreignField': "_id",
                     'as': "status"}},
        {'$match': {'$and':
                    [{'client_login': current_user.username},
                     {"status.name": {'$eq': "В корзине"}}]}},
        {'$unwind': "$items"},
        {'$lookup': {'from': "medicines",
                     'localField': "items.item_id",
                     'foreignField': "_id",
                     'as': "item"}},
        {'$unwind': "$item"},
        {'$addFields': {"status_name": "$status.name",
                        "item.amount": "$items.amount"}},
        {'$unwind': "$status_name"},
        {'$lookup': {'from': "categories",
                     'localField': "item.category_id",
                     'foreignField': "_id",
                     'as': "item.category"}},
        {'$unwind': "$item.category"},
        {'$addFields': {"item.category": "$item.category.name"}},
        {'$group': {'_id':
                    {'client_login': "$client_login",
                     'status_change_datetime': "$status_change_datetime",
                     'status': '$status'},
                    'items': {'$push': "$item"}}},
        {'$addFields': {'client_login': "$_id.'client_login'",
                        'status': "$_id.status.name"}},
        {'$unwind': "$status"},
        {'$project': {"items.count": 0,
                      "_id": 0,
                      "items.category_id": 0}}])

    if not result:
        raise HTTPException(status_code=404, detail="Product not found")
    orders = await result.to_list(length=3)
    return orders[0]


@app.get("/orders/me", response_model=List[Order], tags=['Order', 'Me'])
async def add_to_cart_items(
        current_user: UserInDB = Depends(get_current_user)):
    result = db.orders.aggregate([
        {'$lookup': {'from': "statuses",
                     'localField': "status",
                     'foreignField': "_id",
                     'as': "status"}},
        {'$match': {'$and':
                    [{'client_login': current_user.username},
                     {"status.name": {'$not': {'$eq': "В корзине"}}}]}},
        {'$unwind': "$items"},
        {'$lookup': {'from': "medicines",
                     'localField': "items.item_id",
                     'foreignField': "_id",
                     'as': "item"}},
        {'$unwind': "$item"},
        {'$addFields': {"status_name": "$status.name",
                        "item.amount": "$items.amount"}},
        {'$unwind': "$status_name"},
        {'$lookup': {'from': "categories",
                     'localField': "item.category_id",
                     'foreignField': "_id",
                     'as': "item.category"}},
        {'$unwind': "$item.category"},
        {'$addFields': {"item.category": "$item.category.name"}},
        {'$group': {'_id': {
            'client_login': "$client_login",
            'status_change_datetime': "$status_change_datetime",
            'status': '$status'},
                'items': {'$push': "$item"}
                }},
        {'$addFields': {'client_login': "$_id.'client_login'",
                        'status': "$_id.status.name"}},
        {'$unwind': "$status"},
        {'$project': {"items.count": 0,
                      "_id": 0,
                      "items.category_id": 0}}])
    if not result:
        raise HTTPException(status_code=404, detail="Product not found")
    orders = await result.to_list(length=3)
    return orders
