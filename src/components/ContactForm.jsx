import React, { useState } from "react";
import ContactImage from "../assets/images/contact-image.svg";

const ContactForm = () => {
  const [selectedOption, setSelectedOption] = useState("Say Hi");

  return (
    <div className="form-container">
      <div className="form-left">
        <div className="form-options">
          <label>
            <input
              type="radio"
              value="Say Hi"
              checked={selectedOption === "Say Hi"}
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            <span>Say Hi</span>
          </label>
          <label>
            <input
              type="radio"
              value="Get a Quote"
              checked={selectedOption === "Get a Quote"}
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            <span>Get a Quote</span>
          </label>
        </div>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email*</label>
            <input type="email" id="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message*</label>
            <textarea id="message" placeholder="Message" required></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
      <div className="form-right">
        <img src={ContactImage} alt="Illustration" />
      </div>
    </div>
  );
};

export default ContactForm;
