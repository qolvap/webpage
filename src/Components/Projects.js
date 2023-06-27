import React from "react";
import "./Styles/Projects.css";
import ProjImg1 from "./Pictures/proj1.png";
import ProjImg2 from "./Pictures/proj2.png";


function Projects() { 
    return (
        <section>
       <div className="projects--container">
       <div className="project--two">
          <div className="project--img">
          <a href="https://qolvap.github.io/second-web-project/" target="_blank" rel="noopener noreferrer">
            <img className="screenshot" src={ProjImg2} alt="project screenshot" />
            </a>
          </div>
          <div className="project--describtion">
          <a href="https://qolvap.github.io/second-web-project/" target="_blank" rel="noopener noreferrer">
            <h3>Ecommerce for the photo prints shop</h3>
            </a>
            <div className="project--paragraphs">
            <p>Html</p><p>Css</p><p>JavaScript</p><p>React</p>
            </div>
          </div>
        </div>
        <div className="project--one">
          <div className="project--img">
          <a href="https://qolvap.github.io/first-web-proj/" target="_blank" rel="noopener noreferrer">
            <img className="screenshot" src={ProjImg1} alt="project screenshot" />
            </a>
          </div>
          <div className="project--describtion">
          <a href="https://qolvap.github.io/first-web-proj/" target="_blank" rel="noopener noreferrer">
            <h3>Website for the legal transport firm</h3>
            </a>
            <div className="project--paragraphs">
            <p>Html</p><p>Css</p><p>JavaScript</p><p>React</p>
            </div>
          </div>
        </div>
       </div>
    </section>
  );
}
     
  
  export default Projects;