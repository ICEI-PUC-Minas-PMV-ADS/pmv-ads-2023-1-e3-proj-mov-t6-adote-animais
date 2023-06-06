import "react-native-gesture-handler";
import { useState } from "react";
import LoginForm from "./components/login-form";
import EditInformationForm from "./components/edit-information-form";
import HomeScreen from "./components/main-screen";
import FavoriteScreen from "./components/fav-screen";
import RegisterForm from "./components/register-form";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { DefaultTheme, IconButton } from "react-native-paper";
import { SafeAreaView, StatusBar, View } from "react-native";
import { useFonts, Chewy_400Regular } from "@expo-google-fonts/chewy";

const Drawer = createDrawerNavigator();

export default function App() {
  const [loadedFonts] = useFonts({
    Chewy: Chewy_400Regular,
  });
  const [isLogged, setIsLogged] = useState(false);
  const [page, setPage] = useState("login");

  if (!loadedFonts) {
    return <View />;
  }

  if (!isLogged && page === "login") {
    return (
      <>
        <SafeAreaView />
        <LoginForm setPage={setPage} setIsLogged={setIsLogged} />
      </>
    );
  } else if (!isLogged && page === "register") {
    return (
      <>
        <SafeAreaView />
        <RegisterForm setPage={setPage} setIsLogged={setIsLogged} />
      </>
    );
  }

  return (
    <NavigationContainer>
      <SafeAreaView />
      <StatusBar
        barStyle="light-content"
        backgroundColor={DefaultTheme.colors.primary}
      />
      <Drawer.Navigator
        initialRouteName="home-screen"
        screenOptions={{
          headerStyle: {
            backgroundColor: DefaultTheme.colors.primary,
          },
          headerTintColor: "#fff",
          drawerActiveBackgroundColor: DefaultTheme.colors.primaryContainer,
          drawerActiveTintColor: DefaultTheme.colors.primary,
          drawerInactiveTintColor: DefaultTheme.colors.primary,
          drawerType: "back",
          drawerLabelStyle: {
            fontSize: 15,
          },
        }}
        drawerContent={(props) => {
          return (
            <>
              <SafeAreaView />
              <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
              </DrawerContentScrollView>
              <DrawerItem
                label="Sair"
                onPress={() => {
                  setIsLogged(false);
                  setPage("login");
                }}
                icon={() => (
                  <IconButton
                    icon="logout"
                    size={20}
                    iconColor={DefaultTheme.colors.primary}
                  />
                )}
              />
            </>
          );
        }}
      >
        <Drawer.Screen
          name="home-screen"
          component={HomeScreen}
          options={{
            title: "Adote um amigo",
            drawerIcon: () => (
              <IconButton
                icon="cat"
                size={20}
                iconColor={DefaultTheme.colors.primary}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="favorite-pets"
          component={FavoriteScreen}
          options={{
            title: "Favoritos",
            drawerIcon: () => (
              <IconButton
                icon="star"
                size={20}
                iconColor={DefaultTheme.colors.primary}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="edit-information"
          component={EditInformationForm}
          options={{
            title: "Editar informações",
            drawerIcon: () => (
              <IconButton
                icon="account-circle"
                size={20}
                iconColor={DefaultTheme.colors.primary}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
