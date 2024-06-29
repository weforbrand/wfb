import React, { useState, useEffect } from "react";
import "./herosection.css";

const services = ["stand out", "lead the way", "unforgettable"];

const HeroSection = () => {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentServiceIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-sec-main">
      <div className="hero-overlay">
        <div className="hero-text">
          <div>
            <h1 style={{ marginTop: "151px", fontSize: "55px" }}>
              Bringing Your Brand to Life
            </h1>

            <h2 className="no-wrap">
              We make your brand{" "}
              <span
                className="zoom-out"
                style={{
                  color: "#ffca00",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >
                {services[currentServiceIndex]}
              </span>{" "}
            </h2>
          </div>

          <p>
            Make your brand the one everyone talks about. At Weforbrands, we
            specialize in making brands lovable and visible. Engage with us, and
            let's make your brand a beloved one in its industry.
          </p>
          <div className="hero-button">
            <a href="/contact">
              <button>Let's Talk</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
