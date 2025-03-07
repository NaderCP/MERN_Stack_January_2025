import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";

import Search from './components/Search';
import People from './Views/People';
import Planet from './Views/Planet';
import Home from './views/home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <div>
        <Search/>
      </div>
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/people/:id' element={<People/>}/>
        <Route path='/planet/:id' element={<Planet/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
