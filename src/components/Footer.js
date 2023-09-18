import React from 'react';
import './Footer.css'; // You can create a separate CSS file for styling the footer if needed.

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Add your footer content here */}
        <p>&copy; {new Date().getFullYear()} Hvent. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;