import React from 'react';
import Navbar from "@/components/Navbar";

const UniversityAssignments: React.FC = () => {
    return (
        <>
            <Navbar />
            <div className="bg-blue-300 min-h-screen flex justify-center items-center">
                <div className="bg-gray-200 w-96 shadow-lg rounded-md">
                    <div className="bg-blue-500 text-white p-2 flex justify-between items-center rounded-t-md">
                        <span className="text-sm">PDF Downloads</span>
                    </div>

                    <div className="p-4 space-y-4">
                        <p className="text-xs text-gray-700">
                            Click on the links below to download the PDFs.
                        </p>

                        {/* Project Management PDF */}
                        <div className="flex items-center space-x-4">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/PDF_file_icon.svg"
                                alt="PDF Icon"
                                className="w-6 h-6"
                            />
                            <a
                                href="https://www.dropbox.com/scl/fi/40ub03gidv6afvkqrso8x/ProjectManagment.pdf?rlkey=9u08t51c056sdmipe15z9l7xi&st=od83d1gz&dl=1" // Dropbox download link
                                download="ProjectManagementDownload" // Custom filename for download
                                className="text-blue-600 hover:underline text-sm"
                            >
                                Download Project Management PDF
                            </a>
                        </div>

                        {/* Digital Community Development PDF */}
                        <div className="flex items-center space-x-4">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/PDF_file_icon.svg"
                                alt="PDF Icon"
                                className="w-6 h-6"
                            />
                            <a
                                href="https://www.dropbox.com/scl/fi/74xtoquo6l7yt5xfybxfh/Digital-Community-Development.pdf?rlkey=0xzv3ncg5brzf9v8t2v3nyi5r&st=qm2m0kbi&dl=1" // Dropbox download link
                                download="DigitalCommunityDevelopmentDownload" // Custom filename for download
                                className="text-blue-600 hover:underline text-sm"
                            >
                                Download Digital Community Development PDF
                            </a>
                        </div>

                        {/* Database Management PDF */}
                        <div className="flex items-center space-x-4">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/PDF_file_icon.svg"
                                alt="PDF Icon"
                                className="w-6 h-6"
                            />
                            <a
                                href="https://www.dropbox.com/scl/fi/rs3jbsg7yaf4jfmr3iult/Database-Management.pdf?rlkey=njnjm5j31wwlfr1vsr5tgm6zk&st=1cy92tew&dl=1" // Dropbox download link
                                download="DatabaseManagementDownload" // Custom filename for download
                                className="text-blue-600 hover:underline text-sm"
                            >
                                Download Database Management PDF
                            </a>
                        </div>

                        {/* Data Analysis Problem Solving PDF */}
                        <div className="flex items-center space-x-4">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/PDF_file_icon.svg"
                                alt="PDF Icon"
                                className="w-6 h-6"
                            />
                            <a
                                href="https://www.dropbox.com/scl/fi/q5lepuyw5ci7tzwyu6lal/Data-Analysis-Problem-Solving.pdf?rlkey=dnps9hrs89utybo8u2wfnculx&st=at64oigl&dl=1" // Dropbox download link
                                download="DataAnalysisProblemSolvingDownload" // Custom filename for download
                                className="text-blue-600 hover:underline text-sm"
                            >
                                Download Data Analysis Problem Solving PDF
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default UniversityAssignments;
