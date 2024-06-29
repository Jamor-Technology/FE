import React from "react";
import BenefitCard from "../BenefitCard/BenefitCard";
import officeBag from "../../assets/images/office-bag.png";
import powerOfPen from "../../assets/images/power-of-pen.png";
import macbookPro from "../../assets/images/macbook-pro.png";

const Benefits = () => {
  const benefits = [
    {
      image: officeBag,
      title: "Interns'",
      content: [
        "Soft Skills Training",
        "Career Development",
        "Team Collaboration",
        "Networking",
        "Mentorship and Guidance",
        "Portfolios, Certifications and Reference"
      ],
    },
    {
      image: powerOfPen,
      title: "Investors'",
      content: [
        "Access to Innovative Projects",
        "Educational Resources",
        "Diverse Investment Opportunities",
        "Transparency and Accountability",
        "Potentials for High Returns",
        "Contributions to Technology Advancement"
      ],
    },
    {
      image: macbookPro,
      title: "Businesses and Employers'",
      content: [
        "Free Contsultation",
        "Website Development",
        "Mobile App Development",
        "Digital Marketing",
        "Fast Response",
        "Outsourcing"
      ],
    },
  ];

  return (
    <div className="benefits-section">
      <h2 className="benefits-title">Benefits for joining Jamor Technology</h2>
      <div className="benefits-cards">
        {benefits.map((benefit, index) => (
          <BenefitCard
            key={index}
            image={benefit.image}
            title={benefit.title}
            content={benefit.content}
          />
        ))}
      </div>
    </div>
  );
}

export default Benefits;