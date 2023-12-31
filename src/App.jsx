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
  SelectPage,
  DropdownPage,
  TablePage,
  HeroPage,
  FooterPage,
  TextInputPage,
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
    path: "/components/select",
    element: <SelectPage />,
  },
  {
    path: "/components/dropdown",
    element: <DropdownPage />,
  },
  {
    path: "/components/table",
    element: <TablePage />,
  },
  {
    path: "/components/hero",
    element: <HeroPage />,
  },
  {
    path: "/components/footer",
    element: <FooterPage />,
  },
  {
    path: "/components/text-input",
    element: <TextInputPage />,
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
