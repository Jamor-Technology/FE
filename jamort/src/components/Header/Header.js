import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/logos/jamorT-logo.svg';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const location = useLocation();

  const handleMenuToggle = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className={`header ${menuActive ? 'menu-active' : ''}`}>
      <div className='logo'>
        <img src={logo} alt="Jamor Technology Logo" className='logo-image' />
      </div>
      <nav className={`nav-links ${menuActive ? 'active' : ''}`}>
        <Link
          to="/"
          className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          onClick={() => setMenuActive(false)}
          data-testid="home-link"
        >
          Home
        </Link>
        <Link
          to="/about-us"
          className={`nav-link ${location.pathname === '/about-us' ? 'active' : ''}`}
          onClick={() => setMenuActive(false)}
          data-testid="about-link"
        >
          About Us
        </Link>
        <Link
          to="/our-services"
          className={`nav-link ${location.pathname === '/our-services' ? 'active' : ''}`}
          onClick={() => setMenuActive(false)}
          data-testid="services-link"
        >
          Services
        </Link>
        <Link
          to="/community"
          className={`nav-link ${location.pathname === '/community' ? 'active' : ''}`}
          onClick={() => setMenuActive(false)}
          data-testid="community-link"
        >
          Community
        </Link>
        <Link
          to="/investors-corner"
          className={`nav-link ${location.pathname === '/investors-corner' ? 'active' : ''}`}
          onClick={() => setMenuActive(false)}
          data-testid="investors-link"
        >
          Investors' Corner
        </Link>
      </nav>
      <div className='auth-buttons'>
        <Link to="/sign-in" className='login-button'>Login</Link>
        <Link to="/sign-up" className='signup-button'>Create Account</Link>
      </div>
      <button
        className={`hamburger ${menuActive ? 'active' : ''}`}
        onClick={handleMenuToggle}
        aria-label="Toggle menu"
      >
        <div />
        <div />
        <div />
      </button>
      <div className={`mobile-menu ${menuActive ? 'active' : ''}`}>
        <Link
          to="/"
          className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          onClick={() => setMenuActive(false)}
          data-testid="mobile-home-link"
        >
          Home
        </Link>
        <Link
          to="/about-us"
          className={`nav-link ${location.pathname === '/about-us' ? 'active' : ''}`}
          onClick={() => setMenuActive(false)}
          data-testid="mobile-about-link"
        >
          About Us
        </Link>
        <Link
          to="/our-services"
          className={`nav-link ${location.pathname === '/our-services' ? 'active' : ''}`}
          onClick={() => setMenuActive(false)}
          data-testid="mobile-services-link"
        >
          Services
        </Link>
        <Link
          to="/community"
          className={`nav-link ${location.pathname === '/community' ? 'active' : ''}`}
          onClick={() => setMenuActive(false)}
          data-testid="mobile-community-link"
        >
          Community
        </Link>
        <Link
          to="/investors-corner"
          className={`nav-link ${location.pathname === '/investors-corner' ? 'active' : ''}`}
          onClick={() => setMenuActive(false)}
          data-testid="mobile-investors-link"
        >
          Investors' Corner
        </Link>
        <Link
          to="/sign-in"
          className={`nav-link ${location.pathname === '/sign-in' ? 'active' : ''}`}
          onClick={() => setMenuActive(false)}
          data-testid="mobile-signin-link"
        >
          Sign In
        </Link>
        <Link
          to="/sign-up"
          className={`nav-link ${location.pathname === '/sign-up' ? 'active' : ''}`}
          onClick={() => setMenuActive(false)}
          data-testid="mobile-signup-link"
        >
          Sign Up
        </Link>
      </div>
    </header>
  );
}

export default Header;
