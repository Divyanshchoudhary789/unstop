import React from "react"
import { Link } from "react-router-dom"
import FeatureData from "../components/Internship-component/FeatureData"
import JobsCard from "../components/Jobs-component/JobsCard"
import {
    SquareTerminal,
    ListTodo,
    Atom,
    Megaphone,
    Briefcase,
    Wrench,
    SwatchBook,
    ScrollText,
    UserSearch,
    Banknote,
    SlidersHorizontal,
    ChevronDown,
    ArrowUpDown
} from "lucide-react"

const categories = [
    { title: "Developer", icon: SquareTerminal, link: "/internships?category=developer" },
    { title: "Product", icon: ListTodo, link: "/internships?category=product" },
    { title: "Analytics", icon: Atom, link: "/internships?category=analytics" },
    { title: "Marketing", icon: Megaphone, link: "/internships?category=marketing" },
    { title: "Sales", icon: Briefcase, link: "/internships?category=sales" },
    { title: "Ops", icon: Wrench, link: "/internships?category=ops" },
    { title: "Design", icon: SwatchBook, link: "/internships?category=design" },
    { title: "Content", icon: ScrollText, link: "/internships?category=content" },
    { title: "HR", icon: UserSearch, link: "/internships?category=hr" },
    { title: "Finance", icon: Banknote, link: "/internships?category=finance" },
]

export default function JobsHero() {
    return (
        <section className="w-full bg-white pt-6">
            <div className="max-w-6xl mx-auto px-4">

                <div className="flex flex-col md:items-start  mb-2">
                    <h1 className="text-[40px] font-bold text-gray-950">
                        77709+ Jobs in India
                    </h1>

                    <h2 className="text-[15px] text-gray-800 mt-2 md:mt-0">
                        Search & apply for freshers, remote and entry-level job vacancies in India.
                    </h2>
                </div>

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
            <div className="bg-transparent min-h-screen py-6">
                <div className="max-w-6xl mx-auto px-6">

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
                                <JobsCard
                                    title="Digital Marketing Executive"
                                    company="Morecare Mobility & Rehabilitation Solutions"
                                    experience="No prior experience required"
                                    type="Full Time"
                                    location="In Office | Jaipur"
                                    skills={[
                                        "Marketing Analytics",
                                        "Pay-Per-Click (PPC) Advertising",
                                        "Social Media Management"
                                    ]}
                                    categories={[
                                        "Digital Marketing",
                                        "Digital Marketing",
                                        "Fresher"
                                    ]}
                                    postedDate="Feb 25, 2026"
                                    daysLeft={13}
                                    logo="https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/699e862e995ed_organisation_image-KkCndSDM55179984988E5XaVjnosS.png"
                                    salary="20K - 25K/Month"
                                />
                                <JobsCard />
                                <JobsCard />
                                <JobsCard />
                                <JobsCard />
                                <JobsCard />
                                <JobsCard />
                            </div>

                        </div>

                        <div className="w-[360px] flex-shrink-0 sticky top-18 h-fit">
                            <FeatureData />
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
            className="
        relative
        flex-shrink-0
        w-[122px]
        h-[120px]
        rounded-3xl
        overflow-hidden
        flex
        flex-col
        justify-between
        items-center
        text-center
        py-3
        px-20 
        transition-all
        duration-500
        ease-in-out
        hover:-translate-y-2
        hover:shadow-xl
      "
            style={{
                background: `
    radial-gradient(circle at 30% 30%, rgba(99,102,241,0.15), transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(59,130,246,0.15), transparent 50%),
    linear-gradient(135deg, #EEF5FF 0%, #DCEBFF 100%)
  `,
                border: "1px solid rgba(255,255,255,0.6)"
            }}
        >




            <div className="z-10 flex items-center justify-center">
                <div className="
          w-[64px]
          h-[64px]
          backdrop-blur-sm
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