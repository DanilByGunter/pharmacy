from sqlalchemy import create_engine
from motor.motor_asyncio import AsyncIOMotorClient
from sqlalchemy.orm import sessionmaker
from fastapi.security import OAuth2PasswordBearer

# Конфигурация приложения и JWT
SECRET_KEY = "f35aK6unLA7Tplq359hadux26jls9a2klal6a8sjfa215jasdis"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 5

DATABASE_URL = "postgresql://postgres:boiler@db:5432/drug_store_db"

MONGO_URL = "mongodb://mongo:27017"
MONGODB_NAME = "boiler"

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

client = AsyncIOMotorClient(MONGO_URL)
db = client[MONGODB_NAME]
