import { RiHotelFill } from "react-icons/ri";
import { BsFillHousesFill } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { MdBookmarkAdded } from "react-icons/md";

const DashboardNavManager = () => {
  const location = useLocation();

  return (
    <>
      <li>
        <Link
          to="/manager/hotel"
          className={`flex items-center p-2 text-secondary-900 rounded-lg dark:text-white hover:bg-secondary-100 dark:hover-bg-secondary-700 group ${
            location.pathname === "/manager/hotel"
              ? "text-primary-500 bg-primary-400 dark:bg-primary-700"
              : ""
          }`}
        >
          <RiHotelFill className="flex-shrink-0 w-5 h-5 text-secondary-500 transition duration-75 dark:text-secondary-400 group-hover:text-secondary-900 dark:group-hover:text-white" />
          <span className="flex-1 ml-3 whitespace-nowrap">Hotel</span>
        </Link>
      </li>
      <li>
        <Link
          to="/manager/rooms"
          className={`flex items-center p-2 text-secondary-900 rounded-lg dark:text-white hover:bg-secondary-100 dark:hover-bg-secondary-700 group ${
            location.pathname === "/manager/rooms"
              ? "text-primary-500 bg-primary-400 dark:bg-primary-700"
              : ""
          }`}
        >
          <BsFillHousesFill className="flex-shrink-0 w-5 h-5 text-secondary-500 transition duration-75 dark:text-secondary-400 group-hover:text-secondary-900 dark:group-hover:text-white" />
          <span className="flex-1 ml-3 whitespace-nowrap">Rooms</span>
        </Link>
      </li>
      <li>
        <Link
          to="/manager/history"
          className={`flex items-center p-2 text-secondary-900 rounded-lg dark:text-white hover:bg-secondary-100 dark:hover-bg-secondary-700 group ${
            location.pathname === "/manager/history"
              ? "text-primary-500 bg-primary-400 dark:bg-primary-700"
              : ""
          }`}
        >
          <MdBookmarkAdded className="flex-shrink-0 w-5 h-5 text-secondary-500 transition duration-75 dark:text-secondary-400 group-hover:text-secondary-900 dark:group-hover:text-white" />
          <span className="flex-1 ml-3 whitespace-nowrap">Booking History</span>
        </Link>
      </li>
    </>
  );
};

export default DashboardNavManager;
