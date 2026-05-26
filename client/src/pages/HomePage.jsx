import React from 'react';
import Hero from '../components/Hero';
import Vision from '../components/Vision';
import Courses from '../components/Courses';
import Testimonials from '../components/Testimonials';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Downloads from '../components/Downloads';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Vision />
      <Courses />
      <Testimonials />
      <Team />
      <Contact />
      <Downloads />
    </>
  );
};

export default HomePage;
