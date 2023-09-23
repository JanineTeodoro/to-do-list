import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaInicial from '../screens/telaInicial';
import TodoList from '../screens/todoList';
import React from 'react';


const { Navigator, Screen } = createNativeStackNavigator();

export default function () {
  return (
    <Navigator>
      <Screen name="TelaInicial" component={TelaInicial} />
      <Screen name="TodoList" component={TodoList} />
    </Navigator>
  );
}