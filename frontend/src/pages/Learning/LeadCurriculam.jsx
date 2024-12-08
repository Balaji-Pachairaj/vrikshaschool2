import React from "react";
import lead from "../../assets/Learning/lead.JPG"
import vector1 from "../../assets/Learning/11.png"
import vector2 from "../../assets/Learning/12.png"
import vector3 from "../../assets/Learning/13.png"
import vector4 from "../../assets/Learning/14.png"
import vector5 from "../../assets/Learning/15.png"


const Component = ({
  content = {
    title: "Lata Acemey Comebacke",
    body: "Building Better User Experiences with a Product Thinking Approach",
    boxbg: "#ff643d",
    bg: "#E4E0E1",
    text: "black",
    textHover: "#ff643d",
    bodytext: "black",
    vectorImg: vector1,
  },
}) => {
  return (
    <div
      style={{ backgroundColor: content?.boxbg }}
      className="md:w-[90%] w-[45%] md:h-[45%] h-[30vh] overflow-visible rounded-[8px] font-cabin"
    >
      <div
        style={{ background: `linear-gradient(135deg, #7c2ae8, #00c4cc)` }}
        className="w-full h-full flex flex-col justify-start gap-[2.5rem] md:p-[2rem] p-[1.5rem] rounded-[8px] hover:rotate-6 duration-300 relative"
      >
        <h1
          style={{ color: 'white' }}
          className="w-full font-[500] lg:text-[24px] md:text-[20px] text-[18px] duration-300"
        >
          {content?.title}
        </h1>
        <p
          style={{ color: 'white' }}
          className="font-[400] font-poppins lg:text-[20px] md:text-[16px] text-[16px]"
        >
          {content?.body}
        </p>
        
        <img 
          src={content?.vectorImg} 
          alt="Vector" 
          className="absolute bottom-4 right-4 w-28 h-28"
        />
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
    vectorImg: vector1,
  },
  {
    title: "Students Proficient in English",
    body: "100%",
    bodytext: "white",
    boxbg: "white",
    bg: "#1a1a1a",
    text: "white",
    textHover: "white",
    vectorImg: vector4,
  },
  {
    title: "Strong Foundation in Math and Science",
    body: "100%",
    bodytext: "white",
    boxbg: "white",
    bg: "#1a1a1a",
    text: "white",
    textHover: "white",
    vectorImg: vector2,
  },
  {
    title: "Personalised Progress",
    body: "100%",
    bodytext: "white",
    boxbg: "white",
    bg: "#1a1a1a",
    text: "white",
    textHover: "white",
    vectorImg: vector5,
  },
  {
    title: "Collaboration between Teachers and Parents",
    body: "100%",
    bodytext: "white",
    boxbg: "white",
    bg: "#1a1a1a",
    text: "white",
    textHover: "white",
    vectorImg: vector3,
  },
  
];

const LeadCurriculam = () => {
  return (
    <div className="w-full min-h-screen bg-[black] pt-[2rem] pb-[2rem] overflow-hidden">
      <div className="relative w-[95%] h-[90vh] mb-[4rem] mx-auto rounded-2xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src={lead}
            alt="Lead Curriculum"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        
        <div className="absolute bottom-[1rem] left-[2rem] bg-white p-[1.5rem] rounded-lg shadow-xl max-w-[450px]">
          <h1 className="font-bold text-[2rem] font-[600] mb-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c2ae8] to-[#00c4cc]">
              Lead Curriculum
            </span>
          </h1>
          <p className="font-bold text-[16px] text-gray-800 mb-2">
            Academic excellence powered by Lead School
          </p>
          <p className="font-cabin text-[14px] text-gray-600 mb-2">
          Our school has partnered with LEAD School which is an Academic Excellence System who towards empowering India by making excellent education accessible and affordable to every child.
          </p>
          
        </div>
      </div>

      <div className="w-full md:h-screen h-fit flex flex-row justify-center md:flex-nowrap flex-wrap gap-y-[1rem]">
        <div className="md:w-[33vw] w-[100vw] md:h-full h-fit flex md:flex-col flex-row md:items-center  justify-evenly">
          <Component content={array[0]} />
          <Component content={array[1]} />
        </div>
        <div className="md:w-[33vw] w-[100vw] md:h-full h-fit flex md:flex-col flex-row md:items-center  justify-evenly">
          <Component content={array[2]} />
          <Component content={array[3]} />
        </div>
        <div className="md:w-[33vw] w-[100vw] md:h-full h-fit flex md:flex-col flex-row md:items-center  justify-evenly">
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
