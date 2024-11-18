import React from "react";
import "./App.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";

import Mission from "./aboutus/Mission";
import Overview from "./aboutus/Overview";
import Learning from "./pages/Learning/Learning";
import Houses from "./aboutus/Houses";
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
        <NavBar />
        <div className="w-full bg-black h-[0.1px]" id="overview"></div>
        <Overview />
        <div className="w-full bg-black h-[0.1vh]" id="mission"></div>
        <Mission />
        <div className="w-full bg-black h-[10vh]" id="advantage"></div>
        <VKadvantage />
        <div className="w-full bg-black h-[10vh]" id="houses"></div>
        <Houses />
        <div className="w-full bg-black h-[10vh]" id="partners"></div>
        <Partners />
        <div className="w-full bg-black h-[0.1vh]" id="cta"></div>
        <CTA />
      </>
    ),
  },
  {
    path: "/learning",
    element: <Learning />,
  },
  {
    path: "/curricular",
    element: (
      <>
        <NavBar />
        <div className="w-full h-[0.1px] " id={"overview"}></div>
        <Cooverview />
        <div className="w-full h-[0.1px] " id={"co"}></div>
        <Cocurricular />
        <div className="w-full h-[0.1px] " id={"sports"}></div>
        <Sports />
      </>
    ),
  },
  {
    path: "/discover",
    element: (
      <>
        <NavBar />
        <div className="w-full h-[0.1px] bg-black " id={"overview"}></div>
        <Doverview />
        <div className="w-full h-[2vh] bg-black " id={"mess"}></div>
        <Mess />
        <div className="w-full h-[10vh] bg-black " id={"content"}></div>
        <Content />
      </>
    ),
  },
  {
    path: "/sportacademy",
    element: <SportAcademy />,
  },
  { path: "/admission", element: <Admission /> },
  { path: "/contact", element: <ContactUs /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <FooterSection />
    </>
  );
}

export default App;
