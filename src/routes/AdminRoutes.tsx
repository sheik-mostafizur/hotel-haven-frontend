import AdminProtector from "./AdminProtector";
import Dashboard from "../pages/dashboard";
import {
  HotelDetailsAdmin,
  HotelsAdmin,
  UsersAdmin,
} from "../pages/dashboard/admin";

const routes = [
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "users",
        element: <UsersAdmin />,
      },
      {
        path: "hotels",
        element: <HotelsAdmin />,
      },
      {
        path: "hotels/:_id",
        element: <HotelDetailsAdmin />,
      },
    ],
  },
];

const AdminRoutes = routes.map((route) => ({
  ...route,
  path: "/admin" + route.path,
  element: <AdminProtector>{route.element}</AdminProtector>,
}));

export default AdminRoutes;
