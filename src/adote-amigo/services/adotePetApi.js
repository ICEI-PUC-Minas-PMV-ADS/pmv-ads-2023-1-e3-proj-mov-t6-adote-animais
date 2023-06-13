// import axios from "axios";

export function createUser(data) {
    console.log(data)
    fetch('http://192.168.100.8:8000/api/usuario', {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome_completo: data.name,
            email: data.email,
            senha: data.password
        })})
        .then((res) => res.json())
        .then((json) => console.log(json))
        .catch((err) => console.error(err))
}

export function listAnimals() {
    console.log(data)
    fetch('http://192.168.100.8:8000/api/animals')
        .then((res) => res.json())
        .then((json) => console.log(json))
        .catch((err) => console.error(err))
}

export async function getAnimals() {
    return await fetch('http://192.168.100.8:8000/api/animals');
}