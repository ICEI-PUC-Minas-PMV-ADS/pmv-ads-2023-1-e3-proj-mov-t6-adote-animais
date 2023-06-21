import * as React from "react";
import { FlatList } from "react-native";
import { List, IconButton, DefaultTheme } from "react-native-paper";
import { useState, useEffect } from "react";

const PetsFav = () => {
	const [isLoading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	const [userId, setUserId] = useState(1);

	const getData = async () => {
		try {
			fetch("http://localhost:8000/api/favorito/" + userId)
				.then((response) => response.json())
				.then((data) => {
					setData(data);
					// console.log(data);
				});
		} catch (error) {
			alert("Oops algo deu errado, tente novamente mais tarde");
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	if (isLoading) return null;

	return (
		<FlatList
			data={data}
			renderItem={({ item }) => {
				return (
					<List.Item
						title={item.animal_id.nome_completo}
						description={`Descrição do ${item.animal_id.tipo}`}
						left={(props) => <List.Image {...props} source={require("../assets/logo.png")} />}
						right={() => (
							<IconButton
								icon="star"
								iconColor={DefaultTheme.colors.primary}
								size={20}
								onPress={() => alert("Pet já favoritado")}
							/>
						)}
					/>
				);
			}}
		/>
	);
};

export default PetsFav;
