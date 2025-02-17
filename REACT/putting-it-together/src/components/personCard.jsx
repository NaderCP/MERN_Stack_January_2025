import '../App.css'
import React, {  useState } from "react";
const PersonCard =(props)=>{

    const {firstName, lastName, age,  hairColor}= props;
    const [Age, setAge] = useState(age);
    return (
        <div className="PersonCard">
            <h2>{firstName} , {lastName}</h2><p></p>
            <div><h3>Age:</h3><label htmlFor="age">{Age} </label></div>
            <h3>Hair color:</h3>{hairColor}
            <button onClick={(e)=>setAge (Age +1)}>birthday for :{firstName} </button>
        </div>
    )
}
export default PersonCard;