import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListaPartidas from './screens/ListaPartidas';
import NovaPartida from './screens/NovaPartida';
import EditarPartida from './screens/EditarPartida';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Lista" component={ListaPartidas} />
        <Stack.Screen name="NovaPartida" component={NovaPartida} />
        <Stack.Screen name="EditarPartida" component={EditarPartida} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}