import "./Card.css";

import React from "react";

const Card = ({ emoji, heading, text }) => {
  return (
    <div className="card-container">
      <img src={emoji} alt="Emoji" />
      <span>{heading}</span>
      <p>{text}</p>
      <a href="#">Learn More</a>
    </div>
  );
};

export default Card;
