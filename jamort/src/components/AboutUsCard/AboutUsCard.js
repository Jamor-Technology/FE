import React from "react";
import './AboutUsCard.css';

const AboutUsCard = ({ image, alt }) => {
  return (
    <div className="about-us-card">
      <img src={image} alt={alt} />
    </div>
  );
}

export default AboutUsCard;