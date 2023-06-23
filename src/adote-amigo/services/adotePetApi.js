export const linkNgrok = "https://b7fb-2804-35a4-4015-6b00-f013-fc2f-3130-e98a.ngrok-free.app"

export function createUser(data, setIsLogged) {
  fetch(
    `${linkNgrok}/api/usuario`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome_completo: data.name,
        email: data.email,
        senha: data.password,
      }),
    }
  )
    .then((res) => {
        if (!res.ok) {
            throw new Error("Erro ao criar usuário, tente mais tarde!");
        }
        setIsLogged(true)
        alert("Usuário criado com sucesso!");
    })
    .catch((err) => {
        setIsLogged(false);
        alert(err.message);
    });
}

export function login(data, setIsLogged) {
  fetch(
    `${linkNgrok}/api/login`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        senha: data.password,
      }),
    }
  )
    .then((res) => {
        if (!res.ok) {
            throw new Error("Erro ao logar, tente mais tarde!");
        }
        setIsLogged(true)
        alert("Logado com sucesso!");
    })
    .catch((err) => {
        setIsLogged(false)
        alert(err.message)
    });
}

export async function listAnimals(skip = 0, limit = 100) {
  const res = await fetch(
    `${linkNgrok}/api/animals?skip=${skip}&limit=${limit}`
  );
  const json = await res.json();
  return json;
}

export async function listFavoriteAnimals(userId) {
  const res = await fetch(
    `${linkNgrok}/api/favorito/${userId}`
  );
  const json = await res.json();
  return json;
}

export async function addFavoriteAnimalToUser(userId, animalId) {
  const res = await fetch(
    `${linkNgrok}/api/favorito/${userId}/${animalId}`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    }
  );
  const json = await res.json();
  return json;
}

export async function getAnimals() {
  return await fetch(
    `${linkNgrok}/api/animals`
  );
}
