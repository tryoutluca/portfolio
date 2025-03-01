import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import { Contact } from '../pages/Contact';
import Projects from '../pages/projects';
import About from '../pages/About';

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/About" element={<About />} />
      <Route path="/Projects" element={<Projects />} />
    </Routes>
  );
};

export default Main;
