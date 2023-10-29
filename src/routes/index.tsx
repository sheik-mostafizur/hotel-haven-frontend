import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import ErrorElement from "../pages/error-element";
import SignUp from "../pages/signup";
import SignIn from "../pages/signin";
import Playground from "../pages/playground";
import AdminRoutes from "./AdminRoutes";
import ManagerRoutes from "./ManagerRoutes";
import PrivateRoutes from "./PrivateRoutes";
import Blogs from "../pages/blogs";

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
    path: "/playground",
    element: <Playground />,
  },
  // make sure the sequence is maintainable
  ...AdminRoutes,
  ...ManagerRoutes,
  ...PrivateRoutes,
]);
export default router;
