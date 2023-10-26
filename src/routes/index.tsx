import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import ErrorElement from "../pages/error-element";
import SignUp from "../pages/signup";
import SignIn from "../pages/signin";
import Users from "../pages/dashbord/User/User";
import Addproduct from "../pages/dashbord/Addroom/Addroom";
import HotelForm from "../pages/dashbord/Hotel/Addhotel";
import Dashboard from "../pages/dashbord/Dashboard/Dashboard";
import DashboardLayout from "../pages/dashbord/dashboard-layout/Dashbordlayout";

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
        path: "addHotel",
        element: <HotelForm />,
      },
    ],
  },
]);
export default router;
