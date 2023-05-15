import React, { useRef, useEffect } from "react";
import lottie from "lottie-web";

function Main() {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../Resource/Lottie/certificategraduation.json"),
    });
  }, []);

  return (
    <div>
      <h1>Testing hi!</h1>
      <div className="d-flex align-items-center justify-content-center">
      <div className="w-50 p-4" ref={container}></div>
      <div className="w-50 p-4">
        <h1 className="text-center">My name is Wonwoo Choi</h1>
      </div>
    </div>
    </div>
  );
}

export default Main;
