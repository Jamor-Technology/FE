import React, { useState } from "react";
import './FAQCard.css';
import ShowArrow from '../../assets/icons/show-arrow.svg';
import HideArrow from '../../assets/icons/hide-arrow.svg';

const FAQCard = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };


  return (
    <div className="faq-card">
      <div className="question-container" onClick={toggleAnswer}>
        <h3 className="faq-question">{question}</h3>
        <button className="toggle-answer">
          <img
            src={showAnswer ? HideArrow : ShowArrow}
            alt="Toggle Arrow"
            className="arrow-icon"
          />
        </button>
      </div>
      {showAnswer && <p className="faq-answer">{answer}</p>}
    </div>
  );
};

export default FAQCard;