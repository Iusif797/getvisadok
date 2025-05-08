import React from "react";
import "./WhyChooseUs.css";
import { FaBolt, FaClipboardList, FaUndo, FaHeadset } from "react-icons/fa";

const FeatureItem = ({ icon, title }) => {
  return (
    <div className="feature-item">
      <div className="feature-icon">{icon}</div>
      <div className="feature-title">{title}</div>
    </div>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaBolt />,
      title: "Fast Processing",
    },
    {
      icon: <FaClipboardList />,
      title: "Simple Application",
    },
    {
      icon: <FaUndo />,
      title: "Refund Guarantee",
    },
    {
      icon: <FaHeadset />,
      title: "Customer Support",
    },
  ];

  return (
    <section className="why-choose-us">
      <button className="all-countries-btn">
        SEE ALL COUNTRIES <span className="arrow-down">▼</span>
      </button>

      <h2 className="section-title">Why Choose Us</h2>

      <div className="features-container">
        {features.map((feature, index) => (
          <FeatureItem key={index} icon={feature.icon} title={feature.title} />
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
