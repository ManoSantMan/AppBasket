import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { collection, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

export default function ListaPartidas({ navigation }) {
  const [partidas, setPartidas] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'partidas'), snapshot => {
      const lista = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPartidas(lista);
    });

    return unsub;
  }, []);

  const excluirPartida = async (id) => {
    await deleteDoc(doc(db, 'partidas', id));
  };

  return (
    <View style={{ padding: 20 }}>
      <Button title="Nova Partida" onPress={() => navigation.navigate('NovaPartida')} />
      <FlatList
        data={partidas}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={{ marginTop: 10, padding: 10, backgroundColor: '#eee' }}>
            <Text>Data: {item.data}</Text>
            <Text>Casa: {item.timeCasa}</Text>
            <Text>Visitante: {item.timeVisitante}</Text>
            <Button title="Editar" onPress={() => navigation.navigate('EditarPartida', { partida: item })} />
            <Button title="Excluir" onPress={() => excluirPartida(item.id)} />
          </View>
        )}
      />
    </View>
  );
}