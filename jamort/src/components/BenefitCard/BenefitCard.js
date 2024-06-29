import React from 'react';
import checkCircleIcon from '../../assets/icons/check-circle.svg';
import './BenefitCard.css';

const BenefitCard = ({ image, title, content }) => {
  return (
    <div className="benefit-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <ul>
        {content.map((item, index) => (
          <li key={index}>
            <img src={checkCircleIcon} alt="check circle" className='check-circle-icon'/>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BenefitCard;