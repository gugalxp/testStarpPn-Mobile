import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    input: {
      height: 45,
      borderWidth: 1,
      padding: 13,
      margin: 15,
    },
    texto: {
      color: 'black',
      fontSize: 30,
      textAlign: 'center',
    },
  });

  function pegaNome(text) {
    if (text.length > 0) {
      setNome('Bem vindo: ' + text);
    } else {
      setNome('')
    }
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: 'black',
          height: 65,
          color: '#ffffff',
          fontSize: 25,
        }}></View>
      <View style={{backgroundColor: '#f4f4f4', flex: 1, fontSize: 25}}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          onChangeText={text => pegaNome(text)}
        />
        <Text style={styles.texto}>{nome}</Text>
      </View>
    </View>
  );
}
