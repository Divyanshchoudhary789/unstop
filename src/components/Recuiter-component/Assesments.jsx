import React, { useState } from "react";

export default function AssessmentsPanel() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className=" p-6 text-[#1a1d2e]">
      <div className="flex justify-end">
        <div className="w-full">

          <div className="bg-white rounded-[14px] border border-[#e8eaf0] overflow-hidden">

            <div className="flex items-center justify-between px-5 py-4 border-b border-[#e8eaf0]">
              <h2 className="text-[22px] font-bold text-gray-400">
                Assessments
              </h2>
            </div>

            <div className="flex flex-col items-center text-center px-8 py-16">

              {!imgError ? (
                <img
                  src="https://cdn.unstop.com/assets/icons/rocket.svg"
                  alt="rocket"
                  className="w-14 h-14"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="w-14 h-14 flex items-center justify-center">
                  <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                    <path
                      d="M28 8C28 8 38 14 38 28c0 6-2 11-4 14l-6 6-6-6c-2-3-4-8-4-14C18 14 28 8 28 8z"
                      stroke="#6b7280"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="28"
                      cy="26"
                      r="4"
                      stroke="#6b7280"
                      strokeWidth="2"
                    />
                    <path
                      d="M20 38l-6 8M36 38l6 8"
                      stroke="#6b7280"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              )}

              <div className="text-[20px] font-semibold mt-4 mb-3">
                Missing Out on Assessment Creation?
              </div>

              <p className="text-[16px] text-gray-600 max-w-[460px] leading-relaxed mb-6">
                Start building standalone skill-based assessments — whenever you
                need, and don't let limited access hold you back.
              </p>

              <button className="h-12 px-8 rounded-full bg-[#1a1d2e] text-white text-[15px] font-semibold hover:bg-[#2d3561] transition">
                Contact Us
              </button>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}