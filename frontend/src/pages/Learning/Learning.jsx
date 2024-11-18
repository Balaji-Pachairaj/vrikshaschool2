import React from "react";
import PrimarySchoolSection from "./PrimarySchoolSection";
import LeadCurriculam from "./LeadCurriculam";
import Facilities from "./Facilities";
import FacilitiesMobile from "./FacilitiesMobile";
import { useMediaQuery } from "react-responsive";
import Overview from "./Overview";
import FacilitiesSection from "./FacilitiesSection";
import NavBar from "../NavBar";

const Learning = () => {
  return (
    <div className="w-full bg-black  ">
      <NavBar />
      <div className=" w-full h-[0.1px]" id="overview"></div>
      <Overview />

      <div className=" w-full h-[0.1px]" id="facilities"></div>
      <FacilitiesSection />

      <div className=" w-full h-[0.1px]" id="primaryschool"></div>
      <PrimarySchoolSection />

      <div className=" w-full h-[0.1px]" id="lead"></div>
      <LeadCurriculam />
    </div>
  );
};

export default Learning;
