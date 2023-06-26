import Image from 'next/image'
import Head from "next/head";
import {AiFillLinkedin, AiFillYoutube}  from "react-icons/ai";
import { FaMedium } from "react-icons/fa";
import eliza from "./eliza.jpeg"

export default function Home() {
  return (
    <main>
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl">Eliza Fury</h1>
          <ul className="flex items-center">
            <li></li>
            <li><a className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 rounded-md ml-8" href="https://www.linkedin.com/in/eliza-fury-3004b3110/">Resume</a></li>
          </ul>
        </nav>
        <section>
        <div className="text-center p-10">
          <h1 className="text-5xl py-2 text-blue-600 font-medium">Eliza Fury</h1>
          <h3 className="text-2xl py-2">Developer and designer</h3>
        <p className="text-md py-5 leading-8 text-gray-400">
        Passionate developer with a data-driven approach, prioritizing accessibility and inclusivity. 
        Blend of creativity and technical expertise from an advanced diploma in fashion and technology. 
        Committed to user empathy and creating seamless experiences.
        </p>
        </div>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-400">
        <a href='https://www.linkedin.com/in/eliza-fury-3004b3110/'><button><AiFillLinkedin></AiFillLinkedin></button></a>
        <a href='https://www.youtube.com/channel/UCCwlIqh6VjXceir9BHMl_YQ'><button><AiFillYoutube></AiFillYoutube></button></a>
        <a href='https://medium.com/@ejfury'><button><FaMedium></FaMedium></button></a>
        </div>
        <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
          <Image src={eliza} alt="Eliza Fury" />
        </div>
        </section>
        <section>
    
        </section>
    </main>
  )
}
