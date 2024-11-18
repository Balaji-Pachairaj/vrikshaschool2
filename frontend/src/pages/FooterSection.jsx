import React from "react";

const FooterSection = () => {
  return (
    <>
      <div
        className=" w-full h-fit pt-[10vh] pb-[10vh] bg-black flex flex-row justify-center"
        id={"footer"}
      >
        {/* ------------------------------------- */}
        <div className=" w-[85vw] h-fit flex flex-col md:gap-[1rem] gap-[2rem] ">
          {/* ------------------------------------- */}
          <div className="w-full h-fit flex md:flex-row flex-col gap-y-[1.5rem] justify-between md:items-start items-center">
            {/* ------------------------------------- */}
            <div>
              <h1 className=" text-[24px] font-inter text-[#eee]">
                Beautiful design
              </h1>
              <h1 className=" text-[12px] font-inter text-[#eee]">
                Beautiful design has the <br /> power to captivate audiences.
              </h1>
            </div>
            {/* ------------------------ */}
            <div className=" w-fit h-fit flex flex-col items-center gap-[1.5rem]">
              <p className=" text-[14px]  font-inter text-white">Home</p>
              <p className=" text-[14px]  font-inter text-white">
                Sport Academy
              </p>
              <p className=" text-[14px]  font-inter text-white">About us</p>
              <p className=" text-[14px]  font-inter text-white">Learning</p>
              <p className=" text-[14px]  font-inter text-white">
                Co curriculam
              </p>
              <p className=" text-[14px]  font-inter text-white">Discover</p>
            </div>
          </div>
          {/* ------------------------ */}
          <div className=" w-full h-[1px] bg-white"></div>
          {/* ------------------------ */}
          {/* ------------------------ */}
          <div className=" w-full h-fit flex flex-row flex-wrap md:justify-between justify-center gap-y-[1.5rem]">
            <h3 className="  md:text-[16px] text-[12px] font-inter text-[#eee]">
              © 2024 3D BENTO Agency. All Rights Reserved.
            </h3>

            <div className=" flex gap-[1rem] ">
              <h3 className="  md:text-[16px] text-[12px] font-inter text-[#eee]">
                Powered By Webflow
              </h3>
              <h3 className="  md:text-[16px] text-[12px] font-inter text-[#eee]">
                Built By Rick Mummery
              </h3>
            </div>
          </div>
          {/* ------------------------ */}
        </div>
      </div>
    </>
  );
};

export default FooterSection;
