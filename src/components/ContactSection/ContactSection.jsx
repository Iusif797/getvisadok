import React from "react";
import "./ContactSection.css";
import chatIcon from "../../assets/images/Chat.svg";
import facebookIcon from "../../assets/images/Facebook.svg";
import twitterIcon from "../../assets/images/X.svg";
import instagramIcon from "../../assets/images/Instagram.svg";

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-info">
        <h2 className="section-title">Contact us</h2>

        <div className="contact-item phone">
          <a href="tel:+911234567890" className="contact-link">
            +91-1234567890
          </a>
        </div>

        <div className="contact-item email">
          <a href="mailto:support@visadoc.com" className="contact-link">
            support@visadoc.com
          </a>
        </div>

        <div className="contact-item">
          <button className="chat-help-btn">
            CHAT HELP / FAQ
            <img src={chatIcon} alt="Chat help" className="chat-icon" />
          </button>
        </div>
      </div>

      <div className="social-media">
        <h3 className="social-title">Social media</h3>

        <div className="social-icons">
          <a href="#" className="social-link">
            <img src={facebookIcon} alt="Facebook" className="social-icon" />
          </a>
          <a href="#" className="social-link">
            <img src={twitterIcon} alt="Twitter" className="social-icon" />
          </a>
          <a href="#" className="social-link">
            <img src={instagramIcon} alt="Instagram" className="social-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
