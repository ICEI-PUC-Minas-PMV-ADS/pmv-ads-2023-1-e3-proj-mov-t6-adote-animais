import * as React from "react";
import { FlatList } from "react-native";
import { List, IconButton, DefaultTheme } from "react-native-paper";
import { getAnimals } from "../services/adotePetApi";
import { useState, useEffect } from "react";

const PetsList = () => {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [userId, setUserId] = useState(1);
  const [petId, setPetId] = useState(2);

  const getData = async () => {
    try {
      fetch('http://192.168.100.8:8000/api/animals') 
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
        right={(props) => 
          <IconButton
            icon= "star-outline"
            iconColor={DefaultTheme.colors.primary}
            size={20}
            onPress={() => {
                try {
                  fetch('http://192.168.100.8:8000/api/favorito/'+userId+"/"+petId,{
                    method : 'POST'
                  }) 
                  .then((response) => response.json()) 
                  .then((data) => {
                    alert("Pet favoritado!");
                  });
                } catch (error) {
                  console.error(error);
                } finally {
                  setLoading(false);
                }
              }
            }
          ><List.Icon {...props} icon="star-outline" /></IconButton>}
      />)}
    }
  />
)};

export default PetsList;
