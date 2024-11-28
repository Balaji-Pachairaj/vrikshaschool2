import React from "react";

import png21 from "../../assets/sportsacademy/21.png"
import png22 from "../../assets/sportsacademy/22.png"
import png23 from "../../assets/sportsacademy/23.png"
import png24 from "../../assets/sportsacademy/24.png"

const Com = ({ content = {} }) => {
  return (
    <div className=" lg:w-[25%] lg:h-[50vh] md:w-[33.3%] md:h-[40vh] sm:w-[48vw] sm:h-[40vh] w-full h-[40vh]   relative overflow-hidden">
      <div className=" w-full h-full hover:scale-110 duration-500 cursor-pointer ">
        <img className=" w-full h-full " src={content?.image} />
      </div>
      <div className=" w-full h-fit  absolute bottom-3 left-0 flex flex-col justify-end p-[2rem] ">
        <h1 className=" text-center font-kanit text-[24px] text-[white] font-[500] [text-shadow:2px_2px_4px_rgb(0_0_0_/_50%)] [-webkit-text-stroke:0.5px_rgba(0,0,0,0.5)]">
          {content?.title}
        </h1>
      </div>
    </div>
  );
};

const array = [
  { image: png21, title: "Professional Sports Training Program" },
  { image: png22, title: "Sports as a Career Program" },
  { image: png23, title: "Active Lifestyle and Wellness Program" },
  { image: png24, title: "Youth Leadership Through Sports Program" },
];

const SportAcademyProgramOffer = () => {
  return (
    <div className=" w-full h-fit flex flex-col justify-center items-center pt-[10vh] pb-[10vh] ">
      <div className=" w-full flex flex-row flex-wrap  md:justify-start justify-center ">
        {array?.map((item) => {
          return <Com content={item} />;
        })}
      </div>
    </div>
  );
};

export default SportAcademyProgramOffer;
