import { useState } from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";


export default function Cadastro({navigation}) {

    const [Nome, setNome] = useState()
    const [CPF, setCPF] = useState()
    const [UF, setUF] = useState()
    const [Cidade, setCidade] = useState()
    const [Senha, setSenha] = useState()

    const user = {
        nome: Nome,
        cpf: CPF,
        uf: UF,
        cidade: Cidade,
        senha: Senha
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text_black}>Nome </Text>
                <TextInput style={styles.input} value={Nome} onChangeText={setNome}/>                
            </View>
            <View>
                <Text style={styles.text_black}>CPF </Text>
                <TextInput style={styles.input} value={CPF} onChangeText={setCPF}/>
            </View>
            <View>
                <Text style={styles.text_black}>UF </Text>
                <TextInput style={styles.input} value={UF} onChangeText={setUF}/>
            </View>
            <View>
                <Text style={styles.text_black}>Cidade </Text>
                <TextInput style={styles.input} value={Cidade} onChangeText={setCidade}/>
            </View>
            <View>
                <Text style={styles.text_black}>Senha </Text>
                <TextInput style={styles.input} secureTextEntry value={Senha} onChangeText={setSenha}/>
            </View>
            <Pressable style={styles.button_blue} onPress={() => 
                fetch('http://localhost:8080/user/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(user)
                }).then(response => {if (!response.ok) {console.log("Não foi possível conectar ao servidor")} else {navigation.navigate('Login')}})}
            >
                    <Text style={styles.text_white}>Cadastrar</Text>
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