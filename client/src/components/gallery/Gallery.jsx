import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import './Gallery.css';
// import GalleryModal from './GalleryModal';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


const Gallery = () => {
  const imageUrls = [
    'https://pinkandpearlwaxingbar.com/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-08-at-2.13.33-PM-1.jpeg',
    'https://pinkandpearlwaxingbar.com/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-08-at-2.13.35-PM-3.jpeg',
    'https://pinkandpearlwaxingbar.com/wp-content/uploads/2023/02/gallery-12.jpg',
    'https://pinkandpearlwaxingbar.com/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-08-at-2.13.33-PM.jpeg',
    'https://pinkandpearlwaxingbar.com/wp-content/uploads/2023/02/gallery-01.jpg',
    'https://pinkandpearlwaxingbar.com/wp-content/uploads/2023/02/gallery-02.jpg',
    'https://pinkandpearlwaxingbar.com/wp-content/uploads/2023/02/gallery-03.jpg',
    'https://pinkandpearlwaxingbar.com/wp-content/uploads/2023/02/gallery-04.jpg',
    'https://pinkandpearlwaxingbar.com/wp-content/uploads/2023/02/gallery-05.jpg',
    'https://pinkandpearlwaxingbar.com/wp-content/uploads/2023/02/gallery-07.jpg',
    'https://pinkandpearlwaxingbar.com/wp-content/uploads/2023/02/gallery-08.jpg',
    'https://pinkandpearlwaxingbar.com/wp-content/uploads/2023/02/gallery-09.jpg',
    'https://pinkandpearlwaxingbar.com/wp-content/uploads/2023/02/gallery-06.jpg',
    'https://pinkandpearlwaxingbar.com/wp-content/uploads/2023/02/gallery-10.jpg',
    'https://pinkandpearlwaxingbar.com/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-08-at-2.13.36-PM.jpeg',
    'https://pinkandpearlwaxingbar.com/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-08-at-2.13.33-PM-2.jpeg',
    'https://pinkandpearlwaxingbar.com/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-08-at-2.13.34-PM-1.jpeg',
    'https://pinkandpearlwaxingbar.com/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-08-at-2.13.34-PM-2.jpeg',
    'https://pinkandpearlwaxingbar.com/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-08-at-2.13.34-PM.jpeg',
    'https://pinkandpearlwaxingbar.com/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-08-at-2.13.35-PM.jpeg',   
  ];
  
  const [showModal, setShowModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openModal = (index) => {
    setShowModal(true);
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImageIndex(null);
  };

  const navigateImage = (step) => {
    const newIndex = selectedImageIndex + step;
    if (newIndex >= 0 && newIndex < imageUrls.length) {
      setSelectedImageIndex(newIndex);
    }
  };

  return (
    <div className="container">
      <div className="row">
        {imageUrls.map((imageUrl, index) => (
          <div className="col-md-3" key={index}>
            <Card onClick={() => openModal(index)}>
              <Card.Img
                src={imageUrl}
                alt={`Gallery Image ${index + 1}`}
                className="gallery-image img-fluid"
              />
            </Card>
          </div>
        ))}
      </div>

      <Modal show={showModal} onHide={closeModal} dialogClassName="modal-lg">
        <Modal.Body>
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <img
              src={imageUrls[selectedImageIndex]}
              alt={`Gallery Image ${selectedImageIndex + 1}`}
              className="modal-image"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          {selectedImageIndex > 0 && (
            <span
              className="modal-arrow-left"
              onClick={() => navigateImage(-1)}
            >
              &lt;
            </span>
          )}
          {selectedImageIndex < imageUrls.length - 1 && (
            <span
              className="modal-arrow-right"
              onClick={() => navigateImage(1)}
            >
              &gt;
            </span>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Gallery;