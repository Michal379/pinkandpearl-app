import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Navbar.css';
import logoimage from '../../images/logoimage.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logoimage} alt="Logo" style={{ maxWidth: '100px', height: 'auto' }} />
        </Link>

        {/* Navbar Toggler (Hamburger Icon) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">HOME</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">ABOUT US</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">SERVICES</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gallery">GALLERY</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">CONTACT US</Link>
            </li>
            <li className="nav-item book-now-button">
              <button className="btn btn-primary">BOOK NOW</button>
            </li>
            <li className="nav-item social-icons">
              <a href="https://www.instagram.com/pinkandpearlwaxingbar/" className="nav-link">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100085764224011" className="nav-link">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://twitter.com/Pink_PearlBar" className="nav-link">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
