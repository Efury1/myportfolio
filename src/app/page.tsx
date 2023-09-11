import Image from 'next/image'
import Head from "next/head";
import {AiFillLinkedin, AiFillYoutube}  from "react-icons/ai";
import { FaGithubAlt, FaMedium } from "react-icons/fa";
import eliza from "./eliza.jpeg"

export default function Home() {
  return (
    <main>
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl">Eliza Fury</h1>
          <ul className="flex items-center">
            <li></li>
            <li><a className="bg-white hover:bg-pink hover:text-white text-blue font-semibold py-2 px-1 border border-gray-200 rounded shadow" href="https://www.linkedin.com/in/eliza-fury-3004b3110/">My Resume</a></li>
          </ul>
        </nav>
        <section>
          <div className="text-center p-10">
            <p className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block bg-pink">
            <h1 className="text-5xl py-2 text-white font-medium"> Eliza Fury</h1></p>
            <h3 className="text-2xl py-2">Developer and designer</h3>
              <p className="text-md py-51 leading-8 text-white-800" > Eliza Fury is a web developer, writer and designer based in Australia. 
              Eliza has a vibrant personality filled with a passion for data-driven approaches, accessibility and inclusivity. 
              She has a blend of creativity and technical expertise from an advanced diploma in fashion and technology and a bachelors in computer science. 
              </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-black-400">
            <a href='https://github.com/Efury1?tab=overview&from=2023-06-01&to=2023-06-27'><button><FaGithubAlt></FaGithubAlt></button></a>
            <a href='https://www.youtube.com/channel/UCCwlIqh6VjXceir9BHMl_YQ'><button><AiFillYoutube></AiFillYoutube></button></a>
            <a href='https://medium.com/@ejfury'><button><FaMedium></FaMedium></button></a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden ">
            <Image src={eliza} alt="Eliza Fury" />
          </div>
          </section>
        <section>
        <div className="columns-1 md:columns-1 grid grid-cols-1 sm:grid-cols-3">
          <div className="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500 pd-5 my-5  ">
                <h3 className="text-2xl py-1 text-pink">Development</h3>
                <p className="text-denim">As a frontend developer, I have knowledge of: </p>
                  <h4 className="py-2 text-blue">HTML, CSS and  Javascript</h4> 
                  <h4 className="py-2 text-blue">Tailwind CSS</h4> 
                  <h4 className="py-2 text-blue">Responsive Web Design</h4> 
                  <h4 className="py-2 text-blue">Version Control </h4>
                  <h4 className="py-2 text-blue">Various Javascript Frameworks and Libraries.</h4> 
            </div>

            <div className="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500 pd-5 my-5">
              <p className="text-md justify-center pt-8 pb-2 leading-8 text-white-800">
                  <h3 className="text-2xl font-medium py-4 text-pink">Design</h3>
                  <p className="text-denim">With a design background, as a developer, <br/>I possess the ability to think in terms of design theory and use the following tools:</p>
                  <p className="py-2 text-blue">Illustrator</p>
                  <p className=" text-blue">Photoshop</p>
              </p>
            </div>

            <div className="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500 pd-5 my-5">
                <h3 className="text-2xl py-1 text-pink">Analytics</h3>
                <p className="text-denim">This involves: </p>
                  <h4 className="py-2 text-blue">Data Visualisation</h4> 
                  <h4 className="py-2 text-blue">Ability to Anaylse business practices and system functionality</h4> 
                  <h4 className="py-2 text-blue">Make data-driven decisions</h4> 
            </div>
          </div>
        </section>
    </main>
  )
}
