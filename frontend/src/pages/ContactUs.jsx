import React from "react";
import NavBar from "./NavBar";
import FooterSection from "./FooterSection";

const ContactUs = () => {
  return (
    <>
      <div className="w-full h-[0.1px]" id="start"></div>
      <NavBar />
      <div className=" w-full min-h-screen bg-black" id="contact">
        <div className=" w-full md:h-[80vh] h-[30vh] flex flex-col md:justify-center justify-end items-center md:pb-[0px] pb-[5vh]">
          <h1 className=" text-[10vw] text-white font-kanit uppercase   ">
            Contact
          </h1>
        </div>

        <div className=" w-full h-fit flex flex-row justify-center ">
          <div className=" md:w-[60vw] w-[100%] h-fit flex flex-col gap-[1rem]  shadow-lg shadow-[white] md:p-[1rem] p-[0.5rem] ">
            {/* -------------------------------------- */}
            <div className=" w-full  h-fit flex md:flex-row flex-col justify-between  gap-[1rem] ">
              {/* -------------------------------------- */}
              <div className=" md:w-[48%] w-full flex flex-col gap-[0.2rem]">
                <label className=" text-[16px] text-white font-kanit uppercase opacity-70">
                  Full Name
                </label>
                <input
                  type={"text"}
                  placeholder="Balaji"
                  className="w-full h-[48px] border-[1px] border-opacity-70 rounded-[6px]  bg-black text-[16px] text-white opacity-70 font-kanit ps-[1rem] "
                />
              </div>
              {/* -------------------------------------- */}
              <div className=" md:w-[48%] w-full flex flex-col gap-[0.2rem]">
                <label className=" text-[16px] text-white font-kanit uppercase opacity-70">
                  Last Name
                </label>
                <input
                  type={"text"}
                  placeholder="Pachairaj"
                  className="w-full h-[48px] border-[1px] border-opacity-70 rounded-[6px]  bg-black text-[16px] text-white opacity-70 font-kanit ps-[1rem] "
                />
              </div>
              {/* -------------------------------------- */}
            </div>
            {/* -------------------------------------- */}
            <div className=" w-full  h-fit flex md:flex-row flex-col  justify-between gap-[1rem] ">
              {/* -------------------------------------- */}
              <div className=" md:w-[48%] w-full flex flex-col gap-[0.2rem]">
                <label className=" text-[16px] text-white font-kanit uppercase opacity-70">
                  Time Line
                </label>
                <input
                  type={"text"}
                  placeholder="2 weeks"
                  className="w-full h-[48px] border-[1px] border-opacity-70 rounded-[6px]  bg-black text-[16px] text-white opacity-70 font-kanit ps-[1rem] "
                />
              </div>
              {/* -------------------------------------- */}
              <div className=" md:w-[48%] w-full flex flex-col gap-[0.2rem]">
                <label className=" text-[16px] text-white font-kanit uppercase opacity-70">
                  Budget
                </label>
                <input
                  type={"text"}
                  placeholder="5,000"
                  className="w-full h-[48px] border-[1px] border-opacity-70 rounded-[6px]  bg-black text-[16px] text-white opacity-70 font-kanit ps-[1rem] "
                />
              </div>
              {/* -------------------------------------- */}
            </div>
            {/* -------------------------------------- */}
            <div className=" w-full  h-fit flex flex-row  gap-[1rem] ">
              {/* -------------------------------------- */}
              <div className=" w-full flex flex-col gap-[0.2rem]">
                <label className=" text-[16px] text-white font-kanit uppercase opacity-70">
                  description
                </label>
                <textarea
                  type={"text"}
                  placeholder="Need an admission for my child"
                  className="w-full h-[200px] border-[1px] pt-[1rem] border-opacity-70 rounded-[6px]  bg-black text-[16px] text-white opacity-70 font-kanit ps-[1rem] "
                />
              </div>

              {/* -------------------------------------- */}
            </div>

            <div className=" w-full h-fit">
              <button className=" w-full h-[48px]  bg-white text-[16px] text-black font-[500] font-kanit">
                SUBMIT FORM
              </button>
            </div>
            {/* -------------------------------------- */}
          </div>
        </div>
      </div>
      <FooterSection />
    </>
  );
};

export default ContactUs;
