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

  return (
    <>
    <div className="contact-us" style={backgroundStyle}>
      <div className="card">
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
              required
            />
          </div>
          <div>
          <button type="submit" className="get-in-touch-button">
            <i className='fas fa-comment'></i>
              GET IN TOUCH
          </button>
          </div>
        </form>
      </div> 
      <div className='contact-info'>
        <h5>Contact Us</h5>
        <h2>HAVE QUESTIONS?</h2>
        <h2>GET IN TOUCH!</h2>
        <p>Along Thika road at Nairoview Plaza Kihunguro next to Shell Petrol station a stage just past bypass but before u get to Ruiru town</p>
        <p>Along Kenyatta Avenue at 680 Hotel building, second floor RM 210, 680 hotel building is directly opposite I&M bank building</p>
        <a href="mailto:info@pinkandpearlwaxingbar.com"></a>
        <p>Call/text/Whatsapp 0712814050/0712570294</p>
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
