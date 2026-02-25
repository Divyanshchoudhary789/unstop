import { Bell } from "lucide-react"
import { RiMenuUnfoldFill } from "react-icons/ri"

import User from "../assets/user.svg"
import Mentor from "../assets/mentor.svg"
import Search from "../assets/search.svg"
import Profile from "../assets/profile.webp"

const Sidebar = ({ activePanel, setActivePanel }) => {
    const menuItems = [
        { name: "talent", icon: User, label: "Talent" },
        { name: "mentor", icon: Mentor, label: "Mentor" },
        { name: "recruiter", icon: Search, label: "Recruiter" },
    ]

    return (
        <section className="fixed z-110 left-0 top-0 w-20 h-screen bg-blue-50 flex flex-col   items-center py-4 ">

            <div className="h-16">
                <button className="p-2 rounded-lg hover:bg-gray-200 transition-all cursor-pointer">
                    <RiMenuUnfoldFill size={26} className="text-gray-500" />
                </button>
            </div>

            <div className="h-full flex flex-col items-center gap-6 pt-6">
                {menuItems.map((item) => (
                    <div
                        key={item.name}
                        onClick={() => setActivePanel(item.name)}
                        className="flex flex-col items-center cursor-pointer group">
                        <div
                            className={`p-2 rounded-lg transition-all ${activePanel === item.name
                                    ? "bg-blue-200"
                                    : "hover:bg-gray-200"
                                }`}
                        >
                            <img src={item.icon} alt="" className="w-6" />
                        </div>

                        <span
                            className={`text-xs mt-1 font-medium ${activePanel === item.name
                                    ? "text-blue-700"
                                    : "text-gray-700"
                                }`}
                        >
                            {item.label}
                        </span>
                    </div>
                ))}
            </div>

            <div className="flex flex-col items-center gap-6">
                <div className="p-2 rounded-lg hover:bg-gray-200 cursor-pointer">
                    <Bell size={22} />
                </div>

                <div className="cursor-pointer">
                    <img
                        src={Profile}
                        alt=""
                        className="w-9 h-9 rounded-full border"
                    />
                </div>
            </div>
        </section>
    )
}

export default Sidebar