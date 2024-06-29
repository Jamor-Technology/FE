import React from 'react';
import { HeroSection } from '../components/HeroSection/HeroSection';
import Services from '../components/Services/Services';

function Home() {
  return (
    <div>
      <div className='hero-section'>
        <HeroSection />
        <Services />
      </div>
    </div>
  );
}

export default Home;