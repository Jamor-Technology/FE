import React from "react";
import './UpdateCard.css';

const UpdateCard = ({ title, updateImage, content }) => {
  return (
    <div className="update-card">
      <h5 className="update-title">{title}</h5>
      <img src={updateImage} alt="update" className="update-image" />
      <p className="update-content">{content}</p>
    </div>
  );
}

export default UpdateCard;