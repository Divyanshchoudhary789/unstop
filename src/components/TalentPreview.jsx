import React, { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import User from "../assets/user.svg"
import {
    House,
    GraduationCap,
    Gift,
    Settings,
    ChessQueen,
    NotepadTextDashed,
    ChevronRight
} from "lucide-react"
import { RxDashboard } from "react-icons/rx";
import { FaCode, FaBook } from "react-icons/fa"
import { LuBriefcaseBusiness, LuBrain } from "react-icons/lu"
import { TbUserScan } from "react-icons/tb"
import { GoTrophy } from "react-icons/go"
import { LiaUserTieSolid } from "react-icons/lia"
import { GiStarMedal } from "react-icons/gi"
import { PiCursorClickFill } from "react-icons/pi"

const TalentPreview = ({ setActivePanel, setHoverPanel }) => {
    const navigate = useNavigate()
    const location = useLocation()
    const [openMore, setOpenMore] = useState(false)

    const handleNavigate = (path) => {
        navigate(path)
        setHoverPanel(null)
        setActivePanel("talent")
    }

    return (
        <div className="h-full w-64 py-4 overflow-y-auto overflow-x-visible">
                        <div className="flex items-center gap-3 px-4 py-5 shrink-0">
            <img src={User} alt="" className=" w-7 rounded-full shrink-0" />
            <span
                className={`font-semibold text-lg text-gray-800 whitespace-nowrap
                  transition-opacity duration-300 `}
            >
                Talent
            </span>
        </div>

            <div className=" flex justify-start flex-col">

                <NavItem
                    icon={<House size={22} />}
                    label="Home"
                    active={location.pathname === "/"}
                    onClick={() => handleNavigate("/")}
                />

                <NavItem
                    icon={<GraduationCap size={22} />}
                    label="Internships"
                    active={location.pathname === "/internship"}
                    onClick={() => handleNavigate("/internship")}
                />

                <NavItem
                    icon={<LuBriefcaseBusiness size={22} />}
                    label="Jobs"
                    active={location.pathname === "/jobs"}
                    onClick={() => handleNavigate("/jobs")}
                />

                <NavItem
                    icon={<GoTrophy size={22} />}
                    label="Competitions"
                    active={location.pathname === "/competition"}
                    onClick={() => handleNavigate("/competition")}
                />

                <NavItem
                    icon={<LiaUserTieSolid size={22} />}
                    label="Mentorship"
                    active={location.pathname === "/mentorship"}
                    onClick={() => handleNavigate("/mentorship")}
                />

                <NavItem
                    icon={<FaBook size={22} />}
                    label="Mock Tests"
                    active={location.pathname === "/mocktest"}
                    onClick={() => handleNavigate("/mocktest")}
                />

                <NavItem
                    icon={<TbUserScan size={22} />}
                    label="Mock Interview"
                    active={location.pathname === "/mockinterview"}
                    onClick={() => handleNavigate("/mockinterview")}
                />

                <NavItem
                    icon={<FaCode size={22} />}
                    label="100 Days to Code"
                    active={location.pathname === "/code"}
                />

                <NavItem
                    icon={<NotepadTextDashed size={22} />}
                    label="Courses"
                    active={location.pathname === "/courses"}
                />

                <div className="relative group mx-2">

                    <div
                        className="
      flex items-center justify-between px-3 py-2
      rounded-lg text-gray-700 hover:bg-gray-100
      cursor-pointer transition-all duration-200
    "
                    >
                        <span className="flex items-center gap-3">
                            <RxDashboard size={18} />
                            More
                        </span>

                        <ChevronRight
                            size={18}
                            className="
        transition-transform duration-200
        group-hover:rotate-90
      "
                        />
                    </div>

                    <div
                        className="
      fixed left-[336px] top-[260px]
      w-60 bg-white rounded-2xl
      shadow-[0_20px_60px_-10px_rgba(0,0,0,0.15)]
      border border-gray-100
      opacity-0 invisible translate-x-2 scale-95
      group-hover:opacity-100 group-hover:visible
      group-hover:translate-x-0 group-hover:scale-100
      transition-all duration-200 ease-out
      py-2 z-[999]
    "
                    >
                        <SubItem label="Hackathons" onClick={() => handleNavigate("/hackathon")} />
                        <SubItem label="Quizzes" onClick={() => handleNavigate("/quizzes")} />
                        <SubItem label="Scholarships" onClick={() => handleNavigate("/scholarship")} />
                        <SubItem label="Workshops" onClick={() => handleNavigate("/workshops")} />
                        <SubItem label="Conferences" onClick={() => handleNavigate("/conference")} />
                        <SubItem label="Cultural Events" onClick={() => handleNavigate("/events")} />
                        <SubItem label="College Festivals" onClick={() => handleNavigate("/fest")} />
                        <SubItem label="Articles" />
                    </div>

                </div>

                <NavItem
                    icon={<PiCursorClickFill size={22} />}
                    label="My Activity"
                />

            </div>

            <div className="my-6 border-t border-gray-200" />

            <div className="space-y-1">
                <p className="text-xs text-gray-400 uppercase tracking-wide px-3 mb-2">
                    Other
                </p>

                <NavItem icon={<Gift size={22} />} label="Referrals" />
                <NavItem icon={<GiStarMedal size={22} />} label="Unstop Awards" />
                <NavItem icon={<Settings size={22} />} label="Settings" />
                <NavItem icon={<ChessQueen size={22} />} label="Unstop Pro" />
            </div>

        </div>
    )
}

const NavItem = ({ icon, label, active, onClick }) => (
    <div
        onClick={onClick}
        className={`
      flex items-center gap-3 mx-2 px-4 py-2 rounded-lg
      cursor-pointer transition-all duration-200 text-sm
     ${active
                ? "bg-blue-100 text-gray-950 font-semibold"
                : "text-gray-800 hover:bg-gray-100"
            }
    `}
    >
        <div className="w-5 flex justify-center shrink-0">
            {icon}
        </div>
        <span className="truncate">{label}</span>
    </div>
)

const SubItem = ({ label, onClick }) => (
    <div
        onClick={onClick}
        className="
      flex items-center
      px-4 py-2.5
      text-sm text-gray-700
      hover:bg-gray-100
      transition-all duration-200
      cursor-pointer
      rounded-lg
    "
    >
        {label}
    </div>
)

export default TalentPreview