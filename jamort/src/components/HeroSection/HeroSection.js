import React from "react";
import Header from "../Header/Header";


export const HeroSection = () => {
    return (
        <div className='hero-section'>
            <Header />
            <div className='hero-body'>
              <p className="text-wrapper">Empower Your Potential with Jamor Technogoly</p>
              <p className="join-us-on-a-journey">
                Join us on a journey of discovery, growth, and transformation. Whether you&#39;re looking to be more skillful
                in your tech career, stay ahead of industry trends, or collaborating on a real-time project, Jamor Technology
                is your gateway to success.
              </p>
              <div className='cta'>
                <button className='cta-button'>Interns</button>
                <button className='cta-button'>Company</button>
              </div>
            <div className="testimony">
          <div className="overlap">
            <p className="over">
              <span className="span">Over 110k+ professionals trained.</span>
              <span className="text-wrapper-2"> </span>
            </p>
            <button className="learn-more">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};