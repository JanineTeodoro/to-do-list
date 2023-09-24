import React, { createContext, useContext, useState } from 'react';
import { Alert } from 'react-native';
import uuid from 'react-native-uuid';

type TodoContextProps = {
  todoList: Array<ToDo>,
  setTodoList: Function,
  createTodo: (title: string, description: string) => void
}

const TodoContext = createContext<TodoContextProps>({
  todoList: undefined as unknown as TodoContextProps["todoList"],
  setTodoList: undefined as unknown as TodoContextProps["setTodoList"],
  createTodo: undefined as unknown as TodoContextProps["createTodo"],
});

const initialState = [
  {id: uuid.v4(), title: "Contratar a Janine", description: "Verificar documentos necessários.", done: false}, 
  {id: uuid.v4(), title: "Informação diferente", description: "Verificar documentos necessários.", done: true}]

type ToDo = {
  id: string | number[],
  title: string,
  description: string,
  done: boolean,
}

export const TodoProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [todoList, setTodoList] = useState<Array<ToDo>>([...initialState])

  const createTodo = (title: string, description: string) => {
    setTodoList([...todoList, {id: uuid.v4(), title: title, description: description, done: false}])
  }

  return (
    <TodoContext.Provider value={{ todoList, setTodoList, createTodo}}>
      {children}
    </TodoContext.Provider>
  )
}

export const useTodo = () => {
  const context = useContext(TodoContext)
  return {
    ...context
  }
}