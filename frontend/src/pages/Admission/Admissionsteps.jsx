import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const SportAcademySuccess = () => {
  const fullRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: fullRef,
    offset: ["start start", "end end"],
  });

  const steps = [
    { title: "ENQUIRY", startAt: 0, endsAt: 0.2 },
    { title: "REGISTRATION", startAt: 0.2, endsAt: 0.4 },
    { title: "FORM SUBMISSION AND ADMISSION CONFIRMATION", startAt: 0.4, endsAt: 0.6 },
    { title: "PAYMENT OF FEES", startAt: 0.6, endsAt: 0.8 },
    { title: "PARENT ORIENTATION FORM", startAt: 0.8, endsAt: 1 },
  ];

  const generateAnimations = (startAt, endsAt) => {
    const y = useTransform(
      scrollYProgress,
      [startAt - 0.1, startAt, endsAt],
      ["100%", "0%", "-100%"]
    );
    const opacity = useTransform(
      scrollYProgress,
      [startAt - 0.1, startAt, endsAt, endsAt + 0.1],
      [0, 1, 1, 0]
    );
    return { y, opacity };
  };

  const animations = steps.map(step => generateAnimations(step.startAt, step.endsAt));

  const circleY = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    ["10%", "30%", "50%", "70%", "75%", "80%"]
  );

  const lineHeight = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );

  return (
    <div ref={fullRef} className="w-full h-[500vh] flex flex-row">
      <div className="w-full h-[100vh] flex flex-row sticky top-0">
        {/* Scrollable Left Side */}
        <div className="w-[50%] h-full relative overflow-hidden bg-black">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              style={{ opacity: animations[index].opacity, y: animations[index].y }}
              className="w-full h-full absolute left-0 flex items-center justify-center"
            >
              <h2 className="text-white text-[2vw] font-inter text-center px-4 font-bold">{step.title}</h2>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="w-[1px] h-full relative bg-white">
          <motion.div 
            className="absolute bottom-0 left-0 w-full bg-white"
            style={{ 
              height: lineHeight,
              originY: 1
            }}
          />
          <motion.div 
            className="absolute left-1/2 -translate-x-1/2 z-10"
            style={{ top: circleY }}
          >
            <div className="relative flex flex-col items-center">
              <div className="w-[1px] h-8 bg-white" />
              <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Static Right Side */}
        <div className="w-[50%] h-full bg-black flex flex-col justify-center items-start ps-[4rem] gap-[2rem]">
          <div className="text-white">
            <h2 className="text-[2vw] font-inter font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c2ae8] to-[#00c4cc]">
                Admission Process
              </span>
            </h2>
            <div className="mb-6">
              <h3 className="text-[1.5vw] font-inter font-semibold mb-2">Online</h3>
              <p className="text-[#d0d0d0] text-[16px] font-inter font-light">
                Submit the online Enquiry Form from via this link. Our admission in charge will get back to you to answer your questions and collect the required information.
              </p>
            </div>
            <div>
              <h3 className="text-[1.5vw] font-inter font-semibold mb-2">On Campus</h3>
              <p className="text-[#d0d0d0] text-[16px] font-inter font-light">
                Visit the school admissions office and submit the Enquiry Form. Our admission in charge will clear all your queries and will give complete description about the functioning of the school curriculum. Parents / Guardians are invited to visit the school campus to understand the culture and ethos of the Institution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportAcademySuccess;
