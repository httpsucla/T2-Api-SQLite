import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import User from '../../database/user';;

export default function EditarUsuario({ route, navigation }) {

    const { item } = route.params
    const [user, setUser] = useState(item);

    editar = () => {
        const data = {
            nome: user.nome,
            login: user.login,
            senha: user.senha,
            tipo: user.tipo,
            id: user.id
        };

        User.updateUser(data, () => {
            Alert.alert('Sucesso', 'Usuário atualizado com sucesso.');
            navigation.navigate("Usuario", data);
        });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Atualizar usuário</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Nome</Text>
                <TextInput
                    placeholder='Digite o nome do usuário'
                    clearButtonMode="always"
                    onChangeText={nome => setUser({ ...user, nome })}
                    value={user.nome}
                    style={styles.input}
                />
                <Text style={styles.label}>Login</Text>
                <TextInput
                    placeholder='Digite o email do usuário'
                    clearButtonMode="always"
                    onChangeText={login => setUser({ ...user, login })}
                    value={user.login}
                    style={styles.input}
                />
                <Text style={styles.label}>Senha</Text>
                <TextInput
                    placeholder='Digite a senha do usuário'
                    clearButtonMode="always"
                    onChangeText={senha => setUser({ ...user, senha })}
                    value={user.senha}
                    style={styles.input}
                    secureTextEntry
                />
                <TouchableOpacity style={styles.buttonForm} onPress={editar}>
                    <Text style={styles.buttonText}>Alterar usuário</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}