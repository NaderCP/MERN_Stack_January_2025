import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';
    
function App() {
  const [responseData, setResponseData] = useState([]);
  
    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
            .then(response=>{setResponseData(response.data.results)})
            .catch(error => {console.error("no Pokemons found", error);
            });}
            ,[]);
console.log(responseData)

  return (
    <>
      <div>
        <h1>Pokemon API</h1>
        <ul>
          {responseData.map((onePokemon,index)=>{
            return(
          <li key={index}>
            <h2>{onePokemon.name}</h2>
          </li>)})}
        </ul>
      </div>
    </>
  )
}

export default App
