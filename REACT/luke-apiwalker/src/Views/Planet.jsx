import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import {useParams} from 'react-router-dom';

const Planet = () => {
    const [ newPlanet, setNewPlanet] = useState(null);
    const {id} = useParams();
    const apiUrl = `https://swapi.dev/api/planets/${id}`;
    useEffect(()=> {
        axios.get(apiUrl)
        .then((response)=>{
            setNewPlanet(response.data)
            
        })
        .catch(err => {
            console.log("Error", err);
    }

    )
}, [id])
if (!newPlanet) {
    return <div>Loading...</div>;
  }
else{
  return (
    
    <div className="card my-3">
      <div className="card-header">
        <h5 className="card-title mb-0">{newPlanet.name}</h5>
      </div>
      <div className="card-body">
        <p className="card-text"><strong>climate:</strong> {newPlanet.climate}</p>
        <p className="card-text"><strong>terrain:</strong> {newPlanet.terrain}</p>
        <p className="card-text"><strong>surface water:</strong> {newPlanet.surface_water}</p>
        <p className="card-text"><strong>population:</strong> {newPlanet.population}</p>
      </div>
    </div>
  )}
}

export default Planet