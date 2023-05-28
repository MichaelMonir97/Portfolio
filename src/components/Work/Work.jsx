import "./Work.css";
import React, { useContext, useEffect } from "react";
import UpWork from "../../img/Upwork.png";
import Facebook from "../../img/Facebook.png";
import Shopify from "../../img/Shopify.png";
import Amazon from "../../img/amazon.png";
import Fiver from "../../img/fiverr.png";
import { currentMode } from "../../App";

const Work = () => {
  const [mode] = useContext(currentMode);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) =>
        entry.target.classList.toggle("show", entry.isIntersecting)
      );
    });

    const element = document.querySelector(".w-main_circle");
    observer.observe(element);
  });
  return (
    <div className="work">
      <div className="w-left s-left">
        <span>Works for All these</span>
        <span>Brands & Clients</span>
        <p style={{ lineHeight: 1.4, color: `${mode && "white"} ` }}>
          As a front-end developer, I have worked with a diverse range of
          clients to create visually appealing and user-friendly websites.
          <br />
          My expertise in HTML, CSS, and JavaScript has enabled me to deliver
          high-quality work that meets the needs of my clients.
        </p>
        <button className="button i-btn">Hire Me</button>
        <div className="blur blue"></div>
      </div>

      <div className="w-right">
        <div className="w-main_circle">
          <div className="w-secondary_circle">
            <img src={UpWork} alt="Upwork" />
          </div>

          <div className="w-secondary_circle">
            <img src={Fiver} alt="Fiver" />
          </div>

          <div className="w-secondary_circle">
            <img src={Amazon} alt="Amazon" />
          </div>

          <div className="w-secondary_circle">
            <img src={Shopify} alt="Shopify" />
          </div>

          <div className="w-secondary_circle">
            <img src={Facebook} alt="Facebook" />
          </div>
        </div>
        <div className="bg-circle blue-circle"></div>
        <div className="bg-circle yellow-circle"></div>
      </div>
    </div>
  );
};

export default Work;
