import React, { useContext, useState } from "react";
import "./navbar.css";
import Toggle from "./toggle/Toggle";
import { currentMode } from "../../App";
import { Link } from "react-scroll";
import { BiMenu } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
const Navbar = () => {
  const [mode, updateState] = useContext(currentMode);
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="logo">Michael</div>
        <Toggle updateState={updateState} />
      </div>

      <div className="n-right">
        <div className="n-list">
          <ul>
            <Link spy={true} smooth={true} to="Intro" activeClass="activeClass">
              <li>Home</li>
            </Link>
            <Link spy={true} smooth={true} to="Services">
              <li>Serivces</li>
            </Link>
            <Link spy={true} smooth={true} to="Experince">
              <li>Experience</li>
            </Link>

            <Link spy={true} smooth={true} to="Portfolio">
              <li>Protfolio</li>
            </Link>
            <Link spy={true} smooth={true} to="Testimonials">
              <li>Testimonial</li>
            </Link>
          </ul>
        </div>
        <div className="n-btn">
          <button className="button">Contact</button>
        </div>
      </div>

      <div className="n-right-smallScreen">
        <BiMenu className="menu-btn open" onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className="n-right-smallScreen-overlay slide-bottom">
            <IoMdClose
              className="menu-btn close"
              onClick={() => setToggleMenu(false)}
            />
            <ul>
              <Link
                spy={true}
                smooth={true}
                to="Intro"
                activeClass="activeClass"
                onClick={() => setToggleMenu(false)}
              >
                <li>Home</li>
              </Link>

              <Link
                spy={true}
                smooth={true}
                to="Services"
                onClick={() => setToggleMenu(false)}
              >
                <li>Serivces</li>
              </Link>
              <Link
                spy={true}
                smooth={true}
                to="Experince"
                onClick={() => setToggleMenu(false)}
              >
                <li>Experience</li>
              </Link>

              <Link
                spy={true}
                smooth={true}
                to="Portfolio"
                onClick={() => setToggleMenu(false)}
              >
                <li>Protfolio</li>
              </Link>
              <Link
                spy={true}
                smooth={true}
                to="Testimonials"
                onClick={() => setToggleMenu(false)}
              >
                <li>Testimonial</li>
              </Link>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
