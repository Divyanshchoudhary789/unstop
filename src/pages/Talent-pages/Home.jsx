import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import New from "../../assets/home-images/new.png"
import FeaturedCarousel from "../../components/Home-components/FeaturedCarousel"
import TrustedCarousel from "../../components/Home-components/TrustedCarousel"
import CompetitionCarousel from "../../components/Home-components/competition"
import InternshipsSection from "../../components/Home-components/internship"
import JobsSection from "../../components/Home-components/jobs"
import CompanyMockTestsSection from "../../components/Home-components/mockTests"
import CompanyMockInterviewSection from "../../components/Home-components/mockInterview"
import CodingSprintSection from "../../components/Home-components/codeSprintSection"
import PromoSection from "../../components/Home-components/promoSection"
import OurNumbers from "../../components/Home-components/ourNumbers"
import Footer from "../../components/Home-components/footer"

import banner from "../../assets/home-images/bannerjpg.avif"
const FloatingOrb = ({ className, style }) => (
    <div
        className={`absolute rounded-full blur-3xl opacity-30 animate-pulse ${className}`}
        style={style}
    />
)

const AnimatedWord = ({ word, delay, gradient }) => {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const t = setTimeout(() => setVisible(true), delay)
        return () => clearTimeout(t)
    }, [delay])

    return (
        <span
            className={`inline-block transition-all duration-200 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                } ${gradient
                    ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                    : ""
                }`}
        >
            {word}&nbsp;
        </span>
    )
}
const Home = () => {
    const [showHero, setShowHero] = useState(false)

    useEffect(() => {
        const t = setTimeout(() => setShowHero(true), 200)
        return () => clearTimeout(t)
    }, [])
    const categories = [
        {
            title: "Internships",
            image: "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/internships_new.png",
            link: "/internships"
        },
        {
            title: "Jobs",
            image: "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/jobs-new.png",
            link: "/jobs"
        },
        {
            title: "Competitions",
            image: "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/competitions-new-1.png",
            link: "/competitions"
        },
        {
            title: "Mock Tests",
            image: "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/mock-tests-new.png",
            link: "/mock-tests"
        },
        {
            title: "Mock Interviews",
            image: "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/mock-interviews-new.png",
            link: "/mock-interviews"
        },
        {
            title: "Mentorships",
            image: "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/mentorships-new.png",
            link: "/mentorships"
        },
        {
            title: "Courses",
            image: "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/courses-new.png",
            link: "/courses"
        }
    ]
    const [showSub, setShowSub] = useState(false)
    const [showBtns, setShowBtns] = useState(false)
    const [showCards, setShowCards] = useState(false)

    const line1 = ["Discover", "Opportunities", "That"]
    const line2 = ["Accelerate", "Your", "Career"]

    useEffect(() => {
        const t1 = setTimeout(() => setShowSub(true), 3000)
        const t2 = setTimeout(() => setShowBtns(true), 100)
        const t3 = setTimeout(() => setShowCards(true), 100)

        return () => {
            clearTimeout(t1)
            clearTimeout(t2)
            clearTimeout(t3)
        }
    }, [])
    return (
        <div className="bg-slate-50 w-full  flex justify-center flex-col">
            <div className="max-w-7xl min-h-screen mx-auto  flex flex-col justify-evenly ">
                <section className="  mx-auto px-6 py-2 flex  ">
                    <div className="relative flex flex-col min-h-screen justify-evenly overflow-hidden w-full">

                       

                        <section className=" w-full py-0">
                            <div className="max-w-7xl mx-auto px-6">
                                <div
                                    className={`flex flex-col items-center text-center gap-8 
  transition-all duration-1000 ease-out
  ${showHero ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-20"}
`}
                                >

                                    <h1 className="text-6xl font-bold text-slate-900 max-w-5xl leading-tight">
                                        Discover Opportunities That
                                        <span className="block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                                            Accelerate Your Career
                                        </span>
                                    </h1>

                                    <div
                                        className={`flex gap-6 mt-6 transition-all duration-700 ease-out ${showBtns ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                                            }`}
                                    >
                                        <Link
                                            to="/internship"
                                            className="px-7 py-2 text-lg rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-indigo-300 hover:shadow-xl transition-all duration-300"
                                        >
                                            Explore Opportunities
                                        </Link>

                                        <Link
                                            to="/jobs"
                                            className="px-10 py-2 text-lg rounded-xl border border-slate-300 font-semibold hover:border-indigo-400 hover:text-indigo-500 hover:scale-105 transition-all duration-300"
                                        >
                                            Find Jobs
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        </section>

                        {/* Category Cards */}
                        <section
                            className={`w-full mx-auto px-6 py-11 transition-all duration-700 ease-out ${showCards ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                                }`}
                        >
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">

                                {(categories || []).map((item, index) =>
                                    CategoryCard ? (
                                        <CategoryCard key={index} {...item} />
                                    ) : (
                                        <div
                                            key={index}
                                            className="rounded-2xl border border-slate-200 bg-white/60 backdrop-blur-sm p-4 text-center text-slate-600 text-sm font-medium shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
                                        >
                                            {item.label || item.name || `Cat ${index + 1}`}
                                        </div>
                                    )
                                )}

                            </div>
                        </section>

                    </div>
                </section>




            </div>

            {/* <FeaturedCarousel /> */}


            <TrustedCarousel />

            <CompetitionCarousel />


            <InternshipsSection />

            {/* <JobsSection /> */}

            {/* <CompanyMockTestsSection /> */}

            {/* <CompanyMockInterviewSection /> */}


            {/* <div className="max-w-7xl mx-auto px-6 py-16">
                <img
                    src={New}
                    alt="banner"
                    className="w-full max-w-7xl h-42 object-fill rounded-2xl shadow-md"
                />
            </div> */}


            {/* <CodingSprintSection /> */}


            {/* <PromoSection /> */}


            {/* <OurNumbers /> */}


            <Footer />

        </div>
    )
}



function CategoryCard({ title, image, link }) {
    return (
        <Link
            to={link}
            className="group relative flex flex-col items-center justify-between
      p-6 py-11 rounded-2xl overflow-hidden
      bg-white/70 backdrop-blur-md
      border border-slate-200
      shadow-sm
      hover:shadow-xl
      hover:-translate-y-1
      transition-all duration-300"
        >

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500
      bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100"></div>

            <div className="relative w-16 h-16 flex items-center justify-center rounded-xl
      bg-gradient-to-br from-indigo-100 to-purple-100
      group-hover:scale-110 transition duration-300">

                <img
                    src={image}
                    alt={title}
                    className="w-10 h-10 object-contain"
                />

            </div>

            <span className="relative text-sm font-semibold text-slate-800 mt-3 text-center">
                {title}
            </span>

            <div className="absolute -bottom-10 w-24 h-24 bg-indigo-400 opacity-20 blur-2xl group-hover:opacity-40 transition"></div>

        </Link>
    )
}



function SectionTitle({ title, subtitle }) {
    return (
        <div className="max-w-7xl mx-auto px-6 mt-20 mb-8">

            <h2 className="text-2xl font-semibold text-slate-900">
                {title}
            </h2>

            <p className="text-sm text-slate-500 mt-1">
                {subtitle}
            </p>

        </div>
    )
}


// const AnimatedWord = ({ word, delay, gradient }) => {
//     const [visible, setVisible] = useState(false)

//     useEffect(() => {
//         const t = setTimeout(() => setVisible(true), delay)
//         return () => clearTimeout(t)
//     }, [delay])

//     return (
//         <span
//             className={`inline-block transition-all duration-200 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
//                 } ${gradient
//                     ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
//                     : ""
//                 }`}
//         >
//             {word}&nbsp;
//         </span>
//     )
// }
export default Home