import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import { View, Title, Description, Image, TouchableHighlight } from './todo-style'; 
import { GestureResponderEvent } from 'react-native';

type ToDoProps =
 {
  title: string,
  description: string,
  done: boolean,
  toggleDone: (event:GestureResponderEvent) => void,
}

const ToDo: React.FC <ToDoProps> = ({title, description, done, toggleDone}) => {
  return (
    <TouchableHighlight onPress={toggleDone}>
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
