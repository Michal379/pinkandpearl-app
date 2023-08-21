import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Note the import of Routes
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import ContactUs from './components/contactus/ContactUs';
import WhoWeAre from './components/whoweare/WhoWeAre'; 
import WhoWeArePage from './components/whoweare/WhoWeArePage';
import OurProjects from './components/ourprojects/OurProjects';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;