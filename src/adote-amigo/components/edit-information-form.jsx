import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, TextInput, DefaultTheme } from "react-native-paper";

const EditInformationForm = () => {  

  const [form, setForm] = useState({});

  function confirmInputs() {
    if (!form.nome || !form.email || !form.telefone || !form.nascimento || !form.CPF || !form.password){
      alert("Preencha todos os campos")
    }else{
      console.log("Save")
    }

    
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerForm}>
        <TextInput label="Nome" onChangeText={(nome) => {
          setForm((state) => ({ ...state, nome }));
        }}/> 
        <TextInput label="Email" keyboardType="email-address" onChangeText={(email) => {
          setForm((state) => ({ ...state, email }));
        }}/>
        <TextInput label="Telefone" onChangeText={(telefone) => {
          setForm((state) => ({ ...state, telefone }));
        }}/>
        <TextInput label="Data de nascimento" onChangeText={(nascimento) => {
          setForm((state) => ({ ...state, nascimento }));
        }}/>
        <TextInput label="CPF" onChangeText={(CPF) => {
          setForm((state) => ({ ...state, CPF }));
        }}/>
        <TextInput secureTextEntry={true} label="Senha" type="password" onChangeText={(password) => {
          setForm((state) => ({ ...state, password }));
        }}/>
        <Button mode="contained" onPress={() => confirmInputs()}>
          Salvar
        </Button>
        <Button
          buttonColor={DefaultTheme.colors.errorContainer}
          textColor={DefaultTheme.colors.error}
          mode="contained-tonal"
          onPress={() => console.log("Pressed")}
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
    marginTop: 30,
  },
  deleteButtonContainer: {
    alignItems: "center",
    marginTop: 135,
  },
});
