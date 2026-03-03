import React, { useState } from "react";
import { Plus } from "lucide-react";

export default function MyJobsInternships() {
    const [activeTab, setActiveTab] = useState("all");
    const [imgError, setImgError] = useState(false);

    return (
        <section className=" rounded-[14px]  overflow-hidden">

            <div className="flex items-center flex-shrink-0 justify-between px-11 py-4 ">
                <h2 className="text-[25px] font-black text-[#1a1d2e]">
                    My Jobs & Internships
                </h2>
                <button
                    className="flex items-center justify-center gap-2 
                h-9 px-3 bg-blue-100 border border-blue-400
                font-semibold color
                rounded-full shadow-sm hover:bg-blue-200
                transition-all duration-300 cursor-pointer "
                >
                    <Plus size={18} />
                    Host
                </button>

            </div>

            <div className="px-11 pt-4">
                <div className="flex items-center gap-2 h-[70px]">
                    <Tab
                        label="All"
                        active={activeTab === "all"}
                        onClick={() => setActiveTab("all")}
                    />
                    <Tab
                        label="Jobs"
                        active={activeTab === "jobs"}
                        onClick={() => setActiveTab("jobs")}
                    />
                    <Tab
                        label="Internships"
                        active={activeTab === "internships"}
                        onClick={() => setActiveTab("internships")}
                    />
                </div>
            </div>

            <div className="relative px-11">

                {!imgError ? (
                    <div className="relative pt-11 rounded-b-[14px]">
                        <img
                            src="https://d8it4huxumps7.cloudfront.net/uploads/images/682eb93c44003_candidate_pool_no_data_img.png?d=1600x800"
                            alt="no data"

                            className="w-full max-h-[340px] object-contain bg-no-repeat"
                            onError={() => setImgError(true)}
                        />

                        <div className="absolute -bottom-11 left-0 right-0 flex flex-col items-center gap-2 h-42 text-center pt-5 px-6 bg-white">
                            <span className="text-[17px] font-bold text-[#1a1d2e]">
                                No Job or Internship created yet!
                            </span>
                            <span className="text-[13px] text-gray-600 max-w-[380px] leading-relaxed">
                                Create your first Job or Internship to manage and view candidate
                                registrations here.
                            </span>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center gap-4 py-16 px-6 text-center">
                        <div className="w-[160px] h-[120px] rounded-xl bg-gradient-to-br from-[#f0f4ff] to-[#e8f0fe] flex items-center justify-center">
                            <svg width="64" height="64" viewBox="0 0 64 64">
                                <rect
                                    x="8"
                                    y="20"
                                    width="48"
                                    height="36"
                                    rx="4"
                                    stroke="#94a3b8"
                                    strokeWidth="2.5"
                                />
                                <path
                                    d="M20 20V16a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v4"
                                    stroke="#94a3b8"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                />
                                <circle
                                    cx="32"
                                    cy="38"
                                    r="5"
                                    stroke="#94a3b8"
                                    strokeWidth="2"
                                />
                                <path
                                    d="M22 50h20"
                                    stroke="#94a3b8"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>

                        <div className="text-[17px] font-bold text-[#1a1d2e]">
                            No Job or Internship created yet!
                        </div>

                        <p className="text-[13px] text-gray-500 max-w-[340px] leading-relaxed">
                            Create your first Job or Internship to manage and view candidate
                            registrations here.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}

function Tab({ label, active, onClick }) {
    return (
        <button
            onClick={onClick}
            className={`h-[38px] px-5 rounded-full text-[13px] whitespace-nowrap transition cursor-pointer 
        ${active
                    ? "bg-[#1a1d2e] text-white font-bold border border-[#1a1d2e]"
                    : "text-gray-500 border font-medium hover:bg-gray-100 hover:text-[#1a1d2e]"
                }`}
        >
            {label}
        </button>
    );
}