import { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button, TextInput, DefaultTheme } from "react-native-paper";
import Logo from "./logo";

const LoginForm = ({ setPage, setIsLogged }) => {
  const [form, setForm] = useState({});

  const isEmailValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <View style={styles.container}>
      <Logo />
      <View>
        <Text style={styles.textTitle}>Login</Text>
        <View style={styles.containerSubTitle}>
          <Text style={styles.textSubTitle}>ou cadastre-se </Text>
          <Text
            style={styles.textSubtitleLink}
            onPress={() => setPage("register")}
          >
            aqui
          </Text>
        </View>
      </View>
      <TextInput
        label="Email"
        onChangeText={(email) => {
          setForm((state) => ({ ...state, email: email.trim() }));
        }}
      />
      <TextInput
        secureTextEntry={true}
        label="Senha"
        type="password"
        onChangeText={(password) => {
          setForm((state) => ({ ...state, password }));
        }}
      />
      <Button
        mode="contained"
        onPress={() => {
          if (!form.email || !form.password) {
            alert("Preencha todos os campos");
          } else if (!isEmailValid(form.email)) {
            alert("Email inválido");
          } else {
            setIsLogged(true);
          }
        }}
      >
        Entrar
      </Button>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    gap: 25,
    margin: 20,
  },
  textTitle: {
    fontSize: 25,
    textAlign: "center",
  },
  containerSubTitle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  textSubTitle: {
    fontSize: 15,
  },
  textSubtitleLink: {
    fontSize: 15,
    fontWeight: "bold",
    color: DefaultTheme.colors.primary,
  },
});
