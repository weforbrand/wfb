import React, { useState } from "react";
import "./whyUs.css"; // Import CSS file

const WhyUs = () => {
  const [selectedTopic, setSelectedTopic] = useState(0);

  const topics = [
    {
      title: "Premium SEO Partner",
      content:
        "The foundation of online exposure is SEO. As your SEO partner, our goal is to optimize your website such that it targets and engages your target audience in addition to moving up the search engine ranks. Our tactics aim to attract quality traffic, which can result in more conversions and a better return on investment.",
    },
    {
      title: "Proven Expertise",
      content:
        "Experts in the field with years of experience in all areas of digital marketing make up our team. Our extensive knowledge base guarantees that we are prepared to tackle any obstacle that may arise. Our proven track record of providing our clients in a variety of industries with good outcomes speaks for itself. Because of our experience, you can be sure that we can create plans that are exactly in line with your business goals and that we are aware of the subtleties unique to your industry.",
    },
    {
      title: "Transparency and Accountability",
      content:
        "Being open and honest with our clients is one of our agency's guiding principles. We are committed to keeping you updated at every stage of the process, including thorough reports on the effectiveness of your campaigns along with frequent updates. This transparency not only promotes confidence but also makes it possible to make rapid strategy revisions, guaranteeing the best possible outcome for your projects. You will always be aware of the performance of your investments, and we hold ourselves responsible for keeping our word.",
    },
    {
      title: "Cutting-Edge Strategies",
      content:
        "Since the digital world is always changing, being proactive and adaptable is necessary to stay ahead of the curve. Our staff adopts cutting-edge tactics and new technology as they become available, keeping abreast of developments in the field of digital marketing. This proactive approach guarantees that your marketing initiatives consistently outperform those of your rivals, skillfully adjusting to shifts in the marketplace and consumer preferences.",
    },
    {
      title: "Technology-Driven Solutions",
      content:
        "Making the most of the newest technologies is essential to raising the efficacy and efficiency of our efforts. Among other things, we deploy cutting-edge software and solutions for customer relationship Making the most of the newest technologies is essential to raising the efficacy and efficiency of our efforts. Among other things, we deploy cutting-edge software and solutions for customer relationship ",
    },
    {
      title: "Specialized SEO Marketing",
      content:
        "Our SEO tactics are tailored to your industry's unique needs and obstacles rather than being one-size-fits-all. We may use SEO strategies that work best for your niche by getting to know the specifics of your company and market. Our ability to attract relevant visitors to your website, improve your visibility, and eventually grow your market share is ensured by this specialization. ",
    },
  ];

  const handleTopicClick = (index) => {
    setSelectedTopic(index === selectedTopic ? null : index);
  };

  return (
    <div className="why-us-container">
      <div className="why-us-content">
        <h2>Why Choose Us?</h2>
        <ul className="why-us-list">
          {topics.map((topic, index) => (
            <li
              key={index}
              className={selectedTopic === index ? "active" : ""}
              onClick={() => handleTopicClick(index)}
            >
              {topic.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="why-us-details">
        {selectedTopic !== null && (
          <div className="details-content">
            <h3>{topics[selectedTopic].title}</h3>
            <p>{topics[selectedTopic].content}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WhyUs;
