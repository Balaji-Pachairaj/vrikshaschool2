import React from "react";
import png4 from "../../assets/4.png";
import png3 from "../../assets/3.png";
import png2 from "../../assets/2.png";
import png1 from "../../assets/1.png";

const Com = ({ content = {} }) => {
  return (
    <div className=" lg:w-[25%] lg:h-[50vh] md:w-[33.3%] md:h-[40vh] sm:w-[48vw] sm:h-[40vh] w-full h-[40vh]   relative overflow-hidden">
      <div className=" w-full h-full hover:scale-110 duration-500 cursor-pointer ">
        <img className=" w-full h-full " src={content?.image} />
      </div>
      <div className=" w-full h-fit  absolute bottom-3 left-0 flex flex-col justify-end p-[2rem] ">
        <h1 className=" text-center font-kanit text-[24px] text-[white] font-[500]">
          {content?.title}
        </h1>
      </div>
    </div>
  );
};

const array = [
  { image: png1, title: "STRENGTH TRAINING" },
  { image: png2, title: "BODY_WEIGHT TRAINING" },
  { image: png3, title: "MUSLE TRAINING" },
  { image: png4, title: "BODY TRAINING" },
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
