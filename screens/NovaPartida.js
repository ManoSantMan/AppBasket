import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

export default function NovaPartida({ navigation }) {
  const [data, setData] = useState('');
  const [timeCasa, setTimeCasa] = useState('');
  const [timeVisitante, setTimeVisitante] = useState('');

  const salvar = async () => {
    await addDoc(collection(db, 'partidas'), {
      data,
      timeCasa,
      timeVisitante,
    });
    navigation.goBack();
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Data" value={data} onChangeText={setData} />
      <TextInput placeholder="Time da Casa" value={timeCasa} onChangeText={setTimeCasa} />
      <TextInput placeholder="Time Visitante" value={timeVisitante} onChangeText={setTimeVisitante} />
      <Button title="Salvar" onPress={salvar} />
    </View>
  );
}