import React from "react";

import Overview from "./Overview";

import NavBar from "../NavBar";
import FooterSection from "../FooterSection";
import LearningCard from "./LearningCard";
import CTA from "../CTA";
import CTA2 from "../CTA2";
import LearningCardNew from "./LearningCardNew";

const Learning = () => {
  return (
    <div className="w-full bg-black">
      <div className="w-full h-[0.1px]" id="start"></div>
      <NavBar />
      <div className=" w-full h-[0.1px]" id="overview"></div>
      <Overview />

      <div className=" w-full h-[0.1px]" id="learningcard"></div>
      {/* <LearningCard /> */}
      <LearningCardNew />

      <div className="w-full bg-black h-[0.1vh]" id="cta"></div>
      <CTA />
      <div className="w-full bg-black h-[0.1vh]" id="cta2"></div>
      <CTA2 />

      <FooterSection />
    </div>
  );
};

export default Learning;
