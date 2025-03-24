import React from 'react'
import { useState } from 'react';



const AddTodo = ({dispatch}) => {

    const [task,setTask]=useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        dispatch({ type: "ADD_TODO", payload: task });
        setTask(""); 
      };

  return (
    <form className='col' onSubmit={(e)=>handleSubmit(e)}>
        <div className='d-inline-flex'>
        <input type="text" value={task} placeholder='add your item'className='row'onChange={(e) => setTask(e.target.value)}/>
        
        <button className='btn btn-primary row' type='submit'>Add </button>
        </div>
    </form>
  )
}

export default AddTodo