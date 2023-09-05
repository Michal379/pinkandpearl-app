import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import AboutUs from '../aboutus/AboutUs';
import Services from '../services/Services';
import Gallery from '../gallery/Gallery';

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    "https://cdn.standardmedia.co.ke/images/wysiwyg/images/LvZBSf7NyEr7eYcfyjUmX3Yd3h1XhJEyTbiuyYBD.jpg",  
    "https://pinkandpearlwaxingbar.com/wp-content/uploads/2023/02/gallery-02.jpg",
    "https://pinkandpearlwaxingbar.com/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-08-at-2.13.34-PM-2.jpeg",    
  ];

  // Define your captions here
  const captions = [
    "Working Hours Banner\\nQuality Waxing Services",
    "Gallery\\nExplore Our Portfolio",
    "Visit Us Today\\nBook an Appointment"
  ];

  const capitalCaptions = captions.map((caption) => caption.split('\\n')[0]);
  const smallCaptions = captions.map((caption) => caption.split('\\n')[1]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="home-container">
      <div id="carouselExampleCaptions" className="carousel slide carousel-container">
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
              <img
                src={image}
                className="d-block w-100"
                alt={`Slide ${index + 1}`}
                style={{ maxWidth: '100%', maxHeight: '80vh', objectFit: 'cover' }}
              />
              <div className="carousel-caption-top">
                <h3 className="caption-text">{capitalCaptions[index]}</h3>
                <p className="caption-text-small">{smallCaptions[index]}</p>
              </div>
            </div>
          ))}
        </div>
        {/* ... (carousel controls) ... */}
      </div>
      
      {/* Render the AboutUs component */}
      <AboutUs />
      <Services />
      <Gallery />
    </div>
  );
};

export default Home;
