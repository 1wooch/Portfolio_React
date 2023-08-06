import React from "react";
import { Link } from "react-router-dom";
// import "../css/Reset.css";
 import "../css/Navbar.css"


const Navbar = () => {
  return (

<nav class="navbar navbar-expand-lg navbar-dark ">
  <Link class="navbar-brand text-white" to="/">
    <h1>WON</h1>
  </Link>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <Link class="nav-link text-white" to="/">Main</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link text-white" to="/exp">Experience</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link text-white" to="/project">Projects</Link>
      </li>
      <li >
        <Link class="nav-link text-white" to="/contact">Contact</Link>
      </li>
    </ul>
  </div>
</nav>

  );
};

export default Navbar;