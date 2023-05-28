import React, { useState } from "react";
import "./toggle.css";
import { FiSun, FiMoon } from "react-icons/fi";

const Toggle = ({ updateState }) => {
  const [direction, setDirection] = useState(false);
  return (
    <div
      className="toggle"
      onClick={() => {
        updateState();
        setDirection(!direction);
      }}
    >
      <FiSun />
      <FiMoon />
      <div className={`btn ${direction ? "right" : "left"}`}></div>
    </div>
  );
};

export default Toggle;
