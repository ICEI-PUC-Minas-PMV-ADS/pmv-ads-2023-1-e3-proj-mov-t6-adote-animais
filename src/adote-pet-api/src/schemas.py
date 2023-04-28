from typing import Any, List, Union
from datetime import datetime

import peewee
from pydantic import BaseModel
from pydantic.utils import GetterDict


class PeeweeGetterDict(GetterDict):
    def get(self, key: Any, default: Any = None):
        res = getattr(self._obj, key, default)
        if isinstance(res, peewee.ModelSelect):
            return list(res)
        return res

class AnimalBase(BaseModel):
    tipo: str
    raca: str
    genero: str
    nome_completo: str
    data_de_nascimento: datetime | None
    flag_castrado: bool

class AnimalInDb(AnimalBase):
    id: int
    usuario_id: int
    data_de_criacao: datetime
    class Config:
        orm_mode = True
        getter_dict = PeeweeGetterDict

class AnimalCreate(AnimalBase):
    pass


class UsuarioBase(BaseModel):
    nome_completo: str
    email: str
    telefone: str
    cpf: str | None
    complemento: str | None
    cep: str | None
    data_de_nascimento: datetime | None

class UsuarioInDb(UsuarioBase):
    id: int
    data_de_criacao: datetime
    class Config:
        orm_mode = True
        getter_dict = PeeweeGetterDict

class UsuarioCreate(UsuarioBase):
    login: str
    senha: str