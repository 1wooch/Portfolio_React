import React, { useRef, useEffect } from "react";
import lottie from "lottie-web";
import jsonData from "../Json_data/Main.json";
import Typewriter from "typewriter-effect";

//import ResumePDF from "../Resource/resume.pdf";

import "../css/Main.css";

function Main() {
  const container = useRef(null);

  function generateRandomNumber() {
    return Math.floor(Math.random() * 4);
  }

  useEffect(() => {
    const AnimationRandomNum = generateRandomNumber();
    document.title="Won | Main";

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
    <div>
 


            <div className="contentDiv d-flex  ">
                <div className="mainAni w-50 p-3" ref={container}style={{ width: "80%", height: "80%" }}></div>
                <div className="details  w-50 p-3  ">
                  <div className="Typewriter ">
                        <Typewriter
                          options={{
                            strings: ['My name is Wonwoo Choi', 'You can call me Won!'],
                            autoStart: true,
                            loop: true,
                          }}
                        />
                    </div>
                    <div className="">
                    <p>Hello!</p>
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
