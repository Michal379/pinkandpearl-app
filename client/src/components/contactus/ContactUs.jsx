import React, { useState } from 'react';
import image from '../images/leave2.jpg';
import './ContactUs.css'; 
import Map from './map';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    phoneNumber: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your code to handle form submission (e.g., sending data to a server)
    console.log(formData); // You can remove this line once you implement the submission logic
  };

  // Style object to set the background image
  const backgroundStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  // Style for the words on the right of the form
  const wordsStyle = {
    color: 'white',
    marginLeft: '50px', // Adjust the value for the desired spacing
    marginBottom: '10px', // Adjust the value for vertical spacing
  };

   // Style for the form elements to increase their size
   const formElementStyle = {
    fontSize: '18px', // Adjust the font size as needed
    padding: '25px', // Adjust the padding as needed
  };

return (
    <>
    <div className="contact-us" style={backgroundStyle}>
      <div className="contact-card">
        <h2>CONTACT US TODAY</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <i className="fas fa-user"></i> {/* Font Awesome user icon */}
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="single-line-input"
              style={formElementStyle}
              required
            />
          </div>

          <div className="form-group">
            <i className="fas fa-envelope"></i> {/* Font Awesome envelope icon */}
            <input
              type="email"
              id="emailAddress"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleChange}
              placeholder="Email Address"
              className="single-line-input"
              style={formElementStyle}
              required
            />
          </div>

          <div className="form-group">
            <i className="fas fa-phone"></i> {/* Font Awesome phone icon */}
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
              className="single-line-input"
              style={formElementStyle}
              required
            />
          </div>

          <div className="form-group">
            <i className="fas fa-pen"></i> {/* Font Awesome comment icon */}
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="How can we help you? Feel free to get in touch."
              className="single-line-input"
              style={{ ...formElementStyle, height: '150px' }} // Increase the height of the textarea
              required
            />
          </div>

          <button type="submit" className="get-in-touch-button">
            <i className='fas fa-comment'></i>
            GET IN TOUCH
          </button>
        </form>
      </div> 

      <div className='contact-info' style={wordsStyle}>
        <h5 style={wordsStyle}>Contact Us</h5>
        <h2 style={wordsStyle}>HAVE QUESTIONS?</h2>
        <h2 style={wordsStyle}>GET IN TOUCH!</h2>
        <p>        
        <p style={wordsStyle}> <i className="fas fa-map-marker-alt"></i>  Along Thika road at Nairoview Plaza Kihunguro next to Shell</p>
        <p style={wordsStyle}>Petrol station a stage just past bypass but before u get to Ruiru</p>
        <p style={wordsStyle}>town</p>
        </p>
        <p>
        <p style={wordsStyle}> <i className="fas fa-map-marker-alt"></i>  Along Kenyatta Avenue at 680 Hotel building, second floor RM 210,</p>
        <p style={wordsStyle}> 680 hotel building is directly opposite I&M bank building</p>
        </p>
        <a href="mailto:info@pinkandpearlwaxingbar.com" style={wordsStyle}></a>
        <p style={wordsStyle}>Call/text/Whatsapp <strong>0712814050/0712570294</strong></p>
        <div className="social-icons">
          <a href="https://www.instagram.com/pinkandpearlwaxingbar/">
            <i className="fab fa-instagram"></i> {/* Font Awesome Instagram icon */}
          </a>
          <a href="https://www.facebook.com/profile.php?id=100085764224011">
            <i className="fab fa-facebook"></i> {/* Font Awesome Facebook icon */}
          </a>
          <a href="https://twitter.com/Pink_PearlBar">
            <i className="fab fa-twitter"></i> {/* Font Awesome Twitter icon */}
          </a>
        </div>
      </div>
    </div>
    <Map />
  </>
  );
};

export default ContactUs;
