import * as React from "react";
import Image, { StaticImageData } from "next/image";
import "../styles/globals.css";
import profilePic from "./eliza1.png";
import Navbar from "@/components/Navbar";

interface Role {
  title: string;
  company: string;
  location: string;
  years: string;
  description: string;
  skills: string;
  keyAchievement?: string;
}

interface ResumeProfileProps {
  data: {
    name: string;
    title: string;
    company: string;
    location: string;
    years: string;
    description: string;
    skills: string;
    photo: StaticImageData | string;
    roles: Role[];
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
  photo: profilePic,
  roles: [
    {
      title: "Software Intern",
      company: "Tanda · Full-time",
      location: "Brisbane, Queensland, Australia",
      years: "Jan 2022 to Feb 2022 · 2 mos",
      description:
        "Learned to use Ruby on Rails to provide software solutions. Called customers to inspire and inform design direction. Maintained code with Test-Driven Development. Checked for programming errors and used debugging tools.",
      skills: "Ruby on Rails",
      keyAchievement: "Utilised Ruby on Rails to deliver an in-house solution.",
    },
    {
      title: "Information Technology Coordinator",
      company: "Direct Care Resources · Part-time",
      location: "Brisbane, Queensland, Australia",
      years: "Mar 2021 to Dec 2021 · 10 mos",
      description:
        "Collaborated within a team to facilitate digital transformation initiatives. Oversaw the integration and adoption of new technologies. Created resources for staff training and development. Maintained technology systems and infrastructure. Provided training on system use and network responsibility. Installed and configured software and hardware, including printers and mobile devices.",
      skills: "Information Technology Infrastructure",
      keyAchievement:
        "Developed educational materials to enhance employees' technology proficiency.",
    },
    {
      title: "User Experience Designer",
      company: "NewVote · Freelance",
      location: "Brisbane, Queensland, Australia",
      years: "Mar 2020 to Nov 2021 · 1 yr 9 mos",
      description:
        "Collaborated with cross-functional teams to create user-centric strategies. Led UI enhancements and boosted user engagement. Mentored interns and refined design concepts. Produced market analysis reports to guide strategic decisions.",
      skills: "User Experience (UX) · User Experience Testing · Wireframing",
      keyAchievement:
        "Orchestrated the integration of skills to innovate and elevate designs.",
    },
  ],
};

const Resume: React.FC<ResumeProfileProps> = ({ data }) => {
    const [isRolesVisible, setIsRolesVisible] = React.useState(true);

    const handleClose = () => {
        setIsRolesVisible((prev) => !prev); // Toggle visibility on each click
    };
  return (
    <>
      <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md border border-gray-300 rounded-lg">
        <div className="bg-purple-600 text-white py-3 px-6 rounded-t-lg font-bold text-center text-xl">
          Resume
        </div>

        <div className="p-6 text-gray-800">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/2 p-4">
              <p className="font-semibold">Name:</p>
              <p className="text-teal-600 text-lg">{data.name}</p>

              <p className="font-semibold mt-4">Title:</p>
              <p className="text-teal-600">{data.title}</p>

              <p className="font-semibold mt-4">Company:</p>
              <p className="text-teal-600">{data.company}</p>

              <p className="font-semibold mt-4">Location:</p>
              <p className="text-teal-600">{data.location}</p>
            </div>

            <div className="w-full md:w-1/2 p-4">
              <p className="font-semibold">Experience:</p>
              <p className="text-teal-600">{data.years}</p>

              <p className="font-semibold mt-4">Description:</p>
              <p className="text-teal-600 whitespace-pre-line">{data.description}</p>

              <p className="font-semibold mt-4">Skills:</p>
              <p className="text-teal-600">{data.skills}</p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="font-semibold">Photo:</p>
            <Image
              src={data.photo}
              alt={data.name}
              width={150}
              height={200}
              className="inline-block rounded-lg mt-2"
            />
          </div>

          {/* Dynamic Roles Section */}
        <div className="mt-10">
            <div
                className="popup-container p-4 mb-6 border-2 border-black rounded-md bg-white shadow-lg"
                style={{ width: '90%', maxWidth: '600px', margin: 'auto' }}
            >
                <div className="popup-header bg-blue-600 text-white p-2 rounded-t-md flex justify-between items-center">
                    <h3 className="text-2xl font-bold text-center">Previous Work Experience</h3>
                    <button
                        className="close-button"
                        aria-label="Toggle roles visibility"
                        onClick={handleClose}
                    >
                        ×
                    </button>
                </div>

                {/* Conditionally render roles */}
                {isRolesVisible && data.roles.map((role, index) => (
                    <div
                        key={index}
                        className="p-4 mb-6 border-2 border-black rounded-md bg-white shadow-lg"
                    >
                        <h4 className="text-xl font-bold text-purple-700">{role.title}</h4>
                        <p className="text-sm text-gray-600">{role.company}</p>
                        <p className="text-sm text-gray-500">{role.location}</p>
                        <p className="text-sm text-gray-500">{role.years}</p>
                        <p className="mt-2 text-gray-800">{role.description}</p>
                        <p className="mt-2 text-teal-600">
                            <strong>Skills:</strong> {role.skills}
                        </p>
                        {role.keyAchievement && (
                            <p className="mt-2 text-purple-600">
                                <strong>Key Achievement:</strong> {role.keyAchievement}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>
      </div>
      </div>
    </>
  );
};

const ResumePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-200">
      <Navbar />
      <div className="mt-10 px-4">
        <Resume data={resumeData} />
      </div>
    </div>
  );
};

export default ResumePage;
