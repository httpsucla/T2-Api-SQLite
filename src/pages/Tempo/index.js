import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, Alert, FlatList, RefreshControl, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Weather from '../../database/weather';
import styles from './style';

export default function Tempo({ route, navigation }) {

    const [user, setUser] = useState(route.params);
    const [weather, setWeather] = useState([]);
    const [refreshing, setRefreshing] = useState(false)

    data = [
        { url: require('../../image/sol.png') },
        { url: require('../../image/sol-nuvem.png') },
        { url: require('../../image/nuvem.png') },
        { url: require('../../image/nuvem-densa.png') },
        { url: require('../../image/chuva.png') },
        { url: require('../../image/sol-chuva.png') },
        { url: require('../../image/tempestade.png') },
        { url: require('../../image/neve.png') },
        { url: require('../../image/neblina.png') },
    ]

    useEffect(() => {
        Weather.getWeather(weather => {
            setWeather(weather);
        })
    }, [route]);

    const onRefresh = useCallback(async () => {
        setRefreshing(true)
        setTimeout(() => {
            setRefreshing(false)
        }, 1000)

        Weather.getWeather(weather => {
            setWeather(weather);
        });
    }, [])

    const deletarRegistro = item => {
        Alert.alert(
            'Atenção',
            'Você tem certeza que deseja excluir o registro: ' + item.nome + '?',
            [
                {
                    text: 'Não',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel'
                },
                {
                    text: 'Sim',
                    onPress: () => {
                        Weather.deleteWeather(item.id)
                        Alert.alert(
                            'Sucesso.',
                            'Registro ' + item.nome + ' removido com sucesso!'
                        )
                    }
                }
            ],
            { cancelable: false }
        )
    };

    return (
        <View style={styles.container} >
            {
                user.tipo == 'ADMIN' ?
                    <TouchableOpacity
                        style={styles.buttonForm}
                        onPress={() => navigation.navigate('Cadastrar tempo')}
                    >
                        <Text style={styles.buttonText}>Cadastrar registro</Text>
                    </TouchableOpacity>
                    : null
            }
            {
                weather.length > 0 ? (
                    <FlatList
                        style={styles.lista}
                        data={weather}
                        refreshControl={
                            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                        }
                        keyExtractor={(item, index) => 'Index do item' + index}
                        renderItem={({ item }) => (
                            <View style={styles.campolista}>
                                <View style={styles.campoconteudo}>
                                    <View>
                                        {
                                            item.descr === "clear sky" ? (
                                                <ImageBackground source={data[0].url} resizeMode="cover" style={styles.image} />
                                            ) : item.descr === "few clouds" ? (
                                                <ImageBackground source={data[1].url} resizeMode="cover" style={styles.image} />
                                            ) : item.descr === "scattered clouds" ? (
                                                <ImageBackground source={data[2].url} resizeMode="cover" style={styles.image} />
                                            ) : item.descr === "broken clouds" || item.descr === "overcast clouds" ? (
                                                <ImageBackground source={data[3].url} resizeMode="cover" style={styles.image} />
                                            ) : item.descr === "shower rain" || item.descr === "light intensity drizzle" || item.descr === "drizzle" || item.descr === "heavy intensity drizzle" || item.descr === "light intensity drizzle rain" ||
                                                item.descr === "drizzle rain" || item.descr === "heavy intensity drizzle rain" || item.descr === "shower rain and drizzle" || item.descr === "heavy shower rain and drizzle" ||
                                                item.descr === "shower drizzle" || item.descr === "shower drizzle" || item.descr === "heavy intensity shower rain" || item.descr === "ragged shower rain" ? (
                                                <ImageBackground source={data[4].url} resizeMode="cover" style={styles.image} />
                                            ) : item.descr === "rain" || item.descr === "light rain" || item.descr === "moderate rain" || item.descr === "heavy intensity rain" || item.descr === "very heavy rain" || item.descr === "extreme rain" ? (
                                                <ImageBackground source={data[5].url} resizeMode="cover" style={styles.image} />
                                            ) : item.descr === "thunderstorm" || item.descr === "thunderstorm with light rain" || item.descr === "thunderstorm with rain" || item.descr === "thunderstorm with heavy rain" || item.descr === "light thunderstorm" ||
                                                item.descr === "heavy thunderstorm" || item.descr === "ragged thunderstorm" || item.descr === "thunderstorm with light drizzle" || item.descr === "thunderstorm with drizzle" || item.descr === "thunderstorm with heavy drizzle" ? (
                                                <ImageBackground source={data[6].url} resizeMode="cover" style={styles.image} />
                                            ) : item.descr === "snow" || item.descr === "light snow" || item.descr === "heavy snow" || item.descr === "sleet" || item.descr === "light shower sleet" || item.descr === "shower sleet" ||
                                                item.descr === "light rain and snow" || item.descr === "rain and snow" || item.descr === "light shower snow" || item.descr === "shower snow" || item.descr === "heavy shower snow" || item.descr === "freezing rain" ? (
                                                <ImageBackground source={data[7].url} resizeMode="cover" style={styles.image} />
                                            ) : item.descr === "mist" || item.descr === "smoke" || item.descr === "haze" || item.descr === "sand/dust whirls" || item.descr === "fog" || item.descr === "sand" || item.descr === "dust" ||
                                                item.descr === "volcanic ash" || item.descr === "squalls" || item.descr === "tornado" ? (
                                                <ImageBackground source={data[8].url} resizeMode="cover" style={styles.image} />
                                            ) : null
                                        }
                                    </View>
                                    <TouchableOpacity style={styles.marginLista} onPress={() => navigation.navigate('Visualizar tempo', item)}>
                                        <Text style={{ fontSize: 24, fontWeight: '600' }}>{item.nome}</Text>
                                        <Text style={{ fontSize: 20 }}>{item.temp}°C</Text>
                                        <View style={styles.row}>
                                            <Text style={{ fontSize: 18, marginVertical: 5 }}>{item.princ}</Text>
                                        </View>
                                        <View style={styles.row}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Icon name="thermometer-empty" size={16} color={'black'} />
                                                <Text>Min {item.min}°C</Text>
                                            </View>
                                            <View style={styles.row}>
                                                <Icon name="thermometer-full" size={16} color={'black'} />
                                                <Text>Max {item.max}°C</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.campoicone}>
                                    {
                                        user.tipo == 'USER' ?
                                            <View style={styles.componentenumero}>
                                                <TouchableOpacity
                                                    onPress={() =>
                                                        navigation.navigate('Editar tempo', { item: item })
                                                    }
                                                >
                                                    <Icon name='edit' size={18} color={'#292929f3'} />
                                                </TouchableOpacity>
                                            </View>
                                            : null
                                    }
                                    {
                                        user.tipo == 'ADMIN' ?
                                            <View style={styles.componentenumero}>
                                                <TouchableOpacity onPress={() => deletarRegistro(item)}>
                                                    <Icon name='trash' size={18} color={'#292929f3'} />
                                                </TouchableOpacity>
                                            </View>
                                            : null
                                    }
                                </View>
                            </View>
                        )}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                    />
                ) : (
                    <Text style={styles.emptyList}>
                        Não há registros cadastrados no momento!
                    </Text>
                )
            }
        </View>
    )
}