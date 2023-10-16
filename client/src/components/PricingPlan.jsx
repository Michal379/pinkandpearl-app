import React from 'react';

const PricingPlan = () => {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    paddingTop: '20px',
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

  const leftColumnStyle = {
    flex: 2, // Make the left column flexible
  };

  const rightColumnStyle = {
    flex: 1, // Make the right column flexible
  };


  return (
    <>
    <div style={titleStyle}><h4>Pricing Plan</h4>
    <h2 style={{ color: '#ff5c8a' }}>SERVICES & PRICING</h2>
    </div>
    <div style={containerStyle}>
    <div style={leftColumnStyle}>       
      <div style={serviceGroupStyle}>
        <h4>INTIMATE WAXING</h4>
        <h5>
          FULL BRAZILIAN{'.................................................................................. '}
          <span style={redPriceStyle}>KSH 700</span>
        </h5>
        <h5>
          UNDER ARMS{'........................................................................................ '}
          <span style={redPriceStyle}>KSH 350</span>
        </h5>
        <h5>
          FULL BRAZILIAN + UNDER ARMS{'....................................................... '}
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
          HALF LEG (KNEE TO TOE)...................................................................... <span style={redPriceStyle}>KSH 900</span>
        </h5>
        <h5>
          FULL HAND (FROM SHOULDER)........................................................... <span style={redPriceStyle}>KSH 900</span>
        </h5>
        <h5>
          HALF HAND (FROM SHOULDER).......................................................... <span style={redPriceStyle}>KSH 500</span>
        </h5>
        <h5>FACE WAXING......................................................................................... <span style={redPriceStyle}>KSH 300</span></h5>
      </div>
      </div>
      <div style={rightColumnStyle}>
      <div style={serviceGroupStyle}>
        <h4>MANICURE</h4>
        <h5>
          CLASSIC MANICURE.................................................................... <span style={redPriceStyle}>KSH 300</span>
        </h5>
        <h5>
          PLAIN GEL NATURAL NAILS....................................................... <span style={redPriceStyle}>KSH 400</span>
        </h5>
        <h5>
          TIPS/STICKONS + GEL.................................................................. <span style={redPriceStyle}>KSH 500</span>
        </h5>
        <h5>
          MAINCURE + GEL...................................................................... <span style={redPriceStyle}>KSH 700</span>
        </h5>
        <h5>
          OVERLAY + STICK ONS............................................................ <span style={redPriceStyle}>KSH 950</span>
        </h5>
        <h5>
          OVERLAYS ON NATURAL NAILS.............................................. <span style={redPriceStyle}>KSH 700</span>
        </h5>
      </div>
      <div style={serviceGroupStyle}>
        <h4>PEDICURE</h4>
        <h5>
          CLASSIC PEDICURE................................................................... <span style={redPriceStyle}>KSH 400</span>
        </h5>
        <h5>
          PEDICURE + NORMAL POLISH................................................. <span style={redPriceStyle}>KSH 500</span>
        </h5>
        <h5>
          PEDICURE + GEL POLISH............................................................<span style={redPriceStyle}>KSH 750</span>
        </h5>
        <h5>
          PLAIN POLISH ON TOES............................................................. <span style={redPriceStyle}>KSH 100</span>
        </h5>
      </div>
      </div>
    </div>
    </>
  );
}

export default PricingPlan;
