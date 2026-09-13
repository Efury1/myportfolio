"use client";
import Link from "next/link";
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const linkClasses =
    "text-gray-900 hover:bg-gray-300 hover:text-black font-semibold tracking-wide px-4 py-2 rounded-md " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-200";

  return (
    <nav className="bg-gray-200 p-4 shadow-md text-black">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo or Brand Name */}
        <Link
          href="/"
          className="text-xl font-bold text-black rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-200"
        >
          Eliza Fury
        </Link>

        {/* Hamburger Icon for Mobile */}
        <button
          className="lg:hidden text-black rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-200"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Menu Items (Visible only in Desktop mode) */}
        <div className="hidden lg:flex space-x-8">
          <Link href="/" className={linkClasses}>
            Home
          </Link>

          <Link href="/ResumePage" className={linkClasses}>
            Resume
          </Link>

          <Link href="/Contact" className={linkClasses}>
            Say Hello
          </Link>
        </div>

        {/* Dropdown Menu for Mobile */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-16 left-0 bg-gray-200 border border-gray-400 shadow-lg rounded-md w-full z-10 lg:hidden`}
        >
          <div className="p-2">
            <Link href="/" className={`${linkClasses} block`}>
              Home
            </Link>

            <Link href="/ResumePage" className={`${linkClasses} block`}>
              Resume
            </Link>
            <Link href="/Contact" className={`${linkClasses} block`}>
              Say Hello
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;