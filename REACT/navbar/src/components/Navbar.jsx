import React from 'react'
import { MyContext } from '../App'
import { useContext } from 'react'

const Navbar = () => {
    const {name,setName}=useContext(MyContext)
  return (
    <div>
        
           
        <header style={{
      backgroundColor: '#8C2FC5',
      padding: '1rem',
      display: 'flex',
      justifyContent: 'flex-end',
      color: 'white'
    }}>
      <h2>{name}</h2>
    </header>  
            
        
        
        
    </div>
  )
}

export default Navbar