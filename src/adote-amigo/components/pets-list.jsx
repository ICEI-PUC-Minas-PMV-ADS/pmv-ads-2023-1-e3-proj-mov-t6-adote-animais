import * as React from "react";
import { FlatList } from "react-native";
import { List } from "react-native-paper";
import { getAnimals } from "../services/adotePetApi";
import { useState, useEffect } from "react";

const PetsList = () => {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const json = await getAnimals().json();
      console.log(json)
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if(isLoading) return null

return ( <FlatList
    data={data}
    renderItem={({ item }) =>
      {{console.log(item)}
        return ( <List.Item
        title={item.nome_completo}
        description={`Descrição do ${item.tipo}`}
        left={(props) => (
          <List.Image {...props} source={require("../assets/cat.jpg")} />
        )}
        right={(props) => <List.Icon {...props} icon="star-outline" />}
      />)}
    }
  />
)};

export default PetsList;
