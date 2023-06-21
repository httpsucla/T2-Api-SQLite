import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Usuario from "./pages/Usuario";
import CadastrarUsuario from "./pages/Usuario/cadastrar";
import EditarUsuario from "./pages/Usuario/editar";
import Tempo from "./pages/Tempo";
import CadastrarTempo from "./pages/Tempo/cadastrar";
import VisualizarTempo from "./pages/Tempo/detalhes";
import EditarTempo from "./pages/Tempo/editar";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTransparent: true,
                labelVisible: false,
                headerTintColor: '#a63838'
            }}
        >
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Usuario" component={Usuario} />
            <Stack.Screen name="Cadastrar usuario" component={CadastrarUsuario} />
            <Stack.Screen name="Editar usuario" component={EditarUsuario} />
            <Stack.Screen name="Tempo" component={Tempo} />
            <Stack.Screen name="Cadastrar tempo" component={CadastrarTempo} />
            <Stack.Screen name="Visualizar tempo" component={VisualizarTempo} />
            <Stack.Screen name="Editar tempo" component={EditarTempo} />
        </Stack.Navigator>

    )
}