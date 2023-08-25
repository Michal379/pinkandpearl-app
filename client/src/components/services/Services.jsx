import React from 'react';
import './Services.css';

const Services = () => {
  const backgroundImageUrl = "https://saspacity.com/storage/images/styles/2020/07/01/image_1593619969373.jpg";

  return (
    <div className="background-image" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
      <div className="services-container">
        <h1>Services</h1>
        {/* Add your services content here */}
      </div>
    </div>
  );
};

export default Services;
