import React from "react"
import { Link } from "react-router-dom"
import FeatureData from "../../components/Internship-component/FeatureData"
import CompetitionCard from "../../components/Competition-component/CompetitionCard"
import Banner from "../../../src/assets/home-images/bannerjpg.avif"
import {
    Trophy,
    CodeXml,
    AlarmClock,
    GraduationCap,
    PencilRuler,
    MicVocal,
    Globe,
    Balloon,
    UserSearch,
    Banknote,
    SlidersHorizontal,
    ChevronDown,
    ArrowUpDown
} from "lucide-react"

const categories = [
    { title: "Competition", icon: Trophy, link: "/internships?category=developer" },
    { title: "Hackathons", icon: CodeXml, link: "/internships?category=product" },
    { title: "Quizzes", icon: AlarmClock, link: "/internships?category=analytics" },
    { title: "Scholarships", icon: GraduationCap, link: "/internships?category=marketing" },
    { title: "Workshops", icon: PencilRuler, link: "/internships?category=sales" },
    { title: "Conferences", icon: MicVocal, link: "/internships?category=ops" },
    { title: "Cultural Events", icon: Globe, link: "/internships?category=design" },
    { title: "College Festivals", icon: Balloon, link: "/internships?category=content" },
    // { title: "HR", icon: UserSearch, link: "/internships?category=hr" },
    // { title: "Finance", icon: Banknote, link: "/internships?category=finance" },
]

export default function CompetitionHero() {
    return (
        <section className="w-full bg-white pt-6 pl-40">
            <div className="max-w-7xl mx-auto px-4">

                <div className="flex flex-col md:items-start  mb-2">
                    <h1 className="text-[40px] font-bold text-gray-950">
                        21341+ Competitions for Students
                    </h1>

                    <h2 className="text-[15px] text-gray-800 mt-2 md:mt-0">
                        Online quizzes, case studies & challenges with prizes
                    </h2>
                </div>

                <div className="relative">

                    <div className="pointer-events-none absolute -left-1 top-0 h-full w-4 
                  bg-gradient-to-r from-white to-transparent z-20" />

                    <div className="pointer-events-none absolute right-0 top-0 h-full w-12 
                  bg-gradient-to-l from-white to-transparent z-20" />

                    <div className="flex gap-[12px] overflow-x-auto overflow-y-visible py-4 no-scrollbar">
                        {categories.map((item, index) => (
                            <CategoryCard
                                key={index}
                                icon={item.icon}
                                title={item.title}
                                link={item.link}
                            />
                        ))}
                    </div>

                </div>
            </div>
            <div className="bg-transparent min-h-screen py-6">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="flex gap-8">

                        <div className="flex-1">

                            <div className="mb-6">
                                <div className="flex items-center gap-3 flex-wrap">

                                    <FilterButton label="Filters" count={4} />
                                    <FilterDropdown label="Type" />
                                    <FilterDropdown label="Location" />
                                    <FilterDropdown label="Roles" />
                                    <FilterDropdown label="Sort By" />

                                </div>
                            </div>

                            <div className="flex flex-col gap-6">
                                <CompetitionCard
                                    title="Industrial AI Summit 2026 - Startup Challenge"
                                    company="Indian Institute of Management (IIM), Mumbai"
                                    experience="1 - 4 Members"
                                    type="Competition"
                                    location="Online"
                                    skills={[
                                        "Others",
                                        "Applied AI",
                                        "Supply Chain Operations",
                                        "Others"
                                    ]}
                                    categories={[
                                        "Others",
                                        "Applied AI",
                                        "Supply Chain Operations"
                                    ]}
                                    postedDate="Feb 24, 2026"
                                    daysLeft={7}
                                    logo="https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/699dea7e1a656_SCIE__IIM_Mumbai_IIMM_Standard_1.png"
                                />
                                <CompetitionCard />
                                <CompetitionCard />
                                <CompetitionCard />
                                <CompetitionCard />
                                <CompetitionCard />
                                <CompetitionCard />
                            </div>

                        </div>

                        <div className="w-[360px] flex-shrink-0 sticky top-18 h-fit ">
                            <FeatureData />
                            <img src={Banner} alt="" className="w-full  h-32  rounded-xl mt-4 object-cover" />
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

const CategoryCard = ({ title, icon: Icon, link }) => {
    return (
        <Link
            to={link}
        className="relative w-36.5 min-w-36.5 h-30 rounded-3xl
            flex flex-col justify-between text-center p-[16px_12px]
            transition-all duration-500 ease-in-out
            hover:-translate-y-2 hover:shadow-xl"
            style={{
                background:
                    "linear-gradient(104.37deg, #E9F4FF 10%, #d8e3f1 100%)",
            }}
        >

            <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <div
                    className="absolute inset-0 bg-no-repeat bg-bottom-right
          mix-blend-soft-light opacity-60 pointer-events-none"
                    style={{
                        backgroundImage:
                            "url(https://d8it4huxumps7.cloudfront.net/uploads/images/avif/home_page_card_bg_element_new.png)",
                        backgroundSize: "100%",
                    }}
                />
            </div>




            <div className="z-10 flex items-center justify-center">
                <div className="
          w-[64px]
          h-[64px]
          rounded-2xl
          flex items-center justify-center
        ">
                    <Icon
                        size={30}
                        strokeWidth={1.6}
                        className="text-[#00264D]"
                    />
                </div>

            </div>
            <div className="text-sm font-semibold text-[#00264D] z-10">
                {title}
            </div>
        </Link>
    )
}
function FilterDropdown({ label }) {
    return (
        <button className="flex items-center gap-2 px-4 h-10 
                       border border-gray-300 rounded-full 
                       text-sm font-medium text-gray-800 
                       hover:bg-gray-50 transition">
            {label}
            <ChevronDown size={16} />
        </button>
    )
}
function FilterButton({ label, count }) {
    return (
        <button className="
      flex items-center gap-2
      px-5 h-[40px]
      border border-gray-300
      rounded-full
      text-[14px]
      font-medium
      text-gray-800
      bg-white
      hover:bg-gray-50
      transition
    ">
            <SlidersHorizontal size={16} />
            {label}

            <span className="
        ml-1
        px-2
        h-5
        flex items-center justify-center
        text-xs font-semibold
        bg-blue-600 text-white
        rounded-full
      ">
                {count}
            </span>
        </button>
    )
}