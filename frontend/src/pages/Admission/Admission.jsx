import React from "react";
import NavBar from "../NavBar";
import FooterSection from "../FooterSection";
import Aoverview from "./Aoverview";

const Admission = () => {
  return (
    <>
      <div className="w-full h-[0.1px]" id="start"></div>
      <NavBar />
      <div className="w-full h-[0.1px]" id="start"></div>
      <Aoverview />
      <div className=" w-full  bg-black"></div>
      <FooterSection />
    </>
  );
};

export default Admission;
