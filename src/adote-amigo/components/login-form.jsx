import { View, StyleSheet, Text } from "react-native";
import { Button, TextInput } from "react-native-paper";

const LoginForm = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <TextInput label="Email" />
      <TextInput secureTextEntry={true} label="Senha" type="password" />
      <Button mode="contained">Entrar</Button>
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
  text: {
    fontSize: 40,
    textAlign: "center",
  },
});
