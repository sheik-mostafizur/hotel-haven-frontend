import { BsFillBox2HeartFill } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";

const DashboardNavCustomer = () => {
  const location = useLocation();

  return (
    <>
      <li>
        <Link
          to="wishlist"
          className={`flex items-center p-2 text-secondary-900 rounded-lg dark:text-white hover:bg-secondary-100 dark:hover-bg-secondary-700 group ${
            location.pathname === "/dashboard/wishlist"
              ? "text-primary-500 bg-primary-400 dark:bg-primary-700"
              : ""
          }`}
        >
          <BsFillBox2HeartFill className="flex-shrink-0 w-5 h-5 text-secondary-500 transition duration-75 dark:text-secondary-400 group-hover:text-secondary-900 dark:group-hover-text-white" />
          <span className="flex-1 ml-3 whitespace-nowrap">Wishlist</span>
        </Link>
      </li>
      <li>
        <Link
          to="paymentHistory"
          className={`flex items-center p-2 text-secondary-900 rounded-lg dark:text-white hover:bg-secondary-100 dark:hover-bg-secondary-700 group ${
            location.pathname === "/dashboard/paymentHistory"
              ? "text-primary-500 bg-primary-400 dark:bg-primary-700"
              : ""
          }`}
        >
          <BsFillBox2HeartFill className="flex-shrink-0 w-5 h-5 text-secondary-500 transition duration-75 dark:text-secondary-400 group-hover:text-secondary-900 dark:group-hover-text-white" />
          <span className="flex-1 ml-3 whitespace-nowrap">Payment History</span>
        </Link>
      </li>
    </>
  );
};

export default DashboardNavCustomer;
