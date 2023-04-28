from typing import Union
from fastapi import FastAPI
from pydantic import BaseModel
from datetime import date, datetime
from fastapi import HTTPException

from schema import Animal, Usuario

class PyAnimal(BaseModel):
    tipo: str
    raca: str
    genero: str
    nome_completo: str
    data_de_nascimento: date | None
    flag_castrado: bool
    usuario_id: int

class PyAnimalOptional(BaseModel):
    tipo: str | None
    raca: str | None
    genero: str | None
    nome_completo: str | None
    data_de_nascimento: date | None
    flag_castrado: bool | None
    usuario_id: int | None

app = FastAPI()

@app.get("/")
def read_home():
    welcome_msg = "Bem vindo ao adote seu pet! 🐶"
    intro_msg = "Os endpoints disponiíveis são:"
    home_url = "/"
    read_pet_url = "/pet/read",
    detail_pet_url = "/pet/{id}/details",
    create_pet_url = "/pet/create",
    update_pet_url = "/pet/update",
    delete_pet_url = "/delete_pet",

    return {
        "Bem vindo": welcome_msg,
        "Introdução": intro_msg,
        "Home (GET)": home_url,
        "Listagem de pets (GET)": read_pet_url,
        "Detalhes (GET)": detail_pet_url,
        "Criação de pets (GET/POST)": create_pet_url,
        "Alteração de pets (GET/PUT)": update_pet_url,
        "Exclusão de pets (GET/DELETE): ": delete_pet_url,
        # ...
        }

# Detalhes
@app.get('/pet/{id}/details')
def detail_pet(id: int):
    animal = Animal.get(id = id)
    
    return {
        "Id": animal.id,
        "Tipo": animal.tipo,
        "Raça": animal.raca,
        "Gênero": animal.genero,
        "Nome completo": animal.nome_completo,
        "Data de nascimento": animal.data_de_nascimento,
        "Castrado": animal.flag_castrado,
        "Dono": animal.usuario_id,
        "Data de criação": animal.data_de_criacao   
    }

# === CRUD de animais ===
    
# Create
@app.get('/pet/create')
def create_pet_get():
    return {
        "Bem vindo": "Bem vindo a URL para criação de pets. Para criar um pet, envie um JSON (POST), com o seguintes dados: ",
        "tipo": "Tipo do animal (string)",
        "raca": "Raça do animal (string)",
        "genero": "Masculino, Feminino ou Outro (enum/string/tuple)",
        "nome_completo": "Nome completo do animal (string)",
        "data_de_nascimento": "Data de nascimento do animal (string/date). Envie uma string no seguinte formato: YY-MM-DD. Por exemplo: 2020-04-20",
        "flag_castrado": "O animal foi castrado (boolean)?",
        "usuario_id": "A qual usuário este animal pertence (int)"
        }

@app.post('/pet/create')
def create_pet(animal: PyAnimal):
    try:
        new_animal = Animal.create(
            tipo=animal.tipo,
            raca=animal.raca,
            genero=animal.genero,
            nome_completo=animal.genero,
            data_de_nascimento=animal.data_de_nascimento,
            flag_castrado=animal.flag_castrado,
            usuario_id=animal.usuario_id,
        )
        return {"Animal {} criado com sucesso!".format(new_animal)}
    
    except TypeError:
        return {"erro": TypeError, "msg": "Por favor, verifique os dados enviados. Leia nosso /pet/read (GET)!"}
    except ValueError:
        return {"erro": TypeError, "msg": "Por favor, verifique os dados enviados. Leia nosso /pet/read (GET)!"}

# Read
@app.get('/pet/read')
def read_pet():
    my_list = list()
    for animal in Animal.select():
        my_list.append({
            animal.id: {
                "Id": animal.id,
                "Nome completo": animal.nome_completo,
                "Tipo": animal.tipo,
                "Raça": animal.raca,
                "Gênero": animal.genero,
                "Data de nascimento": animal.data_de_nascimento,
                "Dono: ": animal.usuario_id,
                "Data de criação": animal.data_de_criacao,
            },
        })
    return my_list

# Update
@app.get('/pet/update')
def update_pet_get():
        return {
            "Bem vindo": "Bem vindo a URL para a alteração de pets. Para alterar um pet, envie uma query com o 'id' do animal que deseja alterar (PUT). Envie também, um JSON, com o seguintes dados: ",
            "tipo": "Tipo do animal (string)",
            "raca": "Raça do animal (string)",
            "genero": "Masculino, Feminino ou Outro (enum/string/tuple)",
            "nome_completo": "Nome completo do animal (string)",
            "data_de_nascimento": "Data de nascimento do animal (string/date). Envie uma string no seguinte formato: YY-MM-DD. Por exemplo: 2020-04-20",
            "flag_castrado": "O animal foi castrado (boolean)?",
            "usuario_id": "A qual usuário este animal pertence (int)"
        }

@app.put('/pet/update')
def update_pet(id: int, animal: PyAnimalOptional):
    try:
        # Pega o pet:
        pet = Animal.get(id = id)
        # Passa os dados anteriores ao pet, em caso de não alterarmos:
        if animal.tipo == None or animal.tipo == "" or animal.tipo == " ":
            pet.tipo = pet.tipo
        else:
            pet.tipo = animal.tipo
            
        if animal.raca == None or animal.raca == "" or animal.raca == " ":            
            pet.raca = pet.raca
        else:
            pet.raca = animal.raca

        if animal.genero == None or animal.genero == "" or animal.genero == " ":            
            pet.genero = pet.genero
        else:
            pet.genero = animal.genero

        if animal.nome_completo == None or animal.nome_completo == "" or animal.nome_completo == " ":            
            pet.nome_completo = pet.nome_completo
        else:
            pet.nome_completo = animal.nome_completo

        if animal.data_de_nascimento == None or animal.data_de_nascimento == "" or animal.data_de_nascimento == " ":            
            pet.data_de_nascimento = pet.data_de_nascimento
        else:
            pet.data_de_nascimento = animal.data_de_nascimento

        if animal.flag_castrado == None or animal.flag_castrado == "" or animal.flag_castrado == " ":            
            pet.flag_castrado = pet.flag_castrado
        else:
            pet.flag_castrado = animal.flag_castrado

        if animal.usuario_id == None or animal.usuario_id == "" or animal.usuario_id == " ":            
            pet.usuario_id = pet.usuario_id
        else:
            pet.usuario_id = animal.usuario_id

        # Salva o pet alterado
        pet.save()

        # Retorna sucesso:
        return {"{}, alterado com sucesso!".format(pet)} 

    except TypeError:
        return {"erro": TypeError, "msg": "Por favor, verifique os dados enviados. Leia nosso /pet/update (GET)!"}
    except ValueError:
        return {"erro": TypeError, "msg": "Por favor, verifique os dados enviados. Leia nosso /pet/update (GET)!"}

# Delete
@app.get('/pet/delete')
def delete_pet_get():
    return "Bem vindo a URL para a exclusão de pets. Para excluir um pet, envie uma query com o 'id' do animal que deseja excluir com o método 'DELETE'! ",

@app.delete('/pet/delete')
def delete_pet(id: int):
    # Pega o objeto com id = id
    pet = Animal.get(id = id)

    # Excluir
    pet.delete_instance()

    # Feedback
    return {
        'status': 200, 
        'msg': str(pet) + " excluído com sucesso! "
    }
