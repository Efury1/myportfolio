import Image from 'next/image';
import Head from 'next/head';
import { AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import { FaGithubAlt, FaMedium } from 'react-icons/fa';
import eliza from './eliza2.png';
import rickandmorty from './rickandmorty.png';
import thesimpsons from './thesimpsons.png';
import animalcrossing from './animalcrossing.png';
import './globals.css';
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
          <li>
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
            <h1 className="text-5xl py-2 text-white font-medium"> Eliza Fury</h1>
          </p>
          <h3 className="text-2xl py-2 text-pink">Developer and Designer</h3>
          <p className="text-md py-5 leading-8 text-white-800">
            Eliza Fury, hailing from Australia, is a multi-talented individual excelling in the fields of web development,
            writing, and design. Her dynamic personality is characterized by an unwavering commitment to data-driven
            methodologies, a strong advocacy for accessibility and inclusivity, and an infectious passion for her work.
            Eliza brings a unique blend of creative flair and technical prowess to her endeavors, drawing from her
            educational background which includes an advanced diploma in fashion and technology as well as a bachelor's
            degree in computer science.
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

      <section className="text-center p-10">
        <h3 className="text-2xl py-2 text">

        </h3>
        <h3 className="text-2xl py-2 text-center mx-px=12">Projects</h3>
        <div className="py-10 mb-12 flex justify-between">
          <p className="text-md py-5 leading-8 text-white-800 text-center">Eliza is a coding enthusiast with a passion for turning everyday hobbies into exciting digital adventures! By day, Eliza is a dedicated programmer, helping with software solutions. But when the clock strikes 5, it's time to unleash the creativity.</p>
        </div>
        <div className="columns-1 md:columns-1 grid grid-cols-1 sm:grid-cols-3">
          <div className="max-w-xs mx-auto ring-1 border border-sky-10 space-x-3 mb-12 rounded-lg p-6 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
            <div className="text-center">Animal Crossing To Do List</div>
            <div>
              <Image src={animalcrossing} alt="Animal Crossing" />
            </div>
          </div>

          <div className="max-w-xs mx-auto ring-1 border border-sky-10 space-x-3 mb-12 rounded-lg p-6 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
            <div className="text-center">Simpsons Quote App</div>
            <div>
              <Image src={thesimpsons} alt="The Simpsons" />
            </div>
          </div>

          <div className="max-w-xs mx-auto ring-1 border border-sky-10 space-x-3 mb-12 rounded-lg p-6 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
            <div className="text-center">Rick and Morty Quiz App</div>
            <div>
              <Image src={rickandmorty} alt="Rick and Morty" />
            </div>
          </div>
        </div>
      </section>

      <footer className="footer footer-center w-full p-4 bg-pink">
        <div className="text-center">
          <a className="relative bg-pink-200 pt-8 pb-6" href="mailto:ejfury@protonmail.com">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap text-left lg:text-left">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="container mx-auto px-4">
                    <h4 className="text-3xl text-white">Need other things to explore?</h4>
                    <h5 className="text-lg mt-0 mb-2 text-white">
                      Don't hesitate to look through the footer.
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4 ">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-sm font-semibold mb-2 text-right lg:text-right text-white">Other pages</span>
                  <ul className="list-unstyled">
                    <li>
                      <Link href="/page2" className="block uppercase text-sm font-semibold mb-2 text-right lg:text-right text-white hover:text-yellow-400">Coming soon
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </a>
        </div>
      </footer>
    </main>
  );
}
