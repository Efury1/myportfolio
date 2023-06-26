import Image from 'next/image'
import Head from "next/head";

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

   
    </main>
  )
}
