import React from 'react';
import backgroundImage from './images/Testimonials.jpeg';

const Testimonials = () => {
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    minHeight: '80vh',
    display: 'flex',
    flexDirection: 'column', // Ensure child elements stack vertically
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
  };

  const h4Style = {
    marginBottom: '10px', // Add margin to separate the h4 and h2
  };

  return (
    <div style={containerStyle}>
      <h4 style={h4Style}>Testimonials</h4>
      <h2>WHAT PEOPLE SAY ABOUT US</h2>
    </div>
  );
};

export default Testimonials;
