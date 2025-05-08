import React from "react";
import "./AboutSection.css";
import backgroundImage from "../../assets/images/visa-picture1.png";

const AboutSection = () => {
  return (
    <section
      className="about-section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="about-overlay">
        <div className="about-content">
          <h2 className="about-title">
            We understand the frustration of dealing with complicated visa
            application processes.
          </h2>
          <button className="about-btn">READ MORE ABOUT COMPANY</button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
