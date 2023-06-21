import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './style';

export default function Home({ route, navigation }) {

  const [user, setUser] = useState(route.params);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem vindo {user.nome}</Text>
      <View style={{alignItems: 'center'}}>
        {
          user.tipo == 'ADMIN' ?
              <TouchableOpacity style={styles.buttonForm} onPress={() => navigation.navigate('Usuario', user)}>
                <Text style={styles.buttonText}>Usuários</Text>
              </TouchableOpacity>    
            :
            null
        }
        {
          user.tipo == 'USER' || user.tipo == 'ADMIN' ?
            <>
              <TouchableOpacity style={styles.buttonForm} onPress={() => navigation.navigate('Tempo', user)}>
                <Text style={styles.buttonText}>Lista de registros</Text>
              </TouchableOpacity>
            </>
            :
            null
        }
      </View>
    </View>
  );
}