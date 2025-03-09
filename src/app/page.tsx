import Image from 'next/image';
import { AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import { FaGithubAlt, FaMedium } from 'react-icons/fa';
import '../styles/globals.css';
import * as React from 'react';
import Head from 'next/head';

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
        bio: `I am a passionate Australian <span style="color: #3b82f6;">Full Stack Developer</span> currently living in the UK. I am still adjusting to the weather. But I am excited about the many opportunities to explore here.
        I graduated from Queensland University of Technology with a Bachelor's degree in <span style="color: #3b82f6;">Computer Science</span> and a Graduate Certificate in <span style="color: #3b82f6;">Data Analytics</span>. 
        My university studies also included design-based minors. Which is why I believe we have this beautiful website. I am currently seeking new opportunities
        in the UK. So please feel free to reach out and get in touch.`,
    },
    centerColumn: {
        title: 'Experience',
        bio: 'With over two years of experience as a developer, I have worked on both frontend and backend development. My expertise includes <span style="color: #3b82f6;">React</span>, <span style="color: #3b82f6;">TypeScript</span>, <span style="color: #3b82f6;">JavaScript</span>, as well as backend technologies like <span style="color: #3b82f6;">C#</span> and <span style="color: #3b82f6;">Knockout</span>. I have also worked with migrations and <span style="color: #3b82f6;">SQL</span>. Additionally, I have specialized in <span style="color: #3b82f6;">accessibility</span>, where I used JAWS to help individuals better access websites.',
    },
    rightColumn: {
        title: 'Contact Information',
        details: 'Email: ejfury@protonmail.com<br>LinkedIn: https://www.linkedin.com/in/eliza-fury-3004b3110/',
    },
};

const ProfileLayout: React.FC<ProfileLayoutProps> = ({ profileData }) => {
    return (
        <>
            <Head>
                <title>Eliza Fury - Full Stack Developer | UK</title>
                <meta name="description" content="Eliza Fury is an Australian Full Stack Developer now based in the UK. With expertise in React, C#, TypeScript, JavaScript, and accessibility, Eliza is seeking new opportunities in the tech field." />
                <meta name="robots" content="index, follow" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Eliza Fury - Full Stack Developer | UK" />
                <meta property="og:description" content="Explore Eliza Fury's professional experience and contact information. Based in the UK, Eliza specializes in both frontend and backend technologies." />
                <meta property="og:image" content={profileData.leftColumn.imageSrc} />
            </Head>

            <div className="font-mono min-h-screen">
                <div className="max-w-6xl mx-auto p-5 grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Left Column */}
                    <div className="bg-white border border-black rounded-none p-4 flex flex-col items-center" role="region" aria-labelledby="left-column">
                        <Image
                            src={profileData.leftColumn.imageSrc}
                            alt={`Profile picture of ${profileData.leftColumn.name}`}
                            width={200}
                            height={200}
                            className="rounded-full"
                            aria-describedby="profile-image-description"
                        />
                        <ProfileInfo name={profileData.leftColumn.name} bio={profileData.leftColumn.bio} />
                    </div>

                    {/* Center Column */}
                    <div className="bg-white border border-black rounded-none p-4 flex flex-col items-center" role="region" aria-labelledby="center-column">
                        <h2 className="text-lg font-bold">{profileData.centerColumn.title}</h2>
                        <p className="text-sm" dangerouslySetInnerHTML={{ __html: profileData.centerColumn.bio }} />
                    </div>

                    {/* Right Column */}
                    <div className="bg-white border border-black rounded-none p-4 flex flex-col items-center" role="region" aria-labelledby="right-column">
                        <h3 className="text-lg font-bold">{profileData.rightColumn.title}</h3>
                        <div
                            className="text-sm"
                            dangerouslySetInnerHTML={{ __html: profileData.rightColumn.details }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

const ProfileInfo: React.FC<ProfileInfoProps> = ({ name, bio }) => (
    <div className="text-center mt-4" role="region" aria-labelledby="profile-info">
        <h2 className="text-lg font-bold mb-2">About Me</h2>
        <p className="text-sm">
            <strong>{name}</strong>
            <br />
            <span dangerouslySetInnerHTML={{ __html: bio }} />
        </p>
        <h3 className="text-sm font-bold mt-4">Favourite Tech Products and Sites</h3>
        <p className="text-sm">
            <span style={{ color: '#3b82f6' }}>Pixel Chix</span>, <span style={{ color: '#3b82f6' }}>The Internet Archive</span>, <span style={{ color: '#3b82f6' }}>WebSliders</span>
        </p>
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
