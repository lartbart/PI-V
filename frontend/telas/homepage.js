import { View, Text, StyleSheet, Image, SafeAreaView, Pressable } from "react-native";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "../misc/card";

export default function Homepage({ navigation }) {
  const { cpf } = useSelector((state) => state.cpf);
  const [info, setInfo] = useState(null); 

  const achar_agendamento_info = async () => {
    try {
      const response = await fetch(
        'http://localhost:8080/agendamentos_marcados/achar_agendamentos/' + cpf
      );
      
      if (!response.ok) {
        console.error("Erro na requisição:", response.statusText);
        return;
      }

      const agendamento_info = await response.json();

      if (agendamento_info) {
        setInfo(agendamento_info); 
      } else {
        console.error("Nenhum agendamento encontrado.");
      }
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  useEffect(() => {
    if (cpf) {
      achar_agendamento_info(); 
    }
  }, [cpf]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.user_image}>
          <Image source={require('../assets/user.png')} style={styles.image} />
        </View>
        <View style={styles.user_name}>
          <Text style={styles.text_black}>Nome</Text>
        </View>
        <View style={styles.sidemenu_image}>
          <Image source={require('../assets/sidemenu.png')} style={styles.image} />
        </View>
      </View>
      <View style={styles.main}>
        <Pressable onPress={() => { navigation.navigate('Agendamento') }}>
          <Text style={styles.text_blue}>+ Agendar novo procedimento</Text>
        </Pressable>

        {info ? (
            <Card unidade={info.unidade} data={info.data}/>
        ) : (
          <Text style={styles.text_black}>Nenhum agendamento encontrado ou carregando...</Text>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    height: 81,
    backgroundColor: '#FFFFFF',
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  main: {
    flex: 1,
    backgroundColor: '#D9D9D9'
  },
  image: {
    width: 48,
    height: 48,
  },
  text_black: {
    color: '#000000',
    alignSelf: 'center',
    fontWeight: '500',
    fontSize: 16,
    padding: 10,
  },
  text_blue: {
    color: '#1A73B3',
    alignSelf: 'center',
    fontWeight: '500',
    fontSize: 16,
    padding: 10,
  },
  user_image: {
    flex: 1
  },
  user_name: {
    flex: 6
  },
  sidemenu_image: {
    flex: 1
  },
});
