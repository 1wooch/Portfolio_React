import React, { useRef, useEffect } from "react";
import lottie from "lottie-web";
import jsonData from "../Json_data/Main.json";
import "../css/common.css";
//import ResumePDF from "../Resource/resume.pdf";

function Main() {
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
  const randomFacts = jsonData.randomFacts;
  const links = jsonData.links;


  return (
    <div className="main-container">
            <div className="d-flex align-items-center justify-content-center">
                <div className="w-50 p-4" ref={container}></div>
                <div className="w-50 p-4">
                  
                  <h2 className="text-center">My name is Wonwoo Choi</h2>
                    <div className="w-50 p-12">
                    <p>Hello!</p>
                    <p>You can call me Won!</p>
                    <p>{randomFacts[generateRandomNumber()]}</p>
                    </div>
                    <div className="d-flex gap-2">
                     {links.map((link) =>
                        link.icon === "" ? (
                          <div>
                            <a href={link.url}>
                            <button type="button" class="btn btn-default bg-light">
                             {link.name}
                            </button>
                            </a>
                          </div>
                        )
                        :
                        (
                          <div className="d-inline">
                            <a href={link.url}>
                              <img
                                src={`/logos/${link.icon}`}
                                alt={link.name}
                                width="50"
                                height="50"
                              />
                            </a>
                          </div>
                        )
                      )}
                  </div>
                </div>
                
            </div>

    </div>
  );
}

export default Main;
