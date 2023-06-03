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
        <div className="exp-page">
            <div className="exp-list">
                <h2>Education</h2>
                {jsonData.education.map((item, index) => (
                    <div key={`education-${index}`} className="exp-item">
                        <h3>{item.SchoolName}</h3>
                        <p>{`${item.Degree}, ${item.Major}`}</p>
                        <p>{`${item.StartMonth} ${item.StartYear} - ${item.EndMonth} ${item.EndYear}`}</p>
                        <p>GPA: {item.GPA}</p>
                    </div>
                ))}

                <h2>Experience</h2>
                {jsonData.experience.map((item, index) => (
                    <div key={`experience-${index}`} className="exp-item">
                        <h3>{item.WorkPlace}</h3>
                        <p>{item.Position}</p>
                        <p>{`${item.StartMonth} ${item.StartYear} - ${item.EndMonth} ${item.EndYear}`}</p>
                        <p>{item.Description}</p>
                    </div>
                ))}
            </div>
            <div className="exp-animation" ref={container}></div>
        </div>
    );
}

export default Exp;
