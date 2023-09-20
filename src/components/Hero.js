import React from 'react';
import './Hero.css';


function Hero() {
  return (
    <header className='Hero-header'>
      <div className='Hero-content'>
        <img src='/photo.jpg' alt='Pedro Ventura' className='Hero-photo' />
        <div className='Hero-text'>
          <h1>Pedro Ventura</h1>
          <p>Python Developer</p> {/* Replace with your area of interest */}
        </div>
      </div>
    </header>
  );
}

export default Hero;