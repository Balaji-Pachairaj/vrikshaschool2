import React from "react";
import HeroAndVisionSection from "./HeroAndVisionSection";
import { useMediaQuery } from "react-responsive";
import Categories from "./Categories";
import Advantages from "./Advantages";
import EventsMobile from "./Event_Mobile";
import Events from "./Events";
import Partners from "./Partners";
import CTA from "./CTA";

import Testimonials from "./Testimonials";
import Testimonials_Mobile from "./Testimonals_Mobile";

const Home = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="min-h-screen bg-black p-4">
      <HeroAndVisionSection />

      <Categories />
      <Advantages />
      {isMobile ? <EventsMobile /> : <Events />}

      <Testimonials />
      <Testimonials_Mobile />
      <Partners />
      <CTA />
    </div>
  );
};

export default Home;
