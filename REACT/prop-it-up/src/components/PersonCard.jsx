import '../App.css'
const PersonCard =(props)=>{

    const {firstName, lastName, age,  hairColor}= props;
    return (
        <div className="PersonCard">
            <h2>{firstName} , {lastName}</h2><p></p>
            <div><h3>Age:</h3><label htmlFor="age">{age} </label></div>
            <h3>Hair color:</h3>{hairColor}
        </div>
    )
}
export default PersonCard;