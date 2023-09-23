import React from 'react';
import image from '../images/back1.jpeg';

const Offer = () => {
  const containerStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed', // Optional, makes the background fixed
    minHeight: '60vh', // Optional, ensures the background covers the entire viewport height
    // You can add more styles as needed
  };

  return (
    <div style={containerStyle}>
      <div>
        {/* Content for your Offer component */}
        Our Special Offer
        <h1 style={{
  textAlign: 'center',
  position: 'relative',
  lineHeight: '1.5',
}}>
  YOU OWE YOURSELF THIS MOMENT
  <span style={{
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '30%', // Adjust the width to control the underline length
    borderBottom: '3px solid #000', // Use a 3px solid black underline
  }}></span>
</h1>
 
<button>MAKE AN APPOINTMENT</button>
      </div>
    </div>
  );
};

export default Offer;
