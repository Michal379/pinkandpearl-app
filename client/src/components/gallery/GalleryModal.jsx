import React, { useState } from 'react';
import Modal from 'react-modal';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Gallery.css';

const GalleryModal = ({ isOpen, onRequestClose, images }) => {
    console.log('Images:', images); 
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: currentSlide,
    afterChange: (current) => setCurrentSlide(current),
  };

  console.log('Current Slide:', currentSlide);


  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose} // This will close the modal when X is clicked
    className="gallery-modal"
    overlayClassName="gallery-modal-overlay"
  >
    <div className="gallery-modal-container">
      <button className="gallery-modal-close" onClick={onRequestClose}>
        X
      </button>
      <Slider {...settings}>
        {images.map((imageUrl, index) => (
          <div key={index} className="gallery-modal-slide">
            <img src={imageUrl} alt={`Gallery Image ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  </Modal>
  );
};

export default GalleryModal;
