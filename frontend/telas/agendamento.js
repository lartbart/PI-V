import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { useSelector } from "react-redux";

export default function Agendamento({navigation}) {

    const [UF, setUF] = useState()
    const [Cidade, setCidade] = useState()
    const [Unidade, setUnidade] = useState()
    const [Data, setData] = useState()
    const [Horario, setHorario] = useState()

    const [ufs, setUfs] = useState([])
    const [cidades, setCidades]= useState([])
    const [unidades, setUnidades] = useState([])
    const [datas, setDatas] = useState([])
    const [horarios, setHorarios] = useState([])

    const {cpf} = useSelector((state) => state.cpf)
 

    const agendamento = {
        cpf: cpf,
        uf: UF,
        cidade: Cidade,
        unidade: Unidade,
        data: Data,
        horario: Horario
    }

    const agendar = () => { 
        fetch('http://localhost:8080/agendamentos_marcados/agendar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(agendamento)
        }).then(response => {if (!response.ok) {console.log("Não foi possível conectar ao servidor")} else {navigation.navigate('Homepage')}})
        }
  

    const getUF = async () => {
        try {
            const response = await fetch("http://localhost:8080/agendamentos/getuf");
            if (!response.ok) {
                throw new Error('Falha na requisição');
            }
            const data = await response.json(); 
            setUfs(data); 
        } catch (error) {
            console.error("Erro ao buscar dados de UF:", error);
        }
    }


    const getCidade = async (uf) => {
        try {
            const response = await fetch("http://localhost:8080/agendamentos/getcidade/" + uf);
            if (!response.ok) {
                throw new Error('Falha na requisição');
            }
            const data = await response.json(); 
            setCidades(data); 
        } catch (error) {
            console.error("Erro ao buscar dados de Cidade:", error);
        }
    }

    const getUnidades = async (cidade) => {
        try {
            const response = await fetch("http://localhost:8080/agendamentos/getunidade/" + cidade);
            if (!response.ok) {
                throw new Error('Falha na requisição');
            }
            const data = await response.json();
            setUnidades(data);
        } catch (error) {
            console.error("Erro ao buscar dados de Unidade:", error);
        }
    }

 
    const getDatas = async (unidade) => {
        try {
            const response = await fetch("http://localhost:8080/agendamentos/getdata/" + unidade);
            if (!response.ok) {
                throw new Error('Falha na requisição');
            }
            const data = await response.json();
            setDatas(data);
        } catch (error) {
            console.error("Erro ao buscar dados de Data:", error);
        }
    }

    const getHorarios = async (data0, unidade) => {
        const data_adjusted = data0.replace(/\//g, '_')
        try {
            const response = await fetch("http://localhost:8080/agendamentos/gethorario/" + data_adjusted + "/" + unidade);
            if (!response.ok) {
                throw new Error('Falha na requisição');
            }
            const data = await response.json();
            setHorarios(data);
        } catch (error) {
            console.error("Erro ao buscar dados de Horário:", error);
        }
    }

    useEffect(() => {
        getUF(); 
    }, [])

    useEffect(() => {
        getCidade(UF); 

    }, [ UF])
    useEffect(() => {
        getUnidades(Cidade); 

    }, [ Cidade])
    useEffect(() => {
        getDatas(Unidade); 

    }, [Unidade])
    useEffect(() => {
        getHorarios(Data, Unidade); 

    }, [Data])

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text_black}>UF </Text>
                <Picker
                    selectedValue={UF}  
                    onValueChange={(itemValue) => setUF(itemValue)} 
                    style={styles.input}
                >
                   {ufs.map((uf, index) => (
                        <Picker.Item key={index} label={uf} value={uf} />
                    ))}
                </Picker>
            </View>

            <View>
                <Text style={styles.text_black}>Cidade </Text>
                <Picker
                    selectedValue={Cidade}  
                    onValueChange={(itemValue) => setCidade(itemValue)} 
                    style={styles.input}
                >
                    {cidades.map((cidade, index) => (
                        <Picker.Item key={index} label={cidade} value={cidade} />
                    ))}
                </Picker>
            </View>

            <View>
                <Text style={styles.text_black}>Unidade de atendimento</Text>
                <Picker
                    selectedValue={Unidade}  
                    onValueChange={(itemValue) => setUnidade(itemValue)} 
                    style={styles.input}
                >
                    {unidades.map((unidade, index) => (
                        <Picker.Item key={index} label={unidade} value={unidade} />
                    ))}
                </Picker>
            </View>

            <View>
                <Text style={styles.text_black}>Data </Text>
                <Picker
                    selectedValue={Data}  
                    onValueChange={(itemValue) => setData(itemValue)} 
                    style={styles.input}
                >
                    {datas.map((data, index) => (
                        <Picker.Item key={index} label={data} value={data} />
                    ))}
                </Picker>
            </View>

            <View>
                <Text style={styles.text_black}>Horário </Text>
                <Picker
                    selectedValue={Horario}  
                    onValueChange={(itemValue) => setHorario(itemValue)} 
                    style={styles.input}
                >
                    {horarios.map((horario, index) => (
                        <Picker.Item key={index} label={horario} value={horario} />
                    ))}
                </Picker>
            </View>

            <Pressable style={styles.button_blue} onPress={agendar}>
                <Text style={styles.text_white}>Agendar</Text>
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
