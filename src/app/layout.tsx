"use client"; // Make this a Client Component since it uses client-side interactivity

import '../styles/globals.css';
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar'; // Import the Navbar component
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar /> {/* Navbar will be rendered on every page */}
        <main>{children}</main> {/* Main content here */}
      </body>
    </html>
  );
}
