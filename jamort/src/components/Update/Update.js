import React, { useState } from "react";
import './Update.css';
import UpdateCard from "../UpdateCard/UpdateCard";
import arrowIcon from "../../assets/icons/arrow.svg";
import updateImage1 from "../../assets/images/update-image1.png";
import updateImage2 from "../../assets/images/update-image2.png";
import updateImage3 from "../../assets/images/update-image3.png";
import leftArrowIcon from "../../assets/icons/left-arrow.svg";
import rightArrowIcon from "../../assets/icons/right-arrow.svg";


const Updates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const updates = [
    {
      title: 'Tech Quest',
      updateImage: updateImage1,
      content: 'Techquest is a journey of learning and development, with different guest speakers providing valuable insights to tech interns over a three-month program. Be the first to know when we start the next one.'
    },
    {
      title: 'Skill Enhancement',
      updateImage: updateImage2,
      content: 'A dedicated initiative aimed at equipping tech interns with essential soft skills to complement their technical expertise. We focus on developing critical skills that are crucial for personal and professional success in the tech industry.'
    },
    {
      title: 'Expert Tips & Tutorials',
      updateImage: updateImage3,
      content: 'Gain valuable tips, tutorials, and best practices from industry experts to enhance your learning experience.'
    }
  ];

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % updates.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + updates.length) % updates.length);
  };

  return (
    <div className="update-container">
      <h2 className='stay-update'>Stay Updated With What We’re Doing</h2>
      <p className='monthly-newsletter'>
        Stay informed and inspired with Jamor Tech's Monthly Newsletter! Each
        edition is packed with the latest updates, expert insights, and
        exclusive resources designed to keep you at the forefront of the tech
        world.
      </p>
      <div className="update-cards-container">
      <button className="arrow-button left" onClick={prevCard}>
          <img src={leftArrowIcon} alt="left arrow" />
        </button>
        <div className="update-cards" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {updates.map((update, index) => (
            <div key={index} className="update-card-wrapper">
              <UpdateCard
                title={update.title}
                updateImage={update.updateImage}
                content={update.content}
              />
            </div>
          ))}
        </div>
        <button className="arrow-button right" onClick={nextCard}>
          <img src={rightArrowIcon} alt="right arrow" />
        </button>
      </div>
      <button className="explore-button">
        Explore More <img src={arrowIcon} alt="arrow" />
      </button>
    </div>
  );
}

export default Updates;
