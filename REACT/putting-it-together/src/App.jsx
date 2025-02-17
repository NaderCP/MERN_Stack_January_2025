import { useState } from 'react'
import react from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PersonCard from './components/personCard.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PersonCard firstName="Doe"  lastName= "Jane" age= {45}  hairColor= "Black"/>
      <PersonCard firstName="Smith"  lastName= "Jhon" age= {88}  hairColor= "Brown"/>
    </>
  )
}

export default App
