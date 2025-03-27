import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'



const Home = () => {
    const  [books, setBooks]= useState([]);
    const navigate = useNavigate();
    
    useEffect (()=>{
        axios.get("http://localhost:8000/api/books")
        .then((res) => {
            console.log(res.data);
            setBooks(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [])
    const goToDetails =(id)=> {
        navigate (`/book/${id}`)
    };
  return (
    <div className='container'>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th scope='col-4'>title</th>
                    <th scope='col'>author</th>
                    <th scope='col'>Pages</th>
                    <th scope='col'>Available</th>
                    <th scope='col'>Book Details</th>
                
                
                </tr>
            </thead>
            <tbody>
            
                {books.map ((book ,index)=>(
                    <tr key={index}>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.pages}</td>
                    <td>{book.isAvailable ? 'yes' : 'no'}</td>
                    <td><button className='btn btn-success' onClick={()=>goToDetails(book._id)}>book details</button></td>
                    </tr>
                ))}
                
             
         </tbody>
</table>
        

    </div>
  )
}

export default Home