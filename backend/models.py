from pydantic import BaseModel
from sqlalchemy import Column, Integer, String, Date, Float
from sqlalchemy.ext.declarative import declarative_base
from typing import List

Base = declarative_base()


class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    password = Column(String)


class Employee(Base):
    __tablename__ = "employees"
    id = Column(Integer, primary_key=True, index=True)
    login = Column(String, unique=True)
    name = Column(String)
    surname = Column(String)
    patronymic = Column(String)
    email = Column(String)
    phone_number = Column(String)
    birth_date = Column(Date)
    salary = Column(Float)
    hire_date = Column(Date)
    image_path = Column(String)
    position_id = Column(Integer)


class UserInDB(BaseModel):
    username: str
    password: str


class UserIn(BaseModel):
    username: str
    password: str


class Token(BaseModel):
    access_token: str
    token_type: str


class Medicines(BaseModel):
    id: str
    title: str
    price: float
    image_path: str


class Medicines_all(BaseModel):
    id: str
    title: str
    price: float
    image_path: str
    description: str
    prescription: bool
    count: int
    category: str


class Clients(BaseModel):
    id: str
    login: str
    name: str
    surname: str
    patronymic: str
    email: str
    phone: str
    image_path: str


class AddToOrder(BaseModel):
    id: str
    username: str


class Medicines_one(BaseModel):
    title: str
    price: float
    image_path: str
    description: str
    prescription: bool
    amount: int
    category: str


class Order(BaseModel):
    status: str
    items: List[Medicines_one]
