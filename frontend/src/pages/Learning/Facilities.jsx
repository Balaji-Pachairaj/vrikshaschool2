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
    <div
      className=" w-full h-fit "
      onMouseEnter={() => {
        onMouseEnter(index);
      }}
      onMouseLeave={() => {
        onMouseLeave();
      }}
    >
      <h1 className=" cursor-pointer text-[3vw] text-gray-300 font-[600] hover:translate-x-[7%] hover:text-black hover:scale-110 duration-500">
        {text}
      </h1>
    </div>
  );
};

const content = [
  { text: "Brand Acemeady", image: png1 },
  { text: "Brand Acemeady", image: png2 },
  { text: "Brand Acemeady", image: png3 },
  { text: "Brand Acemeady", image: png4 },
  { text: "Brand Acemeady", image: png1 },
  { text: "Brand Acemeady", image: png2 },
  { text: "Brand Acemeady", image: png3 },
  { text: "Brand Acemeady", image: png4 },
  { text: "Brand Acemeady", image: png1 },
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
      y: 0,
      transition: {
        duration: 0.75,
      },
    });
  };

  return (
    <div className=" w-full min-h-screen h-fit  bg-[white] flex flex-row justify-evenly items-start font-cabin pt-[10vh] pb-[10vh]">
      <div className=" w-[35%] h-fit p-4 relative">
        <h1 className=" text-[#758694] text-[18px] font-[600] ">Facilities</h1>

        <div className=" w-full h-fit flex flex-row justify-center mt-[2rem] ">
          <div className=" w-[45vw] h-[30vw] relative overflow-hidden ">
            {/* ---------------- */}
            <motion.div
              animate={controls}
              className=" w-full h-fit absolute top-0 bottom-0 "
            >
              <div className=" w-full h-[30vw] "></div>
              {content?.map((item) => {
                return (
                  <div className=" w-full h-[30vw]">
                    <img src={item?.image} className=" w-full h-full" />
                  </div>
                );
              })}
            </motion.div>
            {/* ---------------- */}
          </div>
        </div>
      </div>
      <div className=" w-[60%]  h-[90%]  border-[black] flex flex-col justify-start gap-[0rem] overflow-hidden pt-[10vh] ">
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
      </div>
    </div>
  );
};

export default Facilities;
