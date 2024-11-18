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
        <Overview />
        <Mission />
        <VKadvantage />
        <Houses />
        <Partners />
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
        <Cooverview />
        <Cocurricular />
        <Sports />
      </>
    ),
  },
  {
    path: "/discover",
    element: (
      <>
        <NavBar />
        <Doverview />
        <Mess />
        <Content />
      </>
    ),
  },
  {
    path: "/sportacademy",
    element: <SportAcademy />,
  },
  { path: "/admission", element: <></> },
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
