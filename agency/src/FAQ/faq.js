import React, { useState } from "react";
import "./faq.css";

const faqData = [
  {
    question: "What makes your SEO services stand out?",
    answer:
      "Our SEO services focus on deep analytics, custom strategies, and staying ahead of algorithm changes, ensuring optimal visibility and superior results for our clients.",
  },
  {
    question: "Why does a business need a website?",
    answer:
      "In the digital era, having a website is crucial for any business. It serves as your virtual storefront, offering credibility and trust to potential customers who seek information about your products or services. A website provides a platform for marketing your brand, reaching a global audience, and analyzing valuable insights about your visitors.",
  },
  {
    question: "How do you tailor websites to individual business needs?",
    answer:
      "We begin with a thorough analysis of your business goals and audience. This insight guides the custom design, functionality, and user experience of your website.",
  },
  {
    question:
      "Can you describe a successful social media campaign from your portfolio?",
    answer:
      "One standout campaign involved increasing engagement for a retail client through targeted contests and user-generated content, resulting in a 50% growth in followers and significantly higher interaction rates.",
  },
  {
    question: "What is your approach to creating engaging content?",
    answer:
      "Our approach combines SEO insights with creative storytelling. We focus on crafting content that resonates with your audience, encourages interaction, and drives conversions.",
  },
  {
    question:
      "How do you ensure brand consistency across all digital platforms?",
    answer:
      "We develop a comprehensive digital brand strategy that includes style guides, tone of voice, and messaging frameworks to maintain consistency across all platforms and touchpoints.",
  },
  {
    question: "How much do digital marketing services cost?",
    answer:
      "Our pricing is competitive and transparent, based on the scope and scale of your project. We offer customizable packages to fit different budgets and business objectives.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-title">
        <h2>Frequently Asked Questions</h2>
      </div>
      {faqData.map((item, index) => (
        <div
          className={`faq-item ${openIndex === index ? "open" : ""}`}
          key={index}
        >
          <div className="faq-question" onClick={() => handleClick(index)}>
            <div className="faqbox">
              <span className="faq-toggle">
                {openIndex === index ? "-" : "+"}
              </span>
              <div className="faq-ques-box">
                <h3>{item.question}</h3>
              </div>
            </div>
          </div>
          <p>{item.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default Faq;
