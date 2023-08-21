import React from 'react';
import { Link } from 'react-router-dom';
import logoimage from '../../images/pink-pearl(1).png' 

const Navbar = () => {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    background: 'rgb(238, 210, 210)',
    color: '#fff',
    padding: '1rem 0',
  };

  const linkStyle = {
    color: 'black',
    textDecoration: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '5px',
  };

  const donateButtonStyle = {
    backgroundColor: 'rgb(225, 178, 23)',
    color: 'black',
    padding: '0.75rem 1.5rem',
    borderRadius: '10px',
    fontSize: '1.2rem',
  };

  return (
    <nav style={navStyle}>
       {/* Logo */}
       <div>
        <img src={logoimage} alt="Logo" style={{ width: '200px' }} />
      </div>
      <ul style={{ listStyleType: 'none', display: 'flex', padding: 0 }}>
        <li className="nav-item">
          <Link to="/" style={linkStyle}>Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about us" style={linkStyle}>About us</Link>
        </li>
        <li className="nav-item">
          <Link to="/services" style={linkStyle}>Services</Link>
        </li>
        <li className="nav-item">
          <Link to="/gallery" style={linkStyle}>Gallery</Link>
        </li>        
        <li className="nav-item">
          <Link to="/contact-us" style={linkStyle}>Contact Us</Link>
        </li>
      </ul>
      <Link to="/contact-us" style={donateButtonStyle}>BOOK NOW</Link>
    </nav>
  );
}

export default Navbar;