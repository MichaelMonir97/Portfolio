import React, { useContext, useEffect } from "react";
import "./Services.css";
import Card from "../Card/Card";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import HeartEmoji from "../../img/heartemoji.png";
import Resume from "../../Michael Monir-CV.pdf";
import { currentMode } from "../../App";

const Services = () => {
  const [mode] = useContext(currentMode);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) =>
        entry.target.classList.toggle("show", entry.isIntersecting)
      );
    });

    const elements = document.querySelectorAll(".effect");
    elements.forEach((el) => observer.observe(el));
  });
  return (
    <div className="services" id="Services">
      <div className="s-left">
        <span>My Awesome</span>
        <span>Services</span>
        <p style={{ color: mode ? "white" : "var(--gray)" }}>
          As a front-end developer, I specialize in creating visually appealing
          and user-friendly websites
        </p>
        <a href={Resume} download className="button s-btn">
          Download Cv
        </a>
        <div className="blur blue"></div>
      </div>
      <div className="s-right">
        <div className="heart effect">
          <Card
            emoji={HeartEmoji}
            heading="Design"
            text="Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"
          />
        </div>

        <div className="Glasses effect">
          <Card
            emoji={Glasses}
            heading="Developer"
            text="Html, Css, JavaScript, TypeScript, Python"
          />
        </div>

        <div className="humble effect">
          <Card
            emoji={Humble}
            heading="FrameWorks"
            text="BootStrap, jQuery, React, Flask"
          />
        </div>

        <div className="blur s-blur"></div>
      </div>
    </div>
  );
};

export default Services;
