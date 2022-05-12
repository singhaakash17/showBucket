import { Container } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect } from 'react';
import {useState} from 'react';
import './Login.css';

function Login() {
    const [message, setMessage] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    async function handleSubmit(e:any){
    e.preventDefault();
    const token=await axios.get('api/user?username='+username+'&password='+password);
    if(token.data.accessToken!= undefined){
        localStorage.setItem("isAuthenticated","true")
        setMessage("")
        window.location.href = '/show';
    }
    else
    {
        localStorage.setItem("isAuthenticated","false")
        setMessage("Username/Passsword is invalid")
    }
   }
  return (
    <>
    <Container maxWidth='sm' fixed style={{height:'350px', backgroundColor: '#cfe8fc',display:'flex', border:'2px solid orange',justifyContent: 'center', alignItems: 'center',marginTop:'100px'}}>
     
    <form onSubmit={handleSubmit} style={{fontFamily: "'Trebuchet MS',sans-serif"}}>
    <h3 style={{textAlign:'center'}}>Login</h3>
    <label>Username:</label>
      <input
        type="text" 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
/>
    <label>Password:</label>
      <input
        type="password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />    
 <button style={{display:'flex',cursor:'pointer',justifyContent:'center',alignItems:'center', margin:'0 auto'}} type="submit">Submit</button>
  
  </form>


  </Container>
    <p style={{color:'red',display:'flex',justifyContent:'center',alignItems:'center'}}>{message}</p>
    </>
  );
}

export default Login;
