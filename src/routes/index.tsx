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
import AboutUs from "../pages/about-us";
import ContactUs from "../pages/contact-us";
import Hotel from "../pages/hotel";
import HotelDetails from "../pages/hotel/hotel-details";
import PrivacyPolicy from "../pages/privacy-policy";
import License from "../pages/license";
import TermsAndConditions from "../pages/terms-and-condition";
import Suceess from "../pages/payment/utitlies/Suceess";
import Failed from "../pages/payment/utitlies/Failed";
import Cancelpage from "../pages/payment/utitlies/Cancelpage";


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
    path: "/hotel/:_id",
    element: <HotelDetails />,
  },
  {
    path: "/playground",
    element: <Playground />,
  },
  {
    path: "/PrivacyPolicy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/license",
    element: <License />,
  },
  {
    path: "/termsAndConditions",
    element: <TermsAndConditions />,
  },
  {
    path: "/success",
    element: <Suceess />,
  },
  {
    path: "/fail",
    element: <Failed />,
  },
  {
    path: "/cancel",
    element: <Cancelpage />,
  },
  ...AdminRoutes,
  ...ManagerRoutes,
  ...PrivateRoutes,
]);
export default router;
