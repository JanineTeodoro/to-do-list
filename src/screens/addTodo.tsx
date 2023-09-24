import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, GestureResponderEvent, Modal, StyleSheet, Text, TouchableOpacity, View, Alert, Dimensions } from 'react-native';
import Botao from '../components/botao/botao';
import { useNavigation } from "@react-navigation/native";
import { propsStack } from '../routes/stack';
import { TextInput } from 'react-native';
import BotaoAdd from '../components/botaoAdd/botaoAdd';

const windowWidth = Dimensions.get("window").width

export default function AddTodo() {

  const [title, setTitle] = useState<string>()
  const [description, setDescription] = useState<string>()
  const navigation = useNavigation<propsStack>();
  const handlePress = () => {
    navigation.navigate("TodoList")
  }
  return (
    <View>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        placeholder="Título"
        onChangeText={setTitle}
        value={title}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        placeholder="Descrição"
        multiline
        numberOfLines={6}
        onChangeText={setDescription}
        value={description}
      />
    <BotaoAdd onPress={handlePress} title={'Adicionar'}></BotaoAdd>
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