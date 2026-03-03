import React, { useState } from "react";
import {
    Plus,
    HelpCircle,
    Search,
    ChevronDown,
    Edit,
    MoreVertical,
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
} from "lucide-react";

export default function Opportunities() {
    const [activeTab, setActiveTab] = useState("All");

    const tabs = [
        "All",
        "Competitions",
        "Quizzes",
        "Hackathons",
        "Scholarships",
        "Workshops",
        "Conferences",
        "Cultural Events",
    ];

    return (
        <div className=" p-6 text-[#1a1d2e]">
            <div className="max-w-8xl mx-auto">

                <div className="flex items-center justify-between pb-4">
                    <h2 className="text-[25px] font-black">Opportunities</h2>

                    <div className="flex items-center gap-3">
                        <button
                            className="flex items-center justify-center gap-2 w-full
                                       h-9 px-3 bg-blue-100 border border-blue-400
                                       font-semibold color
                                       rounded-full shadow-sm hover:bg-blue-200
                                       transition-all duration-300 cursor-pointer"
                        >
                            <Plus size={18} />
                            Host
                        </button>

                        <button className="w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-100 hover:text-blue-700 transition">
                            <HelpCircle size={20} />
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-[14px]  overflow-hidden">

                    <div className=" ">

                        <div className="flex gap-2 h-[70px] items-center overflow-x-auto no-scrollbar">
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`h-9 px-4 rounded-full font-medium cursor-pointer text-[13px] whitespace-nowrap transition
                    ${activeTab === tab
                                            ? "bg-[#1C4980] text-white font-bold border border-[#1a1d2e]"
                                            : "text-gray-500 hover:bg-[#1C4980] border border-gray-200 hover:text-white"
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        <div className="flex justify-between items-center gap-4 py-4">
                            <div className="relative max-w-[400px] w-full ">
                                <Search
                                    size={16}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                                />
                                <input
                                    type="text"
                                    placeholder="Search all"
                                    className="w-full h-9 rounded-full border-[1.5px] border-[#e8eaf0] py-5.5  pl-9 pr-5 text-[16px] focus:border-[#7c3aed] outline-none "
                                />
                            </div>

                            <div className="flex gap-2">
                                {["Visibility", "Registration", "Status"].map((btn) => (
                                    <button
                                        key={btn}
                                        className="flex items-center gap-2 h-9 px-4   rounded-full   text-[13px] hover:border-gray-400 transition text-gray-500 font-bold border border-[#1a1d2e] cursor-pointer"
                                    >
                                        {btn}
                                        <ChevronDown size={14} />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="overflow-x-auto border border-gray-200 rounded-2xl">
                        <table className="w-full text-[13px] border-collapse">

                            {/* HEADER */}
                            <thead className="bg-blue-50">
                                <tr>
                                    <th className="px-4 py-3 text-center text-sm font-semibold text-gray-800">
                                        S.No.
                                    </th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-800">
                                        Name
                                    </th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-800">
                                        Status
                                    </th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-800 whitespace-nowrap">
                                        Start Date
                                    </th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-800 whitespace-nowrap">
                                        End Date
                                    </th>
                                    <th className="px-4 py-3 text-center text-sm font-semibold text-gray-800">
                                        Candidate
                                    </th>
                                    <th className="px-4 py-3 text-center text-sm font-semibold text-gray-800">
                                        Registrations
                                    </th>
                                    <th className="px-4 py-3 text-center text-sm font-semibold text-gray-800">
                                        Action
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr className="border-t hover:bg-gray-50 transition">

                                    <td className="px-4 py-4 text-center text-gray-500 align-middle">
                                        1
                                    </td>

                                    <td className="px-4 py-4 align-middle">
                                        <div className="flex flex-col gap-1">
                                            <span className="font-semibold hover:text-[#7c3aed] cursor-pointer">
                                                --
                                            </span>

                                            <div className="flex gap-2 flex-wrap">
                                                <span className="text-[11px] text-gray-800 px-2 py-1 bg-gray-100 border border-gray-200 rounded-md">
                                                    Competitions
                                                </span>
                                            </div>

                                            <span className="text-[11px] text-gray-400">
                                                Last Saved about 3 hours ago
                                            </span>
                                        </div>
                                    </td>

                                    <td className="px-4 py-4 align-middle">
                                        <span className="text-[11px] text-gray-800 px-2 py-1 bg-gray-200 border border-gray-300 rounded-md">
                                            Draft
                                        </span>
                                    </td>

                                    <td className="px-4 py-4 align-middle whitespace-nowrap">
                                        <div className="flex flex-col">
                                            <span>27 Feb 26</span>
                                            <span className="text-[11px] text-gray-400">
                                                12:00 AM IST
                                            </span>
                                        </div>
                                    </td>

                                    <td className="px-4 py-4 align-middle whitespace-nowrap">
                                        <div className="flex flex-col">
                                            <span>13 Mar 26</span>
                                            <span className="text-[11px] text-gray-400">
                                                12:00 AM IST
                                            </span>
                                        </div>
                                    </td>

                                    <td className="px-4 py-4 text-center text-gray-500 align-middle">
                                        --
                                    </td>

                                    <td className="px-4 py-4 text-center text-gray-500 align-middle">
                                        N/A
                                    </td>

                                    <td className="px-4 py-4 align-middle">
                                        <div className="flex justify-center gap-2">
                                            <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-blue-50 hover:text-blue-600 transition">
                                                <Edit size={14} />
                                            </button>
                                            <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-blue-50 hover:text-blue-600 transition">
                                                <MoreVertical size={14} />
                                            </button>
                                        </div>
                                    </td>

                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="flex justify-between items-center px-5 py-4 ">
                        <span className="text-[13px] text-gray-500">
                            1 - 1 <strong className="text-black font-bold">/ 1</strong>
                        </span>

                        <div className="flex items-center gap-2">
                            <button className="page-btn opacity-30">
                                <ChevronsLeft size={14} />
                            </button>
                            <button className="page-btn opacity-30">
                                <ChevronLeft size={14} />
                            </button>
                            <button className="w-8 h-8 rounded bg-black text-white font-bold">
                                1
                            </button>
                            <button className="page-btn opacity-30">
                                <ChevronRight size={14} />
                            </button>
                            <button className="page-btn opacity-30">
                                <ChevronsRight size={14} />
                            </button>
                        </div>

                        <div className="flex items-center gap-2 text-[13px] text-gray-500">
                            Jump To
                            <input
                                type="number"
                                min="1"
                                max="1"
                                className="w-14 h-8 border border-[#e8eaf0] rounded text-center focus:border-[#7c3aed] outline-none"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}