import Dashboard from "../pages/dashboard";
import {
  BookingHistoryManager,
  HotelManager,
  RoomsManager,
} from "../pages/dashboard/manager";
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
        path: "hotel/:id",
        element: <h1>show manager hotel</h1>,
      },
      {
        path: "rooms",
        element: <RoomsManager />,
      },
      {
        path: "booking-history",
        element: <BookingHistoryManager />,
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
