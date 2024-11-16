import * as React from 'react';
import Image, { StaticImageData } from 'next/image';
import './globals.css';
import profilePic from './eliza1.png';
import Navbar from '@/components/Navbar';

interface ResumeProfileProps {
  data: {
    name: string;
    title: string;
    company: string;
    location: string;
    years: string;
    description: string;
    skills: string;
    photo: StaticImageData | string; // Updated to handle imported image type
  };
}

const resumeData = {
  name: "Eliza Fury",
  title: "Full Stack Developer",
  company: "One Model · Full-time",
  location: "Brisbane, Queensland, Australia",
  years: "Apr 2022 to Present · 2 yrs 8 mos",
  description:
    "• Work with the React Framework, Typescript, HTML5, and CSS to create user-friendly and visually appealing interfaces.\n• Collaborate with a team of developers to implement new features and enhance existing functionalities.\n• Conduct accessibility audits on our website using the JAWS screen reader technology and keyboard navigation.\n• Implemented Onion Architecture in C# to ensure separation of concerns.\n• Converted existing Knockout.js view models into React components.",
  skills: "C# · React · KnockoutJS · JavaScript · W3C Accessibility · Onion architecture",
  photo: profilePic, // Using the imported image
};

const Resume: React.FC<ResumeProfileProps> = ({ data }) => {
  return (
    <>
    <div className="max-w-3xl mx-auto mt-10 p-4 border border-gray-300 rounded-lg shadow-lg bg-gray-100">
      {/* Header */}
      <div className="bg-purple-700 text-white py-3 px-6 rounded-t-lg font-bold text-center text-lg">
        MEMBER PROFILE
      </div>

      {/* Profile Content */}
      <div className="p-6 text-gray-800">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-4">
            <p className="font-bold">Name:</p>
            <p className="text-teal-600">{data.name}</p>

            <p className="font-bold mt-4">Title:</p>
            <p className="text-teal-600">{data.title}</p>

            <p className="font-bold mt-4">Company:</p>
            <p className="text-teal-600">{data.company}</p>

            <p className="font-bold mt-4">Location:</p>
            <p className="text-teal-600">{data.location}</p>
          </div>

          <div className="w-full md:w-1/2 p-4">
            <p className="font-bold">Experience:</p>
            <p className="text-teal-600">{data.years}</p>

            <p className="font-bold mt-4">Description:</p>
            <p className="text-teal-600 whitespace-pre-line">{data.description}</p>

            <p className="font-bold mt-4">Skills:</p>
            <p className="text-teal-600">{data.skills}</p>
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-6 text-center">
          <p className="font-bold">Photo:</p>
          <Image
            src={data.photo}
            alt={data.name}
            width={150}
            height={200}
            className="inline-block rounded-lg mt-2"
          />
        </div>
      </div>
    </div>
    </>
  );
};

const ResumePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-200">
      {/* Navbar at the very top */}
      <Navbar />
      <div className="flex items-center justify-center">
        <Resume data={resumeData} />
      </div>
    </div>
  );
};


export default ResumePage;
