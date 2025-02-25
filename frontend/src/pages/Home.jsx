import React from "react";
import { useMediaQuery } from "react-responsive";
import HeroAndVisionSection from "./HeroAndVisionSection";
import Categories from "./Categories";
import Advantages from "./Advantages";
import Whyus_mobile from "./Whyus_mobile";
import Whyus from "./Whyus";
import Partners from "./Partners";
import CTA from "./CTA";
import CTA2 from "./CTA2";
import Testimonials from "./Testimonials";
import Testimonials_Mobile from "./Testimonals_Mobile";
import NavBar from "./NavBar";
import FooterSection from "./FooterSection";
import Carousel from "./Carousel";

const Home = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="relative min-h-screen bg-black">
      {/* Navigation */}
      <NavBar className="absolute top-0 left-0 w-full z-50" />
      
      {/* Main Content */}
      <main>
        
        <Carousel />
        {/* Hero Section */}
        <HeroAndVisionSection />

        {/* Other Sections */}
        {/* <div className="w-full h-[10vh]" id={"category"}></div>
        <Categories /> */}
        
        <div className="w-full h-[10vh]" id={"advantages"}></div>
        <Advantages />
        
        <div className="w-full h-[0.1px]" id={"whyus"}></div>
        {isMobile ? <Whyus_mobile /> : <Whyus />}
        
        <div className="w-full h-[10vh]" id={"testimonals"}></div>
        <Testimonials />
        
        
        <CTA />
        <CTA2 />
        <FooterSection />
      </main>
    </div>
  );
};

export default Home;
