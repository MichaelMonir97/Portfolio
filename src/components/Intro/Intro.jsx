import React, { useEffect, useRef } from "react";
import "./intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instgram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Koko from "../../img/koko mask.png";
import Boy from "../../img/boy.png";
import ThumbUp from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import GlassEmoji from "../../img/glassesimoji.png";
import FloatingDev from "../FloatingDev/FloatingDev";
import Typed from "typed.js";

const Intro = () => {
  const name = useRef(null);
  useEffect(() => {
    const typed = new Typed(name.current, {
      strings: ["Michael Monir", "A Front End Developer"],
      loop: true,
      typeSpeed: 40,
      backSpeed: 50,
      smartBackspace: true,
      showCursor: true,
    });
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) =>
        entry.target.classList.toggle("show", entry.isIntersecting)
      );
    });

    const elements = document.querySelectorAll(".effect");
    elements.forEach((el) => observer.observe(el));
  });
  return (
    <div className="intro" id="Intro">
      <div className="i-left">
        <div className="i-headtext">
          <span>Hey! I Am </span>
          <div className="Typing">
            <span ref={name}></span>
          </div>
          <p>
            Energetic and detail-oriented front-end developer with a passion for
            creating web experiences that delight users.
          </p>
        </div>

        <button className="button i-btn">Hire Me</button>
        <div className="i-icons">
          <a href="#">
            <img src={Github} alt="" />
          </a>
          <a href="#">
            <img src={LinkedIn} alt="" />
          </a>
          <a href="#">
            <img src={Instgram} alt="" />
          </a>
        </div>
      </div>

      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={Koko} alt="" />
        <img src={GlassEmoji} alt="" className="effect" />

        <div className="crown effect">
          <FloatingDev image={Crown} txt={{ txt1: "Web", txt2: "Developer" }} />
        </div>

        <div className="ThumbUp effect">
          <FloatingDev
            image={ThumbUp}
            txt={{ txt1: "Best Design", txt2: "Awards" }}
          />
        </div>

        <div
          style={{ top: "18rem", left: "-0.3rem" }}
          className="blur blue"
        ></div>
        <div style={{ top: "23%", left: "71%" }} className="blur drk"></div>
      </div>
    </div>
  );
};

export default Intro;
