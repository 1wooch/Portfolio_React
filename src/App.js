import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Main from "./pages/Main";
import Exp from "./pages/Exp";
import Contact from "./pages/Contact";


export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Main/>}/>
          <Route path="exp" element={<Exp/>}/>
          <Route path="contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}
//ReactDOM.render(<App />, document.getElementById("root"));