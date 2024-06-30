import React from 'react';
import arrowUp from '../../assets/icons/arrow-up.svg';
import facebookLogo from '../../assets/logos/facebook-logo.svg';
import instagramLogo from '../../assets/logos/instagram-logo.svg';
import twitterLogo from '../../assets/logos/twitter-logo.svg';
import linkedinLogo from '../../assets/logos/linkedin-logo.svg';
import youtubeLogo from '../../assets/logos/youtube-logo.svg';
import './Footer.css';
import logo from '../../assets/logos/jamorT-logo.svg';


const Footer = () => {
  const infoCards = [
    {
      title: 'Information',
      items: ['About Us', 'Contact Us', 'Terms and Conditions', 'Privacy Policy'],
    },
    {
      title: 'What We Do',
      items: ['Internship Development', 'Technology Solution', 'Outsourcing'],
    },
    {
      title: 'Resources',
      items: ['Getting Started', 'Training and Certification', 'Mentoring', 'JamorTech Partners'],
    },
  ];

  const socialMedia = [
    { icon: facebookLogo, link: 'https://www.facebook.com' },
    { icon: instagramLogo, link: 'https://www.instagram.com' },
    { icon: twitterLogo, link: 'https://www.twitter.com' },
    { icon: linkedinLogo, link: 'https://www.linkedin.com' },
    { icon: youtubeLogo, link: 'https://www.youtube.com' },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className='footer-container'>
      <div className='footer-top'>
        <div className='logo'>
          <img src={logo} alt='JamorTech' />
        </div>
        {infoCards.map((info, index) => (
          <div className='info-card' key={index}>
            <h3 className='info-title'>{info.title}</h3>
            <ul className='info-list'>
              {info.items.map((item, index) => (
                <li key={index} className='info-item'>{item}</li>
              ))}
            </ul>
          </div>
        ))}
        <div className='scroll-to-top' onClick={scrollToTop}>
          <img src={arrowUp} alt='Scroll to top' />
        </div>
      </div>
      <div className='footer-bottom'>
        <p className='copy-right'>@ 2024 JamorTech.com</p>
        <div className='social-media'>
          {socialMedia.map((social, index) => (
            <a key={index} href={social.link} target='_blank' rel='noopener noreferrer'>
              <img src={social.icon} alt='social media' className='social-icon'/>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
