import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/home";
import ErrorElement from "../pages/error-element";
import SignUp from "../pages/signup";
import SignIn from "../pages/signin";
import Dashboard from "../pages/dashboard/dashboard";
import DashboardLayout from "../pages/dashboard/dashboard-layout";
import AddRooms from "../pages/dashboard/manager/rooms/AddRooms";
import AddAHotel from "../pages/dashboard/manager/hotel-manager/AddAHotel";
import HotelManager from "../pages/dashboard/manager/hotel-manager";
import Settings from "../pages/settings";
import UsersAdmin from "../pages/dashboard/admin/users-admin";
import IsAuthenticated from "./isAuthenticated";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorElement />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
  {
    path: "/dashboard",
    element: (
      <IsAuthenticated>
        <DashboardLayout />
      </IsAuthenticated>
    ),
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "users",
        element: <UsersAdmin />,
      },
      {
        path: "hotels",
        element: <HotelManager />,
      },
      {
        path: "addHotel",
        element: <AddAHotel />,
      },
      {
        path: "rooms",
        element: <AddRooms />,
      },
    ],
  },
]);
export default router;
