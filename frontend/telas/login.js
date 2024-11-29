import { useState } from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import { useDispatch } from "react-redux";
import { recordCPF } from "../redux/cpfSlice";


export default function Login({navigation}) {

    const [CPF, setCPF] = useState()
    const [Senha, setSenha] = useState()

    const user = {
        cpf: CPF,
        senha: Senha
    }

    const dispatch = useDispatch()

    const handleLogin = () => { 
        fetch('http://localhost:8080/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(response => {if (!response.ok) {console.log("Não foi possível conectar ao servidor")} else {navigation.navigate('Homepage'); dispatch(recordCPF({cpf: CPF}))}})
        }
        
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text_black}>CPF </Text>
                <TextInput style={styles.input} value={CPF} onChangeText={setCPF}/>
            </View>
            <View>
                <Text style={styles.text_black}>Senha </Text>
                <TextInput style={styles.input} secureTextEntry value={Senha} onChangeText={setSenha}/>
            </View>
            <Pressable style={styles.button_blue} onPress={handleLogin}
            >
                    <Text style={styles.text_white}>Entrar</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D9D9D9'
    },
    text_black: {
        color: '#000000',
        fontWeight: '500',
        fontSize: 16,
        padding: 10,
        alignSelf: 'flex-start'
    },
    input: {
        backgroundColor: '#FFFFFF',
        borderRadius: 0,
        width: 317,
        height: 50,
        padding: 10,
        fontWeight: '500',
        fontSize: 16,
    },
    button_blue: {
        backgroundColor: '#1A73B3',
        width: 151,
        height: 47,
        alignSelf: 'center',
        borderRadius: 5,
        marginTop: 50
    },
    text_white: {
        color: '#FFFFFF',
        alignSelf: 'center',
        fontWeight: '500',
        fontSize: 16,
        padding: 10,
    },
})