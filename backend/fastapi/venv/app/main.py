from fastapi import FastAPI
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

DATABASE_URL = "postgresql://myuser:database@localhost:5432/mypostgres"

engine = create_engine(DATABASE_URL)

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello"}