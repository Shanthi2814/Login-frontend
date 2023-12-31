import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'


function Login() {

  const [email,setEmail]=useState()
  const [password,setPassword]=useState()
  const navigate = useNavigate()
  axios.defaults.withCredentials=true;
  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3001/login',{email,password})
    .then(res=>{
      if(res.data.Status ==="success"){
        if(res.data.role==="admin"){
          navigate('/dashboard')
        }else{
          navigate('/')
        }
      }
      // console.log(res.data)
        // navigate('/login')

    }).catch(err=>console.log(err))
}


  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                <div className="mb-3">
                        <lable htmlFor='email'>
                            <strong>Email</strong>
                        </lable>
                        <input type="email" placeholder="EnterEmail" autoComplete="off" name="email" 
                        className="form-control rounded-0"
                         onChange={(e)=>setEmail(e.target.value)} />
                        </div>
                        <div className="mb-3">
                        <lable htmlFor='email'>
                            <strong>Password</strong>
                        </lable>
                        <input type="password" placeholder="EnterPassword" autoComplete="off" name="password" 
                        className="form-control rounded-0"
                         onChange={(e)=>setPassword(e.target.value)} />
                        </div>
                        <button type="submit" className="btn btn-success w-100 rounded-0">Login</button>
                </form>
                <p>Already have an account</p>
                        <Link className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Sign Up</Link>
                </div>
                </div>
  )
}

export default Login