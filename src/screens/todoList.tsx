import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Dimensions, ScrollView } from 'react-native';
import ToDo from '../components/todo/todo';

import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../routes/stack';
import { useTodo } from '../contexts/todo-contexts';

type ToDo = {
  id: string | number[],
  title: string,
  description: string,
  done: boolean,
}

export default function TodoList() {

  const navigation = useNavigation<propsStack>();
  const handlePress = () => {
    navigation.navigate("AddTodo")
  }

  const {todoList, setTodoList} = useTodo()


  const toggleDone = (todoId: string) => {
    const newTodoList = todoList.map(todo => todo.id === todoId ? {...todo, done: !todo.done} : todo)
    setTodoList(newTodoList)
  }

  return (
    <View style={styles.container}>
      <Image style={styles.todo} source={require('../../assets/todo-list.png')} />
      <View style={styles.listoftodo}>
        <Image
        source={require('../../assets/list.png')}/>
        <Image source={require('../../assets/list-of-todo.png')}/>
      </View>
      <View style={styles.list}>
        {todoList.map(todo => {
          const {id, title, description, done} = todo
          return(
            <ToDo key={`${id}`} title={title} description={description} done={done} toggleDone={toggleDone} id={`${id}`}/>
          )
        })}
      </View>
      <TouchableOpacity onPress={handlePress} style={styles.add}>
        <Image source={require('../../assets/add-button.png')} />
      </TouchableOpacity>
    </View>
    //Adicionar ScrollView
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    paddingTop: 75,
    paddingLeft: 20,
    paddingRight: 20,
  },
  todo: {
    objectFit: 'contain',
    top: 20,
    left: 20,
    position: 'absolute',
  },
  listoftodo: {
    flexDirection: 'row',
    gap: 15,
  },
  list: {
    width: "100%",
    paddingTop: 40,
    gap: 20,
  },
  add: {
    bottom: 25,
    right: 25,
    position: 'absolute'
  }
    //Alterar fonte para Montserrat
});