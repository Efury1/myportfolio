import React from 'react';
import '../styles/globals.css';
import Navbar from '@/components/Navbar';

const PlaylistEmbed: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-200">
      <Navbar />
      <div className="max-w-5xl mx-auto py-10 px-5">
        <h1 className="text-3xl font-bold text-teal-700 text-center mb-10">
          Girl Chronically Online - Watch video essay playlist
        </h1>
        <div className="flex justify-center">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/videoseries?list=PLdQ7JR0ihOZRCALuYk_SIMezHnQlkASUR"
            title="YouTube playlist"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default PlaylistEmbed;
