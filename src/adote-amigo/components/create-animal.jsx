import { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button, TextInput, DefaultTheme } from "react-native-paper";
import Logo from "./logo";

const CreateAnimal = ({ setPage, setIsLogged }) => {
    const [form, setForm] = useState({});
    const [userId, setUserId] = useState(1)

    return (
        <View style={styles.container}>
            <Logo />
            <View>
                <Text style={styles.text}>Cadastre um pet</Text>
            </View>
            <TextInput
                label="Nome"
                onChangeText={(name) => {
                    setForm((state) => ({ ...state, name }));
                }}
            />
            <TextInput
                label="Gênero"
                onChangeText={(genero) => {
                    setForm((state) => ({ ...state, genero }));
                }}
            />

            <TextInput
                label="Raça"
                onChangeText={(raca) => {
                    setForm((state) => ({ ...state, raca }));
                }}
            />
            <Button
                mode="contained"
                onPress={() => {
                    if (!form.name || !form.raca || !form.genero) {
                        alert("Preencha todos os campos");
                    } else {
                        fetch('http://localhost:8000/api/animals/'+userId, {
                            method: "POST",
                            headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                nome_completo: form.name,
                                genero: form.genero,
                                raca: form.raca,
                                usuario_id: userId,
                                tipo: form.genero,
                                flag_castrado: false
                            })
                        })
                            .then((res) => {
                                alert("Pet criado com sucesso!")
                                window.location.reload()
                                return res.json()
                            })
                            .then((data) => console.log(data))
                            .catch((err) => {
                                console.log(err)
                                alert("Erro ao criar pet, tente mais tarde!")
                            })
                    }
                }}
            >
                Cadastrar
            </Button>
        </View>
    );
};

export default CreateAnimal;

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