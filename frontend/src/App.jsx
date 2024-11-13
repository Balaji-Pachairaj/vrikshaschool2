import React from "react";
import "./App.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Mission from "./aboutus/Mission";
import Overview from "./aboutus/Overview";
import Learning from "./pages/Learning/Learning";

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
    </>,
  },
  {
    path: "/learning",
    element: <Learning />,
  }
], {
  basename: "/" // This ensures proper base URL handling
});

function App() {
  return <RouterProvider router={router} />;
}

export default App;
