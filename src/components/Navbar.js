import React, { useState } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'; // Import ScrollLink and scroll
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
    toggleMenu(); // Close the menu after clicking the logo
  };

  // Event listener to show/hide the invisible navbar
  const handleMouseMovement = (e) => {
    const mouseY = e.clientY;
    const threshold = 20;
  
    const navbar = document.querySelector('.navbar');
    if (mouseY < threshold) {
      navbar.classList.add('active');
    } else {
      navbar.classList.remove('active');
    }
  };

  // Attach the event listener when the component mounts
  React.useEffect(() => {
    document.addEventListener('mousemove', handleMouseMovement);
    return () => {
      document.removeEventListener('mousemove', handleMouseMovement);
    };
  }, []);

  return (
    <div className="invisible-navbar">
    <nav className={`navbar ${isOpen ? 'active' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo" onClick={scrollToTop}>
          Pedro Ventura
        </div>
        <div className={`nav-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <ScrollLink
              to="hero"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              className="nav-button"
              onClick={toggleMenu} // Close the menu after clicking a link
            >
              Home
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              offset={0}
              className="nav-button"
              onClick={toggleMenu} // Close the menu after clicking a link
            >
              About
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink
              to="skills"
              smooth={true}
              duration={500}
              spy={true}
              offset={0}
              className="nav-button"
              onClick={toggleMenu} // Close the menu after clicking a link
            >
              Skills
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink
              to="portfolio"
              smooth={true}
              duration={500}
              spy={true}
              offset={0}
              className="nav-button"
              onClick={toggleMenu} // Close the menu after clicking a link
            >
              Portfolio
            </ScrollLink>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;

