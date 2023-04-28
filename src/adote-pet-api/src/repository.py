from . import models
from .schemas import AnimalCreate, UsuarioCreate


def get_animal(id: int):
    return models.Animal.filter(models.Animal.id == id).first()

def get_animals(skip: int = 0, limit: int = 100):
    return list(models.Animal.select().offset(skip).limit(limit))

def create_animal(animal: AnimalCreate, user_id: int):
    animal = models.Animal(**animal.dict(), usuario_id = user_id)
    animal.save()
    return animal


def get_user(id: int):
    return models.Usuario.filter(models.Usuario.id == id).first()

def get_users(skip: int = 0, limit: int = 100):
    return list(models.User.select().offset(skip).limit(limit))

def create_user(user: UsuarioCreate):
    user = models.Usuario(**user.dict())
    user.save()
    return user