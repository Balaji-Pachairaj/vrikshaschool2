import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const src1 =
  "https://cdn.prod.website-files.com/655b7190087a6311406b7e18/655b7190087a6311406b7eb0_jakob-owens-5_dFX9aAfs8-unsplash.jpg";

const src2 =
  "https://cdn.prod.website-files.com/655b7190087a6311406b7e18/655b7190087a6311406b7ead_jakob-owens-5yN5Bz0_968-unsplash.jpg";

const Milestone_actual_animation = () => {
  const fullRef = useRef();

  const fullRef_useScroll = useScroll({
    target: fullRef,
    offset: ["0 1", "1 1"],
  });

  //----------------------------------------------------

  const start_one = 0;
  const middle_one = 0.175;
  const end_one = 0.35;

  const image_one_rotate = useTransform(
    fullRef_useScroll?.scrollYProgress,
    [start_one, middle_one, end_one],
    [-90, 0, 90]
  );
  const image_one_top = useTransform(
    fullRef_useScroll?.scrollYProgress,
    [start_one, end_one],
    ["105%", "-15%"]
  );
  const scale_one_top = useTransform(
    fullRef_useScroll?.scrollYProgress,
    [start_one, middle_one - 0.2, middle_one + 0.2, end_one],
    [0.8, 1, 1, 0.8]
  );

  //-----------------------------------------------------

  const start_two = 0.15;
  const middle_two = 0.325;
  const end_two = 0.5;

  const image_two_rotate = useTransform(
    fullRef_useScroll?.scrollYProgress,
    [start_two, middle_two, end_two],
    [-90, 0, 90]
  );
  const image_two_top = useTransform(
    fullRef_useScroll?.scrollYProgress,
    [start_two, end_two],
    ["105%", "-15%"]
  );
  const scale_two_top = useTransform(
    fullRef_useScroll?.scrollYProgress,
    [start_two, middle_two - 0.2, middle_two + 0.2, end_two],
    [0.8, 1, 1, 0.8]
  );

  //---------------------------------------------------

  const start_three = 0.3;
  const middle_three = 0.475;
  const end_three = 0.65;

  const image_three_rotate = useTransform(
    fullRef_useScroll?.scrollYProgress,
    [start_three, middle_three, end_three],
    [-90, 0, 90]
  );
  const image_three_top = useTransform(
    fullRef_useScroll?.scrollYProgress,
    [start_three, end_three],
    ["105%", "-15%"]
  );
  const scale_three_top = useTransform(
    fullRef_useScroll?.scrollYProgress,
    [start_three, middle_three - 0.2, middle_three + 0.2, end_three],
    [0.8, 1, 1, 0.8]
  );

  //-------------------------------------------------------

  const start_four = 0.45;
  const middle_four = 0.625;
  const end_four = 0.8;

  const image_four_rotate = useTransform(
    fullRef_useScroll?.scrollYProgress,
    [start_four, middle_four, end_four],
    [-90, 0, 90]
  );
  const image_four_top = useTransform(
    fullRef_useScroll?.scrollYProgress,
    [start_four, end_four],
    ["105%", "-15%"]
  );
  const scale_four_top = useTransform(
    fullRef_useScroll?.scrollYProgress,
    [start_four, middle_four - 0.2, middle_four + 0.2, end_four],
    [0.8, 1, 1, 0.8]
  );

  //---------------------------------------------------------

  const start_five = 0.6;
  const middle_five = 0.775;
  const end_five = 0.95;

  const image_five_rotate = useTransform(
    fullRef_useScroll?.scrollYProgress,
    [start_five, middle_five, end_five],
    [-90, 0, 90]
  );
  const image_five_top = useTransform(
    fullRef_useScroll?.scrollYProgress,
    [start_five, end_five],
    ["105%", "-15%"]
  );
  const scale_five_top = useTransform(
    fullRef_useScroll?.scrollYProgress,
    [start_five, middle_five - 0.2, middle_five + 0.2, end_five],
    [0.8, 1, 1, 0.8]
  );

  //-----------------------------------------------------------

  const text_ref = useRef();

  const text_useScroll = useScroll({
    target: text_ref,
    offset: ["0 1", "0 0"],
  });

  const top_text = useTransform(
    text_useScroll.scrollYProgress,
    [0, 1],
    ["115%", "-30%"]
  );

  return (
    <>
      <div
        ref={text_ref}
        className=" relative text-[5vw]  w-full font-bold text-[white] h-[400px] text-center "
      >
        <motion.h1
          style={{
            x: "-50%",
            y: "-50%",
            left: "50%",
            top: top_text,
          }}
          className="text-[18vw] font-black text-white uppercase tracking-[-0.05em] leading-[0.8] whitespace-nowrap scale-y-[1.2] fixed z-[2] "
        >
          Milestone
        </motion.h1>
      </div>
      <div ref={fullRef} className=" w-full h-[300vh]">
        <motion.div
          style={{
            x: "-50%",
            y: "-50%",
            left: "50%",

            top: image_one_top,
            rotateX: image_one_rotate,
            scale: scale_one_top,
          }}
          className=" w-[550px] h-[400px] rounded-[30px]  fixed z-[20] overflow-hidden "
        >
          <img src={src1} className=" w-full h-full object-cover " />
        </motion.div>
        <motion.div
          style={{
            x: "-50%",
            y: "-50%",
            left: "50%",

            top: image_two_top,
            rotateX: image_two_rotate,
            scale: scale_two_top,
          }}
          className=" w-[550px] h-[400px] rounded-[30px]  fixed z-[20] overflow-hidden "
        >
          <img src={src2} className=" w-full h-full object-cover " />
        </motion.div>
        <motion.div
          style={{
            x: "-50%",
            y: "-50%",
            left: "50%",

            top: image_three_top,
            rotateX: image_three_rotate,
            scale: scale_three_top,
          }}
          className=" w-[550px] h-[400px] rounded-[30px]  fixed z-[20] overflow-hidden "
        >
          <img src={src1} className=" w-full h-full object-cover " />
        </motion.div>
        <motion.div
          style={{
            x: "-50%",
            y: "-50%",
            left: "50%",

            top: image_four_top,
            rotateX: image_four_rotate,
            scale: scale_four_top,
          }}
          className=" w-[550px] h-[400px] rounded-[30px]  fixed z-[20] overflow-hidden "
        >
          <img src={src2} className=" w-full h-full object-cover " />
        </motion.div>
        <motion.div
          style={{
            x: "-50%",
            y: "-50%",
            left: "50%",

            top: image_five_top,
            rotateX: image_five_rotate,
            scale: scale_five_top,
          }}
          className=" w-[550px] h-[400px] rounded-[30px]  fixed z-[20] overflow-hidden "
        >
          <img src={src1} className=" w-full h-full object-cover " />
        </motion.div>
      </div>
    </>
  );
};

export default Milestone_actual_animation;
