import React, { useRef, useState } from "react"
import { Link } from 'react-router-dom'
import FeaturedCarousel from "../../components/Home-components/FeaturedCarousel"
import TrustedCarousel from "../../components/Home-components/TrustedCarousel"
import CompetitionCarousel from "../../components/Home-components/competition"
import InternshipsSection from "../../components/Home-components/internship"
import JobsSection from "../../components/Home-components/jobs"
import CompanyMockTestsSection from "../../components/Home-components/mockTests"
import CompanyMockInterviewSection from "../../components/Home-components/mockInterview"
import banner from "../../assets/home-images/bannerjpg.avif"
import CodingSprintSection from "../../components/Home-components/codeSprintSection"
import PromoSection from "../../components/Home-components/promoSection"
import OurNumbers from "../../components/Home-components/ourNumbers"
import Footer from "../../components/Home-components/footer"
const Home = () => {
    const categories = [
        {
            title: "Internships",
            image: "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/internships_new.png?d=196x120",
            link: "/internships"
        },
        {
            title: "Jobs",
            image: "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/jobs-new.png?d=196x120",
            link: "/jobs"
        },
        {
            title: "Competitions",
            image: "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/competitions-new-1.png?d=196x120",
            link: "/competitions"
        },
        {
            title: "Mock Tests",
            image: "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/mock-tests-new.png?d=196x120",
            link: "/mock-tests"
        },
        {
            title: "Mock Interviews",
            image: "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/mock-interviews-new.png?d=196x120",
            link: "/mock-interviews"
        },
        {
            title: "Mentorships",
            image: "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/mentorships-new.png?d=196x120",
            link: "/mentorships"
        },
        {
            title: "Courses",
            image: "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/courses-new.png?d=196x120",
            link: "/courses"
        },
        {
            title: "Mock Interviews",
            image: "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/mock-interviews-new.png?d=196x120",
        },
        {
            title: "Mentorships",
            image: "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/mentorships-new.png?d=196x120",
        },
        {
            title: "Courses",
            image: "https://d8it4huxumps7.cloudfront.net/uploads/images/avif/courses-new.png?d=196x120",
            
        }
    ]
    const scrollRef = useRef(null)
    const [isDown, setIsDown] = useState(false)
    const [startX, setStartX] = useState(0)
    const [scrollLeft, setScrollLeft] = useState(0)

    const handleMouseDown = (e) => {
        setIsDown(true)
        setStartX(e.pageX - scrollRef.current.offsetLeft)
        setScrollLeft(scrollRef.current.scrollLeft)
    }

    const handleMouseLeave = () => {
        setIsDown(false)
    }

    const handleMouseUp = () => {
        setIsDown(false)
    }

    const handleMouseMove = (e) => {
        if (!isDown) return
        e.preventDefault()
        const x = e.pageX - scrollRef.current.offsetLeft
        const walk = (x - startX) * 0.8
        scrollRef.current.scrollLeft = scrollLeft - walk
    }
    const scrollNext = () => {
        if (!scrollRef.current) return

        const container = scrollRef.current
        const scrollAmount = 180

        container.scrollBy({
            left: scrollAmount,
            behavior: "smooth",
        })
    }
    return (
        <>
            <section className="w-full mx-auto" >
                <div className='max-w-7xl mx-auto flex  justify-between  items-center'>
                    <div className='text-5xl font-extrabold'><h1 className=''>Unlock Your <span className='color'>Career!</span></h1></div>
                    <div><p>28Mn+ talent inspired to #BeUnstoppable</p></div>
                </div>
                <div className="relative py-6  mx-auto max-w-7xl">

                    <div className="pb-4 relative ">


                        <div className="pointer-events-none absolute left-0 top-0 h-full w-2 
                    bg-gradient-to-r from-white to-transparent z-10" />
                        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 
                    bg-gradient-to-l from-white to-transparent z-10" />

                        <div
                            ref={scrollRef}
                            className="flex gap-2 py-4 overflow-y-visible overflow-x-auto 
                 scroll-smooth no-scrollbar cursor-grab 
                 active:cursor-grabbing select-none"
                            onMouseDown={handleMouseDown}
                            onMouseLeave={handleMouseLeave}
                            onMouseUp={handleMouseUp}
                            onMouseMove={handleMouseMove}
                        >
                            {categories.map((item, index) => (
                                <CategoryCard
                                    key={index}
                                    title={item.title}
                                    image={item.image}
                                    link={item.link}
                                    scrollRef={scrollRef}
                                />
                            ))}
                        </div>

                    </div>
                </div>                <div>
                    <FeaturedCarousel />
                </div>
                <div>
                    <TrustedCarousel />
                </div>

                <div>
                    <CompetitionCarousel />
                </div>
                <div>
                    <InternshipsSection />
                </div>
                <div>
                    <JobsSection />
                </div>
                <div>
                    <CompanyMockTestsSection />
                </div>
                <div>
                    <CompanyMockInterviewSection />
                </div>
                <div className="max-w-7xl mx-auto px-5 py-2 ">
                    <img src={banner} alt="" className="rounded-2xl" />
                </div>
                <div className="max-w-7xl  mx-auto">
                    <CodingSprintSection />
                </div>
                <div>
                    <PromoSection />
                </div>
                <div>
                    <OurNumbers />
                </div>
                <div>
                    <Footer />
                </div>
            </section>
        </>
    )
}
const CategoryCard = ({ title, image, link, scrollRef }) => {
    const cardRef = useRef(null)

    const handleClick = () => {
        const container = scrollRef.current
        const card = cardRef.current

        if (!container || !card) return

        const containerRect = container.getBoundingClientRect()
        const cardRect = card.getBoundingClientRect()

        if (cardRect.right > containerRect.right) {
            container.scrollBy({
                left: cardRect.right - containerRect.right + 16,
                behavior: "smooth",
            })
        }

        if (cardRect.left < containerRect.left) {
            container.scrollBy({
                left: cardRect.left - containerRect.left - 16,
                behavior: "smooth",
            })
        }
    }

    return (
        <Link
            ref={cardRef}
            to={link}
            onClick={handleClick}
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

            <div className="relative text-sm font-semibold text-gray-800">
                {title}
            </div>

            <img
                src={image}
                alt={title}
                className="w-20 mx-auto object-contain relative"
            />
        </Link>
    )
}
export default Home
