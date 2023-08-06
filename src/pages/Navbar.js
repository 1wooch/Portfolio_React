import React from "react";
import { Link } from "react-router-dom";
// import "../css/Reset.css";
 import "../css/Navbar.css"


const Navbar = () => {
  return (

<nav className="navbar navbar-expand-lg navbar-dark ">
  <Link className="navbar-brand text-white" to="/">
    <h1>WON</h1>
  </Link>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
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
        <Link className="nav-link text-white" to="/project">Projects</Link>
      </li>
      <li >
        <Link className="nav-link text-white" to="/contact">Contact</Link>
      </li>
    </ul>
  </div>
</nav>

  );
};

export default Navbar;