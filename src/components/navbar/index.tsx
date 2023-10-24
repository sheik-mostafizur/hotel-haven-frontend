import { Link } from "react-router-dom";
import Button from "../ui/button";
import { useState } from "react";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const navItemStyle = `block py-2 pl-3 pr-4 text-secondary-900 rounded hover:bg-secondary-100 md:hover:bg-transparent md:hover:text-primary-500 md:p-0 dark:text-white md:dark:hover:text-primary-500 dark:hover:bg-secondary-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-secondary-700`;

  const navItemStyleActive = `block py-2 pl-3 pr-4 text-white bg-primary-500 rounded md:bg-transparent md:text-primary-500 md:p-0 md:dark:text-primary-500`;

  return (
    <nav className="bg-white border-secondary-200 dark:bg-secondary-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
          {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" /> */}
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            HoteHeaven
          </span>
        </Link>
        <div className="flex items-center md:order-2">
          {/* <button
            type="button"
            className="flex mr-3 text-sm bg-secondary-800 rounded-full md:mr-0 focus:ring-4 focus:ring-secondary-300 dark:focus:ring-secondary-600"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom">
            <span className="sr-only">Open user menu</span>
            <img
              className="w-8 h-8 rounded-full"
              src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
              alt="user photo"
            />
          </button> */}
          <Link to={"/signin"}>
            <Button>Sign In</Button>
          </Link>
          {/*  Dropdown menu */}
          {/* <div
            className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-secondary-100 rounded-lg shadow dark:bg-secondary-700 dark:divide-secondary-600"
            id="user-dropdown">
            <div className="px-4 py-3">
              <span className="block text-sm text-secondary-900 dark:text-white">
                Bonnie Green
              </span>
              <span className="block text-sm  text-secondary-500 truncate dark:text-secondary-400">
                name@flowbite.com
              </span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-secondary-700 hover:bg-secondary-100 dark:hover:bg-secondary-600 dark:text-secondary-200 dark:hover:text-white">
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-secondary-700 hover:bg-secondary-100 dark:hover:bg-secondary-600 dark:text-secondary-200 dark:hover:text-white">
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-secondary-700 hover:bg-secondary-100 dark:hover:bg-secondary-600 dark:text-secondary-200 dark:hover:text-white">
                  Earnings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-secondary-700 hover:bg-secondary-100 dark:hover:bg-secondary-600 dark:text-secondary-200 dark:hover:text-white">
                  Sign out
                </a>
              </li>
            </ul>
          </div>*/}
          <button
            onClick={() => setToggleMenu(!toggleMenu)}
            data-collapse-toggle="navbar-user"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-secondary-500 rounded-lg md:hidden hover:bg-secondary-100 focus:outline-none focus:ring-2 focus:ring-secondary-200 dark:text-secondary-400 dark:hover:bg-secondary-700 dark:focus:ring-secondary-600"
            aria-controls="navbar-user"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            toggleMenu || "hidden"
          } items-center justify-between w-full md:flex md:w-auto md:order-1`}
          id="navbar-user"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-secondary-100 rounded-lg bg-secondary-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-secondary-800 md:dark:bg-secondary-900 dark:border-secondary-700">
            <li>
              <Link to="/" className={navItemStyleActive} aria-current="page">
                Home
              </Link>
            </li>
            <li>
              <Link to={"/package"} className={navItemStyle}>
                Package
              </Link>
            </li>
            <li>
              <Link to={"/Blog"} className={navItemStyle}>
                Blog
              </Link>
            </li>
            <li>
              <Link to={"/about"} className={navItemStyle}>
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
