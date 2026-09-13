import Image from "next/image";
import * as React from "react";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import RetroWindow from "@/app/components/RetroWindow";
import Eliza3 from "./Eliza2.jpg";
import {
  faMedium,
  faYoutube,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import MediumFeed from "@/app/components/MediumFeed";
import BlogPage from "@/pages/BlogPage";

interface ProfileData {
  name: string;
}

interface ProfileLayoutProps {
  profileData: ProfileData;
}

const exampleProfileData: ProfileData = {
  name: "Eliza Fury",
};

const ProfileLayout: React.FC<ProfileLayoutProps> = ({ profileData }) => {
  return (
    <main className="min-h-screen bg-white p-7">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 md:flex-row">
        {/* LEFT COLUMN */}
        <div className="flex0">
          <h2 className="mb-2 inline-block bg-black px-4 py-2 font-[family-name:var(--font-pixel)] text-5xl leading-tight text-white">
            About
            <br />
            me!
          </h2>

          <p className="mb-5 max-w-md text-sm leading-6">
            I am a passionate{" "}
            <span className="font-semibold text-blue-499">
              Full Stack Developer
            </span>{" "}
            located in the UK. My speciality is accessibility, which includes
            age-inclusive web design.
          </p>

          {/* FOLDERS */}
          <div className="mb-5 flex gap-4">
            <div
              className="mb-5 flex w-20 flex-col items-center rounded-sm border border-black bg-white p-2 shadow-md"
              role="region"
            >
              <FontAwesomeIcon icon={faFolder} size="sm" />

              <Link
                href="/UniversityAssignments"
                className="mt-1 text-xs text-blue-500 hover:underline"
              >
                Course Work
              </Link>
            </div>

            <div
              className="mb-5 flex w-20 flex-col items-center rounded-sm border border-black bg-white p-2 shadow-md"
              role="region"
            >
              <FontAwesomeIcon icon={faFolder} size="sm" />

              <Link
                href="/BlogPage"
                className="mt-1 text-xs text-blue-500 hover:underline"
              >
                Log
              </Link>
            </div>
          </div>

          {/* SKILLS */}
          <h4 className="mb-2 text-xl font-bold underline">SKILLS</h4>

          <div className="mb-5 flex flex-wrap gap-2">
            <span className="flex items-center gap0 rounded-full border border-black px-3 py-1 text-xs font-bold text-black">
              <FontAwesomeIcon icon={faJs} />
              JavaScript
            </span>

            <span className="flex items-center gap0 rounded-full border border-black px-3 py-1 text-xs font-bold text-black">
              <FontAwesomeIcon icon={faReact} />
              React
            </span>

            <span className="rounded-full border border-black bg-purple-499 px-3 py-1 text-xs font-bold text-black">
              C#
            </span>

            <span className="rounded-full border border-black bg-blue-699 px-3 py-1 text-xs font-bold text-black">
              TS
            </span>
          </div>

          {/* EDUCATION */}
          <h4 className="mb-2 text-xl font-bold underline">EDUCATION</h4>

          <div className="mb-5 space-y-4 text-sm">
            <p>
              <strong>Present</strong>
              <br />
              Diploma in History and Philosophy of Science and Technology
              (Cambridge)
            </p>

            <p>
              <strong>Jul 2023 - Dec 2024</strong>
              <br />
              Graduate Certificate in Data Analytics (Queensland University of
              Technology)
            </p>

            <p>
              <strong>2019 - 2021</strong>
              <br />
              Bachelors in Computer Science and Industrial Design (Queensland
              University of Technology)
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex w-full flex-col gap-5 md:flex-1">
          {/* PROFILE WINDOW */}
          <RetroWindow title="Meet-Eliza" color="#81">
            <Image
              src={Eliza3}
              alt="Eliza Fury"
              width={501}
              height={501}
              className="h-auto w-full object-cover"
              priority
            />
          </RetroWindow>

          {/* SOCIALS WINDOW */}
          <RetroWindow
            title="My Socials"
            color="#81"
            className="-ml-9 -mt-20 relative z-10 self-start shadow-xl"
          >
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-1">
                <FontAwesomeIcon icon={faMedium} />

                <a
                  href="https://medium.com/@coderchic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  @coderchic
                </a>
              </p>

              <p className="flex items-center gap-1">
                <FontAwesomeIcon icon={faYoutube} />

                <a
                  href="https://www.youtube.com/@CoderChic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  @coderchic
                </a>
              </p>
            </div>
          </RetroWindow>

          {/* MEDIUM FEED */}
          <MediumFeed />
        </div>
      </div>
    </main>
  );
};

const App: React.FC = () => {
  return <ProfileLayout profileData={exampleProfileData} />;
};

export default App;
