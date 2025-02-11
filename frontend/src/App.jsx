import React from "react";
import "./App.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";

import Mission from "./aboutus/Mission";
import Overview from "./aboutus/Overview";
import Learning from "./pages/Learning/Learning";
import Houses from "./aboutus/Houses";
import Leadership from "./aboutus/Leadership";
import Partners from "./pages/Partners";
import CTA from "./pages/CTA";
import VKadvantage from "./aboutus/VKadvantage";
import Cooverview from "./curricular/Cooverview";

import SportAcademy from "./pages/SportAcademy/SportAcademy";
import Cocurricular from "./curricular/Cocurricular";
import Doverview from "./discover/Doverview";
import Mess from "./discover/Mess";
import Content from "./discover/Content";
import Sports from "./curricular/Sports";
import NavBar from "./pages/NavBar";
import FooterSection from "./pages/FooterSection";
import ContactUs from "./pages/ContactUs";

import Admission from "./pages/Admission/Admission";


import Music from "./curricular/Music"
import Outdoor from "./curricular/Outdoor";
import Clubs from "./curricular/Clubs";
import Clubcard from "./curricular/Clubscards";
import Clubcard2 from "./curricular/Clubscards2";
import Creative from "./curricular/Creative";

import Marathonhero from "./pages/Marathon/Marathonhero"
import Marathonrun from "./pages/Marathon/Marathonrun"
import Marathoncategories from "./pages/Marathon/Marathoncategories"
import Marathontime from "./pages/Marathon/Marathontime";
import Marathonglimpses from "./pages/Marathon/Marathonglimpses";
import Marathonsponsor from "./pages/Marathon/Marathonsponsor"
import Marathongoodies from "./pages/Marathon/Marathongoodies";
import Marathonregistration from "./pages/Marathon/Marathonregsitration"

import Alumnioverview from "./pages/Alumni/Alumnioverview"
import Alumninetwork from "./pages/Alumni/Alumninetwork"
import Alumnivolunteer from "./pages/Alumni/Alumnivolunteer"
import Alumninoteable from "./pages/Alumni/Alumninoteable"
import Alumninoteablemobile from "./pages/Alumni/Alumninoteablemobile"
import Alumniconnect from "./pages/Alumni/Alumniconnect";
import Alumnibenefits from "./pages/Alumni/Alumnibenefits";
import AlumniHero from "./pages/Alumni/Alumnihero";
import CTA2 from "./pages/CTA2";
import FacilitiesSection from "./pages/Learning/FacilitiesSection";
import LearningHigher from "./pages/Learning/LearningHigher";
import PrimarySchoolSection from "./pages/Learning/PrimarySchoolSection";
import LeadCurriculam from "./pages/Learning/LeadCurriculam";




const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Home />
      </>
    ),
  },
  {
    path: "/aboutus",

    element: (
      <>
        <div className="w-full h-[0.1px]" id="start"></div>
        <NavBar />
        <div className="w-full bg-black h-[0.1px]" id="overview"></div>
        <Overview />
        <div className="w-full bg-black h-[0.1vh]" id="mission"></div>
        <Mission />
        <div className="w-full bg-black h-[10vh]" id="advantage"></div>
        <VKadvantage />
        <div className="w-full bg-black h-[10vh]" id="houses"></div>
        <Houses />
        <div className="w-full bg-black h-[10vh]" id="leadership"></div>
        <Leadership />
        <div className="w-full bg-black h-[10vh]" id="partners"></div>
        <Partners />
        <div className="w-full bg-black h-[0.1vh]" id="cta"></div>
        <CTA />
        <div className="w-full bg-black h-[0.1vh]" id="cta2"></div>
        <CTA2 />
        <FooterSection />
      </>
    ),
  },
  {
    path: "/learning",
    element: <Learning />,
  },

  {
    path: "/facilities",
    element: (
      <>
        <div className="w-full h-[0.1px]" id="start"></div>
        <NavBar />
        <div className="w-full h-[0.1px]" id="facilitessection" ></div>
        <FacilitiesSection />
        
        
        <FooterSection />
      </>
    ),
  },

  {
    path: "/higher",
    element: (
      <>
        <div className="w-full h-[0.1px]" id="start"></div>
        <NavBar />

        <div className="w-full h-[0.1px]" id="higher" ></div>
        <LearningHigher />

        
        <div className=" w-full h-[0.1px]" id="primaryschool"></div>
        <PrimarySchoolSection />
        
        <FooterSection />
      </>
    ),
  },

  {
    path: "/lead",
    element: (
      <>
        <div className="w-full h-[0.1px]" id="start"></div>
        <NavBar />

        <div className="w-full h-[0.1px]" id="lead" ></div>
        <LeadCurriculam />
        
        <FooterSection />
      </>
    ),
  },

  {
    path: "/curricular",
    element: (
      <>
        <div className="w-full h-[0.1px]" id="start"></div>
        <NavBar />
        <div className="w-full h-[0.1px] " id={"overview"}></div>
        <Cooverview />
        <div className="w-full h-[0.1px] " id={"co"}></div>
        <Cocurricular />

        <div className="w-full bg-black h-[0.1vh]" id="cta"></div>
        <CTA />
        <div className="w-full bg-black h-[0.1vh]" id="cta2"></div>
        <CTA2 />
        
        <FooterSection />
      </>
    ),
  },
  {
    path: "/discover",
    element: (
      <>
        <div className="w-full h-[0.1px]" id="start"></div>
        <NavBar />
        <div className="w-full h-[0.1px] bg-black " id={"overview"}></div>
        <Doverview />
        <div className="w-full h-[2vh] bg-black " id={"mess"}></div>
        <Mess />
        <div className="w-full h-[10vh] bg-black " id={"content"}></div>
        <Content />

        <div className="w-full bg-black h-[0.1vh]" id="cta"></div>
        <CTA />
        <div className="w-full bg-black h-[0.1vh]" id="cta2"></div>
        <CTA2 />
        <FooterSection />
      </>
    ),
  },
  {
    path: "/sportacademy",
    element: <SportAcademy />
  },
  { path: "/admission", element: <Admission /> },
  { path: "/contact", element: <ContactUs /> },

  {
    path: "/sports",
    element: (
      <>
        <div className="w-full h-[0.1px]" id="start"></div>
        <NavBar />
        <div className="w-full h-[0.1px] " id={"sports"}></div>
        <Sports />
        
      
        <FooterSection />
      </>
    ),
  },

  {
    path: "/outdoor",
    element: (
      <>
        <div className="w-full h-[0.1px]" id="start"></div>
        <NavBar />
        <div className="w-full h-[0.1px] " id="outdoor"></div>
        <Outdoor />
      
        <FooterSection />
      </>
    ),
  },

  {
    path: "/clubs",
    element: (
      <>
        <div className="w-full h-[0.1px]" id="start"></div>
        <NavBar />
        <div className="w-full h-[0.1px] " id="clubs"></div>
        <Clubs />
        <div className="w-full h-[0.1px]"></div>
       
        <Clubcard />
        <Clubcard2 />
        <FooterSection />
      </>
    ),
  },

  {
    path: "/music-dance",
    element: (
      <>
        <div className="w-full h-[0.1px]" id="start"></div>
        <NavBar />
        <div className="w-full h-[0.1px] " id="music-dance"></div>
        <Music />
        <div className="w-full h-[0.1px]"></div>
        <FooterSection />
      </>
    ),
  },

  {
    path: "/creative",
    element: (
      <>
        <div className="w-full h-[0.1px]" id="start"></div>
        <NavBar />
        <div className="w-full h-[0.1px]" id="creative" ></div>
        
        <Creative />
        
        <FooterSection />
      </>
    ),
  },

  {
    path: "/marathon",
    element: (
    <>
    <div className="w-full h-[0.1px]" id="start"></div>
    <NavBar />
    
    <div className="w-full h-[0.1px]" id="hero"></div>
      <Marathonhero/>
    <div className="w-full h-[0.1px]" id="about"></div>
    <Marathonrun />
    <div className="w-full h-[0.1px]" id="sponsor"></div>
    <Marathonglimpses/>
    <div className="w-full h-[0.1px]" id="categories"></div>
    <Marathoncategories/>
    <div className="w-full h-[0.1px]" id="time"></div>
    <Marathontime/>
    
    <div className="w-full h-[0.1px]" id="sponsor"></div>
    <Marathonsponsor/>
    <div className="w-full h-[0.1px]" id="goodies"></div>
    <Marathongoodies/>
    <div className="w-full h-[0.1px]" id="registration"></div>
    <Marathonregistration/>

    <FooterSection /> 
    </>
    ),
  },
  
  {
    path: "/alumni",
    element: (
    <>
      <div className="w-full h-[0.1px]" id="start"></div>
      <NavBar />
      <div className="w-full h-[0.1px]" id="hero"></div>
      <AlumniHero/>
      <div className="w-full h-[0.1px]" id="overview"></div>
      <Alumnioverview/>
      <div className="w-full h-[0.1px]" id="network"></div>
      <Alumninetwork/>
      <div className="w-full h-[0.1px]" id="benefits"></div>
      <Alumnibenefits/>  
      
      <div className="w-full h-[0.1px]" id="volunteer"></div>    
      <Alumnivolunteer/>
      <div className="w-full h-[0.1px]" id="noteable"></div>
     
       <Alumninoteablemobile/> <Alumninoteable/>

      <div className="w-full h-[0.1px]" id="connect"></div>
      <Alumniconnect/>

      <div className="w-full bg-black h-[0.1vh]" id="cta"></div>
        <CTA />
        <div className="w-full bg-black h-[0.1vh]" id="cta2"></div>
        <CTA2 />

      <FooterSection />

    </>

    ),

  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
