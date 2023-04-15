import { View, StyleSheet, Text } from "react-native";
import { Button, TextInput, DefaultTheme } from "react-native-paper";

const RegisterForm = ({ setPage, setIsLogged }) => {
  return (
    <View style={styles.container}>
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
      <TextInput label="Nome" />
      <TextInput label="Email" />
      <TextInput secureTextEntry={true} label="Senha" type="password" />
      <Button mode="contained" onPress={() => setIsLogged(true)}>
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
    fontSize: 40,
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
