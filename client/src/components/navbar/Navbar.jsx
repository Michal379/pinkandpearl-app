import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Navbar.css';
import logoimage from '../../images/logoimage.png';

const Navbar = () => {
  return (
    <nav>
      <div className='container'>
        <div className='logo'>
          <img src={logoimage} alt="Logo" />
        </div>
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/about">ABOUT US</Link></li>
          <li><Link to="/services">SERVICES</Link></li>
          <li><Link to="/gallery">GALLERY</Link></li>
          <li><Link to="/contact">CONTACT US</Link></li>
          <li className="book-now-button">
            <button>BOOK NOW</button>
          </li>
          <li className="social-icons">
            <a href="https://www.instagram.com/pinkandpearlwaxingbar/"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://www.facebook.com/profile.php?id=100085764224011"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://twitter.com/Pink_PearlBar"><FontAwesomeIcon icon={faTwitter} /></a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
