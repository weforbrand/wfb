import React from "react";
import "./herosection.css";

const HeroSection = () => {
  return (
    <div className="hero-sec-main">
      <div className="hero-overlay">
        <div className="hero-text">
          <div>
            <h1>
              Empowering Transformation: The Architects of Digital Disruption
            </h1>
          </div>
          <p>
            <strong>
              Transform Your Business with our Innovative Marketing Services
            </strong>
          </p>
          <p>
            At WeForBrands, we drive business growth by crafting digital
            experiences that navigate complex challenges with creativity,
            innovation, and agility. Our solutions are designed to turn
            obstacles into opportunities, businesses into brands.
          </p>
          <div className="hero-button">
            <a href="/contact">
              <button>Contact Our Experts</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
