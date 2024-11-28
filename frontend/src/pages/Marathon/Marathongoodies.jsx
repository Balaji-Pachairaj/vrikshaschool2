import React, { useRef } from "react";
import bag from "../../assets/marathon/bag.png";
import cap from "../../assets/marathon/cap.png";
import tshirt from "../../assets/marathon/tshirt.png";
import medal from "../../assets/marathon/medal.png";
import certificate from "../../assets/marathon/certificate.png";


import { motion, useScroll, useTransform } from "framer-motion";

const Marathongoodies = () => {
  const fullRef = useRef();

  const { scrollYProgress } = useScroll({
    target: fullRef,
    offset: ["0 0", "1 1"],
  });

  // --------------------------------------------

  let startAt1 = 0;
  let endAt1 = 0.12;

  const top1 = useTransform(
    scrollYProgress,
    [0, startAt1, endAt1, 1],
    ["50%", "50%", "-20%", "-20%"]
  );

  const opacity1 = useTransform(
    scrollYProgress,
    [0, endAt1 - 0.08, endAt1, 1],
    [100, 100, 0, 0]
  );

  //---------------------------------------------

  let startAt2 = endAt1;
  let endAt2 = 0.36;

  const top2 = useTransform(
    scrollYProgress,
    [0, startAt2 - 0.08, endAt2, 1],
    ["120%", "120%", "-20%", "-20%"]
  );

  const opacity2 = useTransform(
    scrollYProgress,
    [0, endAt2 - 0.08, endAt2, 1],
    [100, 100, 0, 0]
  );

  //------------------------------------------

  let startAt3 = endAt2;
  let endAt3 = 0.60;

  const top3 = useTransform(
    scrollYProgress,
    [0, startAt3 - 0.08, endAt3, 1],
    ["120%", "120%", "-20%", "-20%"]
  );

  const opacity3 = useTransform(
    scrollYProgress,
    [0, endAt3 - 0.08, endAt3, 1],
    [100, 100, 0, 0]
  );

  //------------------------------------------

  let startAt4 = endAt3;
  let endAt4 = 0.84;

  const top4 = useTransform(
    scrollYProgress,
    [0, startAt4 - 0.08, endAt4, 1],
    ["120%", "120%", "-20%", "-20%"]
  );

  const opacity4 = useTransform(
    scrollYProgress,
    [0, endAt4 - 0.08, endAt4, 1],
    [100, 100, 0, 0]
  );

  //------------------------------------------

  let startAt5 = endAt4;
  let endAt5 = 1;

  const top5 = useTransform(
    scrollYProgress,
    [0, startAt5 - 0.08, endAt5, 1],
    ["120%", "120%", "50%", "50%"]
  );

  const opacity5 = useTransform(
    scrollYProgress,
    [0, endAt5 - 0.08, endAt5, 1],
    [100, 100, 100, 100]
  );

  //------------------------------------------

  return (
    <>
      <div className="w-full h-[400vh] bg-black" ref={fullRef}>
        <div className="w-full h-screen sticky top-0">
          {/* -------------------------------- */}
          <motion.div
            style={{ opacity: opacity1 }}
            className="z-[10] w-[85vw] md:w-[30vw] h-[40vh] md:h-[67vh] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] rounded-[15px] overflow-hidden"
          >
            <img src={bag} className="w-full h-full object-cover" alt="Medal" />
          </motion.div>
          <motion.div
            style={{ top: top1 }}
            className="w-full md:w-[30%] h-fit absolute top-[50%] -translate-y-[50%] left-0 flex flex-col items-center px-4 md:ps-[5vw] gap-[2rem]"
          >
            <h1 className="text-[8vw] md:text-[3.3vw] font-bold tracking-wide text-white md:text-transparent md:bg-clip-text md:bg-gradient-to-r from-[#7c2ae8] to-[#00c4cc] drop-shadow-lg md:drop-shadow-none">
            Bag
            </h1>
          </motion.div>
          {/* -------------------------------- */}
          <motion.div
            style={{ opacity: opacity2 }}
            className="z-[9] w-[85vw] md:w-[30vw] h-[40vh] md:h-[67vh] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] rounded-[15px] overflow-hidden"
          >
            <img src={cap} className="w-full h-full object-cover" alt="Bag" />
          </motion.div>
          <motion.div
            style={{ top: top2 }}
            className="w-full md:w-[30%] h-fit absolute top-[50%] -translate-y-[50%] right-0 flex flex-col items-center px-4 md:pe-[5vh] gap-[2rem]"
          >
            <h1 className="text-[8vw] md:text-[3.3vw] font-bold tracking-wide text-white md:text-transparent md:bg-clip-text md:bg-gradient-to-r from-[#7c2ae8] to-[#00c4cc] drop-shadow-lg md:drop-shadow-none">
            Cap
            </h1>
          </motion.div>
          {/* -------------------------------- */}
          <motion.div
            style={{ opacity: opacity3 }}
            className="z-[8] w-[85vw] md:w-[30vw] h-[40vh] md:h-[67vh] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] rounded-[15px] overflow-hidden"
          >
            <img src={tshirt} className="w-full h-full object-cover" alt="Cap" />
          </motion.div>
          <motion.div
            style={{ top: top3 }}
            className="w-full md:w-[30%] h-fit absolute top-[50%] -translate-y-[50%] left-0 flex flex-col items-center px-4 md:ps-[5vw] gap-[2rem]"
          >
            <h1 className="text-[8vw] md:text-[3.3vw] font-bold tracking-wide text-white md:text-transparent md:bg-clip-text md:bg-gradient-to-r from-[#7c2ae8] to-[#00c4cc] drop-shadow-lg md:drop-shadow-none">
            T-shirt
            </h1>
          </motion.div>
          {/* -------------------------------- */}
          <motion.div
            style={{ opacity: opacity4 }}
            className="z-[7] w-[85vw] md:w-[30vw] h-[40vh] md:h-[67vh] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] rounded-[15px] overflow-hidden"
          >
            <img src={certificate} className="w-full h-full object-cover" alt="T-shirt" />
          </motion.div>
          <motion.div
            style={{ top: top4 }}
            className="w-full md:w-[30%] h-fit absolute top-[50%] -translate-y-[50%] right-0 flex flex-col items-center px-4 md:pe-[5vh] gap-[2rem]"
          >
            <h1 className="text-[8vw] md:text-[3.3vw] font-bold tracking-wide text-white md:text-transparent md:bg-clip-text md:bg-gradient-to-r from-[#7c2ae8] to-[#00c4cc] drop-shadow-lg md:drop-shadow-none">
            Certificate
            </h1>
          </motion.div>
          {/* -------------------------------- */}
          <motion.div
            style={{ opacity: opacity5 }}
            className="z-[6] w-[85vw] md:w-[30vw] h-[40vh] md:h-[67vh] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] rounded-[15px] overflow-hidden"
          >
            <img src={medal} className="w-full h-full object-cover" alt="Certificate" />
          </motion.div>
          <motion.div
            style={{ top: top5 }}
            className="w-full md:w-[30%] h-fit absolute top-[50%] -translate-y-[50%] left-0 flex flex-col items-center px-4 md:ps-[5vw] gap-[2rem]"
          >
            <h1 className="text-[8vw] md:text-[3.3vw] font-bold tracking-wide text-white md:text-transparent md:bg-clip-text md:bg-gradient-to-r from-[#7c2ae8] to-[#00c4cc] drop-shadow-lg md:drop-shadow-none">
            Medal
            </h1>
          </motion.div>
          {/* -------------------------------- */}
        </div>
      </div>
    </>
  );
};

export default Marathongoodies;
