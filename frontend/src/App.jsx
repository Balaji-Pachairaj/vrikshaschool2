import React from "react";
import "./App.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Mission from "./aboutus/Mission";
import Overview from "./aboutus/Overview";


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
    </>
  },
  {
    path: "/learning",
    element: <h1>Hello World</h1>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
