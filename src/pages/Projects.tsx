import * as React from "react";
import Image, { StaticImageData } from "next/image";
import Navbar from "@/components/Navbar";
import "../styles/globals.css";

// Import images
import EarScanner3D from "../images/EarScanner3D.jpg";
import EthicalAI from "../images/EthicalAI.jpeg";
import rickandmorty from "../images/rickandmorty.png";
import animalcrossing from "../images/animalcrossing.jpg";
import TheGumtreeDiaries from "../images/TheGumtreeDiaries.jpg";
import PrettyPrintMe from "../images/PrettyPrintMe.jpg";
import Covid19 from "../images/Covid19.jpg";
import DearSanta from "../images/DearSanta.jpg";
import shifts from "../images/shifts.jpg";

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
    {
        id: 7,
        title: "Pretty-Print-Me",
        imageSrc: PrettyPrintMe,
        gitLink: "https://github.com/Efury1/Pretty-Print-Me",
        infoLink: "#",
        description: "A website for creating and printing invitation designs.",
    },
    {
        id: 8,
        title: "The-Gumtree-Diaries",
        imageSrc: TheGumtreeDiaries,
        gitLink: "https://github.com/Efury1/The-Gumtree-Diaries",
        infoLink: "#",
        description: "A travel blog documenting my journey of moving to the UK.",
    },
    {
        id: 9,
        title: "Data-Exploration-and-Mining",
        imageSrc: "",
        gitLink: "https://github.com/Efury1/Data-Exploration-and-Mining",
        infoLink: "#",
        description: "A project applying data mining techniques to analyze a dataset and extract insights.",
    },
    {
        id: 10,
        title: "SantaMail",
        imageSrc: DearSanta,
        gitLink: "https://github.com/Efury1/SantaMessager",
        infoLink: "#",
        description: "A cozy project that lets you send Christmas messages to Santa using Nodemailer.",
    },
    {
        id: 11,
        title: "Ethical-AI-Exploration",
        imageSrc: EthicalAI,
        gitLink: "https://github.com/Efury1/Ethical-AI-Exploration",
        infoLink: "#",
        description: "A machine learning model to predict user budgets for the IDOOU app with a focus on ethical AI.",
    },
    {
        id: 12,
        title: "EarScanner3D",
        imageSrc: EarScanner3D,
        gitLink: "https://github.com/Efury1/EarScanner3D",
        infoLink: "#",
        description: "A medical app to assist people with microtia by capturing the external ear using smartphone-based 3D scanning.",
    }
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
                                {project.imageSrc ? (
                                    <Image
                                        src={project.imageSrc}
                                        alt={project.title}
                                        width={400}
                                        height={400}
                                        className="rounded-md object-contain"
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
                                    className="text-teal-600 hover:underline"
                                >
                                    GitHub Repository
                                </a>
                                {project.infoLink && (
                                    <a
                                        href={project.infoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-teal-600 hover:underline"
                                    >
                                        More Info
                                    </a>
                                )}
                                <p className="text-gray-600 text-sm mt-2 text-center">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductGrid;
