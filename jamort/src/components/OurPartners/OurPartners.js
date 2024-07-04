import React from "react";
import './OurPartners.css';
import partner1 from '../../assets/logos/logos_notion.svg';
import partner2 from '../../assets/logos/logos_jira.svg';
import partner3 from '../../assets/logos/logos_slack.svg';
import partner4 from '../../assets/logos/logos_google.svg';
import partner5 from '../../assets/logos/logos_trello.svg';
import partner6 from '../../assets/logos/logos_asana.svg';

const OurPartners = () => {
  return (
    <div className="partners-section">
      <h2>Our partners</h2>
      <div className="partner-logos">
        <img src={partner1} alt="Notion" />
        <img src={partner2} alt="Jira" />
        <img src={partner3} alt="Slack" />
        <img src={partner4} alt="Google" />
        <img src={partner5} alt="Trello" />
        <img src={partner6} alt="Asana" />
      </div>
    </div>
  );
}

export default OurPartners;