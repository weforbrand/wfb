import React, { useState } from "react";
import "./whyUs.css";

const WhyUs = () => {
  const [selectedTopic, setSelectedTopic] = useState(0);

  const topics = [
    {
      title: "Digital Marketing Expert",
      content:
        "We're not just participants in digital marketing; we lead the charge. With cutting-edge strategies and a team of seasoned professionals, we ensure your brand stands out in the digital space.",
    },
    {
      title: "Proven Expertise",
      content:
        "Our track record speaks for itself. We've helped countless businesses soar to new heights with our targeted and effective marketing approaches.",
    },
    {
      title: "Transparency and Accountability",
      content:
        "With us, what you see is what you get. We believe in open communication and holding ourselves accountable for your marketing success.",
    },
    {
      title: "Tailor-Made Tactics",
      content:
        "We understand that no two businesses are the same. That’s why we tailor our services to fit your unique needs, ensuring that every marketing effort counts towards your specific goals.",
    },
    {
      title: "Endless  Support and Guidance",
      content:
        "We’re with you every step of the way. From initial planning to execution and beyond, we provide continuous support and insights to keep your campaigns performing at their best.",
    },
  ];

  const handleTopicClick = (index) => {
    setSelectedTopic(index === selectedTopic ? null : index);
  };

  return (
    <div className="why-us-container">
      <div className="why-us-content">
        <h2>Why Weforbrands is Your Trusted Partner?</h2>
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
