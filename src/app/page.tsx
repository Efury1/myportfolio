import Image from 'next/image';
import Head from 'next/head';
import { AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import { FaGithubAlt, FaMedium } from 'react-icons/fa';
import './globals.css';
import * as React from 'react';
import Link from 'next/link';
import eliza from './eliza1.png';

import { Inter as Sans, Bitter as Serif, Fira_Code as Mono } from '@next/font/google';

const sans = Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const serif = Serif({
  subsets: ['latin'],
  variable: '--font-dserif',
});
const mono = Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

interface ProfileData {
  leftColumn: {
    imageSrc: string;
    name: string;
    bio: string;
  };
  centerColumn: {
    title: string;
    bio: string;
  };
  rightColumn: {
    title: string;
    details: string;
  };
}

interface ProfileLayoutProps {
  profileData: ProfileData;
}

interface ProfileInfoProps {
  name: string;
  bio: string;
}

const exampleProfileData: ProfileData = {
  leftColumn: {
    imageSrc: require('./eliza1.png'),
    name: 'Eliza Fury',
    bio: 'Passionate Full Stack Developer. I love creating interactive and accessible experiences.<br>Vintage Tech Girly. ',
  },
  centerColumn: {
    title: 'Experience',
    bio: '2 Years experience with frontend and backend development, specializing in data analytics',
  },
  rightColumn: {
    title: 'Contact Information',
    details: 'Email: ejfury@protonmail.com<br>LinkedIn: https://www.linkedin.com/in/eliza-fury-3004b3110/',
  },
};

// Navbar Component
// Navbar Component
const Navbar: React.FC = () => {
  return (
    <nav className="bg-pink-600 p-4 shadow-md text-white">
      <div className="max-w-6xl mx-auto flex space-x-8">
        <Link href="/" className="hover:bg-pink-400 px-4 py-2 rounded">
          home
        </Link>
        <Link href="/rss-feed" className="hover:bg-pink-400 px-4 py-2 rounded">
          RSS Feed
        </Link>
        <Link href="/data-analytics" className="hover:bg-pink-400 px-4 py-2 rounded">
          data analytics
        </Link>
        <Link href="/projects" className="hover:bg-pink-400 px-4 py-2 rounded">
          projects
        </Link>
        <Link href="/design" className="hover:bg-pink-400 px-4 py-2 rounded">
          design
        </Link>
        <Link href="/resume" className="hover:bg-pink-400 px-4 py-2 rounded">
          resume
        </Link>
        <Link href="/other" className="hover:bg-pink-400 px-4 py-2 rounded">
          other
        </Link>
      </div>
    </nav>
  );
};

const ProfileLayout: React.FC<ProfileLayoutProps> = ({ profileData }) => {
  return (
    <div className="bg-green-50 font-sans">
      <Navbar />
      <div className="max-w-6xl mx-auto p-5 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white border rounded-lg shadow-md p-4">
          <Image 
            src={profileData.leftColumn.imageSrc} 
            alt={profileData.leftColumn.name} 
            width={400}
            height={400}
            className="rounded-full" 
          />
          <ProfileInfo 
            name={profileData.leftColumn.name} 
            bio={profileData.leftColumn.bio.split('<br>').join('\n')}
          />
        </div>

        <div className="bg-white border rounded-lg shadow-md p-4">
          <h2 className="text-lg font-bold">{profileData.centerColumn.title}</h2>
          <p className="text-sm">{profileData.centerColumn.bio}</p>
        </div>

        <div className="bg-white border rounded-lg shadow-md p-4">
          <h3 className="text-lg font-bold">{profileData.rightColumn.title}</h3>
          <p className="text-sm">{profileData.rightColumn.details.split('<br>').join('\n')}</p>
        </div>
      </div>
    </div>
  );
};

const ProfileInfo: React.FC<ProfileInfoProps> = ({ name, bio }) => (
  <div>
    <h2 className="text-lg font-bold mb-2">About Me</h2>
    <p className="text-sm">
      <strong>{name}</strong><br />
      {bio}
    </p>
    <h3 className="text-sm font-bold mt-4">Favourite Tech Products and Sites</h3>
    <p className="text-sm">Pixel Chix, The Internet Archive, WebSliders </p>
  </div>
);

const App: React.FC = () => {
  return (
    <div>
      <ProfileLayout profileData={exampleProfileData} />
    </div>
  );
};

export default App;
