import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/home";
import ErrorElement from "../pages/error-element";
import SignUp from "../pages/signup";
import SignIn from "../pages/signin";
import Playground from "../pages/playground";
import Blogs from "../pages/blogs";
import AdminRoutes from "./AdminRoutes";
import ManagerRoutes from "./ManagerRoutes";
import PrivateRoutes from "./PrivateRoutes";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/contact-us";
import Hotel from "../pages/hotel";
import HotelDetails from "../pages/hotel/hotel-details";
import SingleBlog from "../pages/blogs/SingleBlog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorElement />,
  },
  {
    path: "/blogs",
    element: <Blogs />,
  },
  {
    path: "/blogs/:_id",
    element: <SingleBlog />,
  },
  {
    path: "/about",
    element: <AboutUs />,
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
    path: "/contact-us",
    element: <ContactUs />,
  },
  {
    path: "/hotel",
    element: <Hotel />,
  },
  {
    path: "/hotel-details/:_id",
    element: <HotelDetails></HotelDetails>,
  },
  {
    path: "/playground",
    element: <Playground />,
  },
  ...AdminRoutes,
  ...ManagerRoutes,
  ...PrivateRoutes,
]);
export default router;
