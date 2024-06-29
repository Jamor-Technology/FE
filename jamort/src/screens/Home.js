import React from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import Services from '../components/Services/Services';
import Benefits from '../components/Benefits/Benefits';
import AboutUs from '../components/AboutUs/AboutUs';


function Home() {
  return (
    <div>
      <div className='hero-section'>
        <HeroSection />
        <Services />
        <Benefits />
        <AboutUs />
      </div>
    </div>
  );
}

export default Home;