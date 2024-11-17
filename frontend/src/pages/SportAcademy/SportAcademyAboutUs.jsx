import React from "react";
import png4 from "../../assets/4.png";
import png3 from "../../assets/3.png";
import png2 from "../../assets/2.png";
import png1 from "../../assets/1.png";

const SportAcademyAboutUs = () => {
  return (
    <div className=" w-full sm:h-screen h-fit  flex flex-row justify-center bg-black">
      <div className=" lg:w-[80%] sm:w-[90%] w-[90%] sm:h-[90%] h-[150vh] flex sm:flex-row flex-col">
        {/* --------------- */}
        <div className=" sm:w-[50%] w-full sm:h-full h-[40%] relative">
          <div className=" w-full h-[50%]" style={{ backgroundImage: png4 }}>
            <img src={png4} className=" w-full h-full object-cover" />
            <div className=" w-full h-full absolute top-0 left-0  p-[3rem]">
              <p className=" lg:text-[20px]  text-[14px] font-bold font-cabin text-[black] ">
                Our foundation rests upon the unbreakable bond of unity. We
                stand not just as a team but as a family, united by a singular
                passion that fuels our aspirations and drives us towards
                greatness.
              </p>
            </div>
          </div>
          <div className=" w-full h-[50%] p-[2rem] flex flex-col justify-between bg-[#c7f849]">
            <h1 className=" font-mono font-bold text-[black]  lg:text-[5vw]  lg:leading-[5.5rem]  sm:text-[7.8vw] text-[12vw] sm:leading-[8vw] leading-[8.5vw]">
              We are United.
            </h1>
            <div>
              <button className="  font-cabin font-bold sm:text-[18px] text-[14px] ms:ps-[30px] ps-[15px] sm:pe-[30px] pe-[15px] sm:pt-[16px] pt-[8px] sm:pb-[16px] pb-[8px] bg-black text-white">
                ABOUT US
              </button>
            </div>
          </div>
        </div>

        {/* ===================== */}

        <div className=" sm:w-[25%] w-full sm:h-full h-[25%]  ">
          <img src={png3} className=" w-full h-full object-cover" />
        </div>

        {/* ------------------------------------- */}

        <div className=" sm:w-[25%] sm:h-full w-full h-[35%] flex flex-col ">
          <div className=" w-full h-[50%]">
            <img src={png2} className=" w-full h-full object-cover" />
          </div>
          <div className=" w-full h-[50%]">
            <img src={png1} className=" w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportAcademyAboutUs;
