import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import ErrorElement from "../pages/error-element";
import SignUp from "../pages/signup";
import SignIn from "../pages/signin";
import Dashbord from "../pages/dashbord/Dashbord/Dashbord";
import Users from "../pages/dashbord/User/User";
import Dashbordlayout from "../pages/dashbord/Dashbordlayout/Dashbordlayout";
import Addproduct from "../pages/dashbord/Addroom/Addroom";
import HotelForm from "../pages/dashbord/Hotel/Addhotel";


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
    path: "/dashbord",
    element: <Dashbordlayout />,
    children: [
      {
        path: "",
        element: <Dashbord />
      },
      {
        path: "users",
        element: <Users />
      },
      {
        path: "add-product",
        element: <Addproduct />
      }
      ,
      {
        path: "add-hotel",
        element: <HotelForm />
      }
    ]
  },
]);
export default router;
