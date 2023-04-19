import React from 'react';

import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import Home from './components/Home';
import Game1 from './components/Game1'; 
import LandingPage from './components/LandingPage';
// import LoginSignup from './components/LoginSignup';
import Login from './components/Login';
import Signup from './components/Signup';
import { Routes ,Route, Router, BrowserRouter, Link } from 'react-router-dom';



function App() {


  return (
    <>
      <Navbar/>
      <Routes>    
          <Route exact path='/' element={<Signup/>}></Route>
          <Route exact path='/Login' element={<Login/>}></Route>
          <Route exact path='/Landingpage' element={<LandingPage user={""}/>}></Route>
          <Route exact path='/Game1' element={<Game1/>}></Route>
          
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
