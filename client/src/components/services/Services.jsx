import React from 'react';
import './Services.css';
import Card from 'react-bootstrap/Card';

const Services = () => {
  const backgroundImageUrl = "https://saspacity.com/storage/images/styles/2020/07/01/image_1593619969373.jpg";

  return (
    <div className="background-image" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
      <div className="services-container">
        <h1>Services</h1>
        <div className="row">
          {/* Card 1: Women Waxing */}
          <div className="col-md-3">
            <Card>
              <Card.Body>
                <Card.Title>WOMEN WAXING</Card.Title>
                <Card.Text>Smooth and Confident - Wax with Pink & Pearl</Card.Text>
              </Card.Body>
            </Card>
          </div>

          {/* Card 2: Manicure */}
          <div className="col-md-3">
            <Card>
              <Card.Body>
                <Card.Title>MANICURE</Card.Title>
                <Card.Text>Polish Your Perfection</Card.Text>
              </Card.Body>
            </Card>
          </div>

          {/* Card 3: Men Waxing */}
          <div className="col-md-3">
            <Card>
              <Card.Body>
                <Card.Title>MEN WAXING</Card.Title>
                <Card.Text>Unleash Your Confidence</Card.Text>
              </Card.Body>
            </Card>
          </div>

          {/* Card 4: Pedicure */}
          <div className="col-md-3">
            <Card>
              <Card.Body>
                <Card.Title>PEDICURE</Card.Title>
                <Card.Text>Step into Bliss</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
