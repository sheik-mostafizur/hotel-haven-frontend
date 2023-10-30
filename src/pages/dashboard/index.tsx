import {Link, Outlet} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {DashboardNavAdmin, DashboardNavManager} from "./dashboard-nav";
import {BiSolidDashboard} from "react-icons/bi";
import {FaSignOutAlt} from "react-icons/fa";
import {AiOutlineAlignLeft} from "react-icons/ai";
import ROLE from "../../constants/ROLE";
import {logout} from "../../redux/authSlice";
import swal from "sweetalert";

const Dashboard = () => {
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();

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
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-secondary-500 rounded-lg sm:hidden hover:bg-secondary-100 focus:outline-none focus:ring-2 focus:ring-secondary-200 dark:text-secondary-400 dark:hover:bg-secondary-700 dark:focus:ring-secondary-600">
        <span className="sr-only">Open sidebar</span>
        <AiOutlineAlignLeft className="w-6 h-6" />
      </button>

      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto bg-secondary-50 dark:bg-secondary-800">
          <Link to="/" className="flex items-center pl-2.5 mb-5">
            <img
              src="/images/logo-transparent.png"
              className="h-6 mr-3 sm:h-8"
              alt="Hotel Haven"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              HotelHaven
            </span>
          </Link>
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to="/dashboard"
                className="flex items-center p-2 text-secondary-900 rounded-lg dark:text-white hover:bg-secondary-100 dark:hover:bg-secondary-700 group">
                <BiSolidDashboard className="flex-shrink-0 w-5 h-5 text-secondary-500 transition duration-75 dark:text-secondary-400 group-hover:text-secondary-900 dark:group-hover:text-white" />
                <span className="ml-3">Dashboard</span>
              </Link>
            </li>

            {user.role === ROLE.MANAGER && <DashboardNavManager />}
            {user.role === ROLE.ADMIN && <DashboardNavAdmin />}

            <li>
              <a
                onClick={handleSignOut}
                className="flex cursor-pointer items-center p-2 text-secondary-900 rounded-lg dark:text-white hover:bg-secondary-100 dark:hover:bg-secondary-700 group">
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
