import React, { useState } from "react";

import png4 from "../../assets/4.png";
import png3 from "../../assets/3.png";
import png2 from "../../assets/2.png";
import png1 from "../../assets/1.png";

const Com = ({ state = "0", title = "", body = "", onClick = () => {} }) => {
  return (
    <>
      <div className=" w-full md:h-[13%] h-[70px]   flex flex-row justify-between items-center">
        <h1 className=" lg:text-[22px] md:text-[16px] text-[18px] font-kanit text-[white] font-[500]">
          Do you offer personal training sessions?
        </h1>
        <buttton
          onClick={onClick}
          className="text-[40px] font-kanit text-[#d0d0d0] font-thin p-[0.5rem] cursor-pointer"
        >
          {state === "1" ? "-" : "+"}
        </buttton>
      </div>
      {state === "1" && (
        <div className=" w-full max-h-[25%] h-fit pb-[0.5rem] text-[#d0d0d0] lg:text-[16px] text-[12px] ">
          Yes, we offer personalized training sessions with our certified
          fitness trainers. Our personal training programs are tailored to your
          individual goals, whether you're aiming to lose weight, build muscle,
          improve flexibility, or enhance overall fitness.
        </div>
      )}
    </>
  );
};

const content = [{ title: "", body: "" }];

const SportAcademyFAQ = () => {
  const [state, setState] = useState("000000");

  return (
    <div className=" w-full min-h-screen pb-[10rem]">
      <p className=" text-[#deff5f] text-[18px] font-kanit  ps-[3vw]">
        + FAQ's
      </p>
      <h1 className=" ps-[2vw] font-kanit text-white  md:text-[6vw] text-[24px] font-bold uppercase mb-[2rem]">
        Have a questions?
      </h1>

      <div className=" w-full md:h-[90vh] h-fit md:mt-0 mt-[3rem] flex md:flex-row flex-col-reverse gap-y-[4rem] justify-center duration-500">
        {/* ------------------------------------- */}
        <div className=" md:w-[40%] w-fill h-full flex flex-row justify-center items-center">
          <div className=" w-[80%] md:h-[80%] h-[50vh] rounded-[20px] overflow-hidden">
            <img src={png1} className=" w-full h-full object-cover" />
          </div>
        </div>
        {/* ------------------------------------- */}
        <div className=" md:w-[60%] w-full md:h-[90vh] h-fit flex ms:flex-row flex-col justify-center items-center">
          <div className=" md:w-[90%] w-full md:ps-0 ps-[5px] md:h-[90%] h-fit">
            {/* ------------------------- */}
            <Com
              onClick={() => {
                setState("100000");
              }}
              state={state[0]}
            />
            <div className=" w-full h-[1px] bg-[#d0d0d0]"></div>
            {/* ------------------------- */}
            {/* ------------------------- */}
            <Com
              onClick={() => {
                setState("010000");
              }}
              state={state[1]}
            />
            <div className=" w-full h-[1px] bg-[#d0d0d0]"></div>
            {/* ------------------------- */}
            {/* ------------------------- */}
            <Com
              onClick={() => {
                setState("001000");
              }}
              state={state[2]}
            />
            <div className=" w-full h-[1px] bg-[#d0d0d0]"></div>
            {/* ------------------------- */}
            {/* ------------------------- */}
            <Com
              onClick={() => {
                setState("000100");
              }}
              state={state[3]}
            />
            <div className=" w-full h-[1px] bg-[#d0d0d0]"></div>
            {/* ------------------------- */}
            {/* ------------------------- */}
            <Com
              onClick={() => {
                setState("000010");
              }}
              state={state[4]}
            />
            <div className=" w-full h-[1px] bg-[#d0d0d0]"></div>
            {/* ------------------------- */}
            {/* ------------------------- */}
            <Com
              onClick={() => {
                setState("000001");
              }}
              state={state[5]}
            />
            <div className=" w-full h-[1px] bg-[#d0d0d0]"></div>
            {/* ------------------------- */}
          </div>
        </div>
        {/* ------------------------------------- */}
      </div>
    </div>
  );
};

export default SportAcademyFAQ;
