import Image from 'next/image'
import Head from "next/head";
import {AiFillLinkedin, AiFillYoutube}  from "react-icons/ai";
import { FaGithubAlt, FaMedium } from "react-icons/fa";
import eliza from "./eliza2.png";

export default function Home() {
  return (
    <main>
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl font-poppins">Eliza Fury</h1>
          <ul className="flex items-center">
            <li><a className="bg-white hover:bg-pink hover:text-white text-blue font-semibold py-2 px-1 border border-lavender-pink-200 rounded shadow" href="https://www.linkedin.com/in/eliza-fury-3004b3110/">My Resume</a></li>
          </ul>
        </nav>
        <section>
        
        </section>
        <footer className="footer footer-center w-full p-4 bg-pink">
      <div className="text-center">
          <a className="relative bg-pink-200 pt-8 pb-6" href="ejfury@protonmail.com">
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
                    <a className="font-semibold block pb-2 text-sm text-right lg:text-right text-whites text-white" href="page2.tsx">Projects</a>
                  </li>
                </ul>
                </div>
              </div>
            </div>
            </a>
      </div>
    </footer>
    </main>
  )
}
