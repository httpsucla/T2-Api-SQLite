import React, { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import Weather from '../../database/weather';
import styles from './style';

export default function EditarTempo({ navigation, route }) {

    const { item } = route.params
    const [data, setData] = useState(item);

    atualizar = () => {
        const weather = {
            nome: data.nome,
            princ: data.princ,
            temp: parseFloat(data.temp),
            sens: parseFloat(data.sens),
            min: parseFloat(data.min),
            max: parseFloat(data.max),
            visib: parseInt(data.visib),
            hum: parseFloat(data.hum),
            vento: parseFloat(data.vento),
            descr: data.descr,
            data: parseInt(data.data),
            id: data.id
        };
        console.log(weather)
        Weather.updateWeather(weather, () => {
            Alert.alert('Sucesso', 'Registro atualizado com sucesso.');
            navigation.navigate("Tempo", weather);
        });
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Editar tempo</Text>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Cidade</Text>
                    <TextInput
                        placeholder='Digite a cidade'
                        clearButtonMode="always"
                        returnKeyType='done'
                        onChangeText={nome => setData({ ...data, nome })}
                        value={data.nome}
                        style={styles.input}
                    />
                    <Text style={styles.label}>Informação</Text>
                    <TextInput
                        placeholder='Digite a informação'
                        clearButtonMode="always"
                        returnKeyType='done'
                        onChangeText={princ => setData({ ...data, princ })}
                        value={data.princ}
                        style={styles.input}
                    />
                    <Text style={styles.label}>Descrição</Text>
                    <TextInput
                        placeholder='Digite a descrição'
                        clearButtonMode="always"
                        returnKeyType='done'
                        onChangeText={descr => setData({ ...data, descr })}
                        value={data.descr}
                        style={styles.input}
                    />
                    <Text style={styles.label}>Temperatura</Text>
                    <TextInput
                        placeholder='Digite a temperatura'
                        clearButtonMode="always"
                        returnKeyType='done'
                        onChangeText={temp => setData({ ...data, temp })}
                        value={String(data.temp)}
                        style={styles.input}
                    />
                    <Text style={styles.label}>Sensação térmica</Text>
                    <TextInput
                        placeholder='Digite a sensação térmica'
                        clearButtonMode="always"
                        returnKeyType='done'
                        onChangeText={sens => setData({ ...data, sens })}
                        value={String(data.sens)}
                        style={styles.input}
                    />
                    <Text style={styles.label}>Temperatura mínima</Text>
                    <TextInput
                        placeholder='Digite a temperatura mínima '
                        clearButtonMode="always"
                        returnKeyType='done'
                        onChangeText={min => setData({ ...data, min })}
                        value={String(data.min)}
                        style={styles.input}
                    />
                    <Text style={styles.label}>Temperatura máxima</Text>
                    <TextInput
                        placeholder='Digite a temperatura máxima'
                        clearButtonMode="always"
                        returnKeyType='done'
                        onChangeText={max => setData({ ...data, max })}
                        value={String(data.max)}
                        style={styles.input}
                    />
                    <Text style={styles.label}>Visibilidade</Text>
                    <TextInput
                        placeholder='Digite a visibilidade'
                        clearButtonMode="always"
                        returnKeyType='done'
                        onChangeText={visib => setData({ ...data, visib })}
                        value={String(data.visib)}
                        style={styles.input}
                    />
                    <Text style={styles.label}>Humidade</Text>
                    <TextInput
                        placeholder='Digite a humidade'
                        clearButtonMode="always"
                        returnKeyType='done'
                        onChangeText={hum => setData({ ...data, hum })}
                        value={String(data.hum)}
                        style={styles.input}
                    />
                    <Text style={styles.label}>Vento</Text>
                    <TextInput
                        placeholder='Digite o vento'
                        clearButtonMode="always"
                        returnKeyType='done'
                        onChangeText={vento => setData({ ...data, vento })}
                        value={String(data.vento)}
                        style={styles.input}
                    />
                    <Text style={styles.label}>Data</Text>
                    <TextInput
                        placeholder='Digite a data'
                        clearButtonMode="always"
                        returnKeyType='done'
                        onChangeText={data => setData({ ...data, data })}
                        value={String(data.data)}
                        style={styles.input}
                    />
                    <View style={{ marginTop: 25 }}>
                        <TouchableOpacity style={styles.buttonForm} onPress={atualizar}>
                            <Text style={styles.buttonText}>Atualizar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};