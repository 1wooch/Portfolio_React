import React, { useRef, useEffect } from "react";
import lottie from "lottie-web";
import jsonData from "../Json_data/Exp.json"; 
import "../css/Reset.css";

import "../css/Exp.css";
import "../css/common.css";

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
      <div className="main-container">
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-6">
          <div className="d-flex justify-content-sm-end" ref={container} style={{ width: "80%", height: "100%" }}></div>
        </div>
        <div className="col-md-4 d-flex align-items-center">
          <h1 className="text-center">Education & Experience</h1>
        </div>
        <div className="col-md-1"></div>
      </div>


      
      <h1 className="text-center">🏫 Education</h1>

      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <ul className="list-group d-flex flex-row">
            {jsonData.Education &&
              jsonData.Education.map((edu, index) => (
                <li key={index} className="list-group-item flex-fill">
                  <h3>{edu.SchoolName}</h3>
                  <p>{edu.Degree}</p>
                  <p>{edu.Major}</p>
                </li>
              ))}
          </ul>
        </div>
  


        <h1 className="text-center">💼 Experience</h1>

        <div className="row">
          <div className="col-md-1"></div>
          
          <div className="col-md-10">
            <ul className="list-group">
              {jsonData.experience &&
                jsonData.experience.map((exp, index) => (
                  <li key={index} className="list-group-item">
                    <h3>{exp.WorkPlace}</h3>
                    <p>{exp.Position}</p>
                    <p>{exp.Place}</p>
                  </li>
                ))}
            </ul>
            </div>
          </div>
      </div>
    </div>
    
    );
}

export default Exp;
