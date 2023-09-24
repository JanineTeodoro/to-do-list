import React from 'react';
import { View, Title, Description, Image, TouchableHighlight } from './todo-style'; 
import { GestureResponderEvent } from 'react-native';

type ToDoProps =
 {
  id: string,
  title: string,
  description: string,
  done: boolean,
  toggleDone: (id:string) => void,
}

const ToDo: React.FC <ToDoProps> = ({id, title, description, done, toggleDone}) => {
  return (
    <TouchableHighlight onPress={() => toggleDone(id)}>
      <View>
        {done ? <Image source={require('../../../assets/checked.png')} /> : <Image source={require('../../../assets/unchecked.png')} />}
        <Title>{title}</Title>
        <Description>{description}</Description>
      </View>
    </TouchableHighlight>
  );
};

export default ToDo;

// Container Botão - View
// Botão Add - TouchableOpacity
// Texto - Text
