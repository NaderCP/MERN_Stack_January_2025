import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const BookUpdate = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [oldBook, setOldBook]=useState({});
    const [title, setTitle]= useState('');
    const [author, setAuthor]= useState('');
    const [pages,setPages]=useState (0);
    const [isAvailable, setIsAvailable]=useState(true);
    const [errors, setErrors] = useState({});


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/books/${id}`)
        .then((res)=>{
            console.log(res);
            setOldBook(res.data);
            setTitle(res.data.title);       
        setAuthor(res.data.author);     
        setPages(res.data.pages);       
        setIsAvailable(res.data.isAvailable)
        })
        .catch((err)=>{
            console.log(err)
            
        })
    },[id])
console.log(errors)
    const submitHandle = (e)=> {
        e.preventDefault();
        
        axios.put(`http://localhost:8000/api/books/${id}`,{
            title,
            author,
            pages,
            isAvailable
        })
        .then(res=>{
            setAuthor('');
            setTitle('');
            setPages(0);
            setIsAvailable(false)
            
            navigate('/');
        }

        ).catch((err)=>{
            setErrors(err.response.data.errors)
            console.log(errors)
        })
    
    }
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: "500px" }}>
    <form className='w-25 p-3   ' onSubmit={submitHandle}>
      <div className="mb-3">
        <label  className="form-label">Title</label>
        <input type="text" className="form-control" onChange={(e)=>setTitle(e.target.value)} value={title}/>
        {errors.title? <p className='small text-nowrap text-danger'>{errors.title.message} </p>: ""}
      </div>
      <div className="mb-3">
        <label className="form-label">Autor</label>
        <input type="text" className="form-control" onChange={(e)=>setAuthor(e.target.value)} value={author}/>
        {errors.author? <p className='small text-nowrap text-danger'>{errors.author.message} </p>: ""}
      </div>
      <div className="mb-3">
        <label className="form-label">Page count</label>
        <input type="number" className="form-control"onChange={(e)=>setPages(e.target.value)} value={pages}/>
        {errors.pages? <p className='small text-nowrap text-danger'>{errors.pages.message} </p>: ""}
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input"  checked={isAvailable} onChange={(e)=>setIsAvailable(e.target.checked)}/>
        <label className="form-check-label" htmlFor="exampleCheck1">Is it available ?</label>
      </div>
      <button type="submit" className="btn btn-primary">
        Update
      </button>
    </form>
</div>
  )
}

export default BookUpdate