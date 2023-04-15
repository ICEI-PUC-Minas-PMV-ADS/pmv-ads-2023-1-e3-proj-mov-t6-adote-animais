import { View, StyleSheet } from "react-native";
import { Button, TextInput, DefaultTheme } from "react-native-paper";

const EditInformationForm = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerForm}>
        <TextInput label="Nome" />
        <TextInput label="Email" keyboardType="email-address" />
        <TextInput label="Telefone" />
        <TextInput label="Data de nascimento" />
        <TextInput label="CPF" />
        <TextInput secureTextEntry={true} label="Senha" type="password" />
        <Button mode="contained">Salvar</Button>
      </View>
      <View style={styles.deleteButtonContainer}>
        <Button
          buttonColor={DefaultTheme.colors.errorContainer}
          textColor={DefaultTheme.colors.error}
          mode="contained-tonal"
        >
          Excluir conta
        </Button>
      </View>
    </View>
  );
};

export default EditInformationForm;

const styles = StyleSheet.create({
  containerForm: {
    gap: 25,
  },
  container: {
    marginHorizontal: 20,
    marginTop: 50,
  },
  deleteButtonContainer: {
    alignItems: "center",
    marginTop: 135,
  },
});
