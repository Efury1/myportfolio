"use client"; // Mark this file as a client component

import Link from 'next/link';
import "../styles/globals.css";
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
          Youtubes
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

        <div className="relative w-full">
            <Link
                href="/Contact"
                className="absolute right-0 bg-gray-300 text-black font-bold tracking-wide px-4 py-2 border border-gray-500 shadow-[inset_-2px_-2px_0_#fff,inset_2px_2px_0_#888] hover:shadow-[inset_2px_2px_0_#fff,inset_-2px_-2px_0_#888] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] font-mono"
            >
                Say Hello
            </Link>
        </div>


      </div>
    </nav>
  );
};

export default Navbar;
