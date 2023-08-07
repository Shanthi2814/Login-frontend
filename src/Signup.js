import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'
import {Link,useNavigate} from 'react-router-dom'

function Signup(){
    const [name, setName] =useState()
    const [email, setEmail]=useState()
    const [password, setPassword]=useState()
    const navigate = useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/register',{name,email,password})
        .then(res=>{
            navigate('/login')

        }).catch(err=>console.log(err))
    }

    return(
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <lable htmlFor='email'>
                            <strong>Name</strong>
                        </lable>
                        <input type="text" placeholder="EnterName" autoComplete="off" name="name" 
                        className="form-control rounded-0"
                         onChange={(e)=>setName(e.target.value)} />
                        
                    </div>
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
                        <button type="submit" className="btn btn-success w-100 rounded-0">Register</button>
                        <p>Already have an account</p>
                        <Link className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Login</Link>

                </form>
            </div>
        </div>
    );
}
export default Signup;