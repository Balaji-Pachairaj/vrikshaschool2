import React from "react";
import "./App.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Mission from "./aboutus/Mission";
import Overview from "./aboutus/Overview";
import Learning from "./pages/Learning/Learning";
import Houses from "./aboutus/Houses";


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
