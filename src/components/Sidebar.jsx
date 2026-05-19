import { useNavigate, useLocation } from "react-router-dom"
import Profile from "../assets/profile.webp"
import Logo from "../assets/logo.png"

import {
  Bell,
  House,
  GraduationCap,
  NotepadTextDashed,
  Briefcase,
  Search
} from "lucide-react"

import { LuBriefcaseBusiness } from "react-icons/lu"
import { GoTrophy } from "react-icons/go"
import { LiaUserTieSolid } from "react-icons/lia"
import { TbUserScan } from "react-icons/tb"
import { FaBook, FaCode } from "react-icons/fa"
import { useState } from "react"
const navItems = [
  { icon: House, label: "Home", route: "/", emoji: "🏠" },
  { icon: GraduationCap, label: "Internships", route: "/internship", emoji: "🎓" },
  { icon: LuBriefcaseBusiness, label: "Jobs", route: "/jobs", emoji: "💼" },
  { icon: GoTrophy, label: "Competitions", route: "/competition", emoji: "🏆" },
  { icon: LiaUserTieSolid, label: "Mentorship", route: "/mentorship", emoji: "🤝" },
  { icon: FaBook, label: "Mock Tests", route: "/mocktest", emoji: "📚" },
  { icon: TbUserScan, label: "Mock Interview", route: "/mockinterview", emoji: "🎙️" },
  { icon: FaCode, label: "100 Days Code", route: "/code", emoji: "💻" },
  { icon: NotepadTextDashed, label: "Courses", route: "/courses", emoji: "📝" },
]

const Layout = ({ children }) => {

  const navigate = useNavigate()
  const [searchFocused, setSearchFocused] = useState(false)

  const location = useLocation()

  const NavItem = ({ icon: Icon, label, route }) => {

    const active = location.pathname === route

    return (
      <div
        onClick={() => navigate(route)}
        className={`
      relative
      group
      flex items-center
      gap-3
      px-3 py-2.5
      rounded-xl
      cursor-pointer
      transition-all
      duration-200
      text-[12px]
      ${active
            ? "bg-gradient-to-r from-indigo-50 to-sky-50 text-indigo-600 shadow-sm"
            : "border border-pink-200 shadow-xl"}
      `}
      >

        {/* Active Left Indicator */}
        {active && (
          <div
            className="
          absolute left-0
          top-1/2 -translate-y-1/2
          h-5 w-[3px]
          rounded-r-full
          
        "
          />
        )}

        {/* Icon Bubble */}
        <div
          className={`
  flex items-center gap-2
  px-3 py-1.5
  rounded-lg
  text-[13px] font-medium
  transition
  ${active
              ? " text-indigo-600 shadow-sm"
              : "text-slate-00 hover:bg-slate-100"
            }
`}
        >
          <Icon size={16} />
          <span>{label}</span>
        </div>

        <div
          className="
        absolute inset-0
        rounded-xl
        opacity-0
        group-hover:opacity-100
        transition
        bg-gradient-to-r
        from-indigo-100/40
        to-sky-100/40
        -z-10
        "
        />

      </div>
    )
  }
  return (

    <div className="h-screen flex flex-col bg-indigo-50 font-sans">


      <nav
        className="
  fixed top-0 left-0 right-0
  h-16
  flex items-center
  px-6
  gap-6
  z-50
  bg-white/80
  backdrop-blur-xl
  border-b border-gray-200
  shadow-sm
  "
      >
        {/* LOGO */}
        <div className="flex items-center gap-3 w-[220px] min-w-[220px]">

          <div className="
      w-9 h-9
      rounded-xl
      bg-gradient-to-br
      from-gray-100
      to-gray-300
      flex items-center justify-center
      shadow-inner
      border border-gray-200
      overflow-hidden
    ">
            <img src={Logo} alt="logo" className="w-full h-full object-contain" />
          </div>

          <span className="text-[16px] font-semibold text-gray-800 tracking-tight">
            SyncLyft
          </span>

        </div>


        {/* SEARCH */}
        <div className="relative flex-1 max-w-[420px]">

          <Search
            size={16}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="search"
            placeholder="Search opportunities..."
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            className="
      w-full
      h-10
      pl-10 pr-4
      rounded-xl
      bg-gray-100
      border border-gray-200
      text-gray-700
      text-[14px]
      outline-none
      focus:bg-white
      focus:border-gray-300
      transition
      "
          />

        </div>


        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3 ml-auto">

          <button
            className="
      flex items-center gap-2
      px-4
      h-9
      rounded-lg
      bg-gray-100
      border border-gray-200
      text-gray-700
      text-[13px]
      hover:bg-gray-200
      transition
      "
          >
            <Briefcase size={14} />
            Business
          </button>


          {/* Notifications */}
          <div
            className="
      relative
      w-9 h-9
      rounded-lg
      flex items-center justify-center
      bg-gray-100
      border border-gray-200
      hover:bg-gray-200
      cursor-pointer
      transition
      "
          >
            <Bell size={16} />

            <span
              className="
        absolute
        top-1.5 right-1.5
        w-2 h-2
        rounded-full
        bg-red-500
        "
            />
          </div>


          {/* Avatar */}
          <img
            src={Profile}
            alt="profile"
            className="
      w-9 h-9
      rounded-lg
      object-cover
      border border-gray-200
      cursor-pointer
      "
          />

        </div>

      </nav>




      <div className="flex flex-1 pt-16 overflow-hidden">


        <aside
          style={{
              backgroundImage: "linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)"
          }}
          className="
  w-[230px]
  min-w-[230px]
  border-r border-gray-200
  flex flex-col
  px-3
  py-5
  gap-1
  overflow-y-auto
"
        >

          {navItems.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}

        </aside>



        <main className="
        flex-1
        overflow-y-auto
        
        ">

          <div className="max-w-screen-2xl mx-auto">

            {children}

          </div>

        </main>

      </div>

    </div>
  )
}

export default Layout