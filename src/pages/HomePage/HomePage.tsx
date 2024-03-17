import React from 'react';
import Intro from './Intro/Intro';
import MobileApp from './MobileApp/MobileApp';
import Showcase from './Showcase/Showcase';
import ContactUs from './ContactUs/ContactUs';
import HeroSection from './HeroSection/HeroSection';

const HomePage = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <Showcase />
      <Intro />
      <MobileApp />
      <ContactUs />
    </React.Fragment>
  );
};

export default HomePage;
