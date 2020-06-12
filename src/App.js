import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import './App.css';
import {Route,BrowserRouter as Router } from 'react-router-dom';
import Pocetna from './components/Pocetna.js';
import Opcenito from './components/Opcenito.js';
import Treca from './components/Treca.js';
import Cetvrta from './components/Cetvrta.js';
import Peta from './components/Peta.js';
import Sesta from './components/Sesta.js';
function App() {
  return (
  <div>
    <Header></Header>

      <Router>
        <Route exact path="/"component={Pocetna}></Route>
        <Route exact path="/opcenito"component={Opcenito}></Route>
        <Route exact path="/treca"component={Treca}></Route>
        <Route exact path="/cetvrta"component={Cetvrta}></Route>
        <Route exact path="/peta"component={Peta}></Route>
        <Route exact path="/sesta"component={Sesta}></Route>
      </Router>
      
      <Footer></Footer>
    </div>
    
  );
}

export default App;
