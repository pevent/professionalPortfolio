// App.js

import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar /> 
      <div className='section' id="home">
        <Hero /> 
      </div>
      <div className='section' id="about">
        <About /> 
      </div>
      <div className='section' id="skills">
        <Skills /> 
      </div>
      <div className='section' id="portfolio">
        <Portfolio />
      </div>
      <Footer />
    </div>
  );
}

export default App;