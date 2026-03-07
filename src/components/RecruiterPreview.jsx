import React from "react"
import { useNavigate, useLocation } from "react-router-dom"
import Search from "../assets/search.svg"

import {
    LayoutDashboard,
    Book,
    Cable,
    Settings,
    Download
} from "lucide-react"

import { GoTrophy } from "react-icons/go"
import { LuBriefcaseBusiness, LuPartyPopper } from "react-icons/lu"

const RecruiterPreview = ({ setActivePanel, setHoverPanel }) => {

    const navigate = useNavigate()
    const location = useLocation()

    const handleNavigate = (path) => {
        navigate(path)
        setHoverPanel(null)
        setActivePanel("recruiter")
    }

    return (
        <div className="h-full w-64 py-4 overflow-y-auto overflow-x-visible">

            <div className="flex items-center gap-3 px-4 py-5 shrink-0">
                <img src={Search} alt="" className="w-7 rounded-full shrink-0" />
                <span className="font-semibold text-lg text-gray-800 whitespace-nowrap">
                    Recruiter
                </span>
            </div>

            <div className="flex flex-col">

                <NavItem
                    icon={<LayoutDashboard size={22} />}
                    label="Dashboard"
                    active={location.pathname === "/dashboard"}
                    onClick={() => handleNavigate("/dashboard")}
                />

                <NavItem
                    icon={<LuBriefcaseBusiness size={22} />}
                    label="My Jobs & Internships"
                    active={location.pathname === "/myjobinternships"}
                    onClick={() => handleNavigate("/myjobinternships")}
                />

                <NavItem
                    icon={<GoTrophy size={22} />}
                    label="My Opportunity"
                    active={location.pathname === "/myopportunities"}
                    onClick={() => handleNavigate("/myopportunities")}
                />

                <NavItem
                    icon={<LuPartyPopper size={22} />}
                    label="Festivals"
                    active={location.pathname === "/festivals"}
                    onClick={() => handleNavigate("/festivals")}
                />

                <NavItem
                    icon={<Book size={22} />}
                    label="Assessments"
                    active={location.pathname === "/assessments"}
                    onClick={() => handleNavigate("/assessments")}
                />

                <NavItem
                    icon={<Cable size={22} />}
                    label="Talent Pipeline"
                    active={location.pathname === "/talentpipeline"}
                    onClick={() => handleNavigate("/talentpipeline")}
                />

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

export default RecruiterPreview