import { StyleSheet, View, Text, Image } from "react-native"


export default function Card({cpf, uf, cidade, unidade, data, horario}) {
    

    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <Text style={styles.text_black}>
                    {unidade}
                </Text>
                <Text style={styles.text_black}>
                    {data}
                </Text>
                <Text style={styles.stars}>
                    ☆ ☆ ☆ ☆ ☆
                </Text>
            </View>
            <View style={styles.right}>
                <Image source={require('../assets/notification.png')} style={styles.image}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 3,
        borderColor: '#818080',
        borderWidth: 1,
        backgroundColor: '#FCFCFC',
        width: 343,
        height: 123,
        margin: 10,
        padding: 10,
        display: 'flex',
        flexDirection: 'row'
    },
    left: {
        flex: 1
    },
    right: {
        flex: 1,
        alignItems: 'flex-end'
    },
    text_black: {
        color: '#000000',
        fontWeight: '500',
        fontSize: 16,
    },
    image: {
        width: 48,
        height: 48
    },
    stars: {
        fontSize: 28
    }
})