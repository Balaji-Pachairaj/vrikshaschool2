import React, { useRef } from "react";

import pool from "../../assets/sportsacademy/pool.jpeg"
import turf from "../../assets/sportsacademy/turf.jpeg"
import basket from "../../assets/sportsacademy/basket.jpeg"
import ground from "../../assets/sportsacademy/ground.jpeg"


import { motion, useScroll, useTransform } from "framer-motion";

const SportAdacemySuccess = () => {
  const fullRef = useRef();

  const { scrollYProgress } = useScroll({
    target: fullRef,
    offset: ["0 0", "1 1"],
  });

  let difference = 0.02;

  // ----------------------------------------

  let startAt1 = 0;
  let endsAt1 = 0.33;
  const top1 = useTransform(
    scrollYProgress,
    [0, startAt1, endsAt1, 1],
    ["0%", "0", "-100%", "-100%"]
  );

  const opacity1 = useTransform(
    scrollYProgress,
    [0, endsAt1 - difference, endsAt1, 1],
    [1, 1, 0, 0]
  );

  //----------------------------------------

  let startAt2 = endsAt1;
  let endsAt2 = 0.66;
  const top2 = useTransform(
    scrollYProgress,
    [0, startAt2, endsAt2, 1],
    ["0%", "0", "-100%", "-100%"]
  );

  const opacity2 = useTransform(
    scrollYProgress,
    [0, startAt2 - difference, startAt2, endsAt2 - difference, endsAt2, 1],
    [0, 0, 1, 1, 0, 0]
  );

  //----------------------------------------

  let startAt3 = endsAt2;
  let endsAt3 = 1;
  const top3 = useTransform(
    scrollYProgress,
    [0, startAt3, endsAt3, 1],
    ["0%", "0", "-100%", "-100%"]
  );

  const opacity3 = useTransform(
    scrollYProgress,
    [0, startAt3 - difference, startAt3, endsAt3 - difference, endsAt3, 1],
    [0, 0, 1, 1, 0, 0]
  );

  //----------------------------------------

  let startAt4 = endsAt3;
  let endsAt4 = 1;
  const top4 = useTransform(
    scrollYProgress,
    [0, startAt4, endsAt4, 1],
    ["0%", "0", "0%", "0%"]
  );

  const opacity4 = useTransform(
    scrollYProgress,
    [0, startAt4 - difference, startAt4, endsAt4 - difference, endsAt4, 1],
    [0, 0, 1, 1, 1, 1]
  );

  //----------------------------------------
  return (
    <>
      <div ref={fullRef} className=" w-full h-[400vh] flex flex-row ">
        <div className=" w-full h-[100vh]  flex flex-row  sticky top-0">
          <div className=" w-[50%] h-full  relative  ">
            {/* ----------- */}
            <motion.div
              style={{ opacity: opacity1 }}
              className="w-full h-full flex flex-col justify-center items-end absolute top-0 left-0 pe-[5rem] gap-[1rem] bg-black"
            >
              <h1 className=" text-[3.5vw] font-inter text-right text-white font-bold ">
              State-of-the-art <br /> Swimming Pool
              </h1>
              <p className=" text-[#d0d0d0] text-[16px] font-inter font-semibold text-end w-[80%]">
              Provides the perfect environment for both beginners and competitive swimmers to refine their skills and enhance performance
              </p>
            </motion.div>
            {/* ----------- */}
            <motion.div
              style={{ opacity: opacity2 }}
              className="w-full h-full flex flex-col justify-center items-end absolute top-0 left-0 pe-[5rem] gap-[1rem] bg-black"
            >
              <h1 className=" text-[3.5vw] font-inter text-white font-bold ">
              Versatile Turf
              </h1>
              <p className=" text-[#d0d0d0] text-[16px] font-inter font-semibold text-end w-[80%]">
              Supporting a variety of sports like football, cricket, tennis, etc., our versatile turf withstands high-octane performances.

              </p>
            </motion.div>
            {/* ----------- */}
            <motion.div
              style={{ opacity: opacity3 }}
              className="w-full h-full flex flex-col justify-center items-end absolute top-0 left-0 pe-[5rem] gap-[1rem] bg-black"
            >
              <h1 className=" text-[3.5vw] font-inter text-white text-right font-bold ">
              Professional-grade Basketball Court

              </h1>
              <p className=" text-[#d0d0d0] text-[16px] font-inter font-semibold text-end w-[80%]">
              The high-performance surface offers athletes the perfect platform to sharpen their shooting, agility, and teamwork skills.

              </p>
            </motion.div>
            {/* ----------- */}
            <motion.div
              style={{ opacity: opacity4 }}
              className="w-full h-full flex flex-col justify-center items-end absolute top-0 left-0 pe-[5rem] gap-[1rem] bg-black"
            >
              <h1 className=" text-[3.5vw] font-inter text-white text-right font-bold ">
              World-class Athletic Ground 
              </h1>
              <p className=" text-[#d0d0d0] text-[16px] font-inter font-semibold text-end w-[80%]">
              Designed to accommodate track and field events, our ground empowers athletes to train and compete at their peak performance.

              </p>
            </motion.div>
          </div>
          <div className=" w-[50%] h-full  relative  ">
            {/* ----------- */}
            <motion.div
              style={{ top: top1 }}
              className=" w-full h-full absolute left-0 z-[10]"
            >
              <img src={pool} className=" w-full h-full object-cover " />
            </motion.div>
            {/* ----------- */}
            <motion.div
              style={{ top: top2 }}
              className=" w-full h-full absolute top-0 left-0 z-[9]"
            >
              <img src={turf} className=" w-full h-full object-cover " />
            </motion.div>
            {/* ----------- */}

            <motion.div
              style={{ top: top3 }}
              className=" w-full h-full absolute top-0 left-0 z-[8]"
            >
              <img src={basket} className=" w-full h-full object-cover " />
            </motion.div>

            {/* ----------- */}
            <motion.div
              style={{ top: top4 }}
              className=" w-full h-full absolute top-0 left-0 z-[7]"
            >
              <img src={ground} className=" w-full h-full object-cover " />
            </motion.div>
            {/* ----------- */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SportAdacemySuccess;
