import React from 'react'
import { useNavigate } from 'react-router-dom'
function SignIn() {
    const [first , setFirst]= React.useState("")
    const [last , setLast]= React.useState("")
    const [email , setEmail]= React.useState("")
    const [ password , setPassword ] = React.useState<any>()
const navigate = useNavigate()

    const getInfo = ()=>{
if(first.length >=3 && password.length >=3 && last.length >=3 && email.length >=3){
localStorage.setItem("first" ,first)
localStorage.setItem("last" , last)
localStorage.setItem("email" , email)
navigate("/saudiday")
}else{
    alert("Please enter correct information")
}
    }
  return (
    <div className='signIn-form'>
   <fieldset className='signIn-fieldset'>  
       تسجيل جديد  
<input placeholder='First Name' onChange={e =>{setFirst(e.target.value)}} ></input>
<input placeholder='Last Name' onChange={e =>{setLast(e.target.value)}} ></input>
<input value={email} placeholder='Your Email' onChange={e =>{setEmail(e.target.value)}} ></input>
<input placeholder='Password' type='password' onChange={e =>{setPassword(e.target.value)}}></input>
<button type='submit' onClick={getInfo}>أهلًا وسهلًا</button>

</fieldset> 

    </div>
  )
}

export default SignIn