import React from "react";
import './ServiceCard.css';
import icon from '../../assets/icons/arrow.svg';


const ServiceCard = ({ iconSrc, title, description, learnMoreLink }) => {
    return (
        <div className='service-card'>
            <img src={iconSrc} alt={title} className='service-icon'></img>
            <h3 className='service-title'>{title}</h3>
            <p className='service-description'>{description}</p>
            <a className="learn-more" href={learnMoreLink}>
              Learn More
              <img 
                className="learn-more-icon"
                src={icon}
                alt="Arrow Icon"
              /> 
            </a>
        </div>
    );
}

export default ServiceCard;