import React from "react";
import "./VisaCard.css";
import uaeFlag from "../../assets/images/uae1.svg";

const VisaCard = ({ visa }) => {
  const { country, type, duration, price } = visa;

  return (
    <div className="visa-card">
      <div className="visa-card-header">
        <div className="visa-flag-container">
          <img src={uaeFlag} alt="UAE Flag" className="visa-flag-image" />
          <span className="visa-country">{country}</span>
        </div>
        <div className="visa-info">
          <div className="visa-type">{type}</div>
          <div className="visa-duration">{duration}</div>
        </div>
      </div>
      <button className="visa-button">
        BUY NOW ONLY
        <br />
        FOR {price}
      </button>
    </div>
  );
};

export default VisaCard;
