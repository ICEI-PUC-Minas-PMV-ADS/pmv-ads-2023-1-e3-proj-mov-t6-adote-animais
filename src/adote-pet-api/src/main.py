from fastapi import FastAPI, Request
from . import database, models
from .database import db_state_default
from .controller import router

database.db.connect()
database.db.create_tables([models.Usuario, models.Animal])
database.db.close()

app = FastAPI()

app.include_router(router)

@app.get("/", include_in_schema = False)
def read_home(request: Request):
    return str (request.base_url) + "docs"