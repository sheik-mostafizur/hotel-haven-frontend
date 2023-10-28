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
import AuthProtector from "./AuthProtector";
import Playground from "../pages/playground";
import Blogs from "../pages/blogs/blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorElement />,
  },
  {
    path: "/Blog",
    element: <Blogs />,
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
    element: <DashboardLayout />,
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
  {
    path: "/playground",
    element: <Playground />,
  },
]);
export default router;
