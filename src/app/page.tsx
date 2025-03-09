import Image from 'next/image';
import { AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import { FaGithubAlt, FaMedium } from 'react-icons/fa';
import '../styles/globals.css';
import * as React from 'react';
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
        bio: `I am a passionate Australian Full Stack Developer currently living in the UK. I am still adjusting to the weather. But I am excited about the many opportunities to explore here.
    I graduated from Queensland University of Technology with a Bachelor's degree in Computer Science and a Graduate Certificate in Data Science. 
    My university studies also included design-based minors. Which is why I believe we have this beautiful website. I am currently seeking new opportunities
    in the UK. So please feel free to reach out and get in touch.`,
    },
    centerColumn: {
        title: 'Experience',
        bio: 'With over two years of experience as a developer, I have worked on both frontend and backend development. My expertise includes React, TypeScript, JavaScript, as well as backend technologies like C# and Knockout. I have also worked with migrations and SQL. Additionally, I have specialized in accessibility, where I used JAWS to help individuals better access websites.'
    },
    rightColumn: {
        title: 'Contact Information',
        details: 'Email: ejfury@protonmail.com<br>LinkedIn: https://www.linkedin.com/in/eliza-fury-3004b3110/',
    },
};

const ProfileLayout: React.FC<ProfileLayoutProps> = ({ profileData }) => {
    return (
        <div className="bg-gray-100 font-mono min-h-screen">
            <div className="max-w-6xl mx-auto p-5 grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Left Column */}
                <div className="bg-white border border-black rounded-none p-4 flex flex-col items-center">
                    <Image
                        src={profileData.leftColumn.imageSrc}
                        alt={profileData.leftColumn.name}
                        width={200}
                        height={200}
                        className="rounded-full"
                    />
                    <ProfileInfo name={profileData.leftColumn.name} bio={profileData.leftColumn.bio} />
                </div>

                {/* Center Column */}
                <div className="bg-white border border-black rounded-none p-4 flex flex-col items-center">
                    <h2 className="text-lg font-bold">{profileData.centerColumn.title}</h2>
                    <p className="text-sm">{profileData.centerColumn.bio}</p>
                </div>

                {/* Right Column */}
                <div className="bg-white border border-black rounded-none p-4 flex flex-col items-center">
                    <h3 className="text-lg font-bold">{profileData.rightColumn.title}</h3>
                    <div
                        className="text-sm"
                        dangerouslySetInnerHTML={{ __html: profileData.rightColumn.details }}
                    />
                </div>
            </div>
        </div>
    );
};

const ProfileInfo: React.FC<ProfileInfoProps> = ({ name, bio }) => (
    <div className="text-center mt-4">
        <h2 className="text-lg font-bold mb-2">About Me</h2>
        <p className="text-sm">
            <strong>{name}</strong>
            <br />
            {bio}
        </p>
        <h3 className="text-sm font-bold mt-4">Favourite Tech Products and Sites</h3>
        <p className="text-sm">Pixel Chix, The Internet Archive, WebSliders</p>
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
