from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware

from . import models
from .controller import router
from .database import db


db.connect()
db.create_tables([models.Usuario, models.Animal, models.AnimalFavorito])
db.close()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)

@app.get("/", include_in_schema = False)
def read_home(request: Request):
    return str (request.base_url) + "docs"