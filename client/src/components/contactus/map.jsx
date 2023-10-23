import React, { useState } from 'react';
import Updates from '../Updates';

const Map = () => {
  const [isZoomedIn, setIsZoomedIn] = useState(false);

  const handleZoomIn = () => {
    setIsZoomedIn(true);
  };

  const handleZoomOut = () => {
    setIsZoomedIn(false);
  };

  const mapContainerStyle = {
    display: 'flex',
    justifyContent: 'center', // Center maps horizontally
    alignItems: 'center', 
    height: '70vh', // Make the container full height of the viewport
    textAlign: 'center',
    gap: '20px'
  };

  const mapStyle = {
    width: isZoomedIn ? '700px' : '600px',
    height: isZoomedIn ? '525px' : '450px',
    border: '0',
  }; 

  return (
    <>
    <div style={mapContainerStyle}>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15955.257591077761!2d36.8204514!3d-1.2853467!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f117173d9a8f7%3A0x80601aef4f20c9ee!2sPink%20and%20Pearl%20Waxing%20%26%20Nail%20Bar!5e0!3m2!1sen!2ske!4v1695418454957!5m2!1sen!2ske"
          style={mapStyle}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div>
          <p>Along Kenyatta Avenue At 680 Hotel Building, Second Floor RM 210, 680</p>
          <p>Hotel Building Is Directly Opposite I&M Bank Building</p>
        </div>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15955.997901594314!2d36.9577758!3d-1.1608319!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f41fb9c1d4d4f%3A0x662a64c5069a8363!2sNairoview%20Plaza!5e0!3m2!1sen!2ske!4v1696357443509!5m2!1sen!2ske"
          style={mapStyle}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div>
          <p>Along Thika Road At Nairoview Plaza Kihunguro Next To Shell Petrol</p>
          <p>Station A Stage Just Past Bypass But Before U Get To Ruiru Town</p>
        </div>
      </div>
    </div>
    <Updates />
    </>

  );
};

export default Map;
