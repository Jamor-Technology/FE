import React from "react";
import Header from "../Header/Header";
import arrowIcon from "../../assets/icons/arrow.svg";
import ellipse1 from "../../assets/images/Ellipse1.png";
import ellipse2 from "../../assets/images/Ellipse2.png";
import ellipse3 from "../../assets/images/Ellipse3.png";
import ellipse4 from "../../assets/images/Ellipse4.png";
import ImageBanner from "../HeroImageBanner/ImageBanner";

const ellipses = [ellipse4, ellipse3, ellipse2, ellipse1];

const HeroSection = () => {
  return (
    <div className="hero-section">
      <Header />
      <div className="hero-body">
        <div className="left-content">
          <div className="card">
            <h3>Empower Your Potential with Jamor Technogoly</h3>
            <p>
              Join us on a journey of discovery, growth, and transformation. Whether you&#39;re looking to be more skillful
              in your tech career, stay ahead of industry trends, or collaborating on a real-time project, Jamor Technology
              is your gateway to success.
            </p>
          </div>
          <div className="buttons">
            <button className="cta-button">
              Interns <img src={arrowIcon} alt="arrow" />
            </button>
            <button className="cta-button">
              Company <img src={arrowIcon} alt="arrow" />
            </button>
          </div>
          <div className="images-testimony">
            <div className="ellipses">
              {ellipses.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Ellipse ${index + 1}`}
                  className="ellipse"
                />
              ))}
              <span className="testimony">Over 110k+ professionals trained.</span>
            </div>
          </div>
          <a href="#learn-more" className="learn-more">
            Learn More <img src={arrowIcon} alt="arrow" />
          </a>
        </div>
        <div className="right-content">
          <ImageBanner />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;