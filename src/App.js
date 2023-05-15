//import ReactDOM from "react-dom";

import "./css/App.css"
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Main from "./pages/Main";
import Exp from "./pages/Exp";
import Contact from "./pages/Contact";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";

export default function App(){
  return(
    <BrowserRouter>
    <div class="p-3 mb-2 bg-dark text-white">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="exp" element={<Exp />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
      <Footer/>
    </div>
  </BrowserRouter>
  );
}
