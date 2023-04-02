import { View } from "react-native";
import Header from "./header";
import PetsList from "./pets-list";

const HomeScreen = () => {
  return (
    <View>
      <Header title="Adote um amigo" screenType="home" />
      <PetsList />
    </View>
  );
};

export default HomeScreen;
