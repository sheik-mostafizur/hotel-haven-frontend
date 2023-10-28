import {Outlet} from "react-router-dom";
import ManagerProtector from "./ManagerProtector";

const routes = [
  {
    path: "/dashboard",
    element: (
      <>
        <h1>Manager</h1>
        <Outlet />
      </>
    ),
    children: [
      {
        path: "gust",
        element: <h2>Manager Gust</h2>,
      },
    ],
  },
];

const ManagerRoutes = routes.map((route) => ({
  ...route,
  element: <ManagerProtector>{route.element}</ManagerProtector>,
}));

export default ManagerRoutes;
