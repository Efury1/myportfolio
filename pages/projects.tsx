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

export default function IndexPage(){
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

const images: ImageProps[] = [
    { src: img1Path, alt: "Image 1" },
    { src: img2Path, alt: "Image 2" },
    { src: img3Path, alt: "Image 3" },
    { src: img4Path, alt: "Image 4" },
    { src: img5Path, alt: "Image 5" },
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
    <div className="min-h-screen flex flex-col">
      {selectedImage && (
        <ImageViewer
          selectedImage={selectedImage}
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
};