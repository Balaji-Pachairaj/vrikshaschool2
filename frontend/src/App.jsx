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


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/aboutus",
    element: <>
    <Mission/>
    <Overview/>
    <Houses/>
    <Partners/>
    <CTA />
    </>
  },
  {
    path: "/learning",
    element: <Learning />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
