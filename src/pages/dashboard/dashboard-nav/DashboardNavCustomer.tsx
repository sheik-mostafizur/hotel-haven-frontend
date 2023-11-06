import {BsFillBox2HeartFill} from "react-icons/bs";
import {Link} from "react-router-dom";

const DashboardNavCustomer = () => {
  return (
    <>
      <li>
        <Link
          to="wishlist"
          className="flex items-center p-2 text-secondary-900 rounded-lg dark:text-white hover:bg-secondary-100 dark:hover:bg-secondary-700 group">
          <BsFillBox2HeartFill className="flex-shrink-0 w-5 h-5 text-secondary-500 transition duration-75 dark:text-secondary-400 group-hover:text-secondary-900 dark:group-hover:text-white" />
          <span className="flex-1 ml-3 whitespace-nowrap">Wishlist</span>
        </Link>
      </li>
    </>
  );
};

export default DashboardNavCustomer;
