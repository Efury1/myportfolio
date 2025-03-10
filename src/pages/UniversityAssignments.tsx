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
                            Click on the links below to download the PDFs:
                            NOTE: This is still being developed
                        </p>

                        <div className="flex items-center space-x-4">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/PDF_file_icon.svg"
                                alt="PDF Icon"
                                className="w-6 h-6"
                            />
                            <a
                                href="/PDFs/ProjectManagment.pdf"
                                download="Project Management"
                                className="text-blue-600 hover:underline text-sm"
                            >
                                Download Project Management
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UniversityAssignments;
