import React from "react";

export default function TopRoles() {
  const cards = [
    {
      title: "Software Engineer",
      company: "TCS",
      img: "https://d8it4huxumps7.cloudfront.net/uploads/new-companies-logo/logos_out/TCS.png?d=200x200",
      bg: "bg-gradient-to-br from-blue-100 to-blue-200",
    },
    {
      title: "Embedded Systems Engineer",
      company: "NVIDIA",
      img: "https://d8it4huxumps7.cloudfront.net/uploads/new-companies-logo/logos_out/NVIDIA.png?d=200x200",
      bg: "bg-gradient-to-br from-green-100 to-green-200",
    },
    {
      title: "Software Engineer",
      company: "Accenture",
      img: "https://d8it4huxumps7.cloudfront.net/uploads/new-companies-logo/logos_out/Accenture.png?d=200x200",
      bg: "bg-gradient-to-br from-purple-100 to-indigo-200",
    },
    {
      title: "Data Analyst",
      company: "Deloitte",
      img: "https://d8it4huxumps7.cloudfront.net/uploads/new-companies-logo/logos_out/Deloitte.png?d=200x200",
      bg: "bg-gradient-to-br from-yellow-100 to-yellow-200",
    },
    {
      title: "Data Analyst",
      company: "EY",
      img: "https://d8it4huxumps7.cloudfront.net/uploads/new-companies-logo/logos_out/EY.png?d=200x200",
      bg: "bg-gradient-to-br from-gray-900 to-gray-800",
    },
    {
      title: "Data Analyst",
      company: "Fractal Analytics",
      img: "https://d8it4huxumps7.cloudfront.net/uploads/new-companies-logo/logos_out/Fractal Analytics.png?d=200x200",
      bg: "bg-gradient-to-br from-slate-900 to-slate-800",
    },
  ];

  return (
    <div className="max-w-8xl ml-30 mx-auto  px-8 py-7 font-sans">
      <h2 className="text-[22px] font-bold text-[#1a1d2e] mb-5">
        Choose From The Top Roles
      </h2>

      <div className="flex gap-6 items-start">
        <div className="flex-1 min-w-0">
          <div className="flex gap-3 items-center mb-5 flex-wrap">
            <div className="flex items-center h-11 px-4 border rounded-full bg-white border-gray-200 min-w-[200px]">
              <span className="text-sm text-gray-500 mr-2">Category:</span>
              <span className="text-sm font-semibold text-gray-900">
                Tech
              </span>
            </div>

            <select className="h-11 px-4 border rounded-full bg-white border-gray-200 text-sm text-gray-500 min-w-[160px] focus:border-blue-500 outline-none">
              <option>Select Company</option>
              <option>TCS</option>
              <option>NVIDIA</option>
              <option>Accenture</option>
              <option>Deloitte</option>
              <option>Google</option>
              <option>Amazon</option>
            </select>

            <select className="h-11 px-4 border rounded-full bg-white border-gray-200 text-sm text-gray-500 min-w-[160px] focus:border-blue-500 outline-none">
              <option>Select Role</option>
              <option>Software Engineer</option>
              <option>Data Analyst</option>
              <option>Backend Developer</option>
              <option>QA Engineer</option>
            </select>

            <button className="h-11 px-5 border border-red-500 rounded-full text-red-500 font-semibold text-sm hover:bg-red-50">
              Clear All
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <div
                  className={`flex items-center justify-center h-[110px] p-4 ${card.bg}`}
                >
                  <img
                    src={card.img}
                    alt={card.company}
                    className="max-w-[90px] max-h-[72px] object-contain"
                  />
                </div>

                <div className="p-4">
                  <div className="text-sm font-bold text-[#1a1d2e] truncate">
                    {card.title}
                  </div>
                  <div className="text-xs text-gray-500 mb-3">
                    {card.company}
                  </div>

                  <button className="w-full h-9 border border-gray-200 rounded-full text-sm font-semibold hover:border-blue-500 hover:text-blue-500 hover:bg-blue-50 transition">
                    Start Test
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center mt-6">
            <span className="text-sm text-gray-500">
              1 - 24 <strong className="text-black">/ 194</strong>
            </span>

            <div className="flex gap-1">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                <button
                  key={num}
                  className={`w-8 h-8 text-sm rounded-md ${
                    num === 1
                      ? "bg-black text-white font-bold"
                      : "text-gray-500 hover:bg-gray-200"
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="w-[290px] flex flex-col gap-4">
          <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-3">
            <div className="w-7 h-7 bg-black text-yellow-500 text-xs font-bold flex items-center justify-center rounded-full">
              UN
            </div>

            <div className="text-sm font-semibold flex items-center gap-1">
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent text-xs font-bold">
                AI✦
              </span>
              Credits
            </div>

            <div className="ml-auto w-11 h-11 rounded-full bg-blue-500 flex items-center justify-center text-xs font-bold text-white">
              3/3
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <div className="px-4 py-3 border-b text-base font-bold">
              My Attempts
            </div>

            <div className="p-4 text-sm">
              <div className="mb-4">
                <div className="font-bold">Backend Developer</div>
                <div className="text-xs text-gray-500">
                  Last Attempted: 19 Feb 26, 6:34 PM
                </div>
                <div className="mt-2 font-bold">4/30</div>
              </div>

              <div>
                <div className="font-bold">Software Engineer</div>
                <div className="text-xs text-gray-500">
                  Last Attempted: 19 Feb 26, 6:22 PM
                </div>
                <div className="mt-2 font-bold">21/30</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#1a1d2e] to-[#2d3561] rounded-xl p-4 flex justify-between items-center text-white">
            <div className="font-extrabold text-sm">
              Refer <span className="text-yellow-400">& Win</span>
            </div>
            <button className="bg-yellow-500 px-4 py-2 text-xs font-bold rounded-full">
              Refer now
            </button>
          </div>

          <div className="bg-gradient-to-br from-purple-700 via-purple-600 to-purple-500 rounded-xl p-4 text-white">
            <div className="text-xs font-extrabold mb-1 bg-white/20 px-2 py-1 inline-block rounded-full text-yellow-300">
              unstop PRO ✦
            </div>
            <div className="text-sm font-bold mb-2">
              Upgrade Your Career <span className="text-yellow-300">with AI</span> 🤖
            </div>

            <div className="flex gap-2 text-xs">
              <span className="bg-white/20 px-3 py-1 rounded-full">Mocks</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">Tests</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">Courses</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}