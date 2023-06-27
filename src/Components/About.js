import React from "react";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Html from "./Pictures/html.svg";
import Css from "./Pictures/css.svg";
import JavaScript from "./Pictures/javascript.svg";
import ReactIcon from "./Pictures/react.svg";
import Git from "./Pictures/git.png";
import Figma from "./Pictures/figma.svg.png";
import ChatGPT from "./Pictures/chatGPT.svg.png";

import "./Styles/About.css";


function About() { 
    return (
        <section>
          <div className="about--section">
            <div className="about--box">
              
                
     
            </div>
          </div>
          <div className="about--second--two">
            <div className="about--box--two">
              <h3>I'm a passionate and dedicated candidate for the position of the junior front-end developer</h3>
              <div className="about--skills">
                  <div className="tech--section">
                    <div className="left-content">
                      <h2>Languages I speak</h2>
                    </div>
                    <div className="right-content">
                      <img className="skills--icons" src={Html} alt="icon" />
                      <img className="skills--icons" src={Css} alt="icon" />
                      <img className="skills--icons" src={JavaScript} alt="icon" />
                    </div>
                  </div>
                  <div className="tools--section">
                    <div className="left-content">
                      <h2>Tools I use</h2>
                    </div>
                    <div className="right-content">
                      <img className="skills--icons" src={ReactIcon} alt="icon" />
                      <img className="skills--icons" src={Git} alt="icon" />
                      <img className="figma--icon" src={Figma} alt="icon" />
                      <img className="skills--icons" src={ChatGPT} alt="icon" />
                    </div>
                </div>
                </div>
                <div className="about--socials">
              <a id="github-icon" href="https://github.com/qolvap">
              <FaGithub />
              </a>
              </div>
</div>
          </div>
        </section>
  );
}
     
  
  export default About;