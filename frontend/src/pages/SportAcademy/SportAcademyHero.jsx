import React, { useEffect, useRef, useState } from "react";
import center from "../../assets/sportsacademy/center.png"
import png1 from "../../assets/sportsacademy/1.png"
import png2 from "../../assets/sportsacademy/2.png"
import png3 from "../../assets/sportsacademy/3.png"
import png4 from "../../assets/sportsacademy/4.png"

import overviewImage from "../../assets/Learning/learningOverview.webp";

import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const SportAcademyHero = () => {
  const control1 = useAnimation();
  const control2 = useAnimation();
  const control3 = useAnimation();
  const control4 = useAnimation();

  useEffect(() => {
    const moveUp = (control, number, time = 100) => {
      control.start({
        top: number,
        transition: {
          duration: time,
        },
      });
    };

    const action = () => {
      moveUp(control1, "-90%");
      moveUp(control2, "-30%");
      moveUp(control3, "-70%");
      moveUp(control4, "-10%");

      // Resetting the controls
      setTimeout(() => {
        moveUp(control1, "10%", 1);
        moveUp(control2, "70%", 1);
        moveUp(control3, "30%", 1);
        moveUp(control4, "90%", 1);

        // Restarting the Function action
        setTimeout(() => {
          action();
        }, 1000);
      }, 100 * 1000);
    };

    action();
  }, []);

  //-------------------------------

  const isTab = useMediaQuery({ maxWidth: 767 });
  const isMobile = useMediaQuery({ maxWidth: 440 });

  const ref = useRef();

  const useScroll_ref = useScroll({
    target: ref,
    offset: ["0 1", "1 0"],
  });

  const width = useTransform(
    useScroll_ref?.scrollYProgress,
    [0, 0.1, 0.5, 1],
    isTab
      ? ["45%", "45%", "100%", "100%"]
      : isMobile
      ? ["50%", "50%", "100%", "100%"]
      : ["23%", "23%", "100%", "100%"]
  );

  const heigth = useTransform(
    useScroll_ref?.scrollYProgress,
    [0, 0.1, 0.5, 1],
    ["50%", "50%", "100%", "100%"]
  );

  const top = useTransform(
    useScroll_ref?.scrollYProgress,
    [0, 0.5, 1],
    ["65%", "0%", "-100%"]
  );

  const display = useTransform(useScroll_ref?.scrollYProgress, (pos) => {
    return pos >= 0.5 ? "none" : "flex";
  });

  return (
    <>
      <div className=" w-full h-screen bg-black relative overflow-hidden ">
        <motion.div
          style={{ display: display }}
          className="w-full h-full fixed top-0 botton-0 flex flex-row justify-center items-center bg-opacity-[0.6] bg-black z-[10]"
        >
          {/* --- text ----------- */}
          <h1 className=" font-poppins md:text-[3vw] sm:text-[4.5vw] text-[6vw]  text-[white] font-light  lg:leading-[4rem] md:leading-[3rem] text-center ">
            Design that flows <br></br> above the rest
          </h1>
        </motion.div>
        {/* ---- box ------ */}
        <motion.div
          style={{ display: display }}
          className="w-full h-full relative top-0 botton-0 flex flex-row justify-center items-center z-[9]"
        >
          {/* --- Image ----------- */}
          <motion.div
            initial={{ top: "10%" }}
            animate={control1}
            className="md:w-[23vw] md:h-[23vw] w-[40vw] h-[40vw] fixed  rounded-[12px] overflow-hidden md:left-[10%] left-[5%]"
          >
            <img src={png1} className=" w-full h-full object-cover " />
          </motion.div>
          {/* --- Image ----------- */}
          <motion.div
            initial={{ top: "70%" }}
            animate={control2}
            className="md:w-[23vw] md:h-[23vw] w-[40vw] h-[40vw] fixed  rounded-[12px] overflow-hidden md:left-[10%] left-[5%]"
          >
            <img src={png2} className=" w-full h-full object-cover " />
          </motion.div>
          {/* --- Image ----------- */}
          <motion.div
            initial={{ top: "30%" }}
            animate={control3}
            className="md:w-[23vw] md:h-[23vw] w-[40vw] h-[40vw] fixed  rounded-[12px] overflow-hidden md:left-[70%] left-[80%]"
          >
            <img src={png3} className=" w-full h-full object-cover " />
          </motion.div>
          {/* --- Image ----------- */}
          <motion.div
            initial={{ top: "90%" }}
            animate={control4}
            className="md:w-[23vw] md:h-[23vw] w-[40vw] h-[40vw] fixed  rounded-[12px] overflow-hidden md:left-[70%] left-[80%]"
          >
            <img src={png4} className=" w-full h-full object-cover " />
          </motion.div>
        </motion.div>
      </div>

      <div className=" w-full h-[100vh] bg-black z-[200]" ref={ref}>
        <motion.div
          initial={{ left: "50%" }}
          style={{
            width: width,
            height: heigth,
            top: top,
            left: "50%",
            x: "-50%",
          }}
          className="fixed  overflow-hidden z-[200]"
        >
          <img src={center} className=" w-full h-full object-cover z-[11] " />
        </motion.div>
      </div>

      <div className=" w-full h-[100vh] flex flex-col justify-center gap-[3rem] bg-black">
        <div className=" w-full h-fit  md:ps-[5rem]">
          <h1 className=" font-cabin  text-[white] md:text-[4vw] text-[8vw] font-bold md:text-start text-center ">
          Where Champions Are Made
          </h1>
        </div>
        <div className=" w-full h-fit   text-end flex flex-row justify-end md:pe-[5rem] ps-[2rem] pe-[2rem]">
          <p className=" font-cabin  text-[white] md:text-[1.5vw] text-[4vw]  md:w-[500px] md:text-start text-center">
          With state-of-the-art facilities, expert coaches, and a focus on holistic development, we provide athletes with the tools they need to excel both on and off the field. Whether you're striving for professional success or personal growth, this is where champions are made.
          </p>
        </div>
      </div>
    </>
  );
};

export default SportAcademyHero;
