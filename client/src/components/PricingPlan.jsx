import React from 'react';

const PricingPlan = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column', // Stack elements vertically on smaller screens
    alignItems: 'center',
    textAlign: 'center',
    paddingTop: '20px',
    padding: '10px', // Add padding for better spacing on smaller screens
  };

  const responsiveColumnContainerStyle = {
    display: 'flex',
    flexDirection: 'column', // Stack columns vertically on smaller screens
    flex: 1,
    padding: '10px', // Add padding for better spacing on smaller screens
  };

  const sectionTitleStyle = {
    fontFamily: "'Mr De Haviland', cursive",
    letterSpacing: '0.95px',
    color: '#ff5c8a',
  };

  const redPriceStyle = {
    color: '#ff5c8a',

  }; 
  
  const serviceGroupStyle = {
    flex: 1, 
  };

  const titleStyle={
    textAlign: 'center'
  }

  const columnContainerStyle = {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between', // Create space between columns
  };

  const leftColumnStyle = {
    flex: 2, // Make the left column flexible
    padding: '10px'
  };

  const rightColumnStyle = {
    flex: 1, // Make the right column flexible
    padding: '10px'
  };

   // Media query for screens with a max-width of 768px (adjust as needed)
   const mediaQueryStyles = {
    '@media (max-width: 768px)': {
      responsiveContainerStyle: {
        padding: '5px', // Further reduce padding for small screens
      },
      responsiveColumnContainerStyle: {
        padding: '5px',
      },
      responsiveLeftColumnStyle: {
        flex: 'unset', // Reset flex property for small screens
      },
      responsiveRightColumnStyle: {
        flex: 'unset', // Reset flex property for small screens
      },
    },
  };


  return (
    <>
    <div style={titleStyle}><h4>Pricing Plan</h4>
    <h2 style={{ color: '#ff5c8a' }}>SERVICES & PRICING</h2>
    </div>
    <div style={{ ...containerStyle, ...mediaQueryStyles.responsiveContainerStyle }}>
        <div style={{ ...responsiveColumnContainerStyle, ...mediaQueryStyles.responsiveColumnContainerStyle }}>
    <div style={leftColumnStyle}>       
      <div style={serviceGroupStyle}>
        <h4>INTIMATE WAXING</h4>
        <h5>
          FULL BRAZILIAN{'....................................................................................... '}
          <span style={redPriceStyle}>KSH 700</span>
        </h5>
        <h5>
          UNDER ARMS{'............................................................................................ '}
          <span style={redPriceStyle}>KSH 350</span>
        </h5>
        <h5>
          FULL BRAZILIAN + UNDER ARMS{'........................................................... '}
          <span style={redPriceStyle}>KSH 950</span>
        </h5>
        <h5>
          MAZNILIAN{'............................................................................................. '}
          <span style={redPriceStyle}>KSH 1500</span>
        </h5>
        <h5>
          <span className="service-name">MANZILIAN + UNDER ARMS{'.................................................................. '}</span>{' '}
          <span style={redPriceStyle}>KSH 2000</span>
        </h5>
      </div>
      <div style={serviceGroupStyle}>
        <h4>VAJACIAL</h4>
        <h5>
          FULL VAJACIAL ........................................................................................<span style={redPriceStyle}>KSH 1000</span>
        </h5>
        <h5>
          FULL VAJACIAL + BRAZILIAN + UNDER ARMS.....................................{' '}
          <span style={redPriceStyle}>KSH 1900</span>
        </h5>
        <h5>
          FULL VAJACIAL + BRAZILIAN WAXING.................................................{' '}
          <span style={redPriceStyle}>KSH 1650</span>
        </h5>
        <h5>
          MINI VAJACIAL + BRAZILIAN WAXING..................................................{' '}
          <span style={redPriceStyle}>KSH 1200</span>
        </h5>
        <h5>
          MINI VAJACIAL + BRAZILIAN + UNDER ARMS......................................{' '}
          <span style={redPriceStyle}>KSH 1400</span>
        </h5>
      </div>
      <div style={serviceGroupStyle}>
        <h4>BODY WAXING</h4>
        <h5>
          FULL BODY WAXING.................................................................................<span style={redPriceStyle}>KSH 4800</span>
        </h5>
        <h5>
          FULL LEG (THIGH TO TOE)....................................................................... <span style={redPriceStyle}>KSH 1400</span>
        </h5>
        <h5>
          HALF LEG (KNEE TO TOE).......................................................................... <span style={redPriceStyle}>KSH 900</span>
        </h5>
        <h5>
          FULL HAND (FROM SHOULDER)............................................................... <span style={redPriceStyle}>KSH 900</span>
        </h5>
        <h5>
          HALF HAND (FROM SHOULDER)............................................................... <span style={redPriceStyle}>KSH 500</span>
        </h5>
        <h5>FACE WAXING.............................................................................................. <span style={redPriceStyle}>KSH 300</span></h5>
      </div>
      </div>
      <div style={rightColumnStyle}>
      <div style={serviceGroupStyle}>
        <h4>MANICURE</h4>
        <h5>
          CLASSIC MANICURE.................................................................................. <span style={redPriceStyle}>KSH 300</span>
        </h5>
        <h5>
          PLAIN GEL NATURAL NAILS..................................................................... <span style={redPriceStyle}>KSH 400</span>
        </h5>
        <h5>
          TIPS/STICKONS + GEL................................................................................ <span style={redPriceStyle}>KSH 500</span>
        </h5>
        <h5>
          MAINCURE + GEL........................................................................................ <span style={redPriceStyle}>KSH 700</span>
        </h5>
        <h5>
          OVERLAY + STICK ONS............................................................................... <span style={redPriceStyle}>KSH 950</span>
        </h5>
        <h5>
          OVERLAYS ON NATURAL NAILS............................................................... <span style={redPriceStyle}>KSH 700</span>
        </h5>
      </div>
      <div style={serviceGroupStyle}>
        <h4>PEDICURE</h4>
        <h5>
          CLASSIC PEDICURE...................................................................
          ...................... <span style={redPriceStyle}>KSH 400</span>
        </h5>
        <h5>
          PEDICURE + NORMAL POLISH..................................................................... <span style={redPriceStyle}>KSH 500</span>
        </h5>
        <h5>
          PEDICURE + GEL POLISH...............................................................................<span style={redPriceStyle}>KSH 750</span>
        </h5>
        <h5>
          PLAIN POLISH ON TOES............................................................................... <span style={redPriceStyle}>KSH 100</span>
        </h5>
      </div>
      </div>
      </div>
    </div>
    </>
  );
}

export default PricingPlan;
