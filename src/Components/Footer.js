import React from "react";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import "./Styles/Footer.css";


function Footer() { 
    return (
        <section>
              <div>
              <div className="foot">
                    <div className="foot--container">
                        <div className="row">
                          <div className="about--socials">
                            <a id="github-icon" href="https://github.com/qolvap">
                              <FaGithub />
                            </a>
                            <a id="linkedin-icon" href="https://www.linkedin.com/in/qolvap/">
                              <FaLinkedin />
                            </a>
                          </div>
                        </div>    
                </div>
            </div>
                    <div className="contact--banner">
                        <div className="contact--box">
                            <h2 className="contact--text--header">Don`t hesitate to contact me</h2>
                            <div className="contact-row">
                              <div className="contact-text-column">
                              <h4 className="contact--text">Contact:</h4>
                              </div>
                              <div className="column-email">
                              <p className="email--paragraph">qolvap@gmail.com</p>
                              </div>
                              </div>
                        </div>
                    </div>
                    
        </div>

    </section>
  );
}
     
  
  export default Footer;