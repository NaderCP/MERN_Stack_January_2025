import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [users, setUsers]= useState([]);
 
  const [firstName, setFirstName] = useState('');
  const [firstNameError, setFirstNameError] = useState("");
  const [lastName, setLastName]= useState('');
  const [lastNameError, setLastNameError]= useState('');
  const [email, setEmail]= useState('');
  const [emailError, setEmailError]= useState('');
  const [password, setPassword]= useState('');
  const [passwordError, setPasswordError]= useState('');
  const [repeatPassword, setRepeatPassword]= useState('');
  const [repeatPasswordError, setRepeatPasswordError]= useState('');
  const [submitted, setSubmitted]=useState(false);
  const handleFirstName = (e)=>{
    setFirstName(e.target.value);

    if(e.target.value.length < 2) {
      setFirstNameError("this field must be at least 2 characters.!");
  } 
   else {
      
      setFirstNameError("");
  }
  }
  const handleLastName = (e)=>{
    setLastName(e.target.value);
    if(e.target.value.length < 2) {
      setLastNameError("this field must be at least 2 characters.!");
  } 
   else {
      
      setLastNameError("");
  }
  }
  

  const handleEmail = (e)=>{
    setEmail(e.target.value);
    if(e.target.value.length < 8) {
      setEmailError("this field must be at least 8 characters.!");
  } 
   else {
      
      setEmailError("");
  }
  }

  const handlePassword = (e)=>{
    setPassword(e.target.value);
    if(e.target.value.length < 8) {
      setPasswordError("this field must be at least 8 characters.!");
  } 
   else {
      
      setPasswordError("");
  }
  }

  const handlePasswordRepeat = (e)=>{
    setRepeatPassword(e.target.value);
    if(e.target.value!==password) {
      setRepeatPasswordError("Confirm Password Dont Match");
  } 
   else {
      
    setRepeatPasswordError("");
  }
 }

  const submitHandler =(e)=>{
    e.preventDefault();
  
  
    setUsers([...users,{
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password

      


    }]);
    setSubmitted(true);
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setRepeatPassword('');
   }

  return (
    <>
        <form onSubmit ={submitHandler}  className=" bg-fuchsia-600 p-8 border-amber-950  ">
          <p id='nosubmit'className='text-emerald-100 mb-2 text-3xl font-stretch-50% font-bold'>{submitted? 'thankyou for submitting the form' : 'Please Submit the form'}</p>
        
          <div className='container flex flex-col   gap-6'>
          
        <div className='container flex flex-row justify-between gap-2 bg-fuchsia-300 p-4'>
           <label htmlFor="firstName" ><b>First Name </b></label>
           <input value={firstName} onChange={(e)=>handleFirstName(e)} className=' bg-fuchsia-400 text-gray-700 font-semibold ' type="text" placeholder="First Name" id="firstName" required></input>
           
          </div>
          {
                    firstNameError ?
                   <p>{ firstNameError }</p> :
                    " "
                }
          <div className='container flex flex-row justify-between gap-2 bg-fuchsia-300 p-4'>
           <label htmlFor="lastName" ><b>Last Name </b></label>
           <input value={lastName} onChange={(e)=>handleLastName(e)} className=' bg-fuchsia-400 text-gray-700 font-semibold ' type="text" placeholder="Last Name" id="lastName" required></input>
           
          </div>
          
          {
                    lastNameError ?
                   <p>{ lastNameError }</p> :
                    " "
                }
          <div className='container flex flex-row justify-between gap-2 bg-fuchsia-300 p-4'>
            <label htmlFor="email"className=' border-amber-950 text-grey-700' ><b>Email Adress</b></label>
            <input value={email} onChange={(e)=>handleEmail(e)} className=' bg-fuchsia-400 text-gray-700 font-semibold ' type="text" placeholder="Enter Email" id="email" required></input>
          </div>
          {
                    emailError ?
                   <p>{ emailError }</p> :
                    " "
                }
        

          <div className='container flex flex-row justify-between gap-2 bg-fuchsia-300 p-4'>
           <label htmlFor="psw" ><b>Password</b></label>
           <input value={password} onChange={(e)=>handlePassword (e)} className=' bg-fuchsia-400 text-gray-700 font-semibold ' type="password" placeholder="Enter Password" id="psw" required></input>
          </div>
          {passwordError ?
                   <p>{ passwordError }</p> :
                    " "
                }

          <div className='container flex flex-row justify-between gap-2 bg-fuchsia-300 p-4'>
            <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
            <input value={repeatPassword} onChange={(e)=>handlePasswordRepeat(e)} className=' bg-fuchsia-400 text-gray-700 font-semibold 'type="password" placeholder="Repeat Password" id="psw-repeat" required></input>
          </div>
          {repeatPasswordError ?
                   <p>{ repeatPasswordError }</p> :
                    " "
                }
          <button >Creat User</button>
        </div>
      </form>
      <h1>Users</h1>
                {
              users.map((usr,index)=>(
                <div key={index}>
                  <h2>{usr.firstName}-{usr.lastName} {usr.email}</h2>
                </div>
              ))
              }
    </>
  )
}



export default App
