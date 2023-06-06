import * as React from "react";
import { FlatList } from "react-native";
import { List } from "react-native-paper";
import { useState, useEffect } from "react";

const PetsFav = () => {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [userId, setUserId] = useState(1);

  const getData = async () => {
    try {
        fetch('http://192.168.100.8:8000/api/favorito/'+ userId) 
            .then((response) => response.json()) 
            .then((data) => {
                setData(data);
                console.log(data)
            });
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

export default PetsFav;
