import React from "react";
import { Home } from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  ButtonPage,
  CardPage,
  BadgePage,
  AlertPage,
  NavbarPage,
  TogglePage,
  ProgressPage,
} from "./pages/ComponentsPage";
import { IntallPage, ContentDeliveryNetwork, Colors } from "./pages/docs";
import About from "./pages/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/docs/install",
    element: <IntallPage />,
  },
  {
    path: "/docs/cdn",
    element: <ContentDeliveryNetwork />,
  },
  {
    path: "/docs/color",
    element: <Colors />,
  },

  {
    path: "/components/button",
    element: <ButtonPage />,
  },
  {
    path: "/components/card",
    element: <CardPage />,
  },
  {
    path: "/components/badge",
    element: <BadgePage />,
  },
  {
    path: "/components/alert",
    element: <AlertPage />,
  },
  {
    path: "/components/navbar",
    element: <NavbarPage />,
  },
  {
    path: "/components/toggle",
    element: <TogglePage />,
  },
  {
    path: "/components/progress",
    element: <ProgressPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/coba",
    element: <About />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
