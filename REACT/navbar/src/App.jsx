import { useState, createContext } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import FormWrapper from './components/FormWrapper'

const MyContext = createContext();
export {MyContext};
function App() {
  const [name, setName] = useState("")
 

  return (
    <>
     <MyContext.Provider value={{ name, setName }}>
      <Navbar />
      <FormWrapper/>
    </MyContext.Provider>
    </>
  )
}

export default App
