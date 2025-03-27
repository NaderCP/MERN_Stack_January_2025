import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const BookForm = () => {

    const [newBook, setNewBook]=useState([]);
    const [author,setAuthor]=useState('');
    const [title,setTitle]=useState('');
    const [pages,setPages]=useState(0);
    const [isAvailable,setIsAvailable]=useState(false);
    
    const navigate = useNavigate();
    const submitHandle =(e)=>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/books', {
            title,
            author,
            pages,
            isAvailable
        }).then(res=>{
        setAuthor('');
        setTitle('');
        setPages(0);
        setIsAvailable(false)

        navigate('/');
    })
    }
  return (
   
<div className="container d-flex justify-content-center align-items-center" style={{ height: "500px" }}>
    <form className='w-25 p-3   ' onSubmit={submitHandle}>
      <div className="mb-3">
        <label  className="form-label">Title</label>
        <input type="text" className="form-control" onChange={(e)=>setTitle(e.target.value)} value={title}/>
    
      </div>
      <div className="mb-3">
        <label className="form-label">Autor</label>
        <input type="text" className="form-control" onChange={(e)=>setAuthor(e.target.value)} value={author}/>
      </div>
      <div className="mb-3">
        <label className="form-label">Page count</label>
        <input type="number" className="form-control"onChange={(e)=>setPages(e.target.value)} value={pages}/>
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input"  checked={isAvailable} onChange={(e)=>setIsAvailable(e.target.checked)}/>
        <label className="form-check-label" htmlFor="exampleCheck1">Is it available ?</label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
</div>
  )
}

export default BookForm