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
import { RxDashboard } from "react-icons/rx";
import { FaGraduationCap, FaCode, FaBook, FaCaretDown, FaReadme } from "react-icons/fa"
import { LuBriefcaseBusiness, LuBrain, LuPartyPopper } from "react-icons/lu"
import { TbUserScan } from "react-icons/tb"
import { GoTrophy } from "react-icons/go"
import { LiaUserTieSolid } from "react-icons/lia"
import { GiStarMedal } from "react-icons/gi"
import { RiPencilRulerLine } from "react-icons/ri"

const Talent = ({ isForcedOpen, setIsTalentOpen, resetSignal }) => {
  const [openMore, setOpenMore] = useState(false)
  const navigate = useNavigate();
  const location = useLocation();
  const expandableRoutes = ["/", "/mocktest", "/mockinterview", "/mentorship"];

  const isExpandableRoute =
    location.pathname === "/" ||
    expandableRoutes
      .filter(route => route !== "/")
      .some(route => location.pathname.startsWith(route));
  const [hovered, setHovered] = useState(false);
  const isExpanded = isForcedOpen || hovered;
  useEffect(() => {
    if (!isExpanded) {
      setOpenMore(false)
    }
  }, [isExpanded])
  useEffect(() => {
    setIsTalentOpen?.(isExpanded)
  }, [isExpanded])

  useEffect(() => {
    if (resetSignal > 0) {
      setHovered(false)
    }
  }, [resetSignal])
  return (
    <section
      onMouseEnter={() => {
        if (!isForcedOpen) {
          setHovered(true)
        }
      }}

      onMouseLeave={() => {
        if (!isForcedOpen && isExpandableRoute) {
          setHovered(false)
        }
      }}
      className={`fixed top-0 left-20 h-screen bg-white border-r border-gray-200
  transition-all duration-500 ease-in-out z-1
${isExpanded ? "w-64" : "w-20"}`}
    >
      <div className="flex flex-col">

        <div className="flex items-center  gap-3 px-7 py-5 shrink-0">
          <img src={User} alt="" className=" w-7 rounded-full shrink-0" />
          <span
            className={`font-semibold text-lg text-gray-800 whitespace-nowrap
            transition-opacity duration-300 ${isExpanded ? "opacity-100" : "opacity-0"
              }`}
          >
            Talent
          </span>
        </div>

        <div
          className="flex-1 px-2
          scrollbar-hide"
        >

          <div className="px-2 py-4">
            {isExpanded ? (
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

          <SidebarItem icon={<House size={22} />} label="Home" show={isExpanded} onClick={() => navigate("/")} active={location.pathname === "/"}
          />
          <SidebarItem icon={<GraduationCap size={22} />} label="Internships" show={isExpanded} onClick={() => navigate("/internship")} active={location.pathname === "/internship"} />
          <SidebarItem icon={<LuBriefcaseBusiness size={22} />} label="Jobs" show={isExpanded} onClick={() => navigate("/jobs")} active={location.pathname === "/jobs"} />
          <SidebarItem icon={<GoTrophy size={22} />} label="Competitions" show={isExpanded} onClick={() => navigate("/competition")} active={location.pathname === "/competition"} />
          <SidebarItem icon={<LiaUserTieSolid size={22} />} label="Mentorship" show={isExpanded} onClick={() => navigate("/mentorship")} active={location.pathname === "/mentorship"} />
          <SidebarItem icon={<FaBook size={22} />} label="Mock Tests" show={isExpanded} active={location.pathname === "/mocktest"} onClick={() => navigate('/mocktest')} />
          <SidebarItem icon={<TbUserScan size={22} />} label="Mock Interview" show={isExpanded} active={location.pathname === "/mockinterview"} onClick={() => navigate("/mockinterview")} />
          <SidebarItem icon={<FaCode size={22} />} label="100 Days to Code" show={isExpanded} active={location.pathname === "/code"} />
          <SidebarItem icon={<NotepadTextDashed size={22} />} label="Courses" show={isExpanded} active={location.pathname === "/courses"} />

          <div className="relative group">

            <div
              className="flex items-center px-3 py-2 rounded-lg 
               text-gray-700 hover:bg-gray-100 cursor-pointer mx-2"
            >
              <div className="w-6 shrink-0">
                <RxDashboard
                  size={16}
                  className="transition-transform duration-300 
                   group-hover:rotate-180"
                />
              </div>

              <span
                className={`whitespace-nowrap transition-opacity duration-300 ${isExpanded ? "opacity-100" : "opacity-0"
                  }`}
              >
                More
              </span>
            </div>

            <div
              className="
    absolute left-full top-1/2 -translate-y-1/2 ml-3
    w-64 bg-white rounded-2xl
    shadow-[0_20px_60px_-10px_rgba(0,0,0,0.15)]
    border border-gray-100
    opacity-0 invisible translate-x-3 scale-95
    group-hover:opacity-100 group-hover:visible
    group-hover:translate-x-0 group-hover:scale-100
    transition-all duration-200 ease-out
    py-2 z-[999]
  "
            >
              <SubItem icon={<LuBrain size={16} />} label="Practice" />
              <SubItem icon={<FaCode size={16} />} label="Hackathons" onClick={() => navigate("/hackathon")} />
              <SubItem icon={<BadgeQuestionMark size={16} />} label="Quizzes" onClick={() => navigate("/quizzes")} />
              <SubItem icon={<FaGraduationCap size={16} />} label="Scholarships" onClick={() => navigate("/scholarship")} />
              <SubItem icon={<RiPencilRulerLine size={16} />} label="Workshops" onClick={() => navigate("/workshops")} />
              <SubItem icon={<PiMicrophoneStageLight size={16} />} label="Conferences" onClick={() => navigate("/conference")} />
              <SubItem icon={<PiDiscoBall size={16} />} label="Cultural Events" onClick={() => navigate("/events")} />
              <SubItem icon={<LuPartyPopper size={16} />} label="College Festivals" onClick={() => navigate("/fest")} />
              <SubItem icon={<FaReadme size={16} />} label="Articles" />
            </div>

          </div>

          <SidebarItem icon={<PiCursorClickFill size={22} />} label="My Activity" show={isExpanded} />

          <div className="pt-6 border-t border-gray-100 mt-4">
            <SidebarItem icon={<Gift size={22} fill="#ced9e0" />} label="Referrals" show={isExpanded} />
            <SidebarItem icon={<GiStarMedal size={22} />} label="Unstop Awards" show={isExpanded} />
            <SidebarItem icon={<Settings size={22} />} label="Settings" show={isExpanded} />
            <SidebarItem icon={<ChessQueen size={22} />} label="Unstop Pro" show={isExpanded} />
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
        ? "bg-blue-100 text-gray-950 font-semibold"
        : "text-gray-800 hover:bg-gray-100"
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

const SubItem = ({ icon, label, onClick }) => (
  <div
    onClick={onClick}
    className="
      flex items-center gap-3
      px-4 py-2.5
      text-sm text-gray-700
      hover:bg-gray-100
      transition-all duration-200
      cursor-pointer
      group/sub
    "
  >
    <div className="w-5 shrink-0 text-gray-500 group-hover/sub:text-indigo-600">
      {icon}
    </div>
    <span className="font-medium">
      {label}
    </span>
  </div>
)

export default Talent