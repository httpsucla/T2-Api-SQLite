import React, { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import Weather from '../../database/weather';
import styles from './style';
import axios from '../../api/axios';

export default function CadastrarTempo({ navigation }) {

    const [lat, setLat] = useState('');
    const [lon, setLon] = useState('');
    const [data, setData] = useState([]);

    async function search() {
        if (lat == '' || lon == '') {
            Alert.alert('Atenção', 'Preencha todos os campos')
            console.log(data)
        }
        else if (isNaN(lat) || isNaN(lon)) {
            Alert.alert('Atenção', 'Apenas valores numéricos são permitidos')
        } else {
            console.log(data)
            try {
                const response = await axios.get(`?lat=${parseFloat(lat)}&lon=${parseFloat(lon)}&units=metric`, {
                    headers: {
                        Accept: "application/json",
                        "User-Agent": "axios 0.21.1",
                        'Content-Type': 'application/json'
                    }
                });
                setData(response.data);
                console.log(data)
                return response.data
            } catch (error) {
                Alert.alert('Erro', error)
            }
        }
    };

    cadastrar = () => {
        const weather = {
            nome: data.name,
            princ: data.weather[0].main,
            temp: parseFloat(data.main.temp),
            sens: parseFloat(data.main.feels_like),
            min: parseFloat(data.main.temp_min),
            max: parseFloat(data.main.temp_max),
            visib: parseInt(data.visibility),
            hum: parseFloat(data.main.humidity),
            vento: parseFloat(data.wind.speed),
            descr: data.weather[0].description,
            data: parseInt(data.dt)
        }

        Weather.addWeather(weather, () => {
            setLat('');
            setLon('');
            Alert.alert('Sucesso.', 'Registro cadastrado com sucesso');
            navigation.navigate('Tempo', weather);
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastrar tempo</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Latitude</Text>
                <TextInput
                    placeholder='Digite a latitude'
                    clearButtonMode="always"
                    returnKeyType='done'
                    onChangeText={setLat}
                    style={styles.input}
                />
                <Text style={styles.label}>Longitude</Text>
                <TextInput
                    placeholder='Digite a longitude'
                    clearButtonMode="always"
                    returnKeyType='done'
                    onChangeText={setLon}
                    style={styles.input}
                />
                <View style={{ marginTop: 25 }}>
                    <TouchableOpacity style={styles.buttonForm} onPress={search}>
                        <Text style={styles.buttonText}>Gerar registro</Text>
                    </TouchableOpacity>
                </View>
                {
                    data ?
                        <TouchableOpacity style={styles.buttonForm} onPress={cadastrar}>
                            <Text style={styles.buttonText}>Adicionar {data.name}</Text>
                        </TouchableOpacity>

                        : null
                }
            </View>
        </View>
    );
};