import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/home";
import ErrorElement from "../pages/error-element";
import SignUp from "../pages/signup";
import SignIn from "../pages/signin";
import Users from "../pages/dashbord/User/User";
import Dashboard from "../pages/dashbord/Dashboard/Dashboard";
import DashboardLayout from "../pages/dashbord/dashboard-layout/Dashbordlayout";
import AddRooms from "../pages/dashbord/manager/rooms/add-rooms";
import AddAHotel from "../pages/dashbord/manager/hotel-manager/add-a-hotel";
import HotelManager from "../pages/dashbord/manager/hotel-manager";

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
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "hotel",
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
