import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, GestureResponderEvent, Modal, StyleSheet, Text, TouchableOpacity, View, Alert, Dimensions } from 'react-native';
import Botao from './src/components/botao/botao';

const windowWidth = Dimensions.get("window").width

export default function App() {

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/to-do-list.png')}/>
      {/* <TouchableOpacity onPress={() => Alert.alert("Clicado!!")}>
      <View style={styles.containerBotao}>
        <Text style={styles.botao}>Entrar</Text>
      </View>
    </TouchableOpacity> */}
    <Botao title={'Entrar'}></Botao>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
    //alterar fonte para Montserrat
});
