import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';
import About  from './About';
import Contact  from './Contact';
import Service from './Service';
import Navbar from './Navbar';
import Error from './Error';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './Footer';

const App = () => {
  return (
    <>
    
    
    <BrowserRouter>
    <Navbar />
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} /> 
        <Route path="*" element={<Error />} />  
      </Routes>
      <Footer />
      
    </BrowserRouter>
    </>
  )
}

export default App;
