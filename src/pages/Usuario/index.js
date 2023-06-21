import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, Alert, FlatList, RefreshControl } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import User from '../../database/user';
import styles from './style';

export default function Usuario({ route, navigation }) {

    const [user, setUser] = useState([]);
    const [refreshing, setRefreshing] = useState(false)
    useEffect(() => {
        User.getUsers(user => {
            setUser(user);
        });
    }, [route]);

    const onRefresh = useCallback(async () => {
        setRefreshing(true)
        setTimeout(() => {
            setRefreshing(false)
        }, 1000)

        User.getUsers(user => {
            setUser(user);
        });
    }, [])

    const deletarUsuario = item => {
        Alert.alert(
            'Atenção',
            'Você tem certeza que deseja excluir o usuário: ' + item.nome + '?',
            [
                {
                    text: 'Não',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel'
                },
                {
                    text: 'Sim',
                    onPress: () => {
                        User.deleteUser(item.id)
                        Alert.alert(
                            'Sucesso.',
                            'Usuário ' + item.nome + ' removido com sucesso!'
                        )
                    }
                }
            ],
            { cancelable: false }
        )
    }

    return (
        <View style={styles.container} >
            <TouchableOpacity
                style={styles.buttonForm}
                onPress={() => navigation.navigate('Cadastrar usuario')}
            >
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
            {
                user.length > 0 ? (
                    <FlatList
                        style={styles.lista}
                        data={user}
                        refreshControl={
                            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                        }
                        keyExtractor={(item, index) => 'Index do item' + index}
                        renderItem={({ item }) => (
                            <View style={styles.campolista}>
                                <View style={styles.campoconteudo}>
                                    <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 5 }}> {item.nome}</Text>
                                    <Text style={{ fontSize: 18 }}> login: {item.login}</Text>
                                    <Text style={{ fontSize: 18 }}> senha: {item.senha}</Text>
                                    <Text style={{ fontSize: 18 }}> tipo: {item.tipo}</Text>
                                </View>
                                {
                                    item.tipo != 'ADMIN' ?
                                        <View style={styles.campoicone}>
                                            <View style={styles.componentenumero}>
                                                <TouchableOpacity
                                                    onPress={() =>
                                                        navigation.navigate('Editar usuario', { item })
                                                    }
                                                >
                                                    <Icon name='edit' size={18} color={'#292929f3'} />
                                                </TouchableOpacity>
                                            </View>
                                            <View style={styles.componentenumero}>
                                                <TouchableOpacity onPress={() => deletarUsuario(item)}>
                                                    <Icon name='trash' size={18} color={'#292929f3'} />
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                        : null
                                }
                            </View>
                        )}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                    />
                ) : (
                    <Text style={styles.emptyList}>
                        Não há usuários cadastrados no momento!
                    </Text>
                )
            }
        </View>
    )
}