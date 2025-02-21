import { useState } from 'react'

import './App.css'
import FormComponent from './components/FormComponent.jsx'
import BoxComponent from './components/BoxComponent.jsx'
function App() {
  
const [box, setBox] = useState([]);


const handleNewBox =(color,size)=>{
  setBox ((prevBox)=> [...prevBox, {color,size}]);
}


  
  
  return (
    <>
      <h2>this is my compo</h2>
      <FormComponent handleNewBox={handleNewBox}/>
      <BoxComponent  box={box}/>
    </>
  )
}

export default App
