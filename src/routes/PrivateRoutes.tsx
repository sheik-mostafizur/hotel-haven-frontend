import Settings from "../pages/settings";
import PrivateProtector from "./PrivateProtector";
import {Outlet} from "react-router-dom";

const routes = [
  {
    path: "/settings",
    element: <Settings />,
  },
  {
    path: "/dashboard",
    element: (
      <>
        <h1>Customer</h1>
        <Outlet />
      </>
    ),
    children: [
      {
        path: "gust",
        element: <h2>Customer Gust</h2>,
      },
    ],
  },
];

const PrivateRoutes = routes.map((route) => ({
  ...route,
  element: <PrivateProtector>{route.element}</PrivateProtector>,
}));

export default PrivateRoutes;
