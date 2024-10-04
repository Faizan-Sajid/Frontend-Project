"use client";

import { useState } from "react";
import SmoothAnimatedSection from "./animation";

// import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    // <SmoothAnimatedSection>
    <section className="bg-gray-900 mb-10">
      
        <nav className="container p-6 mx-auto lg:flex lg:justify-between lg:items-center">
          <div className="flex items-center justify-between">
            <a href="#">
              <h1 className="text-2xl text-white font-bold">
                Tailwind{" "}
                <span className="text-blue-500 font-bold text-2xl">CSS</span>
              </h1>
            </a>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none"
                aria-label="toggle menu"
              >
                <svg
                  className={`w-6 h-6 ${isOpen ? "hidden" : "block"}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
                <svg
                  className={`w-6 h-6 ${isOpen ? "block" : "hidden"}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out ${
              isOpen
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-full"
            } bg-black shadow-md text-white  lg:shadow-none lg:mt-0 lg:p-0 lg:top-0 lg:bg-transparent lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center`}
          >
            <div className="flex flex-col space-y-4 lg:mt-0 lg:flex-row lg:space-y-0">
              <a
                className="text-white-500 lg:mx-6 hover:text-blue-500"
                href="#"
              >
                Home
              </a>
              <a
                className="text-white-500 lg:mx-6 hover:text-blue-500"
                href="#"
              >
                About-us
              </a>
              <a
                className="text-white-500 lg:mx-6 hover:text-blue-500"
                href="#"
              >
                Pricing
              </a>
              <a
                className="text-white-500 lg:mx-6 hover:text-blue-500"
                href="#"
              >
                Contact
              </a>
              <a
                className="text-white-500 lg:mx-6 hover:text-blue-500"
                href="#"
              >
                FAQ
              </a>
            </div>

            <a
              className="block px-5 py-2 mt-4 text-sm text-center text-white-700 capitalize transition-colors duration-300 transform border rounded-md lg:mt-0 hover:bg-blue-500 hover:text-black lg:w-auto"
              href="#"
            >
              Contact Us
            </a>
          </div>
        </nav>
      {/* </SmoothAnimatedSection> */}

      <SmoothAnimatedSection>
        <div className="container px-6 py-16 mx-auto text-center">
          <div className="max-w-lg mx-auto ">
            <h1 className="text-3xl font-semibold text-white lg:text-4xl">
              Create beautiful website layout with Tailwind CSS
            </h1>
            <p className="mt-6 text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
              similique obcaecati illum mollitia.
            </p>

            <div className="w-full max-w-sm mx-auto mt-6 bg-transparent border rounded-md dark:border-gray-700 focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 dark:focus-within:border-blue-300 focus-within:ring-opacity-40">
              <form className="flex flex-col md:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 h-10 px-4 py-2 m-1 text-white placeholder-white bg-transparent border-none appearance-none"
                />
                <button
                  type="button"
                  className="h-10 px-4 py-2 m-1 text-white transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400"
                >
                  Join Us
                </button>
              </form>
            </div>
          </div>
        </div>
      </SmoothAnimatedSection>
    </section>
  );
};

export default Navbar;
