import React from "react";
import LeftSide from "./LeftSide";
import RightSidebar from "./RightSide";
import { ChevronDown, Plus } from "lucide-react";
import { useState } from "react";
import HostModal from "../HostModal/HostModal";
import SelectOpportunityModal from "../HostModal/SelectOpportunityModal";
export default function DashboardHeader() {
    const [openHostModal, setOpenHostModal] = useState(false)
    const [step, setStep] = useState("host")
    return (

        <section className="w-full flex  mx-auto   flex-col justify-center  ">

            <div className="w-full max-w-8xl mx-auto px-5">


                <div className="w-full bg-white px-6 py-5 h-16 flex items-center justify-between">

                    <div className="flex items-center gap-2">
                        <h1 className="text-2xl font-semibold text-black flex flex-col items-start gap-2 flex-wrap leading-[1.4] ">
                            Welcome Back,&nbsp;manish sharma 👋
                            <span className="text-[13px] font-normal text-[#6b7280]  flex justify-center gap-3 pl-2 ">
                                Here is the summary of overall performance

                                <span
                                    className="inline-flex items-center justify-center cursor-pointer text-[#4b5563]"
                                    title="Info"
                                >
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <circle
                                            cx="8"
                                            cy="8"
                                            r="7"
                                            stroke="#4b5563"
                                            strokeWidth="1.4"
                                        />
                                        <path
                                            d="M8 7.5v3.5M8 5v.5"
                                            stroke="#4b5563"
                                            strokeWidth="1.4"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </span>
                            </span>
                        </h1>
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0">

                        <div className="flex items-center text-[13px] font-medium text-[#374151] cursor-pointer px-1 whitespace-nowrap">
                            Assessment Credits :
                            <span className="ml-1 font-bold text-[#1a1d2e]">0</span>
                        </div>

                        <div className="flex items-center">
                            <div
                                className="w-8 h-8 rounded-full bg-[#a78bfa] border-[1.5px] border-white flex items-center justify-center cursor-pointer"
                                title="manish sharma"
                                tabIndex={0}
                            >
                                <span className="text-[11px] font-bold text-white uppercase leading-none cursor-pointer">
                                    ms
                                </span>
                            </div>
                        </div>

                        <div className="relative">

                            <button
                                onClick={() => setOpenHostModal(!openHostModal)}
                                className="flex items-center justify-center gap-2 h-9 px-3 bg-blue-100 border border-blue-400 font-semibold rounded-full hover:bg-blue-200 transition cursor-pointer"
                            >
                                <Plus size={18} />
                                Host
                            </button>
                        </div>

                        <button
                            className="w-10 h-10 rounded-full flex items-center justify-center text-[#1a1d2e] hover:bg-[#dbeafe] hover:text-[#1d4ed8] transition cursor-pointer"
                            title="Help"
                            aria-label="Help"
                        >
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                                <circle
                                    cx="11"
                                    cy="11"
                                    r="9.5"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                />
                                <path
                                    d="M8.5 8.5a2.5 2.5 0 014.9.833c0 1.667-2.5 2.5-2.5 2.5M11 15.5v.5"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </button>

                        <div className="flex items-center">
                            <button
                                className="
            flex items-center
            h-9
            px-4
            border-[1.5px] border-[#d1d5db]
            rounded-full
            text-[13px]
            font-medium
            text-[#1a1d2e]
            bg-white
            whitespace-nowrap
            select-none
            transition
            hover:border-[#9ca3af]
            hover:shadow-[0_1px_4px_rgba(0,0,0,0.08)]
          "
                            >
                                Credit Balance
                                <span className="material-icons ml-[5px] text-[18px] text-[#6b7280] leading-none">
                                    <ChevronDown />
                                </span>
                            </button>
                        </div>

                    </div>
                </div>
                <div className="flex  ">
                    <div className="w-[70%] ">
                        <LeftSide />
                    </div>
                    <div className="w-[30%]  flex justify-center">
                        <RightSidebar />
                    </div>
                </div>
            </div>
            {openHostModal && (
                <div className="absolute right-0 bottom-12 z-[60]">

                    {step === "host" && (
                        <HostModal
                            onClose={() => setOpenHostModal(false)}
                            onOpportunityClick={() => setStep("opportunity")}
                        />
                    )}

                    {step === "opportunity" && (
                        <SelectOpportunityModal
                            onBack={() => setStep("host")}
                        />
                    )}

                </div>
            )}
        </ section >


    );
}