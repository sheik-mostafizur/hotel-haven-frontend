import {Outlet} from "react-router-dom";
import AdminProtector from "./AdminProtector";

const routes = [
  {
    path: "/dashboard",
    element: (
      <>
        <h1>Admin</h1>
        <Outlet />
      </>
    ),
    children: [
      {
        path: "gust",
        element: <h2>Admin Gust</h2>,
      },
    ],
  },
];

const AdminRoutes = routes.map((route) => ({
  ...route,
  element: <AdminProtector>{route.element}</AdminProtector>,
}));

export default AdminRoutes;
