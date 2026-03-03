import React, { useState } from "react";

export default function RightSidebar() {
  const [activeTab, setActiveTab] = useState("alerts");

  return (
    <div className="w-[500px] flex flex-col gap-4 p-6">

      <div className="relative rounded-2xl p-5 overflow-hidden min-h-[160px]
        bg-gradient-to-br from-[#c8e6ff] via-[#d4f0c0] to-[#f5f7a0]">

        <div className="absolute inset-0 pointer-events-none text-[#1a1a2e]/60">
          <span className="absolute top-4 left-12 text-sm">✦</span>
          <span className="absolute top-10 right-32 text-xs">+</span>
          <span className="absolute top-3 right-28 text-xs">✦</span>
          <span className="absolute bottom-6 right-32 text-xs">✦</span>
          <span className="absolute bottom-3 left-10 text-xs">+</span>
        </div>

        <svg
          className="absolute top-3 left-4 w-7 h-7 text-[#1a1d2e] opacity-80"
          viewBox="0 0 28 28"
        >
          <path
            d="M16 2L6 16h8l-2 10 12-14h-8L16 2z"
            fill="currentColor"
          />
        </svg>

        <div className="relative z-10 max-w-[170px] pt-6 flex flex-col gap-2">
          <strong className="text-[16px] font-extrabold text-[#1a1d2e] leading-tight">
            Customise your Experience
          </strong>
          <p className="text-[12px] text-gray-700 leading-relaxed">
            Enhance your experience with tailored services designed to meet
            your specific requirements.
          </p>

          <button className="mt-2 flex items-center gap-2 px-4 h-8 text-xs font-bold text-white bg-[#1a1d2e] rounded-full hover:bg-[#2d3561] transition">
            Contact Us
            <svg width="14" height="14" viewBox="0 0 14 14">
              <path
                d="M2.5 11.5L11.5 2.5M11.5 2.5H5.5M11.5 2.5V8.5"
                stroke="white"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="absolute right-4 top-1/2 -translate-y-1/2 w-[110px] h-[110px]">
          <div className="relative w-full h-full rounded-full
            bg-gradient-to-br from-[#4a4a4a] to-[#1a1a1a]
            shadow-[0_8px_32px_rgba(0,0,0,0.45)]
            border-2 border-[#3a3a3a]
            flex items-center justify-center">

            <span className="text-[32px] font-extrabold text-[#d4a843] tracking-[-2px] drop-shadow-md">
              un
            </span>

            <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full
              bg-gray-200 border border-gray-300
              flex items-center justify-center
              text-[8px] font-extrabold text-gray-700">
              un
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-[#e8eaf0] shadow-sm overflow-hidden">

        <div className="border-b border-[#e8eaf0]">
          <div className="flex h-12 px-2">
            <Tab
              label="Alerts (1)"
              active={activeTab === "alerts"}
              onClick={() => setActiveTab("alerts")}
            />
            <Tab
              label="Upcoming"
              active={activeTab === "upcoming"}
              onClick={() => setActiveTab("upcoming")}
            />
          </div>
        </div>

        <div className="min-h-[300px] py-2">
          <div className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition cursor-pointer">

            <div className="w-10 h-10 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 22 22">
                <rect
                  x="2"
                  y="7"
                  width="18"
                  height="13"
                  rx="2"
                  stroke="#4b5563"
                  strokeWidth="1.5"
                />
                <path
                  d="M7 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                  stroke="#4b5563"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <circle cx="11" cy="13.5" r="1.5" fill="#4b5563" />
              </svg>
            </div>

            <div className="flex-1 min-w-0 flex flex-col gap-1">
              <span className="text-[11px] font-bold text-red-600">
                Listing Not Complete
              </span>
              <span className="text-[14px] font-bold text-[#1a1d2e] truncate">
                Untitled
              </span>
              <span className="inline-flex w-fit px-2 py-1 text-[11px]
                bg-gray-100 border border-gray-300 rounded-md text-gray-600">
                Competitions
              </span>
            </div>

            <button className="w-8 h-8 rounded-full flex items-center justify-center text-gray-500 hover:bg-blue-600 hover:text-white transition">
              <svg width="16" height="16" viewBox="0 0 16 16">
                <path
                  d="M3 13L13 3M13 3H7M13 3V9"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

          </div>
        </div>
      </div>

    </div>
  );
}

function Tab({ label, active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`relative flex items-center justify-center px-4 text-[13.5px] cursor-pointer select-none transition
        ${active ? "text-indigo-700 font-bold" : "text-gray-400 font-medium"}
      `}
    >
      {label}
      <span
        className={`absolute bottom-0 left-0 right-0 h-[2.5px] rounded-t
          ${active ? "bg-indigo-700" : "bg-transparent"}
        `}
      />
    </div>
  );
}