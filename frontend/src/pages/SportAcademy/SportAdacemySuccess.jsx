import React, { useRef } from "react";

import png4 from "../../assets/4.png";
import png3 from "../../assets/3.png";
import png2 from "../../assets/2.png";
import png1 from "../../assets/1.png";
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
              <h1 className=" text-[3.3vw] font-inter text-white font-light ">
                Dummy text 1
              </h1>
              <p className=" text-[#d0d0d0] text-[18px] font-inter font-light text-end w-[80%]">
                With years of experience, a passion for creativity, and a
                results-driven mindset, our team is dedicated to helping your
                business thrive in the digital space.
              </p>
            </motion.div>
            {/* ----------- */}
            <motion.div
              style={{ opacity: opacity2 }}
              className="w-full h-full flex flex-col justify-center items-end absolute top-0 left-0 pe-[5rem] gap-[1rem] bg-black"
            >
              <h1 className=" text-[3.3vw] font-inter text-white font-light ">
                text Dummy2
              </h1>
              <p className=" text-[#d0d0d0] text-[18px] font-inter font-light text-end w-[80%]">
                our team is dedicated to helping your business thrive in the
                digital space. With years of experience, a passion for
                creativity, and a results-driven mindset,
              </p>
            </motion.div>
            {/* ----------- */}
            <motion.div
              style={{ opacity: opacity3 }}
              className="w-full h-full flex flex-col justify-center items-end absolute top-0 left-0 pe-[5rem] gap-[1rem] bg-black"
            >
              <h1 className=" text-[3.3vw] font-inter text-white font-light ">
                Dummy text3
              </h1>
              <p className=" text-[#d0d0d0] text-[18px] font-inter font-light text-end w-[80%]">
                With years of experience, a passion for creativity, and a
                results-driven mindset, our team is dedicated to helping your
                business thrive in the digital space.
              </p>
            </motion.div>
            {/* ----------- */}
            <motion.div
              style={{ opacity: opacity4 }}
              className="w-full h-full flex flex-col justify-center items-end absolute top-0 left-0 pe-[5rem] gap-[1rem] bg-black"
            >
              <h1 className=" text-[3.3vw] font-inter text-white font-light ">
                text Dummy4
              </h1>
              <p className=" text-[#d0d0d0] text-[18px] font-inter font-light text-end w-[80%]">
                our team is dedicated to helping your business thrive in the
                digital space. With years of experience, a passion for
                creativity, and a results-driven mindset,
              </p>
            </motion.div>
          </div>
          <div className=" w-[50%] h-full  relative  ">
            {/* ----------- */}
            <motion.div
              style={{ top: top1 }}
              className=" w-full h-full absolute left-0 z-[10]"
            >
              <img src={png1} className=" w-full h-full object-cover " />
            </motion.div>
            {/* ----------- */}
            <motion.div
              style={{ top: top2 }}
              className=" w-full h-full absolute top-0 left-0 z-[9]"
            >
              <img src={png2} className=" w-full h-full object-cover " />
            </motion.div>
            {/* ----------- */}

            <motion.div
              style={{ top: top3 }}
              className=" w-full h-full absolute top-0 left-0 z-[8]"
            >
              <img src={png2} className=" w-full h-full object-cover " />
            </motion.div>

            {/* ----------- */}
            <motion.div
              style={{ top: top4 }}
              className=" w-full h-full absolute top-0 left-0 z-[7]"
            >
              <img src={png2} className=" w-full h-full object-cover " />
            </motion.div>
            {/* ----------- */}
          </div>
        </div>
      </div>

      <div className=" w-full h-screen"></div>
    </>
  );
};

export default SportAdacemySuccess;
