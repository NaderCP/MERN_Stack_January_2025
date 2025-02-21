import React, { useState } from 'react';
import '../App.css'


const FormComponent = ({handleNewBox}) => {
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');

  const handleColor = (e) => {
    setColor(e.target.value);
  }


  const handleSize = (e) => {
    setSize(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    handleNewBox(color, size);
    setColor('');  
    setSize('');   
  }
  return (
    <>
    <div className='p-4 bg-gradient-to-tr from-fuchsia-300 to-sky-500 '>
      <h1 className='text-cyan-900'>Box Generator</h1>
      <form action="" onSubmit={handleSubmit} className='flex flex-col  '>
        <div className='flex flex-row m-6 justify-end'>
          <h2 className='text-cyan-900'> color</h2>
          <input type="text" onChange={handleColor} className='bg-gray-300' name="" id="" placeholder='put color' />
        </div>
        <div className='flex flex-row m-6 justify-end'>
          <h2 className='text-cyan-900'> Size (pixels)</h2>
          <input type="text" onChange={handleSize} className='bg-gray-300' name="" id="" placeholder='size' />
        </div>
        <button type='submit'>add box</button>
      </form>
    </div>
    </>
  )
}

export default FormComponent;