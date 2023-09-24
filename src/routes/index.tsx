import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaInicial from '../screens/telaInicial';
import TodoList from '../screens/todoList';
import React from 'react';
import AddTodo from '../screens/addTodo';


const { Navigator, Screen } = createNativeStackNavigator();

export default function () {
  return (
    <Navigator>
      <Screen name="TelaInicial" component={TelaInicial} />
      <Screen name="TodoList" component={TodoList} />
      <Screen name="AddTodo" component={AddTodo}/>
    </Navigator>
  );
}