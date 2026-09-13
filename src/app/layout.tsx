"use client"; 
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar'; 
import Footer from './components/Footer'; 
import { Press_Start_2P } from 'next/font/google';
import "./styles/globals.css";


const pixelFont = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pixel',
});

const inter = Inter({ subsets: ['latin'] });

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${pixelFont.variable}`}>
        <Navbar /> {/* Navbar will be rendered on every page */}
        <main>{children}</main> {/* Main content here */}
        <Footer/>
      </body>
    </html>
  );
}
