import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, GestureResponderEvent, Modal, StyleSheet, Text, TouchableOpacity, View, Alert, Dimensions } from 'react-native';

const windowWidth = Dimensions.get("window").width

export default function App() {

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/to-do-list.png')}
        style={styles.botaoDeImagem}/>
      <TouchableOpacity onPress={() => Alert.alert("Clicado!!")}>
      <View style={styles.containerBotao}>
        <Text style={styles.botao}>Entrar</Text>
      </View>
    </TouchableOpacity>
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
  containerBotao: {
    borderWidth: 1,
  },
  botao: {
    fontSize: 14, 
    backgroundColor: "#F79E89",
    textTransform: "uppercase",
    padding: 14,
    width: windowWidth * .8,
    textAlign: "center",
    color: "#ffffff",
    //alterar fonte para Montserrat
  },
  botaoDeImagem: {
  },

});
