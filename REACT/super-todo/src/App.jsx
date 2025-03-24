import { useState } from 'react'
import { useReducer } from 'react'
import AddTodos from './components/AddTodo'
import DisplayTodo from './views/DisplayTodo.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: Date.now(), text: action.payload, completed: false }];
    
    case "DELETE_TODO":
      return state.filter(todo => todo.id !== action.payload);
    
    case "TOGGLE_TODO":
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    
    default:
      return state;
  }
};

function App() {
  

  const [todos, dispatch] = useReducer(todoReducer, []);
  return (
    <>
      <h1> Super TODO</h1>
      <AddTodos dispatch={dispatch}/>
      <DisplayTodo todos={todos} dispatch={dispatch} />
    </>
  )
}

export default App
