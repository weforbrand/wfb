import React from "react";
import "./cta.css";

const CTAComponent = () => {
  return (
    <div className="cta-container">
      <h2>Drive Profit Growth with Our Digital Marketing Expertise</h2>
      <p>
        Let's turn clicks into customers and leads into loyalty. Our strategy
        boosts your profits beyond what you've imagined.
      </p>
      <div className="cta-btn-main">
        <a href="/contact">
          <button className="cta-button">Contact us</button>
        </a>
      </div>
    </div>
  );
};

export default CTAComponent;
