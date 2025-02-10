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
import NavBar from "../NavBar";
import FooterSection from "../FooterSection";

const SportAcademy = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <div className=" w-full min-h-screen bg-black ">
      <div className="w-full h-[0.1px]" id="start"></div>
      <NavBar />
      <div className=" w-full h-[0.1px] " id="hero"></div>
      <SportAcademyHero />
      <div className=" w-full h-[10vh] " id="aboutus"></div>
      <SportAcademyAboutUs />
      <div className=" w-full h-[10vh] " id="programoffer"></div>
      <SportAcademyProgramOffer />

      <div className=" w-full h-[10vh] " id="training"></div>
      {isMobile ? <SportAcademyTrainingMobile /> : <SportAcademyTraining />}
      <div className=" w-full h-[10vh] " id="success"></div>
      {isMobile ? <SportAcademySuccessMobile /> : <SportAdacemySuccess />}
      {/* <div className=" w-full h-[10vh] " id="story"></div>
      {isMobile ? <SportAcademyStoryMobile /> : <SportAcedemyStory />} */}

      
      <div className=" w-full h-[10vh] " id="faqs"></div>
      <SportAcademyFAQ />
      <FooterSection />
    </div>
  );
};

export default SportAcademy;
