import React from "react";
import PrimarySchoolSection from "./PrimarySchoolSection";
import LeadCurriculam from "./LeadCurriculam";
import Facilities from "./Facilities";
import FacilitiesMobile from "./FacilitiesMobile";
import { useMediaQuery } from "react-responsive";
import Overview from "./Overview";

const Learning = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="w-full bg-black  ">
      <Overview />

      <PrimarySchoolSection />

      {isMobile ? <FacilitiesMobile /> : <Facilities />}

      <LeadCurriculam />
    </div>
  );
};

export default Learning;
