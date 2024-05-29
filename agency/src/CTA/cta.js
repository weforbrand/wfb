import React from "react";
import "./cta.css";

const CTAComponent = () => {
  return (
    <div className="cta-container">
      <h2>Why Partner with WeForBrands for Your Digital Marketing Goals?</h2>
      <p>
        At WeForBrands, we are committed to providing exceptional digital
        marketing services that are tailored to the unique needs of each client.
        By choosing to partner with us, you're not just hiring a service
        provider; you're engaging a team of seasoned professionals who are
        dedicated to propelling your business to new heights. Here’s a deeper
        look at what sets us apart.
      </p>
      <div className="cta-btn-main">
        <a href="/contact">
          <button className="cta-button">Get Started</button>
        </a>
      </div>
    </div>
  );
};

export default CTAComponent;
