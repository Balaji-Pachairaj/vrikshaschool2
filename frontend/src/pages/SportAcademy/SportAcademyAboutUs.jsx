import React from "react";


import png11 from "../../assets/sportsacademy/11.png"
import png12 from "../../assets/sportsacademy/12.png"
import png13 from "../../assets/sportsacademy/13.png"
import png14 from "../../assets/sportsacademy/14.png"
import png15 from "../../assets/sportsacademy/15.png"

const SportAcademyAboutUs = () => {
  return (
    <div className=" w-full sm:h-screen h-fit  flex flex-row justify-center bg-black">
      <div className=" lg:w-[80%] sm:w-[90%] w-[90%] sm:h-[90%] h-[150vh] flex sm:flex-row flex-col">
        {/* --------------- */}
        <div className=" sm:w-[50%] w-full sm:h-full h-[40%] relative">
          <div className=" w-full h-[50%]" style={{ backgroundImage: png14 }}>
            <img src={png13} className=" w-full h-full object-cover" />
            <div className=" w-[1000px] h-full absolute top-0 left-0  p-[3rem]">
              <p className=" lg:text-[20px]  text-[14px] font-bold font-cabin text-black ">
                At our sports academy, we believe in transforming the traditional narrative of sports education. We’re not just an academy for athletes; we’re a hub where sports meet personal growth, career aspirations, and a lifelong commitment to wellness. Our vision is to redefine sports as a mainstream career path, a tool for holistic development, and a way to inspire an active lifestyle that enriches every aspect of life.
              </p>
            </div>
          </div>
          <div className=" w-full h-[50%] p-[2rem] flex flex-col justify-between bg-[#c7f849]">
            <h1 className=" font-mono font-bold text-[black]  lg:text-[5vw]  lg:leading-[5.5rem]  sm:text-[7.8vw] text-[12vw] sm:leading-[8vw] leading-[8.5vw]">
            #NotAnUsual <br /> SportsAcademy
            </h1>
            <div>
              <button className="font-cabin font-bold sm:text-[18px] text-[14px] ms:ps-[30px] ps-[15px] sm:pe-[30px] pe-[15px] sm:pt-[16px] pt-[8px] sm:pb-[16px] pb-[8px] bg-black text-white">
                ABOUT US
              </button>
            </div>
          </div>
        </div>

        {/* ===================== */}

        <div className=" sm:w-[25%] w-full sm:h-full h-[25%]  ">
          <img src={png15} className=" w-full h-full object-cover" />
        </div>

        {/* ------------------------------------- */}

        <div className=" sm:w-[25%] sm:h-full w-full h-[35%] flex flex-col ">
          <div className=" w-full h-[50%]">
            <img src={png12} className=" w-full h-full object-cover" />
          </div>
          <div className=" w-full h-[50%]">
            <img src={png11} className=" w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportAcademyAboutUs;
  