import React from 'react';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'


const Search = () => {
    const [searchOption, setSearchOption] = useState("people");
  const [idNumber, setIdNumber] = useState("");

  const navigate = useNavigate();
  const submitHandler = (e)=>{
    e.preventDefault()
    navigate(`/${searchOption}/${idNumber}/`);
  }
  return (
    <form className="p-4 border rounded bg-light" onSubmit={submitHandler}>
      <div className="mb-3">
        <label className="form-label fw-bold">I'm searching for:</label>
        <select className="form-select" value={searchOption} onChange={(e)=>setSearchOption(e.target.value)}>
          <option value="people">People</option>
          <option value="planet">Planet</option>
          
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label fw-bold">ID Number:</label>
        <input type="text" className="form-control" placeholder="Enter ID number"value={idNumber} onChange={(e)=>setIdNumber(e.target.value)} />
      </div>

      <button className="btn btn-success w-100" type='submit'>Search</button>
    </form>
    
  )
}

export default Search