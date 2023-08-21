import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Note the import of Routes
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import WhatWeDo from './components/whatwedo/WhatWeDo';
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
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/who-we-are" element={<WhoWeArePage />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/our-projects" element={<OurProjects />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;