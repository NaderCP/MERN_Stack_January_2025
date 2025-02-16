
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HeaderCo from './components/headerCo.jsx'

import './App.css'
import SideNav from './components/sideNav.jsx'
import MainCo from './components/MainCo.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
    <div className="container">
        <div className="top-nav"></div>
        <HeaderCo />
            <div className="contain">
                <SideNav /><MainCo>
                            
                          </MainCo> 
            </div>
    </div>

    </>
  )
}

export default App
