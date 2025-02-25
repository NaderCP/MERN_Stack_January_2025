import { useState } from 'react'

import './App.css'
import AddTodo from './components/AddTodo'
import DisplayTodo from './components/DisplayTodo'
function App() {
  const [todo, setTodo] = useState([]);
  

  const addTodo = (task) => {
    
      setTodo([...todo, {  todo: task, completed: false }]);
    
  };
  const taskStatus = (index) => {
    setTodo(todo.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    ));
  };
  const deleteTodo = (index) => {
    setTodo(todo.filter((todo,i) => i !== index));
  };
  return (
    <>
     <AddTodo addTodo={addTodo}/>
     <DisplayTodo todo={todo} taskStatus={taskStatus} deleteTodo={deleteTodo}/>
        
    </>
  )
}

export default App
