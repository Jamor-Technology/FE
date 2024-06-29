import React from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Services.css';

import carbonDevelopmentIcon from '../../assets/icons/carbon-development.svg';
import riToolsFillIcon from '../../assets/icons/ri-tools-fill.svg';
import crowdsourceIcon from '../../assets/icons/simple-icons-crowdsource.svg';
import arrowIcon from '../../assets/icons/arrow.svg';

const Services = () => {
  const services = [
    {
      iconSrc: carbonDevelopmentIcon,
      title: 'Internship Development',
      description: 'At Jamor Technology, we believe in fostering the next generation of tech innovators through our comprehensive Internship Development Program. Our program is designed to provide aspiring professionals with hands-on experience, mentorship from industry experts, and the opportunity to work on real-world projects.',
      learnMoreLink: '#',
      arrowIconSrc: arrowIcon
    },
    {
      iconSrc: riToolsFillIcon,
      title: 'Technology Solution',
      description: 'Jamor Technology provide innovative and tailored technology solutions to meet the unique needs of businesses and individuals. Our expertise spans across a range of services, including advanced software development, robust cybersecurity measures, seamless cloud computing integration, and cutting-edge artificial intelligence applications.',
      learnMoreLink: '#',
      arrowIconSrc: arrowIcon
    },
    {
      iconSrc: crowdsourceIcon,
      title: 'Outsourcing',
      description: 'Our specialization is base on providing top-tier outsourcing solutions that help businesses streamline their operations and enhance efficiency. Our comprehensive range of services includes software development, IT support, and customer service, all tailored to meet the unique needs of our clients.',
      learnMoreLink: '#',
      arrowIconSrc: arrowIcon
    }
  ];

  return (
    <div className="services-section">
      <h2 className="services-title">Services we can help you with</h2>
      <p className="services-intro">At Jamor Technology, we offer a comprehensive suite of services designed to equip you with the skills and knowledge needed to excel in the ever-evolving tech industry.</p>
      <div className="services-cards">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            iconSrc={service.iconSrc}
            title={service.title}
            description={service.description}
            learnMoreLink={service.learnMoreLink}
            arrowIconSrc={service.arrowIconSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;