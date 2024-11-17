import React from "react";
import overviewImage from "../../assets/Learning/training.png";

const Com = ({ title = "", text = "", index }) => {
  return (
    <div className=" w-full h-[10rem] flex flex-col gap-[0rem] justify-center ps-[3rem] border-b-[1px] border-[#3b3b3b]">
      <p className="  text-[42px] font-inter font-bold text-[#c7f849]">
        {index}
      </p>

      <h1 className=" text-[22px] text-white font-inter  font-bold ">
        {title}
      </h1>
      <p className=" text-[20px] text-[#666] font-inter">{text}</p>
    </div>
  );
};

const content = [
  { title: "INTRODUCTION", text: "Who are we" },
  { title: "INTRODUCTION", text: "Who are we" },
  { title: "INTRODUCTION", text: "Who are we" },
  { title: "INTRODUCTION", text: "Who are we" },
  { title: "INTRODUCTION", text: "Who are we" },
  { title: "INTRODUCTION", text: "Who are we" },
];

const SportAcademyTrainingMobile = () => {
  return (
    <div
      style={{ backgroundImage: `url(${overviewImage})` }}
      className=" w-full h-fit pb-[10vh]  relative bg-[url('../../assets/Learning/learningOverview.webp')] bg-cover bg-center flex flex-col items-center justify-center "
    >
      <div className=" w-[90%] h-fit border-[1px] border-[#3b3b3b]">
        <div className=" w-full h-[7rem]  border-b-[1px] border-[#3b3b3b]">
          <div className=" w-full h-full flex flex-col justify-center ps-[2rem] pe-[2rem] pb-[0rem] lg:gap-[3rem] gap-[1rem] ">
            <h1 className=" font-inter lg:text-[3.5vw]  text-[2rem] font-semibold  text-white">
              The line up
            </h1>
          </div>
        </div>

        {content?.map((item, index) => {
          return (
            <Com title={item?.title} text={item?.text} index={index + 1} />
          );
        })}
      </div>
    </div>
  );
};

export default SportAcademyTrainingMobile;
