import React from "react";
import './OurPartners.css';
import partner1 from '../../assets/logos/logos_WAYLC.svg';
import partner2 from '../../assets/logos/logos_adventures.svg';
import partner3 from '../../assets/logos/logos_medat.svg';
import partner4 from '../../assets/logos/logos_malva.svg';
import partner5 from '../../assets/logos/logos_cp.svg';

const OurPartners = () => {
  return (
    <div className="partners-section">
      <h3>Our partners</h3>
      <div className="partner-logos">
        <img src={partner1} alt="WAYLC" />
        <img src={partner2} alt="Adventures" />
        <img src={partner3} alt="Medat" />
        <img src={partner4} alt="Malva" />
        <img src={partner5} alt="Cp" />
      </div>
    </div>
  );
}

export default OurPartners;