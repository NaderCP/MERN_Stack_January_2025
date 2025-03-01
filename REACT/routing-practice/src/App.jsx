import { useState } from 'react'
import { BrowserRouter , Router, Routes,Route } from 'react-router-dom';
import { useParams } from "react-router-dom";
import './App.css'
const Home =() => { 
  return (
    <h1 style={{color: "red"}}>Welcome</h1>
  );
}
    
const Number = (props) => {
  const {num} = useParams();
  return (
    <h1 style={{color: "blue"}}>the number is:{num} </h1>
  );
}

const Hello = (props) => {
  const {word, tcolor, bcolor} = useParams();
  return (
    <h1 style={{ color: tcolor || "black", backgroundColor: bcolor || "white" }}>
      The word is: {word}
    </h1>
  );
}
    
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/number/:num' element={<Number/>}/>
          <Route path='/:word/:tcolor/:bcolor' element={<Hello/>}/>
        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
