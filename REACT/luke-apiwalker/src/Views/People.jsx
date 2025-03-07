import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import {useParams} from 'react-router-dom';

const People = () => {
   const [ newPeople, setNewPeople] = useState(null);
    const {id} = useParams();
    const apiUrl = `https://swapi.dev/api/people/${id}`;
    useEffect(()=> {
        axios.get(apiUrl)
        .then((response)=>{
            setNewPeople(response.data)
            
        })
        .catch(err => {
            console.log("Error", err);
    }

    )
}, [id])
if (!newPeople) {
    return <div>Loading...</div>;
  }
else{
  return (
    
    <div className="card my-3">
      <div className="card-header">
        <h5 className="card-title mb-0">{newPeople.name}</h5>
      </div>
      <div className="card-body">
        <p className="card-text"><strong>Height:</strong> {newPeople.height}</p>
        <p className="card-text"><strong>Hair Color:</strong> {newPeople.hair_color}</p>
        <p className="card-text"><strong>Eye Color:</strong> {newPeople.eye_color}</p>
        <p className="card-text"><strong>Skin Color:</strong> {newPeople.skin_color}</p>
      </div>
    </div>
  )}
}

export default People