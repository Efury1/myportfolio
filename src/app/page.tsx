import Image from 'next/image'
import Head from "next/head";
import {AiFillLinkedin, AiFillYoutube}  from "react-icons/ai";
import { FaGithubAlt, FaMedium } from "react-icons/fa";
import eliza from "./eliza.jpeg"

export default function Home() {
  return (
    <main>
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl ">Eliza Fury</h1>
          <ul className="flex items-center">
            <li></li>
            <li><a className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 rounded-md ml-8" href="https://www.linkedin.com/in/eliza-fury-3004b3110/">My Feed</a></li>
          </ul>
        </nav>
        <section>
        <div className="text-center p-10">
          <h1 className="text-5xl py-2 text-teal-600 font-medium">Eliza Fury</h1>
          <h3 className="text-2xl py-2">Developer and designer</h3>
        <p className="text-md py-5 leading-8 text-white-800">
        Passionate developer with a data-driven approach, prioritizing accessibility and inclusivity. 
        Blend of creativity and technical expertise from an advanced diploma in fashion and technology. 
        Committed to user empathy and creating seamless experiences.
        </p>
        </div>
        <div className="text-5xl flex justify-center gap-16 py-3 text-black-400">
        <a href='https://www.linkedin.com/in/eliza-fury-3004b3110/'><button><AiFillLinkedin></AiFillLinkedin></button></a>
        <a href='https://github.com/Efury1?tab=overview&from=2023-06-01&to=2023-06-27'><button><FaGithubAlt></FaGithubAlt></button></a>
        <a href='https://www.youtube.com/channel/UCCwlIqh6VjXceir9BHMl_YQ'><button><AiFillYoutube></AiFillYoutube></button></a>
        <a href='https://medium.com/@ejfury'><button><FaMedium></FaMedium></button></a>
        </div>
        <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
          <Image src={eliza} alt="Eliza Fury" />
        </div>
        </section>
        <section>
        <div className="text-center p-10">
              <h3 className="text-3xl flex justify-center gap-16 py-10">My Skills</h3>
              <p className="text-md justify-center py-2 leading-8 text-white-800">
                As a frontend developer, I have knowledge of: <h4 className="py-2 text-teal-600">HTML, CSS and  Javascript</h4> 
                <h4 className="py-2 text-teal-600">Tailwind CSS</h4> 
                <h4 className="py-2 text-teal-600">Responsive Web Design</h4> 
                <h4 className="py-2 text-teal-600">Version Control </h4>
                <h4 className="py-2 text-teal-600">Various Javascript Frameworks and Libraries.</h4> 
              </p>
          <div>
          <p className="text-md justify-center py-2 leading-8 text-white-800">
              With a design background, as a developer, I possess the ability to think in terms of design theory and use applications such as:
            <h4 className="py-2 text-teal-600">Illustrator</h4>
            <h4 className=" text-teal-600">Photoshop</h4>
            </p>
          </div>
          </div>
        </section>
    </main>
  )
}
