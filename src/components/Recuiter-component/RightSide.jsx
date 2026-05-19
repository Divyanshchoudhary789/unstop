import React, { useState } from "react";
import { Bell, ArrowUpRight } from "lucide-react";

export default function RightSidebar() {
  const [activeTab, setActiveTab] = useState("alerts");

  return (
    <div className="w-[420px] flex flex-col gap-6 p-6">

      {/* Experience Card */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">

        <div className="flex items-start justify-between gap-4">

          <div className="flex flex-col gap-2 max-w-[230px]">

            <h3 className="text-[14px] font-semibold text-slate-900 leading-none">
              Customise your experience
            </h3>

            <p className="text-[12px] text-slate-500 leading-relaxed">
              Enhance your hiring workflow with tailored services built
              specifically for recruiters.
            </p>

            <button className="mt-1 flex items-center gap-2 w-fit h-[30px] px-3 text-[12px] font-medium rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition">
              Contact Us
              <ArrowUpRight size={14} />
            </button>

          </div>

          <div className="w-[40px] h-[40px] rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
            <Bell size={18} />
          </div>

        </div>

      </div>


      {/* Alerts Panel */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">

        {/* Tabs */}
        <div className="flex h-[44px] border-b border-slate-200">

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


        {/* Content */}
        <div className="min-h-[260px]">

          <AlertItem />

        </div>

      </div>

    </div>
  );
}


function AlertItem() {
  return (
    <div className="flex items-center gap-4 px-5 h-[68px] border-b border-slate-100 hover:bg-slate-50 transition cursor-pointer">

      <div className="w-[36px] h-[36px] rounded-lg bg-slate-100 flex items-center justify-center text-slate-600">
        <Bell size={16} />
      </div>

      <div className="flex flex-col flex-1 min-w-0 gap-[2px]">

        <span className="text-[11px] font-semibold text-red-600">
          Listing Not Complete
        </span>

        <span className="text-[13px] font-semibold text-slate-900 truncate">
          Untitled Opportunity
        </span>

        <span className="text-[11px] w-fit px-2 py-[2px] rounded bg-slate-100 text-slate-600">
          Competition
        </span>

      </div>

      <div className="w-[28px] h-[28px] flex items-center justify-center rounded-md text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition">
        <ArrowUpRight size={16} />
      </div>

    </div>
  );
}


function Tab({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 flex items-center justify-center text-[13px] font-medium transition relative
      ${active ? "text-indigo-600" : "text-slate-500 hover:text-slate-700"}`}
    >
      {label}

      {active && (
        <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-indigo-600"></span>
      )}
    </button>
  );
}