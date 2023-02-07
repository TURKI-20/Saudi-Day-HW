import React from 'react'

import { useNavigate } from "react-router-dom";

function InterFace() {

    const navigate = useNavigate()


    const LogIn =()=>{
        navigate("/logIn")  
       
    }
    const SignIn =()=>{
      navigate("/signIn")  
     
  }
  return (
    <div className='main'>

        <h1 className='text'>فوق هام السحب يابلادي</h1>
        <div className='btn'>
        <button onClick={LogIn}>تسجيل دخول</button>
        <button onClick={SignIn}> تسجيل جديد</button>
        </div>
      
    </div>
  )
}

export default InterFace