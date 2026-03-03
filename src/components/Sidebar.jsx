import { Bell, PanelLeftOpen } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import User from "../assets/user.svg"
import Mentor from "../assets/mentor.svg"
import Search from "../assets/search.svg"
import Profile from "../assets/profile.webp"
import Talent from "./Talent"
import TalentPreview from "./TalentPreview"
import ProfileDropdown from "./ProfileDropdown"
const Sidebar = () => {
    const [talentReset, setTalentReset] = useState(0)
    const [activePanel, setActivePanel] = useState("talent")
    const [hoverPanel, setHoverPanel] = useState(null)
    const [isTalentOpen, setIsTalentOpen] = useState(false)
    const [isTalentForcedOpen, setIsTalentForcedOpen] = useState(false)
    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const menuItems = [
        { name: "talent", icon: User, label: "Talent" },
        // { name: "mentor", icon: Mentor, label: "Mentor" },
        { name: "recruiter", icon: Search, label: "Recruiter" },
    ]
    const profileRef = useRef(null)

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                profileRef.current &&
                !profileRef.current.contains(event.target)
            ) {
                setIsProfileOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])
    return (
        <>
            <section
                className="fixed z-60 left-0 top-0 w-20 h-screen bg-blue-100 flex flex-col items-center py-4"
                onMouseLeave={() => setHoverPanel(null)}
            >
                <button
                    onClick={() => {
                        if (isTalentOpen) {
                            setIsTalentForcedOpen(false)
                            setTalentReset(prev => prev + 1)
                        } else {
                            setIsTalentForcedOpen(true)
                        }
                    }}
                    className="p-2 rounded-lg  transition-all cursor-pointer"
                >
                    <PanelLeftOpen
                        size={26}
                        className={`transition-all duration-300 ${isTalentOpen
                            ? "text-gray-900 rotate-180"
                            : "text-gray-500"
                            }`}
                    />
                </button>

                <div className="h-full flex flex-col items-center gap-6 pt-6">
                    {menuItems.map((item) => (
                        <div
                            key={item.name}
                            onMouseEnter={() => setHoverPanel(item.name)}
                            onClick={() => {
                                setActivePanel(item.name)
                                setHoverPanel(null)
                            }}
                            className="flex flex-col items-center cursor-pointer group"
                        >
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
                    <div ref={profileRef} className="relative">
                        <div
                            className="cursor-pointer"
                            onClick={() => setIsProfileOpen(prev => !prev)}
                        >
                            <img
                                src={Profile}
                                alt=""
                                className="w-9 h-9 rounded-full border"
                            />
                        </div>

                        {isProfileOpen && (
                            <div className="absolute bottom-100 left-100 z-[999]">
                                <ProfileDropdown />
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {hoverPanel && hoverPanel !== activePanel && (
                <div
                    onMouseEnter={() => setHoverPanel(hoverPanel)}
                    onMouseLeave={() => setHoverPanel(null)}
                    className="fixed left-20 top-15 h-[92vh] w-64 bg-white rounded-2xl border border-blue-400 shadow-2xl transition-all duration-300 ease-out z-70"
                >
                    {hoverPanel === "talent" && (
                        <TalentPreview
                            setActivePanel={setActivePanel}
                            setHoverPanel={setHoverPanel}
                        />
                    )}
                    {hoverPanel === "recruiter" && (
                        <div className="p-6">Recruiter Panel</div>
                    )}
                </div>
            )}

            {activePanel === "talent" && (
                <div className="fixed top-0 left-20 h-screen z-[40]">
                    <Talent
                        isForcedOpen={isTalentForcedOpen}
                        setIsTalentOpen={setIsTalentOpen}
                        resetSignal={talentReset}
                    />
                </div>
            )}
        </>
    )
}

export default Sidebar