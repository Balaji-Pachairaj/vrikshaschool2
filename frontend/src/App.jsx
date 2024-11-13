import React from "react";
import "./App.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Learning from "./pages/Learning/Learning";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/aboutus",
    element: <p>sadfsad</p>,
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
