import React, { useRef } from "react";

import pool from "../../assets/sportsacademy/pool.jpeg"
import turf from "../../assets/sportsacademy/turf.jpg"
import basket from "../../assets/sportsacademy/basket.jpeg"
import ground from "../../assets/sportsacademy/ground.jpg"
import volley from "../../assets/sportsacademy/volley1.JPG"
import cricket from "../../assets/sportsacademy/cricket.jpg"

import { motion, useScroll, useTransform } from "framer-motion";

const SportAcademySuccessMobile = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const sections = [
    {
      title: "State-of-the-art Swimming Pool",
      description: "Provides the perfect environment for both beginners and competitive swimmers to refine their skills and enhance performance",
      image: pool,
      alt: "Swimming Pool"
    },
    {
      title: "Versatile Turf",
      description: "Supporting a variety of sports like football, cricket, tennis, etc., our versatile turf withstands high-octane performances",
      image: turf,
      alt: "Turf"
    },
    {
      title: "Professional-grade Basketball Court",
      description: "The high-performance surface offers athletes the perfect platform to sharpen their shooting, agility, and teamwork skills",
      image: basket,
      alt: "Basketball Court"
    },
    {
      title: "World-class Athletic Ground",
      description: "Designed to accommodate track and field events, our ground empowers athletes to train and compete at their peak performance",
      image: ground,
      alt: "Athletic Ground"
    },
    {
      title: "Pro-Level  Cricket Training Nets",
      description: "Sharpen your batting and bowling skills in our professional cricket nets—ideal for focused practice and peak performance training",
      image: cricket,
      alt: "Cricket nets"
    },
    {
      title: "Premier Volleyball Practice Court",
      description: "Train, play, and excel on our top-notch volleyball court—designed for champions in the making. Perfect for all skill levels, from beginners to pros!",
      image: volley,
      alt: "Volley"
    }
  ];

  return (
    <div ref={containerRef} className="relative bg-black">
      <div className="h-[600vh] relative">
        <div className="sticky top-0 h-screen overflow-hidden">
          {sections.map((section, index) => {
            const progress = useTransform(
              scrollYProgress,
              [index * 0.166, (index + 1) * 0.166],
              [0, 1]
            );

            const opacity = useTransform(
              progress,
              [0, 0.1, 0.9, 1],
              [0, 1, 1, 0]
            );

            return (
              <motion.div
                key={index}
                style={{ opacity }}
                className="absolute inset-0 flex flex-col"
              >
                <div className="relative h-[65vh]">
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/30 to-black"></div>
                  <img
                    src={section.image}
                    alt={section.alt}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 bg-black px-6 py-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-1 bg-gradient-to-r from-[#7c2ae8] to-[#00c4cc] rounded-full"></div>
                    <span className="text-[#00c4cc] text-sm font-medium">
                      {`0${index + 1} / 06`}
                    </span>
                  </div>

                  <h2 className="text-[2rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#7c2ae8] to-[#00c4cc] leading-tight mb-4">
                    {section.title}
                  </h2>

                  <p className="text-[#d0d0d0] text-lg leading-relaxed">
                    {section.description}
                  </p>

                  <div className="mt-8 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full border-2 border-[#7c2ae8] flex items-center justify-center">
                      <span className="text-[#7c2ae8] font-bold">{`0${index + 1}`}</span>
                    </div>
                    <div className="flex-1 h-[2px] bg-[#2a2a2a] relative">
                      <motion.div
                        style={{ scaleX: progress }}
                        className="absolute inset-0 bg-gradient-to-r from-[#7c2ae8] to-[#00c4cc] origin-left"
                      />
                    </div>
                    <div className="w-12 h-12 rounded-full border-2 border-[#00c4cc] flex items-center justify-center">
                      <span className="text-[#00c4cc] font-bold">06</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SportAcademySuccessMobile;
