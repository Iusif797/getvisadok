import React from "react";
import "./VisaSection.css";
import VisaCard from "./VisaCard";

const VisaSection = () => {
  const visaData = [
    {
      country: "UAE",
      type: "Tourist Visa",
      duration: "3-5 Days",
      price: "1.99$",
    },
    {
      country: "UAE",
      type: "Tourist Visa",
      duration: "3-5 Days",
      price: "1.99$",
    },
    {
      country: "UAE",
      type: "Tourist Visa",
      duration: "3-5 Days",
      price: "1.99$",
    },
    {
      country: "UAE",
      type: "Tourist Visa",
      duration: "3-5 Days",
      price: "1.99$",
    },
  ];

  return (
    <section className="visa-section">
      <h2 className="visa-title">OUR eVISAS:</h2>
      <div className="visa-grid">
        {visaData.map((visa, index) => (
          <VisaCard key={index} visa={visa} />
        ))}
      </div>
    </section>
  );
};

export default VisaSection;
