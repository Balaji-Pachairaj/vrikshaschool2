import React, { useState } from "react";
import png1 from "../../assets/1.png";
import png2 from "../../assets/2.png";
import png3 from "../../assets/3.png";
import png4 from "../../assets/4.png";
import { motion, useAnimation } from "framer-motion";

const TextComponent = ({
  text = "",
  index = 0,
  onMouseEnter = () => {},
  onMouseLeave = () => {},
}) => {
  return (
    <li
      className=" w-full h-fit pt-[0.5rem] pb-[0.5rem] flex flex-row gap-[1rem] flex-shrink-0"
      onMouseEnter={() => {
        onMouseEnter(index);
      }}
      onMouseLeave={() => {
        onMouseLeave();
      }}
    >
      {/* <span className=" w-[10px] h-[10px] rounded-[50%] bg-gray-300 mt-[1.5rem]"></span> */}
      <h1 className=" cursor-pointer text-[4vw] text-gray-300 font-[600] hover:translate-x-[7%] hover:text-white  duration-500">
        {text}
      </h1>
    </li>
  );
};

const content = [
  { text: "Child-friendly furniture (chowkis)", image: png1 },
  { text: "Outdoor area", image: png2 },
  { text: "Sports equipment", image: png3 },
  {
    text: "Separate activity centers with puppet theatre, doll house etc",
    image: png4,
  },
  { text: "Spacious classrooms", image: png1 },
  { text: "Huge airy library", image: png2 },
  { text: "Dance & music room", image: png3 },
  { text: "AV and art room", image: png4 },
  { text: "Outside play area with splash pool", image: png1 },

  { text: "Sandpit", image: png1 },
  {
    text: "Skating rink (with coaching for children above three, under the guidance of an expert)",
    image: png2,
  },
  {
    text: "Field trips, outdoor education and community participation",
    image: png3,
  },
  { text: "Nutritious lunch and drinking water", image: png4 },
  { text: "Kids based learning center", image: png1 },
];

const Facilities = () => {
  const controls = useAnimation();

  const onMouseEnter = (index = 0) => {
    let percentageMover = 100 / (content?.length + 1);
    controls.start({
      y: "-" + percentageMover * (index + 1) + "%",
      transition: {
        duration: 0.75,
      },
    });
  };

  const onMouseLeave = () => {
    controls.start({
      y: "2px",
      transition: {
        duration: 0.75,
      },
    });
  };

  return (
    <div className=" w-full min-h-screen h-fit  bg-[black] flex flex-row justify-evenly items-start font-cabin pt-[10vh] pb-[10vh]">
      <div className=" w-[35%] h-full p-4 relative">
        <h1 className=" text-[#758694] text-[18px] font-[600] ">Facilities</h1>

        <div className=" w-full lg:h-[180vh] h-[130vh] flex flex-row justify-center mt-[2rem]  ">
          <div className=" w-[45vw] h-[30vw]  overflow-hidden sticky top-[2rem] ">
            {/* ---------------- */}
            <motion.div
              animate={controls}
              className=" w-full h-fit absolute top-0 bottom-0 "
            >
              <div className=" w-full h-[40vw] "></div>
              {content?.map((item) => {
                return (
                  <div className=" w-full h-[40vw]">
                    <img src={item?.image} className=" w-full h-full" />
                  </div>
                );
              })}
            </motion.div>
            {/* ---------------- */}
          </div>
        </div>
      </div>
      <ul className=" w-[60%]  h-[90%]  border-[black] flex flex-col justify-start gap-[0rem] overflow-hidden pt-[10vh]  ">
        {content.map((item, index) => {
          return (
            <TextComponent
              text={item?.text}
              index={index}
              onMouseEnter={(index) => {
                onMouseEnter(index);
              }}
              onMouseLeave={() => {
                onMouseLeave();
              }}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Facilities;
