import {Link, Outlet, useLocation} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {
  DashboardNavAdmin,
  DashboardNavCustomer,
  DashboardNavManager,
} from "./dashboard-nav";
import {
  BiLogoBlogger,
  BiSolidBookBookmark,
  BiSolidDashboard,
} from "react-icons/bi";
import {FaSignOutAlt, FaHome} from "react-icons/fa";
import {AiOutlineAlignLeft} from "react-icons/ai";
import {CgProfile} from "react-icons/cg";
import ROLE from "../../constants/ROLE";
import {logout} from "../../redux/authSlice";
import swal from "sweetalert";
import {useState} from "react";

const Dashboard = () => {
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleSignOut = () => {
    swal({
      title: "Are you sure you want to log out?",
      buttons: ["CANCEL", "LOG OUT"],
    }).then((confirm) => {
      if (confirm) {
        dispatch(logout());
      }
    });
  };

  return (
    <>
      <button
        onClick={() => setToggleMenu(!toggleMenu)}
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        className={`${
          toggleMenu ? "block ml-auto" : "ml-3 inline-flex"
        } items-center p-2 mt-2 text-sm text-secondary-500 rounded-lg sm:hidden hover:bg-secondary-100 focus:outline-none focus:ring-2 focus:ring-secondary-200 dark:text-secondary-400 dark:hover:bg-secondary-700 dark:focus:ring-secondary-600`}>
        <span className="sr-only">Open sidebar</span>
        <AiOutlineAlignLeft className="w-6 h-6" />
      </button>

      <aside
        id="logo-sidebar"
        className={`${
          toggleMenu ? "" : "-translate-x-full"
        } fixed top-0 left-0 z-40 w-64 h-screen transition-transform sm:translate-x-0`}
        aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto bg-secondary-50 dark:bg-secondary-800">
          <div className="flex flex-col items-center pl-2.5 mb-5">
            <div className="relative">
              <img
                src={user.photoURL}
                className="w-16 h-16 mr-3 md:w-28 md:h-28 object-cover rounded-full"
                alt={user.name}
              />
              {ROLE.ADMIN == user.role && (
                <span className="absolute top-1.5 -right-6 md:-right-3 bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                  Admin
                </span>
              )}
              {ROLE.MANAGER == user.role && (
                <span className="absolute top-1.5 -right-6 md:-right-3 bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  Manager
                </span>
              )}
            </div>

            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              {user.name}
            </span>
          </div>
          <ul className="space-y-2 font-medium">
            <div>
              <li>
                <Link
                  to="/dashboard"
                  className={`flex items-center p-2 text-secondary-900 rounded-lg dark:text-white hover:bg-secondary-100 dark:hover-bg-secondary-700 group ${
                    location.pathname === "/dashboard"
                      ? "text-primary-500 bg-primary-400 dark:bg-primary-700"
                      : ""
                  }`}>
                  <BiSolidDashboard className="flex-shrink-0 w-5 h-5 text-secondary-500 transition duration-75 dark:text-secondary-400 group-hover:text-secondary-900 dark:group-hover:text-white" />
                  <span className="ml-3">Dashboard</span>
                </Link>
              </li>

              {user.role === ROLE.CUSTOMER && <DashboardNavCustomer />}
              {user.role === ROLE.MANAGER && <DashboardNavManager />}
              {user.role === ROLE.ADMIN && <DashboardNavAdmin />}
            </div>
            <li>
              <Link
                to={"/dashboard/profile"}
                className={`flex cursor-pointer items-center p-2 text-secondary-900 rounded-lg dark:text-white hover:bg-secondary-100 dark:hover-bg-secondary-700 group ${
                  location.pathname === "/dashboard/profile"
                    ? "text-primary-500 bg-primary-400 dark:bg-primary-700"
                    : ""
                }`}>
                <CgProfile className="flex-shrink-0 w-5 h-5 text-secondary-500 transition duration-75 dark:text-secondary-400 group-hover:text-secondary-900 dark:group-hover:text-white" />
                <span className="flex-1 ml-3 whitespace-nowrap">Profile</span>
              </Link>
            </li>
            <li>
              <Link
                to={"/dashboard/blogs"}
                className={`flex cursor-pointer items-center p-2 text-secondary-900 rounded-lg dark:text-white hover:bg-secondary-100 dark:hover-bg-secondary-700 group ${
                  location.pathname === "/dashboard/blogs"
                    ? "text-primary-500 bg-primary-400 dark:bg-primary-700"
                    : ""
                }`}>
                <BiLogoBlogger className="flex-shrink-0 w-5 h-5 text-secondary-500 transition duration-75 dark:text-secondary-400 group-hover:text-secondary-900 dark:group-hover:text-white" />
                <span className="flex-1 ml-3 whitespace-nowrap">Blogs</span>
              </Link>
            </li>
            <li>
              <Link
                to={"/dashboard/bookmark"}
                className={`flex cursor-pointer items-center p-2 text-secondary-900 rounded-lg dark:text-white hover:bg-secondary-100 dark:hover-bg-secondary-700 group ${
                  location.pathname === "/dashboard/bookmark"
                    ? "text-primary-500 bg-primary-400 dark:bg-primary-700"
                    : ""
                }`}>
                <BiSolidBookBookmark className="flex-shrink-0 w-5 h-5 text-secondary-500 transition duration-75 dark:text-secondary-400 group-hover:text-secondary-900 dark:group-hover:text-white" />
                <span className="flex-1 ml-3 whitespace-nowrap">Bookmark</span>
              </Link>
            </li>
            <li>
              <Link
                to={"/"}
                className="flex cursor-pointer items-center p-2 text-secondary-900 rounded-lg dark:text-white hover:bg-secondary-100 dark:hover-bg-secondary-700 group">
                <FaHome className="flex-shrink-0 w-5 h-5 text-secondary-500 transition duration-75 dark:text-secondary-400 group-hover:text-secondary-900 dark:group-hover:text-white" />
                <span className="flex-1 ml-3 whitespace-nowrap">Home</span>
              </Link>
            </li>
            <li>
              <a
                onClick={handleSignOut}
                className="flex cursor-pointer items-center p-2 text-secondary-900 rounded-lg dark:text-white hover:bg-secondary-100 dark:hover-bg-secondary-700 group">
                <FaSignOutAlt className="flex-shrink-0 w-5 h-5 text-secondary-500 transition duration-75 dark:text-secondary-400 group-hover:text-secondary-900 dark:group-hover:text-white" />
                <span className="flex-1 ml-3 whitespace-nowrap">Sign Out</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64">
        <Outlet />
      </div>
    </>
  );
};

export default Dashboard;
