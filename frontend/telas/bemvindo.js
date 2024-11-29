import { View, Text, StyleSheet, Image, Pressable } from "react-native";


export default function Bemvindo({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.blue_background}>
                <Image source={require('../assets/bandage.png')} style={styles.image}/>
                <Text style={styles.text_white}>Olá, seja bem-vindo ao Aplicativo de Marcação de Curativos. Entre ou cadastre-se para agendar novos procedimentos. </Text>
            </View>
            <View style={styles.white_background}>
                <Pressable style={styles.button_blue} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.text_white}>Entrar</Text>
                </Pressable>
                <Pressable onPress={() => navigation.navigate('Cadastro')}>
                    <Text style={styles.text_black}>Cadastrar</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    blue_background: {
        backgroundColor: '#1A73B3',
        flex: 3,
        borderBottomEndRadius: 12,
        borderBottomStartRadius: 12
    },
    white_background: {
        backgroundColor: '#D9D9D9',
        flex: 1
    },
    text_white: {
        color: '#FFFFFF',
        alignSelf: 'center',
        fontWeight: '500',
        fontSize: 16,
        padding: 10,
    },
    text_black: {
        color: '#000000',
        alignSelf: 'center',
        fontWeight: '500',
        fontSize: 16,
        padding: 10,
    },
    image: {
        width: 192,
        height: 192,
        alignSelf: 'center',
        marginTop: 100,
        marginBottom: 100
    },
    button_blue: {
        backgroundColor: '#1A73B3',
        width: 151,
        height: 47,
        alignSelf: 'center',
        borderRadius: 5,
        marginTop: 50
    }
})