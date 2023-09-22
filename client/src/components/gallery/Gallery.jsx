import React from 'react';
import Card from 'react-bootstrap/Card';
import './Gallery.css'

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

  const imagesPerRow = 4;

  const rows = [];
  for (let i = 0; i < imageUrls.length; i += imagesPerRow) {
    const rowImages = imageUrls.slice(i, i + imagesPerRow);
    rows.push(
      <div className="row" key={i}>
        {rowImages.map((imageUrl, index) => (
          <div className="col-md-3" key={index}>
            <Card>
              <Card.Img
                src={imageUrl}
                alt={`Gallery Image ${i + index + 1}`}
                className="gallery-image img-fluid" // Add the 'img-fluid' class for responsive images
              />
            </Card>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-12">
          {rows}
        </div>
      </div>
    </div>
  );
};

export default Gallery;