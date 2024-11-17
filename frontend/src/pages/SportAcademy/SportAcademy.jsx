import React from "react";
import SportAcademyHero from "./SportAcademyHero";
import SportAcademyAboutUs from "./SportAcademyAboutUs";
import SportAcademyProgramOffer from "./SportAcademyProgramOffer";
import SportAcademyTraining from "./SportAcademyTraining";
import SportAcademyTrainingMobile from "./SportAcademyTrainingMobile";
import { useMediaQuery } from "react-responsive";
import SportAdacemySuccess from "./SportAdacemySuccess";

const SportAcademy = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <div className=" w-full min-h-screen bg-black">
      <SportAcademyHero />
      <SportAcademyAboutUs />
      <SportAcademyProgramOffer />

      {isMobile ? <SportAcademyTrainingMobile /> : <SportAcademyTraining />}

      <SportAdacemySuccess />
    </div>
  );
};

export default SportAcademy;
