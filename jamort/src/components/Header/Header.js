import React from 'react';
import './Header.css';

import logo from '../../assets/logos/jamorT-logo.svg';

const Header = () => {
    return (
        <header className='header'>
          <div className='logo'>
            <img src={logo} alt="Jamor Technology Logo" className='logo-image'></img>
          </div>
          <nav className='nav-links'>
            <a href='#home'>Home</a>
            <a href='#about-us'>About Us</a>
            <a href='#services'>Services</a>
            <a href='#tech-graduates'>Tech Graduates</a>
            <a href='#companies'>Companies</a>
          </nav>
          <div className='auth-buttons'>
            <button className='login-button'>Login</button>
            <button className='signup-button'>Create Account</button>
          </div>
        </header>
    );
}

export default Header;