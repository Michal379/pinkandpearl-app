import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import AboutUs from './components/aboutus/AboutUs';
import Services from './components/services/Services';
import Gallery from './components/gallery/Gallery';
import ContactUs from './components/contactus/ContactUs'

const App = () => {
  return (
    <div>
      <Navbar />
    </div>
  )
}

export default App