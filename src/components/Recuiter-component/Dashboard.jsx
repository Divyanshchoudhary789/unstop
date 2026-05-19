import React, { useState } from "react";
import LeftSide from "./LeftSide";
import RightSidebar from "./RightSide";
import { ChevronDown, Plus, HelpCircle } from "lucide-react";
import HostModal from "../HostModal/HostModal";
import SelectOpportunityModal from "../HostModal/SelectOpportunityModal";

export default function DashboardHeader() {
  const [openHostModal, setOpenHostModal] = useState(false);
  const [step, setStep] = useState("host");

  return (
    <section className="w-full min-h-screen bg-slate-100 flex flex-col">

      <div className="w-full max-w-[1600px] mx-auto px-8 py-6">

        {/* Header */}
        <div className="flex items-center justify-between bg-white rounded-2xl px-6 py-4 shadow-sm border border-slate-200">

          {/* Greeting */}
          <div className="flex flex-col">
            <h1 className="text-xl font-semibold text-slate-900">
              Welcome back, <span className="capitalize">Manish Sharma</span>
            </h1>

            <div className="flex items-center gap-2 text-sm text-slate-500 mt-1">
              Here’s your platform performance summary
              <HelpCircle size={14} className="text-slate-400 cursor-pointer" />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">

            {/* Credits */}
            <div className="text-sm text-slate-600">
              Assessment Credits :
              <span className="ml-1 font-semibold text-slate-900">0</span>
            </div>

            {/* Avatar */}
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-white flex items-center justify-center text-xs font-semibold uppercase shadow-sm cursor-pointer">
              MS
            </div>

            {/* Host Button */}
            <button
              onClick={() => setOpenHostModal(!openHostModal)}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-full hover:bg-indigo-700 transition shadow-sm"
            >
              <Plus size={16} />
              Host
            </button>

            {/* Help */}
            <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-slate-100 text-slate-600 transition">
              <HelpCircle size={20} />
            </button>

            {/* Credit Balance */}
            <button className="flex items-center gap-1 px-4 py-2 border border-slate-300 rounded-full text-sm font-medium text-slate-700 hover:border-slate-400 hover:bg-slate-50 transition">
              Credit Balance
              <ChevronDown size={16} />
            </button>

          </div>
        </div>

        {/* Layout */}
        <div className="flex gap-6 mt-6">

          <div className="w-[70%] bg-white rounded-2xl shadow-sm border border-slate-200 p-4">
            <LeftSide />
          </div>

          <div className="w-[30%] bg-white rounded-2xl shadow-sm border border-slate-200 p-4">
            <RightSidebar />
          </div>

        </div>
      </div>

      {/* Modals */}
      {openHostModal && (
        <div className="absolute right-8 bottom-12 z-[60]">

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
    </section>
  );
}