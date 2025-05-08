import React, { useState, useEffect } from "react";
import "./HowItWorks.css";
import {
  FaWpforms,
  FaCreditCard,
  FaFileContract,
  FaPassport,
} from "react-icons/fa";
import activeIndicator from "../../assets/images/Ellipse 58.svg";
import inactiveIndicator from "../../assets/images/Ellipse 59.svg";

const HowItWorks = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const steps = [
    {
      icon: <FaWpforms />,
      title: "Fill out simple form",
    },
    {
      icon: <FaCreditCard />,
      title: "Make payment securely",
    },
    {
      icon: <FaFileContract />,
      title: "Visa processing",
    },
    {
      icon: <FaPassport />,
      title: "Get your eVisa",
    },
  ];

  // Автоматическое переключение слайдов
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % steps.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [steps.length]);

  // Переключение на конкретный слайд
  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  return (
    <section className="how-it-works">
      <h2 className="section-title">How It Works</h2>

      <div className="carousel">
        <div className="carousel-content">
          <div className="step-icon">{steps[activeSlide].icon}</div>
          <h3 className="step-title">{steps[activeSlide].title}</h3>
        </div>

        <div className="carousel-indicators">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="indicator-button"
            >
              <img
                src={
                  index === activeSlide ? activeIndicator : inactiveIndicator
                }
                alt={index === activeSlide ? "Active step" : "Inactive step"}
                className="indicator"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
