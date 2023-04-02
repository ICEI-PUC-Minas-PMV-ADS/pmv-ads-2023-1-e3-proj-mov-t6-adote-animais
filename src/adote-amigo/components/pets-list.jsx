import * as React from "react";
import { FlatList } from "react-native";
import { List } from "react-native-paper";

const PetsList = () => (
  <FlatList
    data={[
      { key: "Pet 1" },
      { key: "Pet 2" },
      { key: "Pet 3" },
      { key: "Pet 4" },
      { key: "Pet 5" },
      { key: "Pet 6" },
      { key: "Pet 7" },
      { key: "Pet 8" },
      { key: "Pet 9" },
      { key: "Pet 10" },
      { key: "Pet 11" },
      { key: "Pet 12" },
    ]}
    renderItem={({ item }) => (
      <List.Item
        title={item.key}
        description={`Descrição do ${item.key}`}
        left={(props) => (
          <List.Image {...props} source={require("../assets/cat.jpg")} />
        )}
        right={(props) => <List.Icon {...props} icon="star-outline" />}
      />
    )}
  />
);

export default PetsList;
