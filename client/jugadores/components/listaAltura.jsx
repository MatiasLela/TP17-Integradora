import React, { useEffect, useState } from 'react';
import { View, Text, FlatList} from 'react-native';
import axios from 'axios';

const ListaJugadores = ({ navigation }) => {
    const [jugadores, setJugadores] = useState([]);

    useEffect(() => {
        axios.get('http://192.168.1.45:8080/jugador/alto')
            .then(response => setJugadores(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <View>
            <Text>Jugadores mas Alto:</Text>
            <FlatList
                data={jugadores}
                keyExtractor={(jugador) => jugador.id_jugador.toString()}
                renderItem={({ item }) => (
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
                        <Text>TR: {item.tarjetas_rojas}</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default ListaJugadores;