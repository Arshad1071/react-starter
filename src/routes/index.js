import { useEffect, useState } from "react";
import { useRoutes, Navigate } from "react-router-dom";
import { lazy } from "react";
import MainLayout from "../layout/MainLayout";

const ViewOne = lazy(() => import("../views/ViewOne"));
const ViewTwo = lazy(() => import("../views/ViewTwo"));
const ViewThree = lazy(() => import("../views/ViewThree"));

const initRoutes = () => {
  const roleRoutes = {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/dashboard" />,
      },
      {
        path: "/ViewOne",
        element: <ViewOne />,
      },
      {
        path: "/ViewTwo",
        element: <ViewTwo />,
      },
      {
        path: "/ViewThree",
        element: <ViewThree />,
      },
    ],
  };
  const routes = {
    ...roleRoutes,
    children: Object.assign([], roleRoutes.children),
  };
  return routes;
};

export default function AppRoutes() {
  const [routes, setRoutes] = useState(() => initRoutes());

  useEffect(() => {
    setRoutes(initRoutes());
  }, []);

  return useRoutes([routes]);
}
