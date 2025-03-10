"use client"; // Mark this file as a client component

import Link from 'next/link';
import React, { useState } from 'react';
import "../styles/globals.css";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gradient-to-r from-blue-300 to-blue-500 p-4 shadow-md text-black">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                {/* Logo or Brand Name */}
                <Link href="/" className="text-xl font-bold text-black">
                    Welcome to my Portfolio
                </Link>

                {/* Hamburger Icon for Mobile */}
                <button
                    className="lg:hidden text-black focus:outline-none"
                    onClick={toggleMenu}
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
                    <Link
                        href="/"
                        className="windows-button text-black hover:text-white font-semibold tracking-wide px-4 py-2 rounded-md"
                    >
                        Home
                    </Link>
                    <Link
                        href="/Projects"
                        className="windows-button text-black hover:text-white font-semibold tracking-wide px-4 py-2 rounded-md"
                    >
                        Projects
                    </Link>
                    <Link
                        href="/ResumePage"
                        className="windows-button text-black hover:text-white font-semibold tracking-wide px-4 py-2 rounded-md"
                    >
                        Resume
                    </Link>

                    {/* Say Hello Button with Windows primary color */}
                    <Link
                        href="/Contact"
                        className="windows-button bg-blue-500 text-white hover:bg-blue-600 font-semibold tracking-wide px-4 py-2 rounded-md"
                    >
                        Say Hello
                    </Link>
                </div>

                {/* Dropdown Menu for Mobile */}
                <div
                    className={`${isOpen ? 'block' : 'hidden'
                        } absolute top-16 left-0 bg-gradient-to-r from-gray-300 to-gray-500 border border-black shadow-lg rounded-md w-full z-10 lg:hidden`}
                >
                    <div className="p-2">
                        <Link
                            href="/"
                            className="windows-button block text-black hover:text-white font-semibold tracking-wide px-4 py-2 rounded-md"
                        >
                            Home
                        </Link>
                        <Link
                            href="/Projects"
                            className="windows-button block text-black hover:text-white font-semibold tracking-wide px-4 py-2 rounded-md"
                        >
                            Projects
                        </Link>
                        <Link
                            href="/ResumePage"
                            className="windows-button block text-black hover:text-white font-semibold tracking-wide px-4 py-2 rounded-md"
                        >
                            Resume
                        </Link>
                        <Link
                            href="/Contact"
                            className="windows-button block text-black hover:text-white font-semibold tracking-wide px-4 py-2 rounded-md"
                        >
                            Say Hello
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
