import React from "react";
import './FAQ.css';
import FAQCard from '../FAQCard/FAQCard';
import faqImage from '../../assets/images/faq-image.png';

const FAQ = () => {
  const faqs = [
    {
      question: 'What is the duration of the Internship Program?',
      answer: 'The internship program lasts for three months.',
    },
    {
      question: 'Is the Program Virtual?',
      answer: 'Yes, the program is conducted entirely online.',
    },
    {
      question: 'Is it Paid?',
      answer: 'Yes, the internship program is paid.',
    },
    {
      question: 'Is the internship program Expert-led?',
      answer: 'Yes, the program features expert-led sessions.',
    },
  ];

  return (
    <div className="faq-container">
      <div className="faq-body-text">
      <h2 className='frequently-asked-questions'>Frequently Asked Questions (FAQ)</h2>
        <p className='common-questions'>
          Here, we address the most common questions our community has about our
          courses, services, and support.
        </p>
      </div>
      <div className="image-card-container">
        <div className="faq-image">
          <img src={faqImage} alt="faq" />
        </div>
        <div className='faq-cards'>
          {faqs.map((faq, index) => (
            <FAQCard
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;