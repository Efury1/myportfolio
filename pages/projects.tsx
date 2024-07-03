"use client";

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";
import ImageViewer from "../components/ImageViewer";
import img1Path from "/images/AnimalCrossing.png";
import img2Path from "/images/Rickandmorty.png";
import img3Path from "/images/TheFashionAggre.png";
import img4Path from "/images/TheSimpsons.png";
import img5Path from "/images/ShiftManager.png";
import './globals.css';

import Link from 'next/link';

interface CustomImageProps extends ImageProps {
  description: string;
}

export default function IndexPage(){
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const images: CustomImageProps[] = [
    { src: img1Path, alt: "Image 1", description: "This project draws inspiration from Animal Crossing. The To-Do List displays different quotes each time it is loaded, allowing users to remove and edit list items. This project is made with Javascript, HTML and CSS." },
    { src: img2Path, alt: "Image 2", description: "This project is a Rick and Morty quiz application built using JavaScript, CSS, and HTML." },
    { src: img3Path, alt: "Image 3", description: "This project utilizes Python and JavaScript. The Python backend scrapes fashion articles from the internet and presents them in the frontend." },
    { src: img4Path, alt: "Image 4", description: "This project is a Simpsons quote generator featuring quotes from various characters. It's developed using JavaScript, HTML, and CSS." },
    { src: img5Path, alt: "Image 5", description: "This project is a ruby on rails application designed for joining organizations, managing shifts, and viewing pay information." },
  ];

  const handleOnClicked = (src: string, index: number) => {
    setSelectedImage(src);
    setCurrentImageIndex(index);
  };

  const handleNextImage = () => {
    const nextIndex =
      currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
    setSelectedImage(images[nextIndex].src as string);
    setCurrentImageIndex(nextIndex);
  };

  const handlePreviousImage = () => {
    const prevIndex =
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    setSelectedImage(images[prevIndex].src as string);
    setCurrentImageIndex(prevIndex);
  };

  return (
    <main>
      <nav className="py-10 mb-12 flex justify-between">
        <h1 className="font-serif text-3xl text-pink">Eliza Fury</h1>
        <ul className="flex items-center">
          <li className="flex space-x-4">
            <a className="text-blue" href="/">About</a>
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
      <div className="text-center p-10">
        <h1 className="text-5xl py-2 text-pink font-medium"> My Dev and Design Development</h1>
        <p className="text-md py-5 leading-8 text-white-800">
          My portfolio showcases a diverse range of disciplines that capture my interests. It encompasses my experiences in development, industrial design, and fashion.
        </p>
      </div>
      <div className="min-h-screen flex flex-col">
        {selectedImage && (
          <ImageViewer
            selectedImage={selectedImage}
            description={images[currentImageIndex].description}
            onNext={handleNextImage}
            onPrev={handlePreviousImage}
          />
        )}
        <div className="flex flex-row flex-wrap gap-3 justify-center px-3 md:px-0">
          {images.map((image, index) => (
            <Image
              key={index}
              {...image}
              className="border-4 border-solid border-blue-900  w-40 cursor-pointer hover:border-blue-500"
              onClick={() => handleOnClicked(image.src as string, index)}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
