import React from 'react';
import Navbar from '../components/Navbar'; // Navbar component

interface GlobalLayoutProps {
  children: React.ReactNode;
}

const GlobalLayout: React.FC<GlobalLayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar /> {/* Navbar that appears globally */}
      <main>{children}</main> {/* Main content */}
    </div>
  );
};

export default GlobalLayout;
