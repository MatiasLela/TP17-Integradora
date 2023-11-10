import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const HomePage = ({ navigation }) => {
    return (
        <View>
            <Button
                title="Lista Jugadores"
                onPress={() => navigation.navigate('Lista')}
            />
            <Button
                title="Nacionalidad Argentina"
                onPress={() => navigation.navigate('Nacionalidad')}
            />
            <Button
                title="75-80kg"
                onPress={() => navigation.navigate('Peso')}
            />
            <Button
                title="Jugador mas alto"
                onPress={() => navigation.navigate('Altura')}
            />
        </View>
    );
};

export default HomePage;

const styles = StyleSheet.create({
    button: {
        width: 200,
        marginTop: 10,
    },
});