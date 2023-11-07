import { FaUsers } from "react-icons/fa";
import { RiHotelFill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const DashboardNavAdmin = () => {
  const location = useLocation();

  return (
    <>
      <li>
        <Link
          to="/admin/users"
          className={`flex items-center p-2 text-secondary-900 rounded-lg dark:text-white hover:bg-secondary-100 dark:hover-bg-secondary-700 group ${
            location.pathname === "/admin/users"
              ? "text-primary-500 bg-primary-400 dark:bg-primary-700"
              : ""
          }`}
        >
          <FaUsers className="flex-shrink-0 w-5 h-5 text-secondary-500 transition duration-75 dark:text-secondary-400 group-hover:text-secondary-900 dark:group-hover:text-white" />
          <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
        </Link>
      </li>
      <li>
        <Link
          to="/admin/hotels"
          className={`flex items-center p-2 text-secondary-900 rounded-lg dark:text-white hover:bg-secondary-100 dark:hover-bg-secondary-700 group ${
            location.pathname === "/admin/hotels"
              ? "text-primary-500 bg-primary-400 dark:bg-primary-700"
              : ""
          }`}
        >
          <RiHotelFill className="flex-shrink-0 w-5 h-5 text-secondary-500 transition duration-75 dark:text-secondary-400 group-hover:text-secondary-900 dark:group-hover:text-white" />
          <span className="flex-1 ml-3 whitespace-nowrap">Hotels</span>
        </Link>
      </li>
    </>
  );
};

export default DashboardNavAdmin;
