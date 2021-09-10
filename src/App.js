import './App.css';
import React, {useState, useEffect} from 'react';
import {Navbar, Products, Cart, Checkout} from './components';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Artists from './pages/services';
import Contact from './pages/contact';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Switch>
        <Route path='/'/>
        <Route path='/artists' component={Artists} />
        <Route path='/contact-us' component={Contact} />
        
      </Switch>
      </Router>
    </div>
  );
}

export default App;
