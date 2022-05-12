import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Shows from './Shows';
import Header from './Header';
import { BrowserRouter,Routes ,Route } from 'react-router-dom';
import AddForm from './AddForm';
function App() {
  return (

      <BrowserRouter>
     
        
        <Header />
                

      </BrowserRouter>
    
  );
}

export default App;
