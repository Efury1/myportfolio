import './globals.css';
import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <nav className="py-10 mb-12 flex justify-between">
        <h1 className="font-serif text-3xl text-pink">Eliza Fury</h1>
        <ul className="flex items-center">
          <li className="flex space-x-4">
            <a className="text-blue">About</a>
            <Link className='text-blue' href="/projects">
              Projects
            </Link>
            <a
              className="bg-white hover:bg-pink hover:text-white text-blue font-semibold py-2 px-4 rounded-full shadow-lg transform hover:scale-105 transition-transform"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/eliza-fury-3004b3110/"
            >
              My Resume
            </a>
          </li>
        </ul>
      </nav>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4">Welcome to Next.js with Tailwind CSS</h1>
          <p className="text-gray-700">This is a sample page styled with Tailwind CSS.</p>
        </div>
      </div>
      <div className="flex items-center justify-center mt-8">
        <div className="relative">
          <Image
            src="/images/camera-frame.jpg" 
            alt="Camera Frame"
            width={736}
            height={736}
          />
          <div className="absolute top-[20%] left-[20%] w-[60%] h-[60%]">
            <Image
              src="/images/rickandmorty.png" 
              alt="Inner Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
