
import React from "react";

const Component = ({
  content = {
    title: "Art & Craft",
    body: "Nurturing creativity and artistic expression through various mediums",
    boxbg: "#000000",
    bg: "#1a1a1a",
    text: "white",
    textHover: "#ff643d",
    bodytext: "white",
  },
}) => {
  return (
    <div
      style={{ backgroundColor: content?.boxbg }}
      className={` md:w-[90%] w-[45%] md:h-[45%]  h-[30vh] bg-[${content?.boxbg}] overflow-visible rounded-[8px] `}
    >
      <div
        style={{ backgroundColor: content?.bg }}
        className={` w-full h-full flex flex-col justify-start gap-[2.5rem] md:p-[2rem] p-[1.5rem] bg-[${content?.bg}] rounded-[8px] hover:rotate-6 duration-300`}
      >
        <h1
          className={` w-full  font-[500] lg:text-[24px] md:text-[20px] text-[16px] text-[${content?.text}] hover:text-[${content?.textHover}] duration-300`}
        >
          {content?.title}
        </h1>
        <p
          className={` font-[400] font-poppins lg:text-[20px] md:text-[16px] text-[12px] text-[${content?.bodytext}]`}
        >
          {content?.body}
        </p>
      </div>
    </div>
  );
};

const array = [
  {
    title: "Art & Craft",
    body: "Nurturing creativity and artistic expression through various mediums",
    bodytext: "white",
    boxbg: "white",
    bg: "#1a1a1a",
    text: "white",
    textHover: "#ff643d",
  },
  {
    title: "Music & Dance",
    body: "Exploring rhythm, melody, and movement in classical and contemporary styles",
    bodytext: "white",
    boxbg: "white",
    bg: "#1a1a1a",
    text: "white",
    textHover: "#ff643d",
  },
  {
    title: "Sports & Games",
    body: "Building teamwork, discipline, and physical fitness through diverse sports activities",
    bodytext: "white",
    boxbg: "white",
    bg: "#1a1a1a",
    text: "white",
    textHover: "#ff643d",
  },
  {
    title: "Public Speaking",
    body: "Developing confidence and communication skills through debates and presentations",
    bodytext: "white",
    boxbg: "white",
    bg: "#1a1a1a",
    text: "white",
    textHover: "#ff643d",
  },
  {
    title: "Environmental Club",
    body: "Creating awareness and responsibility towards nature and sustainability",
    bodytext: "white",
    boxbg: "white",
    bg: "#1a1a1a",
    text: "white",
    textHover: "#ff643d",
  },
  {
    title: "Robotics & Coding",
    body: "Exploring technology through hands-on learning and creative problem-solving",
    bodytext: "white",
    boxbg: "white",
    bg: "#1a1a1a",
    text: "white",
    textHover: "#ff643d",
  },
];

const Cooverview = () => {
  return (
    <div className="w-full min-h-screen bg-[#121212] pt-[2rem] pb-[2rem]">
      <div className="w-full h-fit flex flex-col items-center mb-[2vh] mt-[3vh]">
        <h1 className="font-cabin xl:text-[4vw] lg:text-[4.5vw] md:text-[5vw] sm:text-[6vw] text-[6.5vw] text-[white] text-center font-[600]">
          Co-Curricular Activities
        </h1>
    
      </div>
      <div className="w-full md:h-screen h-fit flex flex-row justify-center md:flex-nowrap flex-wrap gap-y-[1rem]">
        <div className="md:w-[33vw] w-[100vw] md:h-full h-fit flex md:flex-col flex-row md:items-center justify-evenly">
          <Component content={array[0]} />
          <Component content={array[1]} />
        </div>
        <div className="md:w-[33vw] w-[100vw] md:h-full h-fit flex md:flex-col flex-row md:items-center justify-evenly">
          <Component content={array[2]} />
          <Component content={array[3]} />
        </div>
        <div className="md:w-[33vw] w-[100vw] md:h-full h-fit flex md:flex-col flex-row md:items-center justify-evenly">
          <Component content={array[4]} />
          <Component content={array[5]} />
        </div>
      </div>
    </div>
  );
};

export default Cooverview;
