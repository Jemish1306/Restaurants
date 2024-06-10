import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import RegisterScreenRegister from "pages/RegisterScreenRegister";
import LoginScreenUnfill from "pages/LoginScreenUnfill";
import LoginScreenError from "pages/LoginScreenError";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "registerscreenregister",
      element: <RegisterScreenRegister />,
    },
    {
      path: "loginscreenunfill",
      element: <LoginScreenUnfill />,
    },
    {
      path: "loginscreenerror",
      element: <LoginScreenError />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
