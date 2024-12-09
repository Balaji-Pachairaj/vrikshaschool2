import React from "react";

import LeadCurriculam from "./LeadCurriculam";
import Facilities from "./Facilities";
import FacilitiesMobile from "./FacilitiesMobile";
import { useMediaQuery } from "react-responsive";
import Overview from "./Overview";
import FacilitiesSection from "./FacilitiesSection";
import NavBar from "../NavBar";
import FooterSection from "../FooterSection";
import LearningCard from "./LearningCard";
import CTA from "../CTA";
import CTA2 from "../CTA2";

const Learning = () => {
  return (
    <div className="w-full bg-black">
        <div className="w-full h-[0.1px]" id="start"></div>
      <NavBar />
      <div className=" w-full h-[0.1px]" id="overview"></div>
      <Overview />

      <div className=" w-full h-[0.1px]" id="learningcard"></div>
      <LearningCard />

      <div className="w-full bg-black h-[0.1vh]" id="cta"></div>
        <CTA />
        <div className="w-full bg-black h-[0.1vh]" id="cta2"></div>
        <CTA2 />
      
      <FooterSection />
    </div>
  );
};

export default Learning;
