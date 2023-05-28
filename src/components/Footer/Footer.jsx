import React from "react";
import "./footer.css";

import { AiFillFacebook, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Waves from "../../img/wave.png";
const Footer = () => {
  return (
    <div className="footer">
      <img src={Waves} alt="" />
      <div className="fcontent">
        <span>Eng.Michael.Monir@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.facebook.com/micheal.monir.3">
            <AiFillFacebook />
          </a>
          <a href="https://www.linkedin.com/in/eng-michael-monir-13a268205/">
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/MichaelMonir97">
            <AiFillGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
