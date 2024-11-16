"use client"; // Mark this file as a client component

import Link from 'next/link';
import "./globals.css";
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gradient-to-r from-pink-500 to-pink-700 p-4 shadow-md text-white">
      <div className="max-w-6xl mx-auto flex space-x-8">
        <Link
          href="/"
          className="sunken-button text-pink-200 hover:text-white font-semibold tracking-wide px-4 py-2 rounded-md"
        >
          Home
        </Link>
        <Link
          href="/RSS"
          className="sunken-button text-pink-200 hover:text-white font-semibold tracking-wide px-4 py-2 rounded-md"
        >
          Youtube
        </Link>
        <Link
          href="/Projects"
          className="sunken-button text-pink-200 hover:text-white font-semibold tracking-wide px-4 py-2 rounded-md"
        >
          Projects
        </Link>
        <Link
          href="/ResumePage"
          className="sunken-button text-pink-200 hover:text-white font-semibold tracking-wide px-4 py-2 rounded-md"
        >
          Resume
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
