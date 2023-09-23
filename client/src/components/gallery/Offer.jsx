import React from 'react';
import image from '../images/back1.jpeg';

const Offer = () => {
  const containerStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    minHeight: '60vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center', // Center both horizontally and vertically
    textAlign: 'center', // Center text within the container
  };

  const h1Style = {
    position: 'relative',
    lineHeight: '1.5',
  };

  const underlineStyle = {
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '30%',
    borderBottom: '3px solid #000',
  };

  return (
    <div style={containerStyle}>
      <div>
        Our Special Offer
        <h1 style={h1Style}>
          YOU OWE YOURSELF THIS MOMENT
          <span style={underlineStyle}></span>
        </h1>
        <button>MAKE AN APPOINTMENT</button>
      </div>
    </div>
  );
};

export default Offer;
