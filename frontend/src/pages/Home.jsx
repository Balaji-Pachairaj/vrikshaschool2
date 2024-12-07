import React from "react";
import { useMediaQuery } from "react-responsive";
import HeroAndVisionSection from "./HeroAndVisionSection";
import Categories from "./Categories";
import Advantages from "./Advantages";
import EventsMobile from "./Event_Mobile";
import Events from "./Events";
import Partners from "./Partners";
import CTA from "./CTA";
import CTA2 from "./CTA2";
import Testimonials from "./Testimonials";
import Testimonials_Mobile from "./Testimonals_Mobile";
import NavBar from "./NavBar";
import FooterSection from "./FooterSection";

const Home = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="relative min-h-screen bg-black">
      {/* Navigation */}
      <NavBar className="absolute top-0 left-0 w-full z-50" />
      
      {/* Main Content */}
      <main>
        
        {/* Hero Section */}
        <HeroAndVisionSection />

        {/* Other Sections */}
        <div className="w-full h-[10vh]" id={"category"}></div>
        <Categories />
        
        <div className="w-full h-[10vh]" id={"advantages"}></div>
        <Advantages />
        
        <div className="w-full h-[0.1px]" id={"events"}></div>
        {isMobile ? <EventsMobile /> : <Events />}
        
        <div className="w-full h-[10vh]" id={"testimonals"}></div>
        <Testimonials />
        <Testimonials_Mobile />
        
        <div className="w-full h-[10vh]" id={"partners"}></div>
        <Partners />
        <CTA />
        <CTA2 />
        <FooterSection />
      </main>
    </div>
  );
};

export default Home;
