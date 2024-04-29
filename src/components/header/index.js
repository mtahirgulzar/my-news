import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-[#F7F7F8] border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center justify-between w-full space-x-3 rtl:space-x-reverse">
            <Link to="/" className="flex items-center">
              <img src="/images/news-logo.png" className="w-[80px]" alt="News Logo" />
            </Link>
            <button
              className="block md:hidden focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path d="M4 6h16M4 12h16m-7 6h7"></path>
                )}
              </svg>
            </button>
          </div>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } w-full md:flex md:w-auto md:flex-grow md:items-center md:justify-end`}
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
              <li>
                <Link
                  to="/"
                  className={`block py-2 px-3 rounded md:p-0 ${
                    location.pathname === "/" ? "text-blue-900" : "text-black"
                  }`}
                  onClick={toggleMenu}
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/business"
                  className={`block py-2 px-3 rounded md:p-0 ${
                    location.pathname === "/business" ? "text-blue-900" : "text-black"
                  }`}
                  onClick={toggleMenu}
                >
                  Business
                </Link>
              </li>
              <li>
                <Link
                  to="/entertainment"
                  className={`block py-2 px-3 rounded md:p-0 ${
                    location.pathname === "/entertainment" ? "text-blue-900" : "text-black"
                  }`}
                  onClick={toggleMenu}
                >
                  Entertainment
                </Link>
              </li>
              <li>
                <Link
                  to="/sports"
                  className={`block py-2 px-3 rounded md:p-0 ${
                    location.pathname === "/sports" ? "text-blue-900" : "text-black"
                  }`}
                  onClick={toggleMenu}
                >
                  Sports
                </Link>
              </li>
              <li>
                <Link
                  to="/technology"
                  className={`block py-2 px-3 rounded md:p-0 ${
                    location.pathname === "/technology" ? "text-blue-900" : "text-black"
                  }`}
                  onClick={toggleMenu}
                >
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
