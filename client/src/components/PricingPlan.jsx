import React from 'react';

const PricingPlan = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    paddingTop: '20px', // Add padding to center vertically
  };

  const sectionStyle = {
    marginBottom: '40px',
  };

  const headingStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333', // Dark gray color
  };

  const priceStyle = {
    fontSize: '18px',
    color: 'green', // Green color
  };

  return (
    <div style={containerStyle}>
      <h4 style={headingStyle}>Pricing Plan</h4>
      <h2 style={{ fontSize: '36px', color: '#ff6600' }}>SERVICES & PRICING</h2>
      <div style={sectionStyle}>
        <div>
          <h4 style={headingStyle}>INTIMATE WAXING</h4>
          <h5 style={priceStyle}>FULL BRAZILIAN ......................................................... KSH 700</h5>
          <h5 style={priceStyle}>UNDER ARMS ............................................................ KSH 350</h5>
          {/* Add similar styles for other pricing items */}
        </div>
      </div>
      <div style={sectionStyle}>
        <div>
          <h4 style={headingStyle}>VAJACIAL</h4>
          <h5 style={priceStyle}>FULL VAJACIAL........................................KSH 1000</h5>
          {/* Add similar styles for other pricing items */}
        </div>
      </div>
      <div style={sectionStyle}>
        <div>
          <h4 style={headingStyle}>BODY WAXING</h4>
          <h5 style={priceStyle}>FULL BODY WAXING........................................KSH 4800</h5>
          {/* Add similar styles for other pricing items */}
        </div>
      </div>
      <div style={sectionStyle}>
        <div>
          <h4 style={headingStyle}>MANICURE</h4>
          <h5 style={priceStyle}>CLASSIC MANICURE .......................................... KSH 300</h5>
          {/* Add similar styles for other pricing items */}
        </div>
      </div>
      <div style={sectionStyle}>
        <div>
          <h4 style={headingStyle}>PEDICURE</h4>
          <h5 style={priceStyle}>CLASSIC PEDICURE...............................KSH 400</h5>
          {/* Add similar styles for other pricing items */}
        </div>
      </div>
    </div>
  );
}

export default PricingPlan;
