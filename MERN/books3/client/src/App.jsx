import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header';
import Home from './views/Home';
import { Route,Routes } from 'react-router-dom';
import BookDetails from './views/BookDetails';
import BookForm from './views/BookForm';
import BookUpdate from './views/BookUpdate';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/book/:id' element={<BookDetails/>}/>
        <Route path='/addbook' element={<BookForm/>}/>
        <Route path='/edit/:id' element={<BookUpdate/>}/>
      </Routes>
       
    </>
  )
}

export default App
