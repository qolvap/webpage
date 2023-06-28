import React from "react";
import { Link } from "react-router-dom";
import "./Styles/Nav.css";

export default function Navbar() {
  return (
    <nav>
      <div className="navbar--header">
      <h1>Pavlo Grebennikov</h1>
      <p>Front-end Developer</p>
      
      <li>
          <Link to="/" className="nav--sect">
            About
          </Link>
      </li>  
      <li>
          <Link to="/Projects" className="nav--sect">
            Projects
          </Link>
      </li>
      <li>
          <Link to="/Footer" className="nav--sect">
            Contact
          </Link>
      </li>
     
      </div>
    </nav>
  );
}

