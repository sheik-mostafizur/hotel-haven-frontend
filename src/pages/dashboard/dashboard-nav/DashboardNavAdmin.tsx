import {BsFillHousesFill} from "react-icons/bs";
import {FaUsers} from "react-icons/fa";
import {RiHotelFill} from "react-icons/ri";
import {Link} from "react-router-dom";

const DashboardNavAdmin = () => {
  return (
    <>
      <li>
        <Link
          to="/admin/users"
          className="flex items-center p-2 text-secondary-900 rounded-lg dark:text-white hover:bg-secondary-100 dark:hover:bg-secondary-700 group">
          <FaUsers className="flex-shrink-0 w-5 h-5 text-secondary-500 transition duration-75 dark:text-secondary-400 group-hover:text-secondary-900 dark:group-hover:text-white" />
          <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
        </Link>
      </li>
      <li>
        <Link
          to="/admin/hotels"
          className="flex items-center p-2 text-secondary-900 rounded-lg dark:text-white hover:bg-secondary-100 dark:hover:bg-secondary-700 group">
          <RiHotelFill className="flex-shrink-0 w-5 h-5 text-secondary-500 transition duration-75 dark:text-secondary-400 group-hover:text-secondary-900 dark:group-hover:text-white" />
          <span className="flex-1 ml-3 whitespace-nowrap">Hotels</span>
        </Link>
      </li>
      <li>
        <Link
          to="/admin/rooms"
          className="flex items-center p-2 text-secondary-900 rounded-lg dark:text-white hover:bg-secondary-100 dark:hover:bg-secondary-700 group">
          <BsFillHousesFill className="flex-shrink-0 w-5 h-5 text-secondary-500 transition duration-75 dark:text-secondary-400 group-hover:text-secondary-900 dark:group-hover:text-white" />
          <span className="flex-1 ml-3 whitespace-nowrap">Rooms</span>
        </Link>
      </li>
    </>
  );
};

export default DashboardNavAdmin;
