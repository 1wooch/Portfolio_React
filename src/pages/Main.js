import React, { useRef, useEffect } from "react";
import lottie from "lottie-web";
import jsonData from "../Json_data/Main.json";

function Main() {
  const container = useRef(null);

  function generateRandomNumber() {
    return Math.floor(Math.random() * 4);
  }

  useEffect(() => {
    const AnimationRandomNum = generateRandomNumber();
    //const MainArticleRandomNum = generateRandomNumber();

    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require(`../Resource/Lottie/${jsonData.MainAnime[AnimationRandomNum]}`),
    });
  }, []);

  const description = jsonData.Description[0];
  const content3 = description.content3[generateRandomNumber()];

  return (
    <div>
      <div className="d-flex align-items-center justify-content-center">
        <div className="w-50 p-4" ref={container}></div>
        <div className="w-50 p-4">
          <h1 className="text-center">My name is Wonwoo Choi</h1>
          <p>{description.content1}</p>
          <p>{description.content2}</p>
          <p>{content3}</p>
          <div>GitHub: <a href={description["GitHub:"]}>{description["GitHub:"]}</a></div>
          <div>LinkedIn: <a href={description["LinkedIn:"]}>{description["LinkedIn:"]}</a></div>
          <div>Resume: <a href={description.Resume}>{description.Resume}</a></div>
        </div>
      </div>
    </div>
  );
}

export default Main;






















// import React, { useRef, useEffect } from "react";
// import lottie from "lottie-web";
// import maindata from"../Json_data/Main.json";


// function Main() {
//   const container = useRef(null);

//   useEffect(() => {
//     lottie.loadAnimation({
//       container: container.current,
//       renderer: "svg",
//       loop: true,
//       autoplay: true,
//       animationData: require("../Resource/Lottie/certificategraduation.json"),
//     });
//   }, []);

//   return (
//     <div>
//       <h1>Testing hi!</h1>
//       <div className="d-flex align-items-center justify-content-center">
//       <div className="w-50 p-4" ref={container}></div>
//       <div className="w-50 p-4">
//         <h1 className="text-center">My name is Wonwoo Choi</h1>
//       </div>
//     </div>
//     </div>
//   );
// }

// export default Main;
