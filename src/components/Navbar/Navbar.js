import React, { useState, useEffect } from "react";
import LoginPage from "../Login/LoginPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faCircleUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isLoginVisible, setLoginVisible] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  const handleOnClose = () => {
    setLoginVisible(false);
  };

  return (
    <div>
      <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xxl ml-11 flex flex-wrap items-center mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
              className=" h-10"
              alt="fkart"
            />
          </a>
          <button
            type="button"
            data-collapse-toggle="navbar-search"
            aria-controls="navbar-search"
            aria-expanded="false"
            className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-blue-50 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
          />
          {/* //for tab screen */}

          <div className="relative ml-10 hidden md:block">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block p-2 ps-10 text-sm rounded-lg bg-blue-50 focus:border-blue-500 dark:to-blue-50 dark:border-gray-100 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[650px]"
              placeholder="Search..."
            />
          </div>

          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={() => setShowDrawer(!showDrawer)}
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
            className="items-center ml-11 justify-between hidden w-full  md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 text-lg border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
              <div className="flex items-center space-x-2 p-2 hover:bg-blue-400">
                <FontAwesomeIcon
                  icon={faCircleUser}
                  className="text-sm fa-light"
                />
                {localStorage.getItem("token") ? (
                  <> "User" </>
                ) : (
                  <button
                    className=" px-7 block  rounded md:hover:bg-transparent  md:p-0  dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    onClick={() => {
                      setLoginVisible(true);
                    }}
                  >
                    Login
                  </button>
                )}

                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="text-blue-500 text-sm ml-2"
                />
              </div>

              <li>
                <a
                  href="#"
                  className=" mt-2 block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Cart
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" mt-2 block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Become a Seller
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" mt-2 ml-12 block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  <FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        {showDrawer && (
          <div className="min-h-screen w-72 bg-gray-50 dark:bg-gray-900 absolute top-0 right-0 z-50">
            poiuytr
          </div>
        )}
      </nav>

      {/* <div id="login-popup"> */}
      {<LoginPage onClose={handleOnClose} visible={isLoginVisible} />}
      {/* </div> */}
    </div>
  );
};

export default Navbar;
