//import ReactDOM from "react-dom";

import "./css/App.css"
import React from "react";

import { BrowserRouter, Routes, Route ,Link} from "react-router-dom";

import Layout from "./pages/Layout";
import Main from "./pages/Main";
import Exp from "./pages/Exp";
import Contact from "./pages/Contact";
import Navbar from "./pages/Navbar";

/*
<BrowserRouter>
      <div className="container">
        
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Main />} />
            <Route path="main" element={<Main />} />
            <Route path="exp" element={<Exp />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
*/
export default function App(){
  return(
    <BrowserRouter>
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="exp" element={<Exp />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  </BrowserRouter>
  );
}
//ReactDOM.render(<App />, document.getElementById("root"));