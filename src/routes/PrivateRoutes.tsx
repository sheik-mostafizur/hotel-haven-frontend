import Payment from "../pages/payment";
import Dashboard from "../pages/dashboard";
import ProfileDashboard from "../pages/dashboard/profile-dashboard";
import Settings from "../pages/settings";
import PrivateProtector from "./PrivateProtector";
import {Wishlist} from "../pages/dashboard/customer";
import Profile from "../pages/profile";

const routes = [
  {
    path: "/settings",
    element: <Settings />,
  },
  {
    path: "/profile/:_id",
    element: <Profile />,
  },
  {
    path: "/payment/:_id",
    element: <Payment />,
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
        path: "wishlist",
        element: <Wishlist />,
      },
    ],
  },
];

const PrivateRoutes = routes.map((route) => ({
  ...route,
  element: <PrivateProtector>{route.element}</PrivateProtector>,
}));

export default PrivateRoutes;
