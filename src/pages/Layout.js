import React from "react";
import { Outlet } from "react-router-dom";

const Layout=()=>{
    return(
        <body class="bg-dark text-white" >
            <>
            <Outlet/> 
            </>
        </body>
        
    );
};
export default Layout;
