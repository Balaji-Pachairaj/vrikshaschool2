import React from "react";
import Hero from "./Hero";
import Vision from "./Vision";
import { useMediaQuery } from "react-responsive";
import Milestones from "./Milestones";
import Milestones_Mobile from "./Milestones_Mobile";

const HeroAndVisionSection = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="w-full h-fit" id={"hero"}>
      <Hero />
      <div className="w-full h-[0.1px]" id="visionandmission"></div>
      <Vision />
      <div className="w-full h-[0.1px]" id="milestone"></div>
      {isMobile ? <Milestones_Mobile /> : <Milestones />}
    </div>
  );
};

export default HeroAndVisionSection;
