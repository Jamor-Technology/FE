import React from 'react';
import './ContactInput.css';

const ContactInput = ({ label, icon, placeholder }) => {
  return (
    <div className="contact-input">
      <label className='input-label'>{label}</label>
      <div className='input-container'>
        <div className='input-icon'>
          <img src={icon} alt={label} />
        </div>
        <input className='input-field' placeholder={placeholder} />
      </div>
    </div>
    ); 
};

export default ContactInput;