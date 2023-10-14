import React, { useRef, useEffect } from "react";
import lottie from "lottie-web";
import jsonData from "../Json_data/Main.json";
import Typewriter from "typewriter-effect";

//import ResumePDF from "../Resource/resume.pdf";

import "../css/Main.css";

import email from "../Resource/email.png";

function Main() {
  const container = useRef(null);

  function generateRandomNumber() {
    return Math.floor(Math.random() * 5);
  }

  useEffect(() => {
    const AnimationRandomNum = generateRandomNumber();
    document.title="Won | Main";
    const AnimeName = jsonData.MainAnime[AnimationRandomNum];
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      // animationData: require(`../Resource/Lottie/${jsonData.MainAnime[AnimationRandomNum]}`),
      animationData: require(`../Resource/Lottie/${AnimeName}`),
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
                  <h1>Hello!</h1>
                      <div>
                      <Typewriter
                          options={{
                            strings: ['My name is Wonwoo Choi', 'You can call me Won!'],
                            autoStart: true,
                            loop: true,
                          }}
                        />
                      </div>
                        
                    </div>
                    <div className="">
                    
                    <p>{randomFacts[generateRandomNumber()]}</p>
                    </div>
                    <div className="d-flex gap-2">
                     {links.map((link,index) =>
                        link.icon === "" ? (
                          <div key={index}>
                            <a href={link.url}>
                            <button type="button" className="btn btn-default bg-light">
                             {link.name}
                            </button>
                            </a>
                          </div>
                        )
                        :
                        (
                          <div key={index} className="d-inline">
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
                    <div onClick={(e) => {window.location.href ='mailto:onechoo1106@gmail.com';}}><img src={email} width={50} height={50} alt="Email" /> </div>

                  </div>
                  <div>
                  </div>
                </div>
                
            </div>

    </div>
  );
}

export default Main;
