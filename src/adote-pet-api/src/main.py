from typing import Union
from fastapi import FastAPI
from pydantic import BaseModel
from datetime import date, datetime
from fastapi import HTTPException
import bcrypt

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

class PyUsuario(BaseModel):
    nome_completo: str
    email: str
    telefone: str
    cpf: str | None
    complemento: str | None
    cep: str | None
    data_de_nascimento: date
    login: str
    senha: str

class PyUsuarioOptional(BaseModel):
    nome_completo: str | None
    email: str | None
    telefone: str | None
    cpf: str | None
    complemento: str | None
    cep: str | None
    data_de_nascimento: date | None
    login: str | None
    senha: str | None

app = FastAPI()

@app.get("/")
def read_home():
    welcome_msg = "Bem vindo ao adote seu pet! 🐶"
    intro_msg = "Os endpoints disponiíveis são:"
    home_url = "/"

    # CRUD de animal
    create_pet_url = "/pet/create",
    read_pet_url = "/pet/read",
    update_pet_url = "/pet/update?id=",
    delete_pet_url = "/pet/delete/pet?id=",

    detail_pet_url = "/pet/{id}/details",

    # CRUD de usuário
    create_user_url = "/user/create"
    read_user_url = "/user/{id}"
    update_user_url = "/user/update?id="
    delete_user_url = "/user/delete?id="

    return {

        # CRUD de animal
        "Bem vindo": welcome_msg,
        "Introdução": intro_msg,
        "Home (GET)": [home_url],
        "Listagem de pets (GET)": [read_pet_url],
        "Criação de pets (GET/POST)": [create_pet_url],
        "Alteração de pets (GET/PUT)": [update_pet_url],
        "Exclusão de pets (GET/DELETE): ": [delete_pet_url],

        "Detalhes (GET)": [detail_pet_url],

        # CRUD de usuário
        "Cadastro de usuários (GET/POST)": [create_user_url],
        "Leitura de usuário (GET)": [read_user_url],
        "Atualização de usuário (GET/UPDATE)": [update_user_url],
        "Exclusão de usuário (DELETE)": [delete_user_url]
        # ...
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
        raise TypeError("Por favor, verifique os dados enviados. Leia nosso /pet/read (GET)!")
    except ValueError:
        raise TypeError("Por favor, verifique os dados enviados. Leia nosso /pet/read (GET)!")

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
        if not pet:
            raise HTTPException(404)

        # Passa os dados anteriores ao pet, em caso de não alterarmos:
        if animal.tipo == None or animal.tipo == "" or animal.tipo == " ":
            pass
        else:
            pet.tipo = animal.tipo
            
        if animal.raca == None or animal.raca == "" or animal.raca == " ":            
            pass
        else:
            pet.raca = animal.raca

        if animal.genero == None or animal.genero == "" or animal.genero == " ":            
            pass
        else:
            pet.genero = animal.genero

        if animal.nome_completo == None or animal.nome_completo == "" or animal.nome_completo == " ":            
            pass
        else:
            pet.nome_completo = animal.nome_completo

        if animal.data_de_nascimento == None or animal.data_de_nascimento == "" or animal.data_de_nascimento == " ":            
            pass
        else:
            pet.data_de_nascimento = animal.data_de_nascimento

        if animal.flag_castrado == None or animal.flag_castrado == "" or animal.flag_castrado == " ":            
            pass
        else:
            pet.flag_castrado = animal.flag_castrado

        if animal.usuario_id == None or animal.usuario_id == "" or animal.usuario_id == " ":            
            pass
        else:
            pet.usuario_id = animal.usuario_id

        # Salva o pet alterado
        pet.save()

        # Retorna sucesso:
        return {"{}, alterado com sucesso!".format(pet)} 

    except TypeError:
        raise TypeError("Por favor, verifique os dados enviados. Leia nosso /pet/update (GET)!")
    except ValueError:
        raise TypeError("Por favor, verifique os dados enviados. Leia nosso /pet/update (GET)!")

# Delete
@app.get('/pet/delete')
def delete_pet_get():
    return "Bem vindo a URL para a exclusão de pets. Para excluir um pet, envie uma query com o 'id' do animal que deseja excluir, usando o método 'DELETE'! ",

@app.delete('/pet/delete')
def delete_pet(id: int):
    # Pega o objeto com id = id
    pet = Animal.get(id = id)

    if pet:
        # Excluir
        pet.delete_instance()
        
        # Feedback
        return {
            "status": "200 OK", 
            "msg": str(pet) + " excluído com sucesso! "
            }
    else:
        raise HTTPException(404)

# Detalhes
@app.get('/pet/{id}/details')
def detail_pet(id: int):
    animal = Animal.get(id = id)
    
    if animal:
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
    else:
        raise HTTPException(404)

# === CRUD de usuários ===

# Create
@app.get('/user/create')
def create_user_get():
    return {
        "Bem vindo": "Bem vindo a URL para criação de usuários! Para criar um usuário, envie usando o método POST, uma requisição para este endpoint, com os seguintes dados: ",
        "nome_completo": "Nome completo do usuário (string)",
        "email": "Email do usuário (string)",
        "telefone": "Telefone do usuário (string)",
        "cpf": "CPF do usuário (string)",
        "complemento": "Dados complementares ao endereço do usuário (string)",
        "cep": "CEP do usuário (string)",
        "data_de_nascimento": "Data de nascimento do usuário (string/date). Envie uma string no seguinte formato: YY-MM-DD. Por exemplo: 2020-04-20",
        "login": "Login/Username do usuário (string)",
        "senha": "Senha do usuário (string)",
    }

@app.post('/user/create')
def create_user(user: PyUsuario):

    # Criptografa a senha antes de instanciar
    hashed = bcrypt.hashpw(bytes(user.senha, 'utf-8'), bcrypt.gensalt())

    try:
        new_user = Usuario.create(
            nome_completo=user.nome_completo,
            email=user.email,
            telefone=user.telefone,
            cpf=user.cpf,
            complemento=user.complemento,
            cep=user.cep,
            data_de_nascimento=user.data_de_nascimento,
            login=user.login,
            senha=hashed
        )
        return {"Usuário {} criado com sucesso!".format(new_user)}
    
    except TypeError:
        raise TypeError("Por favor, verifique os dados enviados. Leia nosso /user/create (GET)!")
    except ValueError:
        raise TypeError("Por favor, verifique os dados enviados. Leia nosso /user/create (GET)!")
    
# Read
@app.get("/user/{id}/")
def read_user(id: int):
    user = Usuario.get(id = id)

    if user:
        return {
            "Id": user.id,
            "Nome completo": user.nome_completo,
            "Email": user.email,
            "Telefone": user.telefone,
            "CPF": user.cpf,
            "Complemento": user.complemento,
            "CEP": user.cep,
            "Data de nascimento": user.data_de_nascimento,
            "Login": user.login,
            "Data de criação": user.data_de_criacao   
            }
    else:
        raise HTTPException(404)

# Update
@app.get('/user/update')
def update_user_get():
        return {
            "Bem vindo": "Bem vindo a URL para a alteração de usuário. Para alterar um usuário, envie uma query com o 'id' do usuário que deseja alterar (PUT). Envie também, um JSON, com o seguintes dados: ",
            "nome_completo": "Nome completo do usuário (string)",
            "email": "Email do usuário (string)",
            "telefone": "Telefone do usuário (string)",
            "cpf": "CPF do usuário (string)",
            "complemento": "Dados complementares ao endereço do usuário (string)",
            "cep": "CEP do usuário (string)",
            "data_de_nascimento": "Data de nascimento do usuário (string/date). Envie uma string no seguinte formato: YY-MM-DD. Por exemplo: 2020-04-20",
            "login": "Login/Username do usuário (string)",
            "senha": "Senha do usuário (string)",
            }

@app.put('/user/update')
def update_user(id: int, user: PyUsuarioOptional):
    try:
        # Pega o usuário:
        usuario = Usuario.get(id = id)
        if not user:
            raise HTTPException(404)

        # Passa os dados anteriores ao pet, em caso de não alterarmos:
        if user.nome_completo == None or user.nome_completo == "" or user.nome_completo == " ":
            pass
        else:
            usuario.nome_completo = user.nome_completo
            
        if user.email == None or user.email == "" or user.email == " ":            
            pass
        else:
            usuario.email = user.email

        if user.telefone == None or user.telefone == "" or user.telefone == " ":            
            pass
        else:
            usuario.telefone = user.telefone

        if user.cpf == None or user.cpf == "" or user.cpf == " ":            
            pass
        else:
            usuario.cpf = user.cpf

        if user.complemento == None or user.complemento == "" or user.complemento == " ":            
            pass
        else:
            usuario.complemento = user.complemento 

        if user.cep == None or user.cep == "" or user.cep == " ":            
            pass
        else:
            usuario.cep = user.cep

        if user.data_de_nascimento == None or user.data_de_nascimento == "" or user.data_de_nascimento == " ":            
            pass
        else:
            usuario.data_de_nascimento = user.data_de_nascimento

        if user.login == None or user.login == "" or user.login == " ":            
            pass
        else:
            usuario.login = user.login

        if user.senha == None or user.senha == "" or user.senha == " ":            
            pass
        else:
            # Criptografando a senha
            hashed = bcrypt.hashpw(bytes(user.senha, 'utf-8'), bcrypt.gensalt())
            usuario.senha = hashed

        # Salva o usuário alterado
        usuario.save()

        # Retorna sucesso:
        return {"{}, alterado com sucesso!".format(usuario)} 

    except TypeError:
        raise TypeError("Por favor, verifique os dados enviados. Leia nosso /user/update (GET)!")
    except ValueError:
        raise TypeError("Por favor, verifique os dados enviados. Leia nosso /user/update (GET)!")

# Delete
@app.delete('/user/delete')
def delete_user(id: int):
    user = Usuario.get(id = id)

    if user:
        # Excluir
        user.delete_instance()
        
        # Feedback
        return {
            "status": "200 OK", 
            "msg": str(user) + " excluído com sucesso! "
            }
    else:
        raise HTTPException(404)