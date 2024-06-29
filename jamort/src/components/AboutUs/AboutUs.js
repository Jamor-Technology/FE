import React from "react";
import AboutUsCard from "../AboutUsCard/AboutUsCard";
import aboutUsImage1 from "../../assets/images/image-aboutus1.png";
import aboutUsImage2 from "../../assets/images/image-aboutus2.png";
import aboutUsImage3 from "../../assets/images/image-aboutus3.png";
import arrowIcon from "../../assets/icons/arrow.svg";

const AboutUs = () => {
  const aboutUsCards = [
    {
      image: aboutUsImage1,
      alt: "About Us Image 1"
    },
    {
      image: aboutUsImage2,
      alt: "About Us Image 2"
    },
    {
      image: aboutUsImage3,
      alt: "About Us Image 3"
    }
  ];

  return (
    <div className="about-us-section">
      <h2 className="about-us-title">About Us</h2>
      <p className="about-us-content">
      JamorT is an organization dedicated to empowering new tech graduates from technology schools by providing them with valuable professional experience on live projects. Our mission is to bridge the gap between academia and the professional world, ensuring that graduates are well-prepared and employable in the competitive technology industry. We achieve this by offering opportunities to build them professional experience and portfolios and facilitating collaborations with companies in need of tech talent.</p>
      <div className="about-us-cards">
        {aboutUsCards.map((aboutUsCard, index) => (
          <AboutUsCard
            key={index}
            image={aboutUsCard.image}
            alt={aboutUsCard.alt}
          />
        ))}
      </div>
      <button className="about-us-button">
        Learn More
        <img src={arrowIcon} alt="arrow" />
      </button>
    </div>
  );
}

export default AboutUs;