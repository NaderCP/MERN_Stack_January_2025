import React from 'react'
import { useState}  from 'react';

const AddTodo = ({addTodo}) => {
    
const [task,setTask]=useState("");

const handleAdd = (e) => {
    e.preventDefault(); 
    
      addTodo(task);
      setTask("");
    
  }

  return (
    <form className='col' onSubmit={(e)=>handleAdd(e)}>
        <input type="text" value={task} placeholder='add your item'className='row'onChange={(e) => setTask(e.target.value)}/>
        <button className='btn btn-primary row' type='submit'>Add </button>
    
    </form>
  )
}

export default AddTodo 