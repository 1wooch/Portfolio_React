import React, { useRef, useEffect } from "react";
import lottie from "lottie-web";
import jsonData from "../Json_data/Exp.json"; 


function Exp(){
    const container = useRef(null);
    function generateRandomNumber() {
        return Math.floor(Math.random() * 4);
      }
      useEffect(() => {
        const AnimationRandomNum = generateRandomNumber();
        lottie.loadAnimation({
          container: container.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: require(`../Resource/Lottie/${jsonData.MainAnime[AnimationRandomNum]}`),
        });
      }, []);

    return (
        <div className="row">
        <div className="col-md-6">
          <h1>Education:</h1>
          <ul>
            {jsonData.education &&
              jsonData.education.map((edu, index) => (
                <li key={index}>
                  <h3>{edu.SchoolName}</h3>
                  <p>{edu.Degree}</p>
                  <p>{edu.Major}</p>
                </li>
              ))}
          </ul>
  
          <h1>Experience:</h1>
          <ul>
            {jsonData.experience &&
              jsonData.experience.map((exp, index) => (
                <li key={index}>
                  <h3>{exp.WorkPlace}</h3>
                  <p>{exp.Position}</p>
                  <p>{exp.Place}</p>
                </li>
              ))}
          </ul>
        </div>
  
        <div className="col-md-6">
          <div ref={container} style={{ width: "100%", height: "100%" }}></div>
        </div>
      </div>
    );
}

export default Exp;
