import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, GestureResponderEvent, Modal, StyleSheet, Text, TouchableOpacity, View, Alert, Dimensions } from 'react-native';
import Botao from '../components/botao/botao';

const windowWidth = Dimensions.get("window").width

export default function TodoList() {

  

  return (
    
    <View style={styles.container}>
      <Image style={styles.todo} source={require('../../assets/todo-list.png')} />
      {/* <Image
        source={require('../../assets/to-do-list.png')}/> */}
      {/* <TouchableOpacity onPress={() => Alert.alert("Clicado!!")}>
      <View style={styles.containerBotao}>
        <Text style={styles.botao}>Entrar</Text>
      </View>
    </TouchableOpacity> */}
    <TouchableOpacity style={styles.add}>
      <Image source={require('../../assets/add-button.png')} />
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  todo: {
    objectFit: 'contain',
    top: 5,
    left: 5,
    position: 'absolute',
  },
  add: {
    bottom: 25,
    right: 25,
    position: 'absolute'
  }
    //alterar fonte para Montserrat
});