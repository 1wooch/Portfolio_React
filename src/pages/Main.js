import React, { useRef, useEffect } from "react";
import lottie from "lottie-web";
function Main(){
   const container = useRef(null);
   useEffect(()=>{
    lottie.loadAnimation({
        container: container.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: require("../Resource/Lottie/24321-certificate-for-graduation.json"),
    });
   },[]);
   return (
    <div>
        <div className="container" ref={container}></div>
    </div>
   );
}

export default Main;