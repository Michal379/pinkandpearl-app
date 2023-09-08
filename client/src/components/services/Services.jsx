import React from 'react';
import './Services.css';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFemale, faMale, faHandPaper } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  const backgroundImageUrl = "https://pinkandpearlwaxingbar.com/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-08-at-2.13.34-PM-2.jpeg";

  return (
    <div className="background-image" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
      <div className="services-container">
        <div className="row">
          <div className="col-md-9">
            <div className="row">
              {/* Card 1: Women Waxing */}
              <div className="col-md-6">
                <Card className="mb-4">
                  <Card.Body>
                    <FontAwesomeIcon icon={faFemale} size="3x" className="pink-icon" />
                    <Card.Title>WOMEN WAXING</Card.Title>
                    <Card.Text>Smooth and Confident - Wax with Pink & Pearl</Card.Text>
                  </Card.Body>
                </Card>
              </div>

              {/* Card 2: Manicure */}
              <div className="col-md-6">
                <Card className="mb-4">
                  <Card.Body>
                    <FontAwesomeIcon icon={faHandPaper} size="3x" className="pink-icon" />
                    <Card.Title>MANICURE</Card.Title>
                    <Card.Text>Polish Your Perfection</Card.Text>
                  </Card.Body>
                </Card>
              </div>

              {/* Card 3: Men Waxing */}
              <div className="col-md-6">
                <Card className="mb-4">
                  <Card.Body>
                    <FontAwesomeIcon icon={faMale} size="3x" className="pink-icon" />
                    <Card.Title>MEN WAXING</Card.Title>
                    <Card.Text>Unleash Your Confidence</Card.Text>
                  </Card.Body>
                </Card>
              </div>

              {/* Card 4: Pedicure */}
              <div className="col-md-6">
                <Card className="mb-4">
                  <Card.Body>
                    <Card.Title>PEDICURE</Card.Title>
                    <Card.Text>Step into Bliss</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
