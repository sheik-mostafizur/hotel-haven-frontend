import Dashboard from "../pages/dashboard";
import {HotelManager, RoomsManager} from "../pages/dashboard/manager";
import ManagerProtector from "./ManagerProtector";

const routes = [
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "hotel",
        element: <HotelManager />,
      },
      {
        path: "rooms",
        element: <RoomsManager />,
      },
    ],
  },
];

const ManagerRoutes = routes.map((route) => ({
  ...route,
  path: "/manager" + route.path,
  element: <ManagerProtector>{route.element}</ManagerProtector>,
}));

export default ManagerRoutes;
