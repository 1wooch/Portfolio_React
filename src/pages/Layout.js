import React from "react";
import { Outlet } from "react-router-dom";
import "../css/Reset.css";
import "../css/common.css";


const Layout=()=>{
    return(
            <>
            <Outlet/> 
            </>
    );
};
export default Layout;
