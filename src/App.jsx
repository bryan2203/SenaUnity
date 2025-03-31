import { useState } from 'react'
import React from "react";
import LoginPage from './Pages/LoginPage/LoginPage'
import './App.css'
import { Home } from './Pages/Home/Home'
import  ProfileUser  from './Pages/CrearPerfil/ProfileUser';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <ProfileUser/>
      <LoginPage/>
      
      
      

    </div>

  );
}

export default App
