import React from 'react';
import { HeroSection } from '../components/HeroSection/HeroSection';
import Services from '../components/Services/Services';
import Benefits from '../components/Benefits/Benefits';

function Home() {
  return (
    <div>
      <div className='hero-section'>
        <HeroSection />
        <Services />
        <Benefits />
      </div>
    </div>
  );
}

export default Home;