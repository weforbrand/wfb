import React from "react";
import "./challenges.css";

const Challenges = () => {
  return (
    <div className="container">
      <Section
        title="Facing Challenges? Weforbrands Will Transform Obstacles into Opportunities"
        content={[
          {
            title: "My website isn’t getting enough traffic",
            points: [
              "Having trouble filling your pipeline with qualified leads? Boost your lead generation with digital marketing strategies that fit your goals and budget.",
              "Fill your pipeline with potential leads",
              "Connect with your most valuable audience",
              "Increase your chances of converting leads",
            ],
          },
          {
            title: "My business is struggling to retain customers",
            points: [
              "Enhance customer loyalty with targeted engagement strategies that match your business needs.",
              "Encourage repeat business with exclusive perks",
              "Keep connections alive with regular updates",
              "Personalize interactions to enhance satisfaction",
            ],
          },
          {
            title: "My website is facing high bounce rates",
            points: [
              "Experiencing high bounce rates on your website? Enhance user experience with strategic improvements.",
              "Fast load times keep visitors engaged",
              "Provide compelling and relevant content that captures interest",
              "Create a user-friendly layout that encourages exploration",
            ],
          },
          {
            title: "Managing digital campaigns is taking too much time",
            points: [
              "We understand — running and optimizing digital campaigns can be overwhelming. Our all-inclusive, done-for-you services help you save both time and money.",
              "Save time and resources",
              "Streamline your marketing with automated campaigns",
              "Leverage the expertise of industry-certified professionals",
            ],
          },
        ]}
      />
    </div>
  );
};

const Section = ({ title, content }) => (
  <div className="section">
    <h1>{title}</h1>
    {content.map((item, index) => (
      <div key={index} className="content-block">
        <h2>{item.title}</h2>
        <ul>
          {item.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export default Challenges;
