import "./FloatingDev.css";

import React from "react";

const FloatingDev = ({ image, txt }) => {
  return (
    <div className="floating">
      <img src={image} alt="" />
      <span>
        {txt.txt1}
        <br />
        {txt.txt2}
      </span>
    </div>
  );
};

export default FloatingDev;
