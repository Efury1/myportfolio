import * as React from "react";
import Image, { StaticImageData } from "next/image";
import FashionAggre from "../images/TheFashionAggre.png";
import rickandmorty from "../images/rickandmorty.png";
import animalcrossing from "../images/animalcrossing.jpg";
import shifts from "../images/shifts.jpg";
import Navbar from "@/components/Navbar";
import "../styles/globals.css";

interface Product {
    id: number;
    title: string;
    imageSrc: string | StaticImageData;
    gitLink: string;
    infoLink: string;
    description: string;
}

const products: Product[] = [
    {
        id: 1,
        title: "Typing-Simulator",
        imageSrc: "",
        gitLink: "https://github.com/Efury1/Typing-Simulator",
        infoLink: "#",
        description: "A typing simulation game to enhance your skills.",
    },
    {
        id: 2,
        title: "Command-Line-To-Do-List",
        imageSrc: "",
        gitLink: "https://github.com/Efury1/Command-Line-To-Do-List",
        infoLink: "#",
        description: "A simple CLI-based to-do list application.",
    },
    {
        id: 3,
        title: "Fashion_Aggregator",
        imageSrc: FashionAggre,
        gitLink: "https://github.com/Efury1/Fashion_Aggregator",
        infoLink: "#",
        description: "A tool to aggregate and display fashion trends.",
    },
    {
        id: 4,
        title: "Rick-and-Morty-Quiz",
        imageSrc: rickandmorty,
        gitLink: "https://github.com/Efury1/Rick-and-Morty-Quiz",
        infoLink: "#",
        description: "A fun quiz based on the Rick and Morty universe.",
    },
    {
        id: 5,
        title: "AnimalCrossing-ToDo",
        imageSrc: animalcrossing,
        gitLink: "https://github.com/Efury1/AnimalCrossing-ToD",
        infoLink: "#",
        description: "A to-do list inspired by Animal Crossing.",
    },
    {
        id: 6,
        title: "Shift-manager",
        imageSrc: shifts,
        gitLink: "https://github.com/Efury1/Shift-manager",
        infoLink: "#",
        description: "Manage employee shifts effectively.",
    },
];

const ProductGrid: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-200">
            <Navbar />

            {/* Clippy-like note at the top */}
            <div className="bg-blue-500 text-white py-4 px-6 rounded-lg shadow-md max-w-4xl mx-auto mt-6 relative">
                <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <span className="text-2xl">📎</span>
                    </div>
                    <div className="text-lg font-medium">
                        <span>Whilst this is updated a lot, the best place to go is on Github! 🔗</span>
                    </div>
                </div>
            </div>

            {/* Product Grid */}
            <div className="py-10 px-5">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((project) => (
                        <div
                            key={project.id}
                            className="bg-white rounded-lg shadow-lg border border-gray-300 p-6 hover:shadow-xl transition-shadow"
                        >
                            <div className="flex justify-center mb-4">
                                {typeof project.imageSrc === "string" && project.imageSrc ? (
                                    <img
                                        src={project.imageSrc}
                                        alt={project.title}
                                        className="w-48 h-48 object-contain rounded-md"
                                    />
                                ) : project.imageSrc ? (
                                    <Image
                                        src={project.imageSrc}
                                        alt={project.title}
                                        width={400}
                                        height={400}
                                        className="rounded-md"
                                        objectFit="contain"
                                    />
                                ) : (
                                    <div className="w-48 h-48 bg-gray-100 rounded-md flex items-center justify-center">
                                        <span className="text-gray-500">No Image</span>
                                    </div>
                                )}
                            </div>

                            <h2 className="font-bold text-lg text-center text-teal-700 mb-4">
                                {project.title}
                            </h2>

                            <div className="flex flex-col items-center gap-2 relative group">
                                <a
                                    href={project.gitLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 underline hover:text-blue-800 transition"
                                >
                                    Github
                                </a>
                                <a
                                    href={project.infoLink}
                                    className="text-blue-600 underline hover:text-blue-800 transition relative"
                                    aria-describedby={`tooltip-${project.id}`}
                                >
                                    More Info
                                    <div
                                        id={`tooltip-${project.id}`}
                                        role="tooltip"
                                        className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-pink-500 text-black text-sm rounded-md px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity z-10 shadow-lg"
                                    >
                                        {project.description}
                                    </div>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductGrid;
