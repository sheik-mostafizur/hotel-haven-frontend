import AdminProtector from "./AdminProtector";
import Dashboard from "../pages/dashboard";
import {HotelsAdmin, RoomsAdmin, UsersAdmin} from "../pages/dashboard/admin";
import HotelDetails from "../components/hotel-details";

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
        path: "hotels/:id",
        element: <HotelDetails />,
      },
      {
        path: "rooms",
        element: <RoomsAdmin />,
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
