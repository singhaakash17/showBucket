import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import React from 'react';
import { BrowserRouter, Navigate, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import AddForm from './AddForm';
import './Header.css';
import Shows from './Shows';
import Login from './Login';
import RequireAuth from './RequiredAuth';
const Header = () => {
  function handleLogout(){
    window.localStorage.clear();
    window.location.href="/";
  }
  const location=useLocation();


  return (
<>
<AppBar position='sticky' style={{fontFamily: "'Trebuchet MS',sans-serif"}}>

  <nav>
  
  <NavLink to="/show" className="brandlog"><h4 style={{color:'black'}}>ShowsBucket</h4></NavLink>    
      
      <NavLink to="/show"  style={{textDecoration:'none'}} className={({ isActive }) => (isActive ? "link-active" : "link")}>
          Shows List
        </NavLink>
        <NavLink to="/add" style={{textDecoration:'none'}}  className={({ isActive }) => (isActive ? "link-active" : "link")}>
          Add Show
        </NavLink>
       
         
       
    </nav>

</AppBar>
{location.pathname !=="/" && 
             
<button onClick={(e)=>{handleLogout()}} style={{ position:'absolute',cursor:'pointer',top:'1',right:'0'}}>Logout</button>   
}  
  <Routes>  
    <Route
    path="/"
    element={<Login/>}

/>

<Route
    path="/show"
    element={
    <RequireAuth>
    <Shows/>
    </RequireAuth>
    } 
/>
<Route
    path="/add"
    element={
      <RequireAuth>
    <AddForm/>
    </RequireAuth>} 
/>
<Route
    path="/logout"
    element={
    <Login/>} 
/>
</Routes>
</>
    

  );
};

export default Header;