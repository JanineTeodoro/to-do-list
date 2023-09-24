import React from 'react';
import Route from "./src/routes/index"
import { NavigationContainer } from '@react-navigation/native';
import { TodoProvider } from './src/contexts/todo-contexts';


export default function App() {

  return (
    <TodoProvider>
      <NavigationContainer>
        <Route />
      </NavigationContainer>
    </TodoProvider>
)}
