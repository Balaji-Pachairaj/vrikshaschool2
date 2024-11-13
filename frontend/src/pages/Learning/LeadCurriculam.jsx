import React from "react";

const Component = ({
  content = {
    title: "Lata Acemey Comebacke",
    body: "Building Better User Experiences with a Product Thinking Approach",
    boxbg: "#ff643d",
    bg: "#E4E0E1",
    text: "black",
    textHover: "#ff643d",
    bodytext: "black",
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
    title: "Lata Acemey Comebacke",
    body: "Building Better User Experiences with a Product Thinking Approach",
    boxbg: "#ff643d",
    bg: "#E4E0E1",
    text: "black",
    textHover: "#ff643d",
    bodytext: "black",
  },
  {
    title: "Lata Acemey Comeba  ",
    body: "Building Better User Experiences with a Product Thinking Approach",
    boxbg: "#ff643d",
    bg: "#243642",
    text: "white",
    textHover: "#ff643d",
    bodytext: "white",
  },
  {
    title: "Lata Acemey Comebacke",
    body: "Building Better User Experiences with a Product Thinking Approach",
    boxbg: "#ff643d",
    bg: "#E4E0E1",
    text: "black",
    textHover: "#ff643d",
    bodytext: "black",
  },
  {
    title: "Lata Acemey Comebacke",
    body: "Building Better User Experiences with a Product Thinking Approach",
    boxbg: "#243642",
    bg: "#ff643d",
    text: "white",
    textHover: "#243642",
    bodytext: "white",
  },
  {
    title: "Lata Acemey Comeba  ",
    body: "Building Better User Experiences with a Product Thinking Approach",
    boxbg: "#ff643d",
    bg: "#243642",
    text: "white",
    textHover: "#ff643d",
    bodytext: "white",
  },
  {
    title: "Lata Acemey Comebacke",
    body: "Building Better User Experiences with a Product Thinking Approach",
    boxbg: "#ff643d",
    bg: "#E4E0E1",
    text: "black",
    textHover: "#ff643d",
    bodytext: "black",
  },
];

const LeadCurriculam = () => {
  return (
    <div className=" w-full min-h-screen bg-[#d6d6c6] pt-[2rem] pb-[2rem]">
      <div className=" w-full md:h-screen h-fit flex flex-row justify-center md:flex-nowrap flex-wrap gap-y-[1rem]">
        <div className=" md:w-[33vw] w-[100vw] md:h-full h-fit flex md:flex-col flex-row md:items-center  justify-evenly">
          <Component content={array[0]} />
          <Component content={array[1]} />
        </div>
        <div className=" md:w-[33vw] w-[100vw] md:h-full h-fit flex md:flex-col flex-row md:items-center  justify-evenly">
          <Component content={array[2]} />
          <Component content={array[3]} />
        </div>
        <div className=" md:w-[33vw] w-[100vw] md:h-full h-fit flex md:flex-col flex-row md:items-center  justify-evenly">
          <Component content={array[4]} />
          <Component content={array[5]} />
        </div>
      </div>
    </div>
  );
};

export default LeadCurriculam;
