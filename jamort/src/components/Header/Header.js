import React, { useState } from 'react';
import './Header.css';
import logo from '../../assets/logos/jamorT-logo.svg';

const Header = () => {
  const [activeLink, setActiveLink] = useState('#home');

  return (
    <header className='header'>
      <div className='logo'>
        <img src={logo} alt="Jamor Technology Logo" className='logo-image' />
      </div>
      <nav className='nav-links'>
        <a 
          href='#home' 
          className={activeLink === '#home' ? 'active' : ''} 
          onClick={() => setActiveLink('#home')}
        >
          Home
        </a>
        <a 
          href='#about-us' 
          className={activeLink === '#about-us' ? 'active' : ''} 
          onClick={() => setActiveLink('#about-us')}
        >
          About Us
        </a>
        <a 
          href='#services' 
          className={activeLink === '#services' ? 'active' : ''} 
          onClick={() => setActiveLink('#services')}
        >
          Services
        </a>
        <a 
          href='#community' 
          className={activeLink === '#community' ? 'active' : ''} 
          onClick={() => setActiveLink('#community')}
        >
          Community
        </a>
        <a 
          href='#investors-corner' 
          className={activeLink === '#investors-corner' ? 'active' : ''} 
          onClick={() => setActiveLink('#investors-corner')}
        >
          Investors' Corner
        </a>
      </nav>
      <div className='auth-buttons'>
        <button className='login-button'>Login</button>
        <button className='signup-button'>Create Account</button>
      </div>
    </header>
  );
}

export default Header;
