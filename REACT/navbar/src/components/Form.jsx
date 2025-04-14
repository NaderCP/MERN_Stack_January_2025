import React from 'react'
import { MyContext } from '../App'
import { useContext } from 'react'
const Form = () => {
    const {name,setName}=useContext(MyContext)
  return (
    <div>
        <div class="mb-3">
        <label  className="form-label">Name</label>
        <input
            type="text"
            className="form-control"
            onChange={(e)=>setName(e.target.value)}
            value={name}
        />
        <small id="helpId" className="form-text text-muted">Help text</small>
    </div>
    </div>
  )
}

export default Form