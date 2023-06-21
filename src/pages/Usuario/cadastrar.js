import React, { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import User from '../../database/user';
import styles from './style';

export default function CadastrarUsuario({ navigation }) {

  const [nome, setNome] = useState('');
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  cadastrar = () => {
    
    const data = {
        nome,
        login,
        senha,
        tipo: 'USER'
    }
    User.addUser(data, () => {
       setNome('');
       setLogin('');
       setSenha('');
       Alert.alert('Sucesso.', 'Usuário cadastrado com sucesso');
       navigation.navigate('Usuario', data);
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Novo usuário</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          placeholder='Digite o nome do usuário'
          clearButtonMode="always"
          onChangeText={setNome}
          style={styles.input}
        />
        <Text style={styles.label}>Login</Text>
        <TextInput
          placeholder='Digite o email do usuário'
          clearButtonMode="always"
          onChangeText={setLogin}
          style={styles.input}
        />
        <Text style={styles.label}>Senha</Text>
        <TextInput
          placeholder='Digite a senha do usuário'
          clearButtonMode="always"
          onChangeText={setSenha}
          style={styles.input}
          secureTextEntry
        />
        <View style={{ marginTop: 25 }}>
          <TouchableOpacity style={styles.buttonForm} onPress={cadastrar}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};