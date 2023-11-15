import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';

const JugadorAlto = () => {
    const [jugadores, setJugadores] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://192.168.1.45:8080/jugador/alto');
                setJugadores(response.data);
            } catch (error) {
                console.error('Error al obtener datos:', error);
            }
        };

        fetchData();
    }, []);

    const renderJugador = ({ item }) => (
        <View>
            <Text>Nombre: {item.nombre}</Text>
            <Text>POS: {item.posicion}</Text>
            <Text>Edad: {item.edad}</Text>
            <Text>Est: {item.estatura}</Text>
            <Text>P: {item.peso}</Text>
            <Text>NAC: {item.nacionalidad}</Text>
            <Text>Ap: {item.apariciones}</Text>
            <Text>SUB: {item.apariciones_sustituto}</Text>
            <Text>A: {item.atajadas}</Text>
            <Text>GA: {item.goles_concedidos}</Text>
            <Text>A: {item.asistencias}</Text>
            <Text>FC: {item.faltas_cometidas}</Text>
            <Text>FS: {item.faltas_sufridas}</Text>
            <Text>TA: {item.tarjetas_amarillas}</Text>
            <Text>TR: {item.tarjetas_rojas}{"\n"}</Text>
        </View>
    );

    return (
        <View>
            <Text>Jugador Alto:</Text>
            <FlatList
                data={jugadores ? [jugadores] : []}  // Asegúrate de que `jugadores` sea un array
                keyExtractor={(item) => (item && item.id_jugador ? item.id_jugador.toString() : '')}
                renderItem={renderJugador}
            />
        </View>
    );
};

export default JugadorAlto;
