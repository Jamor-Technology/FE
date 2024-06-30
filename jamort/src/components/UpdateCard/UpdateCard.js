import React from "react";
import './UpdateCard.css';

const UpdateCard = ({ title, updateImage, content }) => {
  return (
    <div className="update-card">
      <h3 className="update-title">{title}</h3>
      <img src={updateImage} alt="update" className="update-image" />
      <p className="update-content">{content}</p>
    </div>
  );
}

export default UpdateCard;