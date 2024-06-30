import React from "react";
import "./process.css";
const process = () => {
  return (
    <div className="our-process">
      <h2 className="process-title">The Blueprint of Our Approach</h2>
      <div className="process-steps">
        <div className="process-step">
          <h3>1. Initial Consultation</h3>
          <p>
            We begin by sitting down with you to fully understand your business
            goals and the specific challenges you face. This ensures our
            strategies perfectly match your expectations.
          </p>
        </div>
        <div className="process-step">
          <h3>2. Analyzing the Market</h3>
          <p>
            We delve into your industry to understand the competitive landscape
            and identify key opportunities. This research helps us position your
            brand more effectively.
          </p>
        </div>
        <div className="process-step">
          <h3>3. Strategy Development</h3>
          <p>
            {" "}
            Armed with insights, we design a customized digital marketing
            strategy. We choose the best channels and tactics to reach your
            audience effectively and meet your business objectives.
          </p>
        </div>
        <div className="process-step">
          <h3>4. Campaign Execution </h3>
          <p>
            With the strategy ready, we launch your digital marketing campaigns
            across the chosen digital platforms. Our focus is on maximizing
            engagement and driving conversions through strategic execution.
          </p>
        </div>
        <div className="process-step">
          <h3>5. Monitoring Results</h3>
          <p>
            We use advanced tools to track the performance of your campaigns.
            Regular monitoring helps us understand what's effective and where
            adjustments are needed.
          </p>
        </div>
        <div className="process-step">
          <h3>6. Reporting and Review</h3>
          <p>
            Finally, we provide detailed reports on the campaign’s performance,
            including key metrics and ROI. We review these outcomes with you to
            plan future strategies and ensure long-term success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default process;
