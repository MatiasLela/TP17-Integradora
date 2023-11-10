import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './components/HomePage';
import ListaJugadores from './components/listaJugadores';
import ListaArgentinos from './components/listaArgentinos';
import ListaPesos from './components/listaPesos';
import ListaAltura from './components/listaAltura';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Lista" component={ListaJugadores} />
        <Stack.Screen name="Nacionalidad" component={ListaArgentinos} />
        <Stack.Screen name="Peso" component={ListaPesos} />
        <Stack.Screen name="Altura" component={ListaAltura} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;