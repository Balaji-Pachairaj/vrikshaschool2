import React, { useRef } from "react";

import png4 from "../../assets/4.png";
import png3 from "../../assets/3.png";
import png2 from "../../assets/2.png";
import png1 from "../../assets/1.png";
import { motion, useScroll, useTransform } from "framer-motion";

const SportAcedemyStory = () => {
  const fullRef = useRef();

  const { scrollYProgress } = useScroll({
    target: fullRef,
    offset: ["0 0", "1 1"],
  });

  // --------------------------------------------

  let startAt1 = 0;
  let endAt1 = 0.15;

  const top1 = useTransform(
    scrollYProgress,
    [0, startAt1, endAt1, 1],
    ["50%", "50%", "-20%", "-20%"]
  );

  const opacity1 = useTransform(
    scrollYProgress,
    [0, endAt1 - 0.1, endAt1, 1],
    [100, 100, 0, 0]
  );

  //---------------------------------------------

  let startAt2 = endAt1;
  let endAt2 = 0.57;

  const top2 = useTransform(
    scrollYProgress,
    [0, startAt2 - 0.1, endAt2, 1],
    ["120%", "120%", "-20%", "-20%"]
  );

  const opacity2 = useTransform(
    scrollYProgress,
    [0, endAt2 - 0.1, endAt2, 1],
    [100, 100, 0, 0]
  );

  //------------------------------------------

  //------------------------------------------

  let startAt3 = endAt2;
  let endAt3 = 1;

  const top3 = useTransform(
    scrollYProgress,
    [0, startAt3 - 0.1, endAt3, 1],
    ["120%", "120%", "-20%", "-20%"]
  );

  const opacity3 = useTransform(
    scrollYProgress,
    [0, endAt3 - 0.1, endAt3, 1],
    [100, 100, 0, 0]
  );

  //------------------------------------------

  let startAt4 = endAt3;
  let endAt4 = 1;

  const top4 = useTransform(
    scrollYProgress,
    [0, startAt4 - 0.1, endAt4, 1],
    ["120%", "120%", "50%", "50%"]
  );

  const opacity4 = useTransform(
    scrollYProgress,
    [0, endAt4 - 0.1, endAt4, 1],
    [100, 100, 100, 100]
  );

  //------------------------------------------

  return (
    <>
      <div className=" w-full h-[250vh] " ref={fullRef}>
        <div className=" w-full h-screen  sticky top-0  ">
          {/* -------------------------------- */}
          {/* ---------------------- */}
          <motion.div
            style={{ opacity: opacity1 }}
            className=" z-[10] w-[30vw] h-[67vh] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] rounded-[15px] overflow-hidden"
          >
            <img src={png4} className=" w-full h-full object-cover" />
          </motion.div>
          {/* ---------------------- */}
          {/* ---------------------- */}
          <motion.div
            style={{ top: top1 }}
            className="w-[30%] h-fit absolute top-[50%]  -translate-y-[50%] left-0 flex flex-col items-center ps-[5vw] gap-[2rem]  "
          >
            <h1 className=" text-[white] text-[3.3vw] leading-[3.5vw] font-inter font-light ">
              Innovative Style for the Future of Fashion
            </h1>
            <p className=" text-[18px] font-inter text-[#d0d0d0]">
              Step into the future with styles that blend the worlds of fashion
              and technology. Showcase your approach to fashion like never
              before.
            </p>
          </motion.div>
          {/* ---------------------- */}
          {/* -------------------------------- */}

          {/* -------------------------------- */}
          {/* ---------------------- */}
          <motion.div
            style={{ opacity: opacity2 }}
            className=" z-[9] w-[30vw] h-[67vh]  absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] rounded-[15px] overflow-hidden"
          >
            <img src={png3} className=" w-full h-full object-cover" />
          </motion.div>
          {/* ---------------------- */}
          {/* ---------------------- */}
          <motion.div
            style={{ top: top2 }}
            className="w-[30%] h-fit absolute top-[50%]  -translate-y-[50%] right-0 flex flex-col items-center ps-[0vw] pe-[5vh] gap-[2rem]  "
          >
            <h1 className=" text-[white] text-[3.3vw] leading-[3.5vw] font-inter font-light ">
              Innovative Style for the Future of Fashion
            </h1>
            <p className=" text-[18px] font-inter text-[#d0d0d0]">
              Step into the future with styles that blend the worlds of fashion
              and technology. Showcase your approach to fashion like never
              before.
            </p>
          </motion.div>
          {/* ---------------------- */}
          {/* -------------------------------- */}

          {/* -------------------------------- */}
          {/* ---------------------- */}
          <motion.div
            style={{ opacity: opacity3 }}
            className=" z-[8] w-[30vw] h-[67vh]  absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] rounded-[15px] overflow-hidden"
          >
            <img src={png2} className=" w-full h-full object-cover" />
          </motion.div>
          {/* ---------------------- */}
          {/* ---------------------- */}
          <motion.div
            style={{ top: top3 }}
            className="w-[30%] h-fit absolute top-[50%]  -translate-y-[50%] left-0 flex flex-col items-center ps-[5vw] gap-[2rem]  "
          >
            <h1 className=" text-[white] text-[3.3vw] leading-[3.5vw] font-inter font-light ">
              Innovative Style for the Future of Fashion
            </h1>
            <p className=" text-[18px] font-inter text-[#d0d0d0]">
              Step into the future with styles that blend the worlds of fashion
              and technology. Showcase your approach to fashion like never
              before.
            </p>
          </motion.div>
          {/* ---------------------- */}
          {/* -------------------------------- */}

          {/* -------------------------------- */}
          {/* ---------------------- */}
          <motion.div
            style={{ opacity: opacity4 }}
            className=" z-[7] w-[30vw] h-[67vh]  absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] rounded-[15px] overflow-hidden"
          >
            <img src={png1} className=" w-full h-full object-cover" />
          </motion.div>
          {/* ---------------------- */}
          {/* ---------------------- */}
          <motion.div
            style={{ top: top4 }}
            className="w-[30%] h-fit absolute top-[50%]  -translate-y-[50%] right-0 flex flex-col items-center ps-[0vw] pe-[5vh] gap-[2rem]  "
          >
            <h1 className=" text-[white] text-[3.3vw] leading-[3.5vw] font-inter font-light ">
              Innovative Style for the Future of Fashion
            </h1>
            <p className=" text-[18px] font-inter text-[#d0d0d0]">
              Step into the future with styles that blend the worlds of fashion
              and technology. Showcase your approach to fashion like never
              before.
            </p>
          </motion.div>
          {/* ---------------------- */}
          {/* -------------------------------- */}
        </div>
      </div>
    </>
  );
};

export default SportAcedemyStory;
