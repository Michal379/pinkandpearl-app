import React from 'react';

const PricingPlan = () => {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        paddingTop: '20px', // Add padding to center vertically
      }; 

      const redprice = {
        color: 'red',
      }
      
      const price = {
        color: 'red',
      }
      
    
  return (
    <div style={containerStyle}>
     <h4 style={{ fontFamily: "'Mr De Haviland', cursive", letterSpacing: '0.95px', color: '#ff5c8a' }}>Pricing Plan</h4>
      <h2>SERVICES & PRICING</h2>
        <div>
          <h4>INTIMATE WAXING</h4>
          <h5><span class="price">FULL BRAZILIAN</span> ......................................................... <span class= 'red-price'>KSH 700</span></h5>
          <h5><span class="price"> UNDER ARMS</span> ............................................................ <span class='red-price'>KSH 350</span></h5>
          <h5><span class="price"></span> FULL BRAZILIAN + UNDER ARMS .......................... <span class='red-price'>KSH 950</span></h5>
          <h5><span class="price">MAZNILIAN </span>.............................................................. <span class='red-price'>KSH 1500</span></h5>
          <h5><span class="price">MANZILIAN + UNDER ARMS</span> .................................. <span class='red-price'>KSH 2000</span></h5>
        <div>
        <div>
          <h4>VAJACIAL</h4>
          <h5>FULL VAJACIAL........................................KSH 1000</h5>
          <h5>FULL VAJACIAL + BRAZILIAN + UNDER ARMS......................KSH 1900</h5>
          <h5>FULL VAJACIAL + BRAZILIAN WAXING.........................KSH 1650</h5>
          <h5>MINI VAJACIAL + BRAZILIAN WAXING...........................KSH 1200</h5>
          <h5>MINI VAJACIAL + BRAZILIAN + UNDER ARMS..............................KSH 1400</h5>
        </div>
      </div>
      <div>
        <div>
          <h4>BODY WAXING</h4>
          <h5>FULL BODY WAXING........................................KSH 4800</h5>
          <h5>FULL LEG (THIGH TO TOE)........................................KSH 1400</h5>
          <h5>HALF LEG (KNEE TO TOE)......................KSH 900</h5>
          <h5>FULL HAND (FROM SHOULDER).........................KSH 900</h5>
          <h5>HALF HAND (FROM SHOULDER)...........................KSH 500</h5>
          <h5>FACE WAXING..............................KSH 300</h5>
        </div>
      </div>
        <div>
          <h4>MANICURE</h4>
          <h5>CLASSIC MANICURE .......................................... KSH 300</h5>
          <h5>PLAIN GEL NATURAL NAILS .............................. KSH 400</h5>
          <h5>TIPS/STICKONS + GEL ....................................... KSH 500</h5>
          <h5>MAINCURE + GEL .............................................. KSH 700</h5>
          <h5>OVERLAY + STICK ONS ..................................... KSH 950</h5>
          <h5>OVERLAYS ON NATURAL NAILS .......................... KSH 700</h5>
        </div>
      </div>    
      <div>
        <div>
          <h4>PEDICURE</h4>
          <h5>CLASSIC PEDICURE...............................KSH 400</h5>
          <h5>PEDICURE + NORMAL POLISH...............................KSH 500</h5>
          <h5>PEDICURE + GEL POLISH.............................KSH 750</h5>
          <h5>PLAIN POLISH ON TOES......................................KSH 100</h5>
        </div>
      </div>     
    </div>
  );
}

export default PricingPlan;
