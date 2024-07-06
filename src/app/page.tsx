import Image from 'next/image';
import Head from 'next/head';
import { AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import { FaGithubAlt, FaMedium } from 'react-icons/fa';
import eliza from './eliza1.png';
import '../../styles/globals.css';
import * as React from 'react';
import Link from 'next/link';



import { Inter as Sans, Bitter as Serif, Fira_Code as Mono } from '@next/font/google';

const sans = Sans({
  subsets: ['latin'],
  // this will be the css variable
  variable: '--font-sans',
});

const serif = Serif({
  subsets: ['latin'],
  variable: '--font-serif',
});
const mono = Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

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
      <section>
        <div className="text-center p-10">
          <p className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block bg-pink">
            <h1 className="text-5xl py-2 text-white font-medium"> Hi, I'm Eliza Fury</h1>
          </p>
          <h3 className="text-2xl py-2 text-pink">Developer and Designer</h3>
          <p className="text-md py-5 leading-8 text-white-800">
          I'm a full stack developer that has a wide range of . My approach is deeply rooted in data-driven methodologies, and I'm dedicated to promoting accessibility and inclusivity in everything I do. I bring a blend of creativity and technical expertise to my projects, leveraging my educational background that spans an advanced diploma in fashion and technology alongside a bachelor's degree in computer science. 
          Passion drives me, whether I'm crafting code, creating content, or designing user experiences.
          </p>
        </div>
        <div className="text-5xl flex justify-center gap-16 py-3 text-black-400 mb=12">
          <a href="https://github.com/Efury1?tab=overview&from=2023-06-01&to=2023-06-27">
            <button className="bg-pink hover:bg-yellow-400 text-white font-semibold py-3 px-4 rounded-full shadow-lg transform hover:scale-105 transition-transform">
              <FaGithubAlt />
            </button>
          </a>
          <a href="https://www.youtube.com/channel/UCCwlIqh6VjXceir9BHMl_YQ">
            <button className="bg-pink hover:bg-yellow-400 text-white font-semibold py-3 px-4 rounded-full shadow-lg transform hover:scale-105 transition-transform">
              <AiFillYoutube />
            </button>
          </a>
          <a href="https://medium.com/@ejfury">
            <button className="bg-pink hover:bg-yellow-400 text-white font-semibold py-3 px-4 rounded-full shadow-lg transform hover:scale-105 transition-transform">
              <FaMedium />
            </button>
          </a>
        </div>
        <div className="relative mx-auto rounded-full w-80 h-100 mt-100 overflow-hidden">
          <Image src={eliza} alt="Eliza Fury" />
        </div>
      </section>
      <section>
        <div className="columns-1 md:columns-1 grid grid-cols-1 sm:grid-cols-3">
          <div className="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500 pd-5 my-5">
            <h3 className="text-2xl py-1 text-pink">Development</h3>
            <p className="text-denim">As a frontend developer, I have knowledge of: </p>
            <h4 className="py-2 text-blue">HTML, CSS and Javascript</h4>
            <h4 className="py-2 text-blue">Tailwind CSS</h4>
            <h4 className="py-2 text-blue">Responsive Web Design</h4>
            <h4 className="py-2 text-blue">Version Control</h4>
            <h4 className="py-2 text-blue">Various Javascript Frameworks and Libraries.</h4>
          </div>

          <div className="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500 pd-5 my-5">
            <h3 className="text-2xl py-1 text-pink">Design</h3>
            <p className="text-denim">With a design background, as a developer, I possess the ability to think in
              terms of design theory and use the following tools:</p>
            <p className="py-2 text-blue">Illustrator</p>
            <p className="text-blue">Photoshop</p>
          </div>

          <div className="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 hover:bg-pink-500 hover:ring-sky-500 pd-5 my-5 space-y-3 mb=12">
            <h3 className="text-2xl py-1 text-pink">Analytics</h3>
            <p className="text-denim">This involves: </p>
            <h4 className="py-2 text-blue">Data Visualization</h4>
            <h4 className="py-2 text-blue">Ability to Analyze business practices and system functionality</h4>
            <h4 className="py-2 text-blue">Make data-driven decisions</h4>
          </div>
        </div>
      </section>
      <footer className="relative bg-pink-200 pt-8 pb-0 w-full">
        <div className="overflow-hidden w-full">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#FF7B9C"
              fillOpacity=".9"
              d="M0,64L8,85.3C96,107,192,149,288,176C384,203,480,213,576,197.3C672,181,768,139,864,138.7C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </footer>
    </main>
    
  );
}
