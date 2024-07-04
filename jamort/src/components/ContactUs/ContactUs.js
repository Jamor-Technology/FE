import React from "react";
import "./ContactUs.css";
import ContactInput from "../ContactInput/ContactInput";
import userIcon from '../../assets/icons/user-icon.svg';
import messageIcon from '../../assets/icons/message-icon.svg';
import background from '../../assets/images/contact-background.png';
import arrowIcon from "../../assets/icons/arrow.svg";


const ContactUs = () => {
  const inputs = [
    { label: 'First Name', icon: userIcon, placeholder: 'Enter your first name' },
    { label: 'Last Name', icon: userIcon, placeholder: 'Enter your last name' },
    { label: 'Question', icon: messageIcon, placeholder: 'Enter your question' },
  ];

  return (
    <div className="contact-us-container" style={{backgroundImage: `url(${background})`}}>
      <div className="contact-us-card">
        <h2 className="contact-us-header">Contact Us</h2>
        <div className="contact-inputs">
          {inputs.map((input, index) => (
            <ContactInput 
              key={index}
              label={input.label}
              icon={input.icon}
              placeholder={input.placeholder}
            />
          ))}
        </div>
        <button className="contact-us-button">
          Contact Us <img src={arrowIcon} alt="arrow" />
        </button>
      </div>
    </div>
  );
}

export default ContactUs;