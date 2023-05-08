import React from "react";
import { Link } from "react-router-dom";//BrowserRouter,Route,

function Navbar(){
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Won</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/exp">Experience</Link>
                </li>
            </ul>
        </nav>
    );
};
export default Navbar;
