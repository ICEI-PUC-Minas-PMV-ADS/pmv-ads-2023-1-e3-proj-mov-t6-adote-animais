import { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button, TextInput, DefaultTheme } from "react-native-paper";
import Logo from "./logo";
import { createUser } from "../services/adotePetApi";

const RegisterForm = ({ setPage, setIsLogged }) => {
  const [form, setForm] = useState({});

  const isEmailValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <View style={styles.container}>
      <Logo />
      <View>
        <Text style={styles.text}>Cadastro</Text>
        <View style={styles.containerSubTitle}>
          <Text style={styles.textSubTitle}>ou faça login </Text>
          <Text
            style={styles.textSubtitleLink}
            onPress={() => setPage("login")}
          >
            aqui
          </Text>
        </View>
      </View>
      <TextInput
        label="Nome"
        onChangeText={(name) => {
          setForm((state) => ({ ...state, name }));
        }}
      />
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
          if (!form.name || !form.email || !form.password) {
            alert("Preencha todos os campos");
          } else if (!isEmailValid(form.email)) {
            alert("Preencha um email válido");
          } else {
            createUser(form)
            setIsLogged(true);
          }
        }}
      >
        Cadastrar
      </Button>
    </View>
  );
};

export default RegisterForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    gap: 25,
    margin: 20,
  },
  text: {
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
