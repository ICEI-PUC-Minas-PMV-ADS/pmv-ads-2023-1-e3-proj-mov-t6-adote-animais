import * as React from "react";
import { FlatList } from "react-native";
import { List, IconButton, DefaultTheme } from "react-native-paper";
import { getAnimals } from "../services/adotePetApi";
import { useState, useEffect } from "react";

const PetsList = () => {
	const [isLoading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	const [favorites, setFavorites] = useState([]);
	const [userId, setUserId] = useState(1);
	const [petId, setPetId] = useState();

	const getFavorites = async () => {
		try {
			fetch("http://localhost:8000/api/favorito/" + userId)
				.then((response) => response.json())
				.then((favorites) => {
					setFavorites(favorites);
					// console.log(favorites)
				});
		} catch (error) {
			// console.error(error);
			alert("Ops, algo deu errado. Tente mais tarde!");
		} finally {
			setLoading(false);
		}
	};

	const getData = async () => {
		try {
			fetch("http://localhost:8000/api/animals")
				.then((response) => response.json())
				.then((data) => {
					setData(data);
					// console.log(data)
				});
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

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
							try {
								let exists = false;
								favorites.map((values) => {
									// 2 - Itera em TODOS os itens e verifica se algum deles bate com a condicional
									if (userId == values.usuario_id.id && item.id == values.animal_id.id) {
										// 3 - Caso a condição bata, torna 'exists' 'true'
										exists = true;
									}
								});
								if (!exists) {
									fetch("http://localhost:8000/api/favorito/" + userId + "/" + item.id, {
										method: "POST",
									})
										.then((response) => response.json())
										.then((data) => {
											alert("Pet favoritado!");
											getFavorites();
											window.location.reload()
										});
								} else {
									alert("Pet já com estrela");
								}
							} catch (error) {
								console.error(error);
							} finally {
								setLoading(false);
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
