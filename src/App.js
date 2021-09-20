import './App.css';
import React, {useState, useEffect} from 'react';
import {Navbar, Products, Cart, Checkout} from './components';
import Artists from './artistcontent/artists';
import Footer from'./components/footer/footer';
import ScrollButton from './components/scrollButton/scrollButton';
import SwipeableTemporaryDrawer from './components/drawer/drawer';
import MediaCard from './components/mediacard/mediacard';


function App() {
  return (
    <div className="App">
     
      <Navbar/>
      <SwipeableTemporaryDrawer/>
      <Artists/>
      <MediaCard/>
      <ScrollButton/>
      
      <Footer/>
    </div>
  );
}

export default App;
