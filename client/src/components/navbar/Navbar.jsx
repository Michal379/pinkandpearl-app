import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Navbar.css';
import logoimage from '../../images/logoimage.png';

const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        <img src={logoimage} alt="Logo" />
      </div>
      <ul>
      <li><Link to="/" className="nav-link">Home</Link></li>
  <li><Link to="/about" className="nav-link">About Us</Link></li>
  <li><Link to="/services" className="nav-link">Services</Link></li>
  <li><Link to="/gallery" className="nav-link">Gallery</Link></li>
  <li><Link to="/contact" className="nav-link">Contact Us</Link></li>
        <li className="book-now-button">
          <button>BOOK NOW</button>
        </li>
        <li className="social-icons">
          <a href="https://www.instagram.com/pinkandpearlwaxingbar/"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="https://www.facebook.com/profile.php?id=100085764224011"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="https://twitter.com/Pink_PearlBar"><FontAwesomeIcon icon={faTwitter} /></a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
