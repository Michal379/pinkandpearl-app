import React from 'react';
import './AboutUs.css';
import image from '../../images/download.jpeg'; // Import the image

const AboutUs = () => {
  return (
    <div className="container">
      <div className="image">
        <img src={image} alt="About Us" /> {/* Use the imported image */}
      </div>
      <div className="text">
        <h2>About Us</h2>
        <h1>AFFORDABLE WAXING IN NAIROBI</h1>
        <p>
          <p>
          Welcome to the best waxing parlor in Nairobi, where Quality and </p>         
         <p> Affordable are mentioned on the same line.. We specialize in waxing   </p>       
          <p>services as well as nail care services, including manicures and pedicures. </p>        
         <p> The parlor is known for its comfortable and relaxing atmosphere and  </p> 
         <p>highly trained staff, who provide personalized attention to each customer.</p>      
         <p> We have almost zero waiting time at our CBD branch as we have 4waxing</p>
          <p>rooms. We also have a clean private toilet for our clients inside the waxing</p>
          <p>bar. We use high-quality products to ensure customers receive the best</p>
          <p>possible experience. Whether you're looking for a full body wax or a</p>
          <p>simple nail polish change,  Pink &amp; Pearl Waxing and Nail Bar has you</p>
          <p>covered.</p>                
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
