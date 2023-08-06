//import ReactDOM from "react-dom";
import "./css/Reset.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./css/common.css"
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Main from "./pages/Main";
import Exp from "./pages/Exp";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";

export default function App(){
  return(
    <BrowserRouter>
    <div className="main-container  text-white">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="exp" element={<Exp />} />
          <Route path="project" element={<Project />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
    <Footer/>

  </BrowserRouter>
  );
}
