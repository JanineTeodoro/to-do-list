import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, GestureResponderEvent, Modal, StyleSheet, Text, TouchableOpacity, View, Alert, Dimensions } from 'react-native';
import Botao from '../components/botao/botao';
import ToDo from '../components/todo/todo';

const windowWidth = Dimensions.get("window").width
type ToDo = {
  title: string,
  description: string,
  done: boolean,
}

const initialState = [{title: "Contratar a Janine", description: "Verificar documentos necessários.", done: false}, {title: "Informação diferente", description: "Verificar documentos necessários.", done: true}]

export default function TodoList() {

  const [toDoList, setToDoList] = useState<Array<ToDo>>([...initialState])
  const toggleDone = (toggleTodo) => {}
  return (
    
    <View style={styles.container}>
      <Image style={styles.todo} source={require('../../assets/todo-list.png')} />
      <View style={styles.listoftodo}>
        <Image
        source={require('../../assets/list.png')}/>
        <Image source={require('../../assets/list-of-todo.png')}/>
      </View>
      <View style={styles.list}>
        {toDoList.map((todo, i)=> {
          const {title, description, done} = todo
          return(
            <ToDo key={i} title={title} description={description} done={done} toggleDone={toggleDone} />
          )
        } )}
      </View>
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
    //alterar fonte para Montserrat
});