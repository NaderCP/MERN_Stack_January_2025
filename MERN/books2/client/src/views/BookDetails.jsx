import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

const BookDetails = () => {
    const navigate = useNavigate();
    const [oneBook, setOneBook]= useState([]);
    const {id} = useParams();
    useEffect (()=>{
        axios.get(`http://localhost:8000/api/books/${id}`)    
        .then((res) => {
            console.log(res.data);
            setOneBook(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [])

    const borrow = () => { axios.delete(`http://localhost:8000/api/books/${id}`)
   .then((res) => {
      console.log(res.data);
      navigate("/");
   })
}
  return (
    <div className='card'>
            <div className="card-header">
                <h1>Title: {oneBook.title}</h1>
            </div>
            <div className="card-body d-flex justify-content-center">
                <div >
                    <h3>Author : {oneBook.author}</h3>
                    <h3>Pages Count :{oneBook.pages}</h3>
                    {oneBook.isAvailable ? <h3 className="text-success">Available for borrowing</h3> : <h3 className="text-danger">Not Available for borrowing</h3>}
                    <button className='btn btn-danger' onClick={()=>borrow(oneBook._id)}>Borrow</button>
                </div>
            </div>
        </div>
  )
}

export default BookDetails