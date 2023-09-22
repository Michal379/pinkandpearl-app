import React, { useState } from 'react';

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

  return (
    <div className="contact-us">
      <h2>CONTACT US TODAY</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName"></label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="emailAddress"></label>
          <input
            type="email"
            id="emailAddress"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleChange}
            placeholder="Enter Address"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber"></label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Phone Number"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message"></label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="How can we help you?Feel free to get in touch."
            required
          />
        </div>

        <button type="submit" className="get-in-touch-button">
          GET IN TOUCH
        </button>
      </form>8
    </div>
  );
};

export default ContactUs;
