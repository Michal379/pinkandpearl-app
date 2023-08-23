import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Navbar.css';
import logoimage from '../../images/logoimage.png'; // Import the logo image with the correct variable name

const Navbar = () => {
  return (
    <nav>
       <div className='logo'>
        <img src={logoimage} alt="Logo" />
      </div>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/gallery">Gallery</a></li>
        <li><a href="/contact">Contact Us</a></li>
        <li className="book-now-button">
          <button>BOOK NOW</button>
        </li>
        <li className="social-icons">
          <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
