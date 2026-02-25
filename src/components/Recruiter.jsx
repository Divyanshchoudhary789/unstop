import React, { useState } from "react"
import {
    LayoutDashboard,
    Book,
    Cable,
    Settings,
    Download
} from "lucide-react"
import { GoTrophy } from "react-icons/go"
import { LuBriefcaseBusiness, LuPartyPopper } from "react-icons/lu"
import Search from "../assets/search.svg"

const Recruiter = () => {
    const [hovered, setHovered] = useState(false)

    return (
        <section
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={`fixed top-0 left-20 h-screen bg-white border-r border-gray-200
      transition-all duration-500 ease-in-out z-40
      ${hovered ? "w-64" : "w-20"}`}
        >
            <div className="h-full flex flex-col ">

                <div className="flex items-center gap-3 px-4 py-5 border-b border-gray-100 shrink-0">
                    <img src={Search} alt="" className="w-9 h-9 shrink-0" />
                    <span
                        className={`font-semibold text-lg text-gray-800 whitespace-nowrap
            transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        Recruiter
                    </span>
                </div>

                <div className=" flex-1 overflow-y-auto overflow-x-hidden  px-2">

                    <SidebarItem icon={<LayoutDashboard size={22} />} label="Dashboard" show={hovered} />
                    <SidebarItem icon={<LuBriefcaseBusiness size={22} />} label="My Jobs & Internships" show={hovered} />
                    <SidebarItem icon={<GoTrophy size={22} />} label="My Opportunity" show={hovered} />
                    <SidebarItem icon={<LuPartyPopper size={22} />} label="Festivals" show={hovered} />
                    <SidebarItem icon={<Book size={22} />} label="Assessments" show={hovered} />
                    <SidebarItem icon={<Cable size={22} />} label="Talent Pipeline" show={hovered} />

                    <div className="pt-6 border-t border-gray-100  mt-4">
                        <SidebarItem icon={<Download size={22} />} label="My Download's" show={hovered} />
                        <SidebarItem icon={<Settings size={22} />} label="Settings" show={hovered} />
                    </div>

                </div>
            </div>
        </section>
    )
}

const SidebarItem = ({ icon, label, show }) => (
    <div className="flex items-center  gap-4 px-4 py-2.5 rounded-lg
    text-gray-600 hover:bg-gray-100 cursor-pointer transition-all">

        <div className="w-6 shrink-0">{icon}</div>

        <span
            className={`whitespace-nowrap transition-opacity duration-300 ${show ? "opacity-100" : "opacity-0"
                }`}
        >
            {label}
        </span>
    </div>
)

export default Recruiter