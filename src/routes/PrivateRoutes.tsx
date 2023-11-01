import Dashboard from "../pages/dashboard";
import ProfileDashboard from "../pages/dashboard/profile-dashboard";
import HotelDetails from "../pages/hotel/hotel-details";
import Settings from "../pages/settings";
import PrivateProtector from "./PrivateProtector";

const routes = [
  {
    path: "/settings",
    element: <Settings />,
  },
  {
    path: "/hotel/:_id",
    element: <HotelDetails />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "",
        element: <ProfileDashboard />,
      },
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
