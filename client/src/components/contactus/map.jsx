import React, { useState } from 'react';

const Map = () => {
  const [mapWidth, setMapWidth] = useState(600);
  const [mapHeight, setMapHeight] = useState(450);
  const [isZoomedIn, setIsZoomedIn] = useState(false);

  const handleZoomIn = () => {
    setMapWidth(700); // Set the width to the enlarged size
    setMapHeight(525); // Set the height to the enlarged size
    setIsZoomedIn(true);
  };

  const handleZoomOut = () => {
    if (isZoomedIn) {
      setMapWidth(600); // Set the width back to the original size
      setMapHeight(450); // Set the height back to the original size
      setIsZoomedIn(false);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15955.257591077761!2d36.8204514!3d-1.2853467!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f117173d9a8f7%3A0x80601aef4f20c9ee!2sPink%20and%20Pearl%20Waxing%20%26%20Nail%20Bar!5e0!3m2!1sen!2ske!4v1695418454957!5m2!1sen!2ske"
        width={mapWidth}
        height={mapHeight}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <p>Along Kenyatta Avenue At 680 Hotel Building, Second Floor RM 210, 680</p>
      <p>Hotel Building Is Directly Opposite I&M Bank Building</p>
    </div>
  );
};

export default Map;
