import React from 'react';

import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Game1 from './components/Game1'; 
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Signup from './components/Signup';
import Game2 from './components/Game2';
import Game3 from './components/Game3';
import { Routes ,Route, Router, BrowserRouter, Link } from 'react-router-dom';


function App() {


  return (
    <>
      <Navbar/>
      <Routes>    
          {/* <Route exact path='/' element={<Signup/>}></Route> */}
          {/* <Route exact path='/Login' element={<Login/>}></Route> */}
          <Route exact path='/' element={<LandingPage user={""}/>}></Route>
          <Route exact path='/Game1' element={<Game1/>}></Route>
          <Route exact path='/Game2' element={<Game2/>}></Route>
          <Route exact path='/Game3' element={<Game3/>}></Route>          
          
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
