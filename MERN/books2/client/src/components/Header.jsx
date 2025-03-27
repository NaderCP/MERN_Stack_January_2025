import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate();
    const goHome =()=>{
        navigate('/')
    }
    const goAddBook =()=>{
        navigate('/addbook')
    }


    const location = useLocation();

    // Define View Names Based on Routes
    const viewNames = {
      "/": "Book Catalog",
      "/books": "Books List",
      "/book/:id/": "Book Details",
      "/addbook": "Add a book"
      
    };
  
    // Get the current view name (default to "Page" if not found)
    const currentView = viewNames[location.pathname] || "Book Details";
  return (
    <div className='container d-flex justify-content-between mb-4 w-100 p-3 border border-dark'>
        <div className='d-flex flex-column'>
            <button className='btn btn-primary btn-lg active mb-2' onClick={()=>goHome()}>Catalog</button>
            <button className='btn btn-primary btn-lg active mb-2' onClick={()=>goAddBook()}>Add Book</button>
        </div>
        <div>
            <h1>{currentView}</h1>
        </div>
    </div>
  )
}

export default Header