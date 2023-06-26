import Image from 'next/image'
import Head from "next/head";
import {AiFillLinkedin, AiFillYoutube}  from "react-icons/ai";
import eliza from "./eliza.jpeg"

export default function Home() {
  return (
    <main>
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl">Eliza Fury</h1>
          <ul className="flex items-center">
            <li></li>
            <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 rounded-md ml-8" href="#">Resume</a></li>
          </ul>
        </nav>
        <div className="text-center p-10">
          <h1 className="text-5xl py-2 text-teal-600 font-medium">Eliza Fury</h1>
          <h3 className="text-2xl py-2">Developer and designer</h3>
        <p className="text-md py-5 leading-8 text-gray-400">
          Passionate developer focused on accessibility and creative coding.
          Look at my portfolio and don't hesitate to contact me.
        </p>
        </div>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-400">
        <AiFillLinkedin></AiFillLinkedin>
        <AiFillYoutube></AiFillYoutube>
        </div>
        <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
          <Image src={eliza} alt="Eliza Fury" />
        </div>
    </main>
  )
}
