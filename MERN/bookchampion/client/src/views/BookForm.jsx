import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const BookForm = () => {

    
    const [author,setAuthor]=useState('');
    const [title,setTitle]=useState('');
    const [pages,setPages]=useState(0);
    const [isAvailable,setIsAvailable]=useState(false);
    const [errors, setErrors] = useState({ validationErrors: {} });

    
    
    const navigate = useNavigate();
    const submitHandle =(e)=>{
        e.preventDefault();
        const isValid = validateFields();
  if (!isValid) return;
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
    }).catch((err)=>{
      console.log(err.response.data)
      setErrors(err.response.data)
    })
  
    }
    const validateForm = () => {
      return (
        errors.validationErrors &&
        Object.values(errors.validationErrors).every((value) => value === "")
      );
    };
  const validateFields = () => {
    const newErrors = {};
  
    // Title
    if (!title.trim()) {
      newErrors.title = "Book title is required";
    } else if (title.length < 2) {
      newErrors.title = "Book title must be at least 2 characters long";
    }
  
    // Author
    if (!author.trim()) {
      newErrors.author = "Author is required";
    } else if (author.length < 5) {
      newErrors.author = "Book author must be at least 5 characters long";
    }
  
    // Pages
    if (pages === '' || pages === null) {
      newErrors.pages = "Page count is required";
    } else if (pages < 1) {
      newErrors.pages = "Book must have at least 1 page";
    }
  
    setErrors({ validationErrors: newErrors });
  
    return Object.keys(newErrors).length === 0;
  };
  return (
   
<div className="container d-flex justify-content-center align-items-center" style={{ height: "500px" }}>
    <form className='w-2 p-3   ' onSubmit={submitHandle}>
      <div className="mb-3">
        <label  className="form-label">Title</label>
        <input type="text" className="form-control" onChange={(e) => {
    setTitle(e.target.value);
    validateFields();
  }} value={title}/>
        {errors.validationErrors? <p className='small text-nowrap text-danger'>{errors.validationErrors.title} </p>: ""}
      </div>
      <div className="mb-3">
        <label className="form-label">Autor</label>
        <input type="text" className="form-control" onChange={(e)=>{setAuthor(e.target.value);
    validateFields();
  }} value={author}/>
        {errors.validationErrors? <p className='small text-nowrap text-danger'>{errors.validationErrors.author} </p>: ""}
      </div>
      <div className="mb-3">
        <label className="form-label">Page count</label>
        <input type="number" className="form-control"onChange={(e)=>{setPages(e.target.value);
    validateFields();
  }} value={pages}/>
        {errors.validationErrors? <p className='small text-nowrap text-danger'>{errors.validationErrors.pages} </p>: ""}
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input"  checked={isAvailable} onChange={(e)=>setIsAvailable(e.target.checked)}/>
        <label className="form-check-label" htmlFor="exampleCheck1">Is it available ?</label>
      </div>
     
      <button
  className="btn btn-primary"
  type="submit"
  disabled={!validateForm()}
>
  Submit
</button>
    </form>
</div>
  )
}

export default BookForm