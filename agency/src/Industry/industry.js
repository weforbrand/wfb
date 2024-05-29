import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcaseMedical,
  faChalkboardTeacher,
  faDumbbell,
  faShoppingBasket,
  faUtensils,
  faChartLine,
  faRocket,
  faSeedling,
  faLandmark,
  faRunning,
  faBuilding,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import "./industry.css";

const Industry = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(0);

  const industries = [
    {
      name: "Healthcare",
      icon: faBriefcaseMedical,
      content:
        "Compliance and trust are critical in the healthcare sector. Through patient-friendly content, HIPAA-compliant websites, and focused digital marketing that upholds privacy while boosting patient engagement and service visibility, we assist healthcare providers in connecting with their target audience.",
    },
    {
      name: "Education",
      icon: faChalkboardTeacher,
      content:
        "We concentrate on developing enlightening and user-friendly digital platforms for educational establishments that serve instructors, parents, and students equally. Our services include effective community connection through robust communication platforms, compelling learning materials, and SEO optimization to increase enrollment.",
    },
    {
      name: "Fitness",
      icon: faDumbbell,
      content:
        "The fitness industry is driven by camaraderie and inspiration. We create dynamic, engaging social media campaigns and vivid websites that motivate and captivate prospective customers. In a congested industry, we make sure your fitness business stands out with virtual classes and membership administration.",
    },
    {
      name: "Ecommerce",
      icon: faShoppingBasket,
      content:
        "Our e-commerce solutions are made to increase client happiness and boost sales. We employ sophisticated analytics to monitor customer behavior and trends for continuous optimization, improve user experience with intuitive design, and optimize online storefronts for search engines.",
    },
    {
      name: "Restaurants",
      icon: faUtensils,
      content:
        "In the world of hospitality, experience is everything. We design appealing websites that showcase the caliber of your offerings, handle reservations with ease, and employ local search engine optimization techniques to draw in more customers and visitors from your surrounding area.",
    },
    {
      name: "Finance",
      icon: faChartLine,
      content:
        "Security and clarity are vital for banking and business. We offer safe, intuitive platforms with easy-to-use navigation and lucid information, guaranteeing that your services are reachable while upholding the highest standards of security and legal compliance.",
    },
    {
      name: "Startups",
      icon: faRocket,
      content:
        "Startups require scalable, cost-effective, and flexible digital solutions. Our expertise lies in swiftly developing websites, creating brand identities, and using digital marketing tactics to assist startups in effectively establishing their brand and expanding their market share.",
    },
    {
      name: "Agriculture",
      icon: faSeedling,
      content:
        "Our digital marketing services for the agriculture industry are centered on connecting with local and international customers and encouraging sustainability. We assist agricultural companies in showcasing their inventions and goods on websites that emphasize their dedication to sustainability and excellent quality.",
    },
    {
      name: "Government",
      icon: faLandmark,
      content:
        "Reliability and accessibility are crucial for government organizations. In order to guarantee that public services are available to everyone and that information is distributed efficiently, we design websites that are ADA compliant, user-friendly, and able to withstand heavy traffic.",
    },
    {
      name: "On Demand",
      icon: faRunning,
      content:
        "Our marketers specialize in positioning on-demand services as convenient solutions for modern lifestyles. Through targeted digital campaigns and strategic partnerships, we amplify visibility and engagement, connecting users with the services they need at the moment they need them.",
    },
    {
      name: "Real Estate",
      icon: faBuilding,
      content:
        "We specialize in crafting compelling property listings that showcase the unique features of each home, leveraging stunning visuals and persuasive copywriting to attract potential buyers. From dynamic virtual tours to targeted social media campaigns, we ensure maximum exposure for properties, driving interest and facilitating successful transactions.",
    },
    {
      name: "Events",
      icon: faCalendar,
      content:
        "With our expertise in marketing, we elevate brand visibility and engagement by orchestrating tailored promotional strategies that captivate audiences and drive attendance. From impactful social media campaigns to personalized email invitations, we create buzz and excitement around events, ensuring memorable experiences that leave a lasting impression.",
    },
  ];

  const handleClick = (index) => {
    setSelectedIndustry(index);
  };

  return (
    <div className="root-industry">
      <div className="r-i-h1">Industries We Serve</div>
      <div className="line"></div>

      <div className="indus-main">
        <div className="indus-main-left">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`industry-block ${
                selectedIndustry === index ? "selected" : ""
              }`}
              onClick={() => handleClick(index)}
            >
              <FontAwesomeIcon icon={industry.icon} size="3x" />
              <span className="industry-name">{industry.name}</span>
            </div>
          ))}
        </div>
        <div className="indus-main-right">
          <div className="industry-content">
            {selectedIndustry !== null && (
              <div className="industry-content-m">
                <h3>{industries[selectedIndustry].name}</h3>
                <p>{industries[selectedIndustry].content}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industry;
