import React, { useState } from 'react';
import Slider from 'react-slick';

const sections = {
  Mechanical: [
    { title: 'Aero & Composites', content: 'Details about Aero & Composites...', image: 'path/to/aero-image.jpg' },
    { title: 'Chassis', content: 'Details about Chassis...', image: 'path/to/chassis-image.jpg' },
    { title: 'Ergo', content: 'Details about Ergo...', image: 'path/to/ergo-image.jpg' },
    { title: 'Brakes', content: 'Details about Brakes...', image: 'path/to/brakes-image.jpg' },
    { title: 'Suspension', content: 'Details about Suspension...', image: 'path/to/suspension-image.jpg' },
    { title: 'Steering', content: 'Details about Steering...', image: 'path/to/steering-image.jpg' },
    { title: 'Drivetrain', content: 'Details about Drivetrain...', image: 'path/to/drivetrain-image.jpg' },
    { title: 'Powertrain', content: 'Details about Powertrain...', image: 'path/to/powertrain-image.jpg' },
  ],
  Electrical: [
    { title: 'Powertrain', content: 'Details about Electrical Powertrain...', image: 'path/to/electrical-powertrain-image.jpg' },
    { title: 'Harness', content: 'Details about Harness...', image: 'path/to/harness-image.jpg' },
    { title: 'Controllers', content: 'Details about Controllers...', image: 'path/to/controllers-image.jpg' },
    { title: 'Firmware', content: 'Details about Firmware...', image: 'path/to/firmware-image.jpg' },
  ],
  Driverless: [
    { title: 'Perception', content: 'Details about Perception...', image: 'path/to/perception-image.jpg' },
    { title: 'Mapping', content: 'Details about Mapping...', image: 'path/to/mapping-image.jpg' },
    { title: 'Navigation', content: 'Details about Navigation...', image: 'path/to/navigation-image.jpg' },
    { title: 'Controls', content: 'Details about Controls...', image: 'path/to/controls-image.jpg' },
    { title: 'Mechatronics', content: 'Details about Mechatronics...', image: 'path/to/mechatronics-image.jpg' },
  ],
  Business: [
    { title: 'Events', content: 'Details about Events...', image: 'path/to/events-image.jpg' },
    { title: 'Marketing', content: 'Details about Marketing...', image: 'path/to/marketing-image.jpg' },
    { title: 'External Relations', content: 'Details about External Relations...', image: 'path/to/external-relations-image.jpg' },
    { title: 'Recruitment', content: 'Details about Recruitment...', image: 'path/to/recruitment-image.jpg' },
  ],
};

const SectionCarousel = ({ subsections }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {subsections.map((sub, index) => (
        <div key={index} className="carousel-card">
          <img src={sub.image} alt={sub.title} className="carousel-image" />
          <div className="carousel-content">
            <h3>{sub.title}</h3>
            <p>{sub.content}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

const UT24_Sections = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const handleAccordionClick = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="container mx-auto">
      {Object.keys(sections).map((section, index) => (
        <div key={index} className="accordion-section">
          <button onClick={() => handleAccordionClick(section)} className="accordion-button">
            {section}
          </button>
          {expandedSection === section && (
            <div className="accordion-content">
              <SectionCarousel subsections={sections[section]} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default UT24_Sections;
