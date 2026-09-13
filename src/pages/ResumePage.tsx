import * as React from "react";
import Image, { StaticImageData } from "next/image";
import profilePic from "./eliza1.jpg";
import Navbar from "@/app/components/Navbar";

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
        skills: string;
        photo: StaticImageData | string;
        roles: Role[];
    };
}


const resumeData = {
    name: "Eliza Fury",
    title: "Full Stack Developer and Analyst",
    photo: profilePic,
    skills: "C# · React · KnockoutJS · JavaScript · W3C Accessibility · Onion architecture",
    roles: [
         {
            title: "Frontend Developer",
            company: "Norfolk County Council",
            location: "Norwich, UK",
            years: "Present",
            description:
                "• Modernised legacy CSS by refactoring stylesheets into the Sass 7-1 architecture, improving scalability, maintainability, and modularity of the codebase.\n• Built a GitHub Actions CI pipeline to automate Sass migration tooling.\n• Implemented automated README reporting for failed migrations, improving visibility and debugging efficiency across the team.\n• Worked extensively with vanilla JavaScript (ES6+) to support frontend functionality and tooling integrations.\n• Collaborated on Git branching strategies and release workflows, improving merge processes and deployment reliability.\n• Contributed to establishing frontend best practices through code reviews and pull requests, increasing overall team code quality.\n• Worked with the GOSS content management system, including debugging Handlebars templates.\n• Set up Jest testing for frontend components such as buttons, strengthening test coverage across the codebase.\n• Used Windows Narrator and NVDA to carry out accessibility checks.\n• Served as a Norfolk County Council Ambassador, supporting engagement and representing the organisation in community and team initiatives.",
            skills: "SASS · Github Actions · JavaScript · W3C Accessibility · Age Inclusive Design",
            keyAchievement:
                "Built the Age-Inclusive Web Standard, a framework to make it easier for older adults to use the web.",
        },
        {
            title: "Full Stack Developer",
            company: "One Model · Full-time",
            location: "Brisbane, Queensland, Australia",
            years: "Apr 2022 to Feb 2025 · 2 yrs 8 mos",
            description:
                "• Work with the React Framework, Typescript, HTML5, and CSS to create user-friendly and visually appealing interfaces.\n• Collaborate with a team of developers to implement new features and enhance existing functionalities.\n• Conduct accessibility audits on our website using the JAWS screen reader technology and keyboard navigation.\n• Implemented Onion Architecture in C# to ensure separation of concerns.\n• Converted existing Knockout.js view models into React components.",
            skills: "C# · React · KnockoutJS · JavaScript · W3C Accessibility · Onion architecture",
        },
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
                "• Collaborated within a team to facilitate digital transformation initiatives.\n• Oversaw the integration and adoption of new technologies.\n• Created resources for staff training and development.\n• Maintained technology systems and infrastructure.\n• Provided training on system use and network responsibility.\n• Installed and configured software and hardware, including printers and mobile devices.",
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
                "• Collaborated with cross-functional teams to create user-centric strategies.\n• Led UI enhancements and boosted user engagement.\n• Mentored interns and refined design concepts.\n• Produced market analysis reports to guide strategic decisions.",
            skills: "User Experience (UX) · User Experience Testing · Wireframing",
            keyAchievement:
                "Orchestrated the integration of skills to innovate and elevate designs.",
        },
        {
            title: "Temp Digital Marketing Assistant",
            company: "Ecoloom · Part-time",
            location: "Brisbane, Queensland, Australia",
            years: "Mar 2020 to Jun 2020 · 4 mos",
            description:
                "• Developed marketing materials and crafted website content in collaboration with a team.\n• Played a crucial role in formulating content strategies and actively contributed to the creation of graphic materials.\n• Identified and implemented trends to enhance social media performance while also producing insightful reports for market analysis.",
            skills: "Digital Marketing · Content Strategy · Social Media Optimization",
            keyAchievement:
                "Leveraged strategic use of keywords and phrases in articles to optimize content matching and effectiveness.",
        },
        {
            title: "Interim Guild Officer",
            company: "The Guild · Part-time",
            location: "Brisbane, Queensland, Australia",
            years: "Dec 2019 to Mar 2020 · 4 mos",
            description:
                "• Helped Advocacy Officers provide support for students facing barriers and helped resolve concerns within the university.\n• Contributed to the general flow of information to the student body.\n• Worked on a team portfolio.",
            skills: "Advocacy · Student Support · Information Management",
        },
        {
            title: "Note Taker",
            company: "QUT (Queensland University of Technology) · Part-time",
            location: "Brisbane, Queensland, Australia",
            years: "Feb 2019 to Nov 2019 · 10 mos",
            description:
                "• Assisted students with note-taking to help enable a more inclusive environment.",
            skills: "Note-Taking · Accessibility Support · Academic Assistance",
        },
    ],
};




const Resume: React.FC<ResumeProfileProps> = ({ data }) => {
    const [isRolesVisible, setIsRolesVisible] = React.useState(true);

    const handleClose = () => {
        setIsRolesVisible((prev) => !prev); // Toggle visibility on each click
    };

    return (
        <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md border border-[#B0B0B0] rounded-sm">
            {/* Flat grey title bar, matching the Contact form's minimal Windows-style header */}
            <div className="bg-[#D8D8D8] text-gray-900 py-4 px-6 rounded-t-sm font-semibold text-center text-2xl border-b border-[#B0B0B0]">
                Resume
            </div>

            <div className="p-6 text-gray-800 flex items-center gap-4 bg-[#ECECEC] border border-[#B0B0B0]">
                {/* MSN-style photo, grey frame instead of blue */}
                <div className="relative w-24 h-24 border-4 border-[#B0B0B0] shadow-sm bg-white flex items-center justify-center rounded-sm">
                    <Image
                        src={data.photo}
                        alt={data.name}
                        width={96}
                        height={96}
                        className="object-cover rounded-sm"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    {/* Name Chat Bubble */}
                    <div className="relative bg-white border border-[#B0B0B0] rounded-sm px-4 py-2 shadow-sm max-w-xs">
                        <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white border-l border-t border-[#B0B0B0] rotate-45" />
                        <p className="text-sm text-gray-600 font-medium">Name:</p>
                        <p className="text-blue-800 text-xl font-semibold">{data.name}</p>
                    </div>

                    {/* Title Chat Bubble */}
                    <div className="relative bg-white border border-[#B0B0B0] rounded-sm px-4 py-2 shadow-sm max-w-xs">
                        <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white border-l border-t border-[#B0B0B0] rotate-45" />
                        <p className="text-sm text-gray-600 font-medium">Work:</p>
                        <p className="text-blue-800 text-lg">{data.title}</p>
                    </div>
                </div>

            </div>

            <div className="p-6 text-gray-800">

                {/* Roles Section */}
                <div className="mt-10">
                    <div
                        className="popup-container p-4 mb-6 border border-[#B0B0B0] rounded-sm bg-white shadow-sm"
                        style={{ width: '90%', maxWidth: '600px', margin: 'auto' }}
                    >
                        <div className="popup-header bg-[#D8D8D8] text-gray-900 p-2 rounded-t-sm flex justify-between items-center border-b border-[#B0B0B0]">
                            <h3 className="text-2xl font-bold text-center">Previous Work Experience</h3>
                            <button
                                className="close-button text-gray-900 hover:bg-[#C8C8C8] w-8 h-8 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-700"
                                aria-label="Toggle roles visibility"
                                onClick={handleClose}
                            >
                                ×
                            </button>
                        </div>

                        {/* Conditionally render roles */}
                        {isRolesVisible &&
                            data.roles.map((role, index) => (
                                <div
                                    key={index}
                                    className="p-4 mb-6 border border-[#B0B0B0] rounded-sm bg-[#ECECEC] shadow-sm"
                                >
                                    <h4 className="text-xl font-bold text-blue-800">{role.title}</h4>
                                    <p className="text-sm text-gray-600">{role.company}</p>
                                    <p className="text-sm text-gray-500">{role.location}</p>
                                    <p className="text-sm text-gray-500">{role.years}</p>
                                    <p className="mt-2 text-gray-800">{role.description}</p>
                                    <p className="mt-2 text-gray-700">
                                        <strong>Skills:</strong> {role.skills}
                                    </p>
                                    {role.keyAchievement && (
                                        <p className="mt-2 text-gray-700">
                                            <strong>Key Achievement:</strong> {role.keyAchievement}
                                        </p>
                                    )}
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const ResumePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col pb-32">
            <div className="mt-10 px-4">
                <Resume data={resumeData} />
            </div>
        </div>
    );
};

export default ResumePage;