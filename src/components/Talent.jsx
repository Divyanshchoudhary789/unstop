import React, { useState, useEffect } from "react"
import User from "../assets/user.svg"
import { useNavigate, useLocation } from "react-router-dom"
import {
  Plus,
  NotepadTextDashed,
  Gift,
  Settings,
  ChessQueen,
  BadgeQuestionMark,
  House,
  GraduationCap
} from "lucide-react"

import {
  PiCursorClickFill,
  PiMicrophoneStageLight,
  PiDiscoBall,
} from "react-icons/pi"

import { FaGraduationCap, FaCode, FaBook, FaCaretDown, FaReadme } from "react-icons/fa"
import { LuBriefcaseBusiness, LuBrain, LuPartyPopper } from "react-icons/lu"
import { TbUserScan } from "react-icons/tb"
import { GoTrophy } from "react-icons/go"
import { LiaUserTieSolid } from "react-icons/lia"
import { GiStarMedal } from "react-icons/gi"
import { RiPencilRulerLine } from "react-icons/ri"

const Talent = () => {
  const [hovered, setHovered] = useState(false)
  const [openMore, setOpenMore] = useState(false)
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/home"
  useEffect(() => {
    if (!hovered) {
      setOpenMore(false)
    }
  }, [hovered])

  return (
    <section
      onMouseEnter={() => isHome && setHovered(true)}
      onMouseLeave={() => isHome && setHovered(false)}
      className={`fixed top-0 left-20 h-screen bg-white border-r border-gray-200
  transition-all duration-500 ease-in-out z-110
  ${isHome
          ? hovered
            ? "w-64"
            : "w-20"
          : "w-64"
        }`}
    >
      <div className="flex flex-col">

        <div className="flex items-center  gap-3 px-7 py-5 shrink-0">
          <img src={User} alt="" className=" w-7 rounded-full shrink-0" />
          <span
            className={`font-semibold text-lg text-gray-800 whitespace-nowrap
            transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"
              }`}
          >
            Talent
          </span>
        </div>

        <div
          className="flex-1 overflow-y-auto overflow-x-hidden px-2
          scrollbar-hide"
        >

          <div className="px-2 py-4">
            {hovered ? (
              <button
                className="flex items-center justify-center gap-2 w-full
                py-3 bg-blue-100 border border-blue-400
                font-semibold color
                rounded-full shadow-sm hover:bg-blue-200
                transition-all duration-300 cursor-pointer"
              >
                <Plus size={18} />
                Host
              </button>
            ) : (
              <div className="flex justify-center">
                <div className="w-12 h-12 bg-[#0A1F44] rounded-full flex items-center justify-center text-white shadow-md">
                  <Plus size={20} />
                </div>
              </div>
            )}
          </div>

          <SidebarItem icon={<House size={22} />} label="Home" show={hovered} onClick={() => navigate("/home")} active={location.pathname === "/home"}
          />
          <SidebarItem icon={<GraduationCap size={22} />} label="Internships" show={hovered} onClick={() => navigate("/internship")} active={location.pathname === "/internship"} />
          <SidebarItem icon={<LuBriefcaseBusiness size={22} />} label="Jobs" show={hovered} onClick={() => navigate("/jobs")} active={location.pathname === "/jobs"} />
          <SidebarItem icon={<GoTrophy size={22} />} label="Competitions" show={hovered} onClick={() => navigate("/competition")} active={location.pathname === "/competition"} />
          <SidebarItem icon={<LiaUserTieSolid size={22} />} label="Mentorship" show={hovered} active={location.pathname === "/mentorship"} />
          <SidebarItem icon={<FaBook size={22} />} label="Mock Tests" show={hovered} active={location.pathname === "/tests"} />
          <SidebarItem icon={<TbUserScan size={22} />} label="Mock Interview" show={hovered} active={location.pathname === "/interviews"} />
          <SidebarItem icon={<FaCode size={22} />} label="100 Days to Code" show={hovered} active={location.pathname === "/code"} />
          <SidebarItem icon={<NotepadTextDashed size={22} />} label="Courses" show={hovered} active={location.pathname === "/courses"} />

          <div
            onClick={() => setOpenMore(!openMore)}
            className="flex items-center gap-4 px-4 py-2.5 rounded-lg
            text-gray-600 hover:bg-gray-100 cursor-pointer"
          >
            <div className="w-6 shrink-0">
              <FaCaretDown
                size={16}
                className={`transition-transform duration-300 ${openMore ? "rotate-180" : ""
                  }`}
              />
            </div>

            <span
              className={`whitespace-nowrap transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"
                }`}
            >
              More
            </span>
          </div>

          <div
            className={`ml-10 border-l border-gray-200 pl-4 space-y-2
            transition-all duration-300 overflow-hidden
            ${openMore ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
          >
            <SubItem icon={<LuBrain size={16} />} label="Practice" show={hovered} />
            <SubItem icon={<FaCode size={16} />} label="Hackathons" show={hovered} onClick={() => navigate("/hackathon")} />
            <SubItem icon={<BadgeQuestionMark size={16} />} label="Quizzes" show={hovered} onClick={() => navigate("/quizzes")} />
            <SubItem icon={<FaGraduationCap size={16} />} label="Scholarships" show={hovered} onClick={() => navigate("/scholarship")} />
            <SubItem icon={<RiPencilRulerLine size={16} />} label="Workshops" show={hovered} onClick={() => navigate("/workshops")} />
            <SubItem icon={<PiMicrophoneStageLight size={16} />} label="Conferences" show={hovered} onClick={() => navigate("/conference")} />
            <SubItem icon={<PiDiscoBall size={16} />} label="Cultural Events" show={hovered} onClick={() => navigate("/events")} />
            <SubItem icon={<LuPartyPopper size={16} />} label="College Festivals" show={hovered} onClick={() => navigate("/fest")} />
            <SubItem icon={<FaReadme size={16} />} label="Articles" show={hovered} />
          </div>

          <SidebarItem icon={<PiCursorClickFill size={22} />} label="My Activity" show={hovered} />

          <div className="pt-6 border-t border-gray-100 mt-4">
            <SidebarItem icon={<Gift size={22} fill="#ced9e0" />} label="Referrals" show={hovered} />
            <SidebarItem icon={<GiStarMedal size={22} />} label="Unstop Awards" show={hovered} />
            <SidebarItem icon={<Settings size={22} />} label="Settings" show={hovered} />
            <SidebarItem icon={<ChessQueen size={22} />} label="Unstop Pro" show={hovered} />
          </div>

        </div>
      </div>
    </section>
  )
}



const SidebarItem = ({ icon, label, show, onClick, active }) => (
  <div
    onClick={onClick}
    className={`flex items-center gap-4 px-4 py-2.5 rounded-lg
    cursor-pointer transition-all duration-300
    ${active
        ? "bg-blue-100 text-blue-700 font-semibold"
        : "text-gray-600 hover:bg-gray-100"
      }`}
  >
    <div className="w-6 shrink-0">{icon}</div>
    <span
      className={`whitespace-nowrap transition-opacity duration-300 ${show ? "opacity-100" : "opacity-0"
        }`}
    >
      {label}
    </span>
  </div>
)

const SubItem = ({ icon, label, show, onClick }) => (
  <div onClick={onClick} className="flex items-center gap-3 text-sm
    text-gray-600 hover:bg-gray-100 cursor-pointer">
    <div className="w-5 shrink-0">{icon}</div>
    <span
      className={`whitespace-nowrap transition-opacity duration-300 ${show ? "opacity-100" : "opacity-0"
        }`}
    >
      {label}
    </span>
  </div>
)

export default Talent