import React from "react";
import PrimarySchoolSection from "./PrimarySchoolSection";
import LeadCurriculam from "./LeadCurriculam";
import Facilities from "./Facilities";
import FacilitiesMobile from "./FacilitiesMobile";
import { useMediaQuery } from "react-responsive";
import Overview from "./Overview";
import FacilitiesSection from "./FacilitiesSection";

const Learning = () => {
  return (
    <div className="w-full bg-black  ">
      <Overview />

      <FacilitiesSection />

      <PrimarySchoolSection />

      <LeadCurriculam />
    </div>
  );
};

export default Learning;
