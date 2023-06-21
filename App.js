import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes'
import User from './src/database/user';
import Weather from './src/database/weather';

export default function App() {

  useEffect(() => {
    User.createTable();
    Weather.createTable();
  }, []);

  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}