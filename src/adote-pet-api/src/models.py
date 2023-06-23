from datetime import datetime

import peewee

from .database import db

class BaseModel(peewee.Model):
    class Meta:
        database = db

class Usuario(BaseModel):
    nome_completo = peewee.CharField(max_length=150)
    email = peewee.CharField(max_length=150)
    telefone = peewee.CharField(max_length=150, null=True)
    cpf = peewee.CharField(max_length=150, null=True)
    complemento = peewee.CharField(max_length=150, null=True)
    cep = peewee.CharField(max_length=150, null=True)
    data_de_nascimento = peewee.TimestampField(null=True)
    login = peewee.CharField(max_length=150, null=True)
    senha = peewee.CharField(max_length=150)
    data_de_criacao = peewee.TimestampField(default=datetime.now())
    

class Animal(BaseModel):
    tipo = peewee.CharField(max_length=150)
    raca = peewee.CharField(max_length=150)
    genero = peewee.CharField(max_length=150)
    nome_completo = peewee.CharField(max_length=150)
    data_de_nascimento = peewee.TimestampField(null=True)
    flag_castrado = peewee.BooleanField(default=False)
    usuario_id = peewee.ForeignKeyField(Usuario, backref='usuario')
    data_de_criacao = peewee.TimestampField(default=datetime.now())

class AnimalFavorito(BaseModel):
    usuario_id = peewee.ForeignKeyField(Usuario, backref='usuario')
    animal_id = peewee.ForeignKeyField(Animal, backref='animal')
    data_de_criacao = peewee.TimestampField(default=datetime.now())