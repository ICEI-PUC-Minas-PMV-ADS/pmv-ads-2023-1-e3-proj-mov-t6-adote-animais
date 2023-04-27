import { View, StyleSheet, Text } from "react-native";
import { Button, TextInput, DefaultTheme } from "react-native-paper";

const LoginForm = ({ setPage, setIsLogged }) => {
  return (
    <View style={styles.container}>
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
      <TextInput label="Email" />
      <TextInput secureTextEntry={true} label="Senha" type="password" />
      <Button mode="contained" onPress={() => setIsLogged(true)}>
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
