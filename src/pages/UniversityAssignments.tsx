import React from 'react';
import Navbar from "@/app/components/Navbar";

interface Assignment {
    title: string;
    href: string;
    download: string;
}

const assignments: Assignment[] = [
    {
        title: "Project Management",
        href: "https://www.dropbox.com/scl/fi/40ub03gidv6afvkqrso8x/ProjectManagment.pdf?rlkey=9u08t51c056sdmipe15z9l7xi&st=od83d1gz&dl=1",
        download: "ProjectManagementDownload",
    },
    {
        title: "Digital Community Development",
        href: "https://www.dropbox.com/scl/fi/74xtoquo6l7yt5xfybxfh/Digital-Community-Development.pdf?rlkey=0xzv3ncg5brzf9v8t2v3nyi5r&st=qm2m0kbi&dl=1",
        download: "DigitalCommunityDevelopmentDownload",
    },
    {
        title: "Database Management",
        href: "https://www.dropbox.com/scl/fi/rs3jbsg7yaf4jfmr3iult/Database-Management.pdf?rlkey=njnjm5j31wwlfr1vsr5tgm6zk&st=1cy92tew&dl=1",
        download: "DatabaseManagementDownload",
    },
    {
        title: "Data Analysis Problem Solving",
        href: "https://www.dropbox.com/scl/fi/q5lepuyw5ci7tzwyu6lal/Data-Analysis-Problem-Solving.pdf?rlkey=dnps9hrs89utybo8u2wfnculx&st=at64oigl&dl=1",
        download: "DataAnalysisProblemSolvingDownload",
    },
];

const UniversityAssignments: React.FC = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col pb-32">
            <div className="max-w-4xl mx-auto mt-10 px-4 w-full">
                <div className="bg-white shadow-md border border-[#B0B0B0] rounded-sm">
                    {/* Flat grey title bar, matching the Resume page's header */}
                    <div className="bg-[#D8D8D8] text-gray-900 py-4 px-6 rounded-t-sm font-semibold text-center text-2xl border-b border-[#B0B0B0]">
                        PDF Downloads
                    </div>

                    <div className="p-6 bg-[#ECECEC] border-b border-[#B0B0B0]">
                        <p className="text-sm text-gray-600">
                            Click on the links below to download the PDFs.
                        </p>
                    </div>

                    <div className="p-6 text-gray-800 space-y-4">
                        {assignments.map((assignment) => (
                            <div
                                key={assignment.download}
                                className="flex items-center gap-4 p-4 border border-[#B0B0B0] rounded-sm bg-white shadow-sm"
                            >
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/a/a7/PDF_file_icon.svg"
                                    alt="PDF Icon"
                                    className="w-6 h-6"
                                />
                                <a
                                    href={assignment.href}
                                    download={assignment.download}
                                    className="text-blue-800 hover:underline text-sm font-medium"
                                >
                                    Download {assignment.title} PDF
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UniversityAssignments;