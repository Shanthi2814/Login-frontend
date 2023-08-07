import React, { useEffect ,useState} from 'react'
import axios from 'axios'
// import { useNavigate } from 'react-router-dom'

function Dashboard() {

    const [suc,setSuc]=useState()
    // const navigate = useNavigate()
    axios.defaults.withCredentials=true;
    useEffect(()=>{
        axios.post('http://localhost:3001/dashboard')
        .then(res=>{
          if(res.data==="success"){
            setSuc("successed")
          }
          
          // console.log(res.data)
            // navigate('/login')
    
        }).catch(err=>console.log(err))

    },[])
  return (
    <div>
        <h2>Dashboard</h2>
        <p>{suc}</p>
    </div>
  )
}

export default Dashboard