import React from "react";
import SportAcademyHero from "./SportAcademyHero";
import SportAcademyAboutUs from "./SportAcademyAboutUs";
import SportAcademyProgramOffer from "./SportAcademyProgramOffer";
import SportAcademyTraining from "./SportAcademyTraining";
import SportAcademyTrainingMobile from "./SportAcademyTrainingMobile";
import { useMediaQuery } from "react-responsive";
import SportAdacemySuccess from "./SportAdacemySuccess";
import SportAcademySuccessMobile from "./SportAcademySuccessMobile";
import SportAcedemyStory from "./SportAcedemyStory";
import SportAcademyStoryMobile from "./SportAcademyStoryMobile";
import SportAcademyMemberShip from "./SportAcademyMemberShip";
import SportAcademyFAQ from "./SportAcademyFAQ";

const SportAcademy = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <div className=" w-full min-h-screen bg-black">
      <SportAcademyHero />
      <SportAcademyAboutUs />
      <SportAcademyProgramOffer />

      {isMobile ? <SportAcademyTrainingMobile /> : <SportAcademyTraining />}
      {isMobile ? <SportAcademySuccessMobile /> : <SportAdacemySuccess />}
      {isMobile ? <SportAcademyStoryMobile /> : <SportAcedemyStory />}

      <SportAcademyMemberShip />
      <SportAcademyFAQ />
    </div>
  );
};

export default SportAcademy;
