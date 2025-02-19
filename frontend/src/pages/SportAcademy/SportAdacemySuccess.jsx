import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import pool from "../../assets/sportsacademy/pool.jpeg";
import turf from "../../assets/sportsacademy/cricket.jpg";
import basket from "../../assets/sportsacademy/basket.jpeg";
import ground from "../../assets/sportsacademy/ground.jpg";
import volley from "../../assets/sportsacademy/volley1.JPG";
import cricket from "../../assets/sportsacademy/cricket.jpg";


const contentData = [
  {
    heading: "State-of-the-art Swimming Pool",
    text: "Provides the perfect environment for both beginners and competitive swimmers to refine their skills and enhance performance.",
    image: pool,
  },
  {
    heading: "Versatile Turf",
    text: "Supporting a variety of sports like football, cricket, tennis, etc., our versatile turf withstands high-octane performances.",
    image: turf,
  },
  {
    heading: "Professional-grade Basketball Court",
    text: "The high-performance surface offers athletes the perfect platform to sharpen their shooting, agility, and teamwork skills.",
    image: basket,
  },
  {
    heading: "World-class Athletic Ground",
    text: "Designed to accommodate track and field events, our ground empowers athletes to train and compete at their peak performance.",
    image: ground,
  },
  {
    heading: "Pro-Level  Cricket Training Nets",
    text: "Sharpen your batting and bowling skills in our professional cricket nets—ideal for focused practice and peak performance training",
    image: cricket,
  },
  {
    heading: "Premier Volleyball Practice Court",
    text: "Train, play, and excel on our top-notch volleyball court—designed for champions in the making. Perfect for all skill levels, from beginners to pros!",
    image: volley,
  },
];

const difference = 0.02;

const SportAcademySuccess = () => {
  const fullRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: fullRef,
    offset: ["0 0", "1 1"],
  });

  const total = contentData.length;

  return (
    <div ref={fullRef} className="w-full h-[600vh] flex flex-row">
      <div className="w-full h-[100vh] flex flex-row sticky top-0">
        {/* Left Side: Text Content */}
        <div className="w-[50%] h-full relative">
          {contentData.map((item, index) => {
            const start = index / total;
            const end = (index + 1) / total;
            const isFirst = index === 0;
            const isLast = index === total - 1;

            // Calculate the opacity for the text based on its position.
            // First item fades out after its segment,
            // intermediate items fade in at the start and out at the end,
            // and the last item stays visible after its segment.
            let opacity;
            if (isFirst) {
              opacity = useTransform(
                scrollYProgress,
                [0, end - difference, end, 1],
                [1, 1, 0, 0]
              );
            } else if (!isLast) {
              opacity = useTransform(
                scrollYProgress,
                [0, start - difference, start, end - difference, end, 1],
                [0, 0, 1, 1, 0, 0]
              );
            } else {
              opacity = useTransform(
                scrollYProgress,
                [0, start - difference, start, end - difference, end, 1],
                [0, 0, 1, 1, 1, 1]
              );
            }

            return (
              <motion.div
                key={index}
                style={{ opacity }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="w-full h-full flex flex-col justify-center items-end absolute top-0 left-0 pe-[5rem] gap-[1rem] bg-black"
              >
                <h1 className="text-[3.5vw] font-inter font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#7c2ae8] to-[#00c4cc] text-right">
                  {item.heading}
                </h1>
                <p className="text-[#d0d0d0] text-[16px] font-inter font-semibold text-end w-[80%]">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Right Side: Image Content */}
        <div className="w-[50%] h-full relative">
          {contentData.map((item, index) => {
            const start = index / total;
            const end = (index + 1) / total;
            const isLast = index === total - 1;
            // For images, animate the vertical movement.
            // For all except the last, the image slides up out of view.
            // The last image remains fixed.
            const top = useTransform(
              scrollYProgress,
              [0, start, end, 1],
              isLast ? ["0%", "0", "0%", "0%"] : ["0%", "0", "-100%", "-100%"]
            );
            // Adjust z-index so that earlier slides appear on top
            const zIndex = 10 - index;

            return (
              <motion.div
                key={index}
                style={{ top, zIndex }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="w-full h-full absolute left-0"
              >
                <img
                  src={item.image}
                  alt={item.heading}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SportAcademySuccess;
