import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Hvent
        </Link>
        <div className={`nav-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-button" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/portfolio" className="nav-button" onClick={toggleMenu}>
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-button" onClick={toggleMenu}>
              About
            </Link>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
