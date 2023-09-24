import React, { useState } from 'react';
import { AddContainer, TextInputDescription, TextInputTitle } from './addTodo-style'
import { Alert, Image } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { propsStack } from '../routes/stack';
import BotaoAdd from '../components/botaoAdd/botaoAdd';
import { ScrollView } from 'react-native';
import { useTodo } from '../contexts/todo-contexts';


export default function AddTodo() {

  const [title, setTitle] = useState<string>("")
  const [description, setDescription] = useState<string>("")
  const navigation = useNavigation<propsStack>();
  const {createTodo} = useTodo();
  const handlePress = () => {
    if(title.length <= 0) {
      Alert.alert("Título obrigatório!")
      return;
    }
    createTodo(title, description)
    navigation.navigate("TodoList")
  }
  return (
    <AddContainer>
      <TextInputTitle
        style={{ height: 40, borderColor: '#fff', borderWidth: 1 }}
        placeholder="Título"
        placeholderTextColor={'#EEEEEE'}
        onChangeText={setTitle}
        value={title}
      />
      <TextInputDescription
        style={{ height: 40, borderColor: '#fff', borderWidth: 1 }}
        placeholder="Descrição"
        placeholderTextColor={'#EEEEEE'}
        multiline
        onChangeText={setDescription}
        value={description}
      />
      <BotaoAdd onPress={handlePress} title={'Adicionar'}></BotaoAdd>
      <Image source={require('./../../assets/person-checking.png')} />
    </AddContainer>
  );
}