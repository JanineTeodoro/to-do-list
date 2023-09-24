import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import ToDo from '../components/todo/todo';
import uuid from 'react-native-uuid';

const windowWidth = Dimensions.get("window").width
type ToDo = {
  id: string | number[],
  title: string,
  description: string,
  done: boolean,
}

const initialState = [
  {id: uuid.v4(), title: "Contratar a Janine", description: "Verificar documentos necessários.", done: false}, 
  {id: uuid.v4(), title: "Informação diferente", description: "Verificar documentos necessários.", done: true}]

export default function TodoList() {

  const [toDoList, setToDoList] = useState<Array<ToDo>>([...initialState])

  const toggleDone = (todoId: string) => {
    const newTodoList = toDoList.map(todo => todo.id === todoId ? {...todo, done: !todo.done} : todo)
    setToDoList(newTodoList)
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
        {toDoList.map(todo => {
          const {id, title, description, done} = todo
          return(
            <ToDo key={`${id}`} title={title} description={description} done={done} toggleDone={toggleDone} id={`${id}`}/>
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