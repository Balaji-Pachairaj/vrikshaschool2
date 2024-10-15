import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

import milestone1 from "../assets/milestones/Mil1.jpg";
import milestone2 from "../assets/milestones/Mil2.jpg";
import milestone3 from "../assets/milestones/Mil3.jpg";
import milestone4 from "../assets/milestones/Mil4.jpg";
import milestone5 from "../assets/milestones/Mil5.jpg";

const src1 = milestone1;
const text1 = "Football Court";
const src2 = milestone2;
const text2 = "Running Track";
const src3 = milestone3;
const text3 = "Swimming Court";
const src4 = milestone4;
const text4 = "Football Track";
const src5 = milestone5;
const text5 = "Swimming Track";

const Milestone_Card = ({
  src = "",
  top = "50%",
  rotateX = "50%",
  scale = "50%",
  text = "",
}) => {
  return (
    <motion.div
      style={{
        x: "-50%",
        y: "-50%",
        left: "50%",

        top: top,
        rotateX: rotateX,
        scale: scale,
      }}
      className=" w-[550px] h-[400px] rounded-[30px]  fixed z-[20] overflow-hidden "
    >
      <div className=" w-full h-full relative ">
        <img src={src} className=" w-full h-full object-cover " />

        <div className=" w-full h-full flex flex-col justify-end absolute z-[1000] top-0">
          <div className=" w-full h-[15%] bg-black bg-opacity-60 ps-4 pe-4 pt-1 flex flex-col justify-start gap-[0.5rem]  ">
            <h1 className=" text-[24px] text-[white] font-bold text-center pt-2  ">
              {text}
            </h1>
            <p className=" text-[14px] font-[500] text-[white]">{""}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

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
  const scale_one_fullRef = useTransform(
    fullRef_useScroll?.scrollYProgress,
    [start_one, middle_one - 0.02, middle_one + 0.02, end_one],
    [0.8, 1, 1, 0.75]
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
  const scale_two_fullRef = useTransform(
    fullRef_useScroll?.scrollYProgress,
    [start_two, middle_two - 0.02, middle_two + 0.02, end_two],
    [0.8, 1, 1, 0.75]
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
  const scale_three_fullRef = useTransform(
    fullRef_useScroll?.scrollYProgress,
    [start_three, middle_three - 0.02, middle_three + 0.02, end_three],
    [0.8, 1, 1, 0.75]
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
  const scale_four_fullRef = useTransform(
    fullRef_useScroll?.scrollYProgress,
    [start_four, middle_four - 0.02, middle_four + 0.02, end_four],
    [0.8, 1, 1, 0.75]
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
  const scale_five_fullRef = useTransform(
    fullRef_useScroll?.scrollYProgress,
    [start_five, middle_five - 0.02, middle_five + 0.02, end_five],
    [0.8, 1, 1, 0.9]
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
          <span className=" bg-whitelight text-transparent bg-clip-text">
            Milestone
          </span>
        </motion.h1>
      </div>
      <div ref={fullRef} className=" w-full h-[300vh]">
        <Milestone_Card
          src={src3}
          top={image_one_top}
          rotateX={image_one_rotate}
          scale={scale_one_fullRef}
          text={text1}
        />
        <Milestone_Card
          src={src1}
          top={image_two_top}
          rotateX={image_two_rotate}
          scale={scale_two_fullRef}
          text={text2}
        />
        <Milestone_Card
          src={src2}
          top={image_three_top}
          rotateX={image_three_rotate}
          scale={scale_three_fullRef}
          text={text3}
        />

        <Milestone_Card
          src={src4}
          top={image_four_top}
          rotateX={image_four_rotate}
          scale={scale_four_fullRef}
          text={text4}
        />
        <Milestone_Card
          src={src5}
          top={image_five_top}
          rotateX={image_five_rotate}
          scale={scale_five_fullRef}
          text={text5}
        />
      </div>
    </>
  );
};

export default Milestone_actual_animation;
