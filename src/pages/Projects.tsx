import * as React from 'react';
import './globals.css';
import Navbar from '@/components/Navbar'; // Import the Navbar component

interface Product {
  id: number;
  title: string;
  imageSrc: string;
  gitLink: string;
  infoLink: string;
}

const products: Product[] = [
  {
    id: 1,
    title: 'Typing-Simulator',
    imageSrc: '', // Replace with actual image URL
    gitLink: '#',
    infoLink: '#',
  },
  {
    id: 2,
    title: 'Command-Line-To-Do-List',
    imageSrc: '', // Replace with actual image URL
    gitLink: '#',
    infoLink: '#',
  },
  {
    id: 3,
    title: 'Fashion_Aggregator',
    imageSrc: '', // Replace with actual image URL
    gitLink: '#',
    infoLink: '#',
  },
  {
    id: 4,
    title: 'Rick-and-Morty-Quiz',
    imageSrc: '', // Replace with actual image URL
    gitLink: '#',
    infoLink: '#',
  },
  {
    id: 5,
    title: 'AnimalCrossing-ToDo',
    imageSrc: '', // Replace with actual image URL
    gitLink: '#',
    infoLink: '#',
  },
  {
    id: 6,
    title: 'Shift-manager',
    imageSrc: '', // Replace with actual image URL
    gitLink: '#',
    infoLink: '#',
  },
];

const ProductGrid: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-200">
      {/* Navbar at the very top */}
      <Navbar />

      {/* Product Grid */}
      <div className="py-10 px-5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg border border-gray-300 p-6 hover:shadow-xl transition-shadow"
            >
              {/* Image Section */}
              <div className="flex justify-center mb-4">
                {project.imageSrc ? (
                  <img
                    src={project.imageSrc}
                    alt={project.title}
                    className="w-24 h-24 object-contain rounded-md"
                  />
                ) : (
                  <div className="w-24 h-24 bg-gray-100 rounded-md flex items-center justify-center">
                    <span className="text-gray-500">No Image</span>
                  </div>
                )}
              </div>

              {/* Project Title */}
              <h2 className="font-bold text-lg text-center text-teal-700 mb-4">
                {project.title}
              </h2>

              {/* Links Section */}
              <div className="flex flex-col items-center gap-2">
                <a
                  href={project.gitLink}
                  className="text-blue-600 underline hover:text-blue-800 transition"
                >
                  Github
                </a>
                <a
                  href={project.infoLink}
                  className="text-blue-600 underline hover:text-blue-800 transition"
                >
                  More Info
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
