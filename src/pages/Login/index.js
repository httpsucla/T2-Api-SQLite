import React, { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication'
import User from '../../database/user';
import styles from './style';

export default function Login({ navigation }) {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState([]);
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  async function handleAuthentication() {

    User.getUserLogin(login, senha, (user) => {
      setUser(user);
      if (user === 0) {
        Alert.alert('Erro.', 'Usuário ou senha incorretos!');
      }
    });

    if (user.login == 'admin@email.com' && user.senha == '1234' && user.tipo == 'ADMIN') {
      const auth = await LocalAuthentication.authenticateAsync({
        promptMessage: 'É necessário usar o Touch ID para acessar a área de Admin',
        fallbackLabel: 'É necessário usar o Touch ID para acessar a área de Admin',
      });

      setIsAuthenticated(auth.success);
      if (auth.success) {
        navigation.navigate('Home', user);
      };
    }
  };

  handleLogin = () => {
    User.getUserLogin(login, senha, (user) => {
      setUser(user);
      if (user.login == 'admin@email.com' && user.senha == '1234' && user.tipo == 'ADMIN') {
        Alert.alert('Erro.', 'Usuário ou senha incorretos!');
      }
      else if (user === 0) {
        Alert.alert('Erro.', 'Usuário ou senha incorretos!');
      } else {
        navigation.navigate('Home', user);
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Usuário</Text>
        <TextInput
          placeholder='Digite seu email'
          clearButtonMode="always"
          onChangeText={setLogin}
          style={styles.input}
        />
        <Text style={styles.label}>Senha</Text>
        <TextInput
          placeholder='Digite sua senha'
          clearButtonMode="always"
          onChangeText={setSenha}
          style={styles.input}
          secureTextEntry
        />
        <View style={{ marginTop: 25 }}>
          <TouchableOpacity style={styles.buttonForm} onPress={handleLogin}>
            <Text style={styles.buttonText}>Acessar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonForm} onPress={handleAuthentication}>
            <Text style={styles.buttonText}>Acessar como administrador</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};