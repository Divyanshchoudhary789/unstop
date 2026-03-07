import { Bell, PanelLeftOpen } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import User from "../assets/user.svg"
import Mentor from "../assets/mentor.svg"
import Search from "../assets/search.svg"
import Profile from "../assets/profile.webp"
import Talent from "./Talent"
import TalentPreview from "./TalentPreview"
import ProfileDropdown from "./ProfileDropdown"
import Recruiter from "./Recruiter"
import RecruiterPreview from "./RecruiterPreview"
const Sidebar = () => {
    const navigate = useNavigate();
    const [talentReset, setTalentReset] = useState(0)
    const [activePanel, setActivePanel] = useState("talent")
    const [hoverPanel, setHoverPanel] = useState(null)
    const [isPanelOpen, setIsPanelOpen] = useState(false)
    const [isPanelForcedOpen, setIsPanelForcedOpen] = useState(false)
    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const menuItems = [
        { name: "talent", icon: User, label: "Talent", route: "/" },
        { name: "recruiter", icon: Search, label: "Recruiter", route: "/dashboard" },
    ]
    const profileRef = useRef(null)
    const location = useLocation()

    const recruiterRoutes = [
        "/dashboard",
        "/myjobinternships",
        "/myopportunities",
        "/festivals",
        "/assessments",
        "/talentpipeline"
    ]

    useEffect(() => {
        const isRecruiterRoute = recruiterRoutes.some(route =>
            location.pathname.startsWith(route)
        )

        if (isRecruiterRoute) {
            setActivePanel("recruiter")
        } else {
            setActivePanel("talent")
        }
    }, [location.pathname])
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
            >
                <button
                    onClick={() => {
                        if (isPanelOpen) {
                            setIsPanelForcedOpen(false)
                            setTalentReset(prev => prev + 1)
                        } else {
                            setIsPanelForcedOpen(true)
                        }
                    }}
                    className="p-2 rounded-lg  transition-all cursor-pointer"
                >
                    <PanelLeftOpen
                        size={26}
                        className={`transition-all duration-300 ${isPanelOpen ? "text-gray-900 rotate-180" : "text-gray-500"
                            }`}
                    />
                </button>

                <div className="h-full flex flex-col items-center gap-6 pt-6">
                    {menuItems.map((item) => (
                        <div
                            key={item.name}
                            onMouseEnter={() => {
                                if (item.name !== activePanel) {
                                    setHoverPanel(item.name)
                                }
                            }} onClick={() => {
                                setActivePanel(item.name)
                                setHoverPanel(null)
                                navigate(item.route)
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
                        <RecruiterPreview
                            setActivePanel={setActivePanel}
                            setHoverPanel={setHoverPanel}
                        />
                    )}
                </div>
            )}

            {activePanel === "talent" && (
                <div className="fixed top-0 left-20 h-screen z-[40]">
                    <Talent
                        isForcedOpen={isPanelForcedOpen}
                        setIsTalentOpen={setIsPanelOpen}
                        resetSignal={talentReset}
                    />
                </div>
            )}
            {activePanel === "recruiter" && (
                <div className="fixed top-0 left-20 h-screen z-[40]">
                    <Recruiter
                        isForcedOpen={isPanelForcedOpen}
                        setIsTalentOpen={setIsPanelOpen}
                        resetSignal={talentReset}
                    />
                </div>
            )}
        </>
    )
}

export default Sidebar