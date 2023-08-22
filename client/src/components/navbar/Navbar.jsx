import React from 'react';
import { Link } from 'react-router-dom';
import logoimage from '../../images/logoimage.png';

import './Navbar.css'; // Import a CSS file for styles (create if not already present)

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo-container">
        <img src={logoimage} alt="Logo" className="logo" />
      </div>
      <ul className="nav-links">
        <li className="nav-item">
          <Link to="/" className="link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about-us" className="link">About Us</Link>
        </li>
        <li className="nav-item">
          <Link to="/services" className="link">Services</Link>
        </li>
        <li className="nav-item">
          <Link to="/gallery" className="link">Gallery</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact-us" className="link">Contact Us</Link>
        </li>
      </ul>
      <Link to="/book-now" className="book-button">BOOK NOW</Link>
    </nav>
  );
}

export default Navbar;
