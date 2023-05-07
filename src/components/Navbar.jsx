import { useState } from "react";
import logo from "../assets/logo1.jpeg";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <nav className="border-gray-200 bg-[#3B6446] w-screen">
      <div className="w-screen flex flex-wrap items-center justify-between mx-auto">
        <a href="#" className="flex items-center">
          <img
            src={logo}
            className="w-30 h-16 min-w-fit min-h-fit "
            alt="Logo"
          />
        </a>
        <button
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-solid-bg"
        >
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-blue-400 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 dark:text-white-400 dark:hover:bg-blue-400"
              >
                الرئيسية
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-blue-400 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 dark:text-white-400 dark:hover:bg-blue-400"
              >
                عني
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 text-white rounded hover:bg-blue-400 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 dark:text-white-400 dark:hover:bg-blue-400"
              >
                أنواع القات
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 text-white rounded hover:bg-blue-400 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 dark:text-white-400 dark:hover:bg-blue-400"
              >
                تواصل بي
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
