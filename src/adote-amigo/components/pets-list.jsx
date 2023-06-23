import * as React from "react";
import { FlatList } from "react-native";
import { List, IconButton, DefaultTheme } from "react-native-paper";
import { listAnimals, listFavoriteAnimals, addFavoriteAnimalToUser } from "../services/adotePetApi";
import { useState, useEffect } from "react";

const PetsList = () => {
	const [isLoading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	const [favorites, setFavorites] = useState([]);
	const [userId, setUserId] = useState(1);
	const [petId, setPetId] = useState();

	const getFavorites = async () => {
		try {
			const favoriteAnimals = await listFavoriteAnimals(userId);
			setFavorites(favoriteAnimals);
		} catch (err) {
			alert("Ops, algo deu errado. Tente mais tarde!");
		} finally {
			setLoading(false);
		}
	};

	const getData = async () => {
		try {
			const animals = await listAnimals();
			setData(animals);
		} catch (err) {
			alert("Erro ao carregar os animais!")
		} finally {
			setLoading(false);
		}
	};
	
	const addToFavorite = async (userId, animalId) => {
		try {
			await addFavoriteAnimalToUser(userId, animalId);
			alert("Pet favoritado!");
			getFavorites();
		} catch (err) {
			alert("Erro ao favoritar o pet!")
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		getFavorites();
		getData();
	}, []);

	if (isLoading) return null;

	return (
		<FlatList
			data={data}
			renderItem={({ item }) => {
				{
				}
				return (
					<List.Item
						title={item.nome_completo}
						onPress={() => {
							let exists = false;
							favorites.map((values) => {
								// Itera em TODOS os itens e verifica se algum deles bate com a condicional
								if (userId == values.usuario_id.id && item.id == values.animal_id.id) {
									// Caso a condição bata, torna 'exists' 'true'
									exists = true;
								}
							});
							if (!exists) {
								addToFavorite(userId, item.id);
							} else {
								alert("Pet já com estrela");
							}
						}}
						description={`A raça do ${item.nome_completo} é ${item.raca}, ele é do gênero ${item.genero}`}
						left={(props) => <List.Image {...props} source={require("../assets/logo.png")} />}
						right={(props) => (
							<IconButton
								icon="star-outline"
								iconColor={DefaultTheme.colors.primary}
								size={20}
							>
								<List.Icon {...props} />
							</IconButton>
						)}
					/>
				);
			}}
		/>
	);
};

export default PetsList;
