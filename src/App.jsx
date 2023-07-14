import React from "react";
import { Home } from "./pages/Home";
import Documentation from "./pages/Documentation";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/documentation",
    element: <Documentation />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
