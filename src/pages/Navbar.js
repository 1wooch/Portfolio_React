import React from "react";
import { Link } from "react-router-dom";
import "../css/Reset.css";
import "../css/Navbar.css"
import "../css/common.css"


const Navbar = () => {
  return (
    <div className="main-container">    

<nav className="navbar navbar-expand-lg navbar-lightbg-dark ">
      <Link className="navbar-brand text-white" to="/"><h1>WON</h1></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">Main</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/exp">Experience</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;