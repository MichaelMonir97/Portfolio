import React, { useState } from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact">
      <div className="c-left">
        <span>Get in Tocuh</span>
        <span>Contact me</span>
      </div>
      <div className="c-right">
        <form action="mailto:michael.monirb@gmail.com" method="Get">
          <input
            type="text"
            className="contact-input"
            placeholder="Name"
            required
          />
          <input
            type="email"
            className="contact-input"
            placeholder="Email"
            required
          />
          <textarea></textarea>
          <button className="button c-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
