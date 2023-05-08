from .database import db, db_state_default
from fastapi import Depends, APIRouter, HTTPException
from .schemas import AnimalInDb, AnimalCreate, UsuarioInDb, UsuarioCreate, UsuarioLogin, animalFavoritoInDb
from typing import List
from . import repository

async def reset_db_state():
    db._state._state.set(db_state_default.copy())
    db._state.reset()


def get_db(db_state=Depends(reset_db_state)):
    try:
        db.connect()
        yield
    finally:
        if not db.is_closed():
            db.close()

router = APIRouter(prefix="/api")

@router.get("/animals", response_model=List[AnimalInDb], dependencies=[Depends(get_db)])
def get_animals(skip: int = 0, limit: int = 100):
    animals = repository.get_animals(skip=skip, limit=limit)
    return animals

@router.get("/animals/{id}", response_model=AnimalInDb, dependencies=[Depends(get_db)])
def get_animal(id: int):
    animal = repository.get_animal(id=id)
    if animal is None:
        raise HTTPException(status_code=404, detail="Animal, não existe")
    return animal

@router.post("/animals/{user_id}", response_model=AnimalInDb, dependencies=[Depends(get_db)])
def create_animal(animal: AnimalCreate, user_id: int):
    return repository.create_animal(animal, user_id)


@router.post("/usuario", status_code=201, response_model=UsuarioInDb, dependencies=[Depends(get_db)])
def create_user(user: UsuarioCreate):
    return repository.create_user(user)

@router.post("/login", response_model=UsuarioInDb,dependencies=[Depends(get_db)])
def login_user(user: UsuarioLogin):
    login_do_usuario = repository.get_user_by_login(user.login)
    if(login_do_usuario == None):
        raise HTTPException(status_code=404, detail="Usuario não existe.")
    if(login_do_usuario.senha != user.senha):
        raise HTTPException(status_code=403, detail="Usuario com senha incorreta.")
    return login_do_usuario

@router.post("/favorito/{user_id}/{animal_id}", response_model=animalFavoritoInDb, dependencies=[Depends(get_db)])
def create_animal_favorito(user_id: int, animal_id: int):
    return repository.create_animal_favorite(user_id, animal_id)

@router.get("/favorito/{user_id}", response_model=List[animalFavoritoInDb], dependencies=[Depends(get_db)])
def get_animals_favorites(user_id: int, skip: int = 0, limit: int = 100):
    favoritos = repository.get_animals_favorites(user_id, skip=skip, limit=limit)
    return favoritos
    