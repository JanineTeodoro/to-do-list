import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, GestureResponderEvent, Modal, StyleSheet, Text, TouchableOpacity, View, Alert, Dimensions } from 'react-native';
import Botao from '../components/botao/botao';
import { useNavigation } from "@react-navigation/native";
import { propsStack } from '../routes/stack';
import { useFonts, Montserrat_400Regular, Montserrat_500Medium, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';

export default function TelaInicial() {

  const [fontLoaded] = useFonts({
    Montserrat_400Regular, 
    Montserrat_500Medium, 
    Montserrat_600SemiBold
  })

  const navigation = useNavigation<propsStack>();
  const handlePress = () => {
    navigation.navigate("TodoList")
  }
  return (
    <View style={styles.container}>
      <Image
        source={require('./../../assets/todo-list-logo.png')}/>
      <Botao onPress={handlePress} title={'Entrar'}></Botao>
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
});