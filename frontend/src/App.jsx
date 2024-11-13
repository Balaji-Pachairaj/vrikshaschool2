import React from "react";
import "./App.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";

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
    element: <Learning />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
