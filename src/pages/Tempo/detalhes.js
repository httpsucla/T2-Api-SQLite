import React, { useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import styles from './style';

export default function VisualizarTempo({ route }) {

    const [item, setItem] = useState(route.params);

    let data = new Date(item.data).toLocaleDateString();
    let visib = item.visib / 1000;

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <View style={[styles.row, styles.itemDescr]}>
                        <Text style={[styles.label, styles.descrTitulo]}>Cidade</Text>
                        <Text style={[styles.label, styles.descrTitulo]}>{item.nome}</Text>
                    </View>
                    <View style={[styles.row, styles.itemDescr]}>
                        <Text style={[styles.label, styles.descrTitulo]}>Info</Text>
                        <Text style={[styles.label, styles.descrTitulo]}>{item.princ}</Text>
                    </View>
                    <View style={[styles.row, styles.itemDescr]}>
                        <Text style={[styles.label, styles.descrTitulo]}>Descrição</Text>
                        <Text style={[styles.label, styles.descrTitulo]}>{item.descr}</Text>
                    </View>
                    <View style={[styles.row, styles.itemDescr]}>
                        <Text style={[styles.label, styles.descrTitulo]}>Temperatura</Text>
                        <Text style={[styles.label, styles.descrTitulo]}>{item.temp} °C</Text>
                    </View>
                    <View style={[styles.row, styles.itemDescr]}>
                        <Text style={[styles.label, styles.descrTitulo]}>Sensação térmica</Text>
                        <Text style={[styles.label, styles.descrTitulo]}>{item.sens}°C</Text>
                    </View>
                    <View style={[styles.row, styles.itemDescr]}>
                        <Text style={[styles.label, styles.descrTitulo]}>Temperatura mínima</Text>
                        <Text style={[styles.label, styles.descrTitulo]}>{item.min}°C</Text>
                    </View>
                    <View style={[styles.row, styles.itemDescr]}>
                        <Text style={[styles.label, styles.descrTitulo]}>Temperatura máxima</Text>
                        <Text style={[styles.label, styles.descrTitulo]}>{item.max}°C</Text>
                    </View>
                    <View style={[styles.row, styles.itemDescr]}>
                        <Text style={[styles.label, styles.descrTitulo]}>Visibilidade</Text>
                        <Text style={[styles.label, styles.descrTitulo]}>{visib} Km</Text>
                    </View>
                    <View style={[styles.row, styles.itemDescr]}>
                        <Text style={[styles.label, styles.descrTitulo]}>Humidade</Text>
                        <Text style={[styles.label, styles.descrTitulo]}>{item.hum}%</Text>
                    </View>
                    <View style={[styles.row, styles.itemDescr]}>
                        <Text style={[styles.label, styles.descrTitulo]}>Vento</Text>
                        <Text style={[styles.label, styles.descrTitulo]}>{item.vento} Km/h</Text>
                    </View>
                    <View style={[styles.row, styles.itemDescr]}>
                        <Text style={[styles.label, styles.descrTitulo]}>Data</Text>
                        <Text style={[styles.label, styles.descrTitulo]}>{data}</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}