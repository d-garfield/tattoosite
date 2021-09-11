import './App.css';
import React, {useState, useEffect} from 'react';
import {Navbar, Products, Cart, Checkout} from './components';
import Artists from './pages/artists';
import Contact from './pages/contact';
import ScrollButton from './components/scrollButton/scrollButton';


function App() {
  return (
    <div className="App">
     
      <Navbar/>
      <Artists/>
      <ScrollButton/>
    </div>
  );
}

export default App;
