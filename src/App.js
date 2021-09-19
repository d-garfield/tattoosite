import './App.css';
import React, {useState, useEffect} from 'react';
import {Navbar, Products, Cart, Checkout} from './components';
import Artists from './artistcontent/artists';
import Footer from'./components/footer/footer';
import ScrollButton from './components/scrollButton/scrollButton';
import SwipeableTemporaryDrawer from './components/drawer/drawer';


function App() {
  return (
    <div className="App">
     
      <Navbar/>
      <SwipeableTemporaryDrawer/>
      <Artists/>
      <ScrollButton/>
      
      <Footer/>
    </div>
  );
}

export default App;
