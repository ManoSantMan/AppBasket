import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { db } from '../firebaseConfig';
import { doc, updateDoc } from 'firebase/firestore';

export default function EditarPartida({ route, navigation }) {
  const partida = route.params.partida;
  const [data, setData] = useState(partida.data);
  const [timeCasa, setTimeCasa] = useState(partida.timeCasa);
  const [timeVisitante, setTimeVisitante] = useState(partida.timeVisitante);

  const atualizar = async () => {
    const docRef = doc(db, 'partidas', partida.id);
    await updateDoc(docRef, { data, timeCasa, timeVisitante });
    navigation.goBack();
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Data" value={data} onChangeText={setData} />
      <TextInput placeholder="Time da Casa" value={timeCasa} onChangeText={setTimeCasa} />
      <TextInput placeholder="Time Visitante" value={timeVisitante} onChangeText={setTimeVisitante} />
      <Button title="Atualizar" onPress={atualizar} />
    </View>
  );
}