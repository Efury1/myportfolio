"use client"; // Mark this file as a client component

import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gradient-to-r from-pink-500 to-pink-700 p-4 shadow-md text-white">
      <div className="max-w-6xl mx-auto flex space-x-8">
        <Link
          href="/"
          className="text-pink-200 hover:text-white font-semibold tracking-wide hover:bg-pink-600 px-4 py-2 rounded-md"
        >
          Home
        </Link>
        <Link
          href="/rss-feed"
          className="text-pink-200 hover:text-white font-semibold tracking-wide hover:bg-pink-600 px-4 py-2 rounded-md"
        >
          RSS Feed
        </Link>
        <Link
          href="/data-analytics"
          className="text-pink-200 hover:text-white font-semibold tracking-wide hover:bg-pink-600 px-4 py-2 rounded-md"
        >
          Data Analytics
        </Link>
        <Link
          href="/Projects"
          className="text-pink-200 hover:text-white font-semibold tracking-wide hover:bg-pink-600 px-4 py-2 rounded-md"
        >
          Projects
        </Link>
        <Link
          href="/design"
          className="text-pink-200 hover:text-white font-semibold tracking-wide hover:bg-pink-600 px-4 py-2 rounded-md"
        >
          Design
        </Link>
        <Link
          href="/ResumePage"
          className="text-pink-200 hover:text-white font-semibold tracking-wide hover:bg-pink-600 px-4 py-2 rounded-md"
        >
          Resume
        </Link>
        <Link
          href="/other"
          className="text-pink-200 hover:text-white font-semibold tracking-wide hover:bg-pink-600 px-4 py-2 rounded-md"
        >
          Other
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
