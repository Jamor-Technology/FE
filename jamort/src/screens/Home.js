import React from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import Services from '../components/Services/Services';
import Benefits from '../components/Benefits/Benefits';
import AboutUs from '../components/AboutUs/AboutUs';
import OurPartners from '../components/OurPartners/OurPartners';
import Updates from '../components/Update/Update';
import FAQ from '../components/FAQ/FAQ';
import ContactUs from '../components/ContactUs/ContactUs';
import Footer from '../components/Footer/Footer';

function Home() {
  return (
    <div>
      <div className='hero-section'>
        <HeroSection />
        <Services />
        <Benefits />
        <AboutUs />
        <OurPartners />
        <Updates />
        <FAQ />
        <ContactUs />
        <Footer />
      </div>
    </div>
  );
}

export default Home;