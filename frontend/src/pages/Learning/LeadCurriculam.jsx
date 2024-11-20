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
      className={` md:w-[90%] w-[45%] md:h-[45%]  h-[30vh] bg-[${content?.boxbg}] overflow-visible rounded-[8px] font-cabin `}
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
    title: "Excellent Teachers",
    body: "100%",
    bodytext: "white",
    boxbg: "white",
    bg: "#1a1a1a",
    text: "white",
    textHover: "white",
  },
  {
    title: "Students Proficient in English",
    body: "100%",
    bodytext: "white",
    boxbg: "white",
    bg: "#1a1a1a",
    text: "white",
    textHover: "white",
  },
  {
    title: "Strong Foundation in Math and Science",
    body: "100%",
    bodytext: "white",
    boxbg: "white",
    bg: "#1a1a1a",
    text: "white",
    textHover: "white",
  },
  {
    title: "Personalised Progress",
    body: "100%",
    bodytext: "white",
    boxbg: "white",
    bg: "#1a1a1a",
    text: "white",
    textHover: "white",
  },
  {
    title: "Collaboration between Teachers and Parents",
    body: "100%",
    bodytext: "white",
    boxbg: "white",
    bg: "#1a1a1a",
    text: "white",
    textHover: "white",
  },
  {
    title: "Lata Acemey Comebacke",
    body: "100%",
    bodytext: "white",
    boxbg: "white",
    bg: "#1a1a1a",
    text: "white",
    textHover: "white",
  },
];

const LeadCurriculam = () => {
  return (
    <div className=" w-full min-h-screen bg-[black] pt-[2rem] pb-[2rem] overflow-hidden">
      <div className=" w-full h-fit flex flex-col items-center mb-[2vh] mt-[3vh]">
        <h1 className=" font-cabin xl:text-[4vw] lg:text-[4.5vw] md:text-[5vw] sm:text-[6vw] text-[6.5vw] text-[white] text-center font-[600] ">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c2ae8] to-[#00c4cc]">
        Lead Curriculum
                </span>
        </h1>
        <p className=" ps-8 pe-8  md:max-w-[85%] max-w-[100%] font-cabin lg:text-[20px] md:text-[16px] text-[12px]  text-[white] text-center font-[400] mt-[1rem]">
          Academic excellence powered by Lead School
        </p>
        <p className=" ps-8 pe-8  md:max-w-[85%] max-w-[100%] font-cabin lg:text-[20px] md:text-[16px] text-[12px]  text-[white] text-center font-[400] mt-[1rem]">
          Our school has partnered with LEAD School which is an Academic
          Excellence System who towards empowering India by making excellent
          education accessible and affordable to every child.
        </p>
        <p className=" ps-8 pe-8  italic md:max-w-[85%] max-w-[100%] font-cabin lg:text-[20px] md:text-[16px] text-[12px]  text-[white] text-center font-[400] mt-[1rem]">
          They are built on 5 Pillars of Excellence.
        </p>
      </div>
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
          <div
            className={` md:w-[90%] w-[45%] md:h-[45%]  h-[30vh] bg-transparent overflow-visible rounded-[8px] `}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LeadCurriculam;
