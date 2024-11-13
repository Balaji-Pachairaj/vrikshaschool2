import React from "react";
import bg from "../../assets/Learning/backgroundimage.png";
import people from "../../assets/Learning/peopleOverview.png";
import { motion, useAnimation } from "framer-motion";

const Overview = () => {
  let MoreAboutUstext1 = useAnimation();
  let MoreAboutUstext2 = useAnimation();

  return (
    <div className=" w-full min-h-screen  xl:h-fit  lg:h-[180vh] md:h-[160vh] sm:h-[130vh] h-[130vh] relative overflow-hidden  ">
      <img className=" w-full h-full object-cover " src={bg} />

      <div className=" w-full h-full absolute top-0 left-0 pt-[10vh] flex flex-col justify-start ">
        <div className=" w-full h-fit flex flex-col items-center">
          <h1 className=" font-cabin xl:text-[4vw] lg:text-[4.5vw] md:text-[5vw] sm:text-[6vw] text-[6.5vw] text-[white] text-center font-[500]">
            Blending <span className=" italic font-[400]">Imagination</span> &
            <br></br> <span className=" italic font-[400]">Innovation</span> to
            Realize Vision.
          </h1>

          <p className=" ps-8 pe-8 md:max-w-[705px] max-w-[580px] font-cabin lg:text-[20px] md:text-[16px] text-[12px]  text-[#dcdcdc] text-center font-[400] mt-[1rem]">
            At Zelf FZ, we are passionate about crafting unique and impactful
            design solutions that elevate brands and inspire creativity.
          </p>
        </div>

        <div className=" w-full h-fit flex flex-row justify-center items-center mt-[2.5rem] ">
          <button
            onMouseEnter={() => {
              MoreAboutUstext1.start({
                y: "-20px",
                transition: {
                  duration: 0.5,
                  delay: 0.1,
                },
              });
              MoreAboutUstext2.start({
                y: "-12px",
                transition: {
                  duration: 0.5,
                  delay: 0.1,
                },
              });
            }}
            onMouseLeave={() => {
              MoreAboutUstext1.start({
                y: "12px",
                transition: {
                  duration: 0.5,
                  delay: 0.1,
                },
              });
              MoreAboutUstext2.start({
                y: "20px",
                transition: {
                  duration: 0.5,
                  delay: 0.1,
                },
              });
            }}
            className="w-[170px] h-[50px] bg-[#ffffff21] overflow-hidden rounded-[20px] border-2 border-[white] flex flex-row justify-center items-center  "
          >
            <div className=" w-full h-fit pt-0 pb-0 overflow-hidden ">
              <motion.p
                initial={{ y: "12px" }}
                animate={MoreAboutUstext1}
                className="text-[16x] font-poppins font-[400] text-[white]"
              >
                More About Us
              </motion.p>
              <motion.p
                initial={{ y: "20px" }}
                animate={MoreAboutUstext2}
                className="text-[16x] font-poppins font-[400] text-[white]"
              >
                More About Us
              </motion.p>
            </div>
          </button>
        </div>

        {/* Stat  */}
        <div className=" w-full h-fit flex flex-row justify-center mt-[2.5rem]">
          <div className=" md:w-fit w-full h-fit flex flex-row md:justify-center justify-evenly md:gap-[1rem] gap-y-[1rem] flex-wrap md:flex-nowrap ">
            {/* One */}
            <div className="  font-cabin w-[45%] md:w-fit h-fit flex flex-col gap-[1.5rem] md:items-start items-center">
              <div className=" w-fit flex flex-col gap-[1.5rem]">
                <h1 className=" font-[600] text-[white] text-[24px] md:text-[3.5vw]">
                  180+
                </h1>

                <p className="font-cabin md:text-[20px] text-[16px] text-[#dcdcdc] text-start font-[400]">
                  Projects completed in <br></br>24 countries
                </p>
              </div>
            </div>
            {/* Sliding Div */}
            <div className=" w-[100px] h-fit md:flex hidden flex-row justify-center   ">
              <motion.div
                style={{ rotate: "20deg" }}
                className=" w-[1.5px] md:h-[180px] h-[135px] bg-[white] "
              ></motion.div>
            </div>
            {/* One */}
            <div className=" font-cabin w-[45%] md:w-fit h-fit flex flex-col gap-[1.5rem] md:items-start items-center">
              <div className=" w-fit flex flex-col gap-[1.5rem]">
                <h1 className=" font-[600] text-[white] text-[24px] md:text-[3.5vw]">
                  180+
                </h1>

                <p className="font-cabin md:text-[20px] text-[16px] text-[#dcdcdc] text-start font-[400]">
                  Projects completed in <br></br>24 countries
                </p>
              </div>
            </div>
            {/* Sliding Div */}
            <div className=" w-[100px] h-fit md:flex hidden flex-row justify-center ">
              <motion.div
                style={{ rotate: "20deg" }}
                className=" w-[1.5px] md:h-[180px] h-[135px] bg-[white] "
              ></motion.div>
            </div>
            {/* One */}
            <div className=" font-cabin w-[45%] md:w-fit h-fit flex flex-col gap-[1.5rem] md:items-start items-center">
              <div className=" w-fit flex flex-col gap-[1.5rem]">
                <h1 className=" font-[600] text-[white] text-[24px] md:text-[3.5vw]">
                  180+
                </h1>

                <p className="font-cabin md:text-[20px] text-[16px] text-[#dcdcdc] text-start font-[400]">
                  Projects completed in <br></br>24 countries
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex-1 min-h-[350px]">
          <img src={people} className=" w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Overview;
