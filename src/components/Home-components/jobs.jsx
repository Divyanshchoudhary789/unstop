import React, { useRef, useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, MapPin, Briefcase, Sparkles } from "lucide-react"

export default function JobsSection() {

  const scrollRef = useRef(null)
  const cardWidth = 356
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(true)

  const jobs = [
    {
      title: "TeleCaller Executive",
      company: "Sourcbox Solution",
      location: "In Office | Bhubaneswar",
      salary: "20K / Month",
      tag: "Popular",
      logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/699d44b8088fd_organisation_image-MTe9Bt4sYI1258451344Ge8TNxRHgU.png",
    },
    {
      title: "USA Staffing - Recruiter & Business Development Specialist",
      company: "Intellypod",
      location: "Remote",
      tag: "Remote",
      logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/699d42dadd4e8_organisation_image-dbaRWQYjMQ9641973749kCWPFBXPu.png",
    },
    {
      title: "HR Recruitment Researcher",
      company: "Shrofile Technologies",
      location: "Hybrid | Gurgaon",
      tag: "Hybrid",
      logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-699d35d083c2e_download.jpg",
    },
    {
      title: "Associate Program Manager",
      company: "TalentXO",
      location: "In Office | Mumbai",
      tag: "Corporate",
      logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/699d3c32ed771_organisation_image-DUYCd15I1b1554843805KhnwAHNZIA.png",
    },
    {
      title: "Video Editor",
      company: "Social Hippi",
      location: "In Office | Bengaluru",
      salary: "20K - 35K / Month",
      tag: "Creative",
      logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/699d34afd3bd2_organisation_image-VRZqrhmf3P20656823739AQKx6W2Pi.png",
    },
    {
      title: "TeleCaller Executive",
      company: "Sourcbox Solution",
      location: "In Office | Bhubaneswar",
      salary: "20K / Month",
      tag: "Popular",
      logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/699d44b8088fd_organisation_image-MTe9Bt4sYI1258451344Ge8TNxRHgU.png",
    },
    {
      title: "USA Staffing - Recruiter & Business Development Specialist",
      company: "Intellypod",
      location: "Remote",
      tag: "Remote",
      logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/699d42dadd4e8_organisation_image-dbaRWQYjMQ9641973749kCWPFBXPu.png",
    },
    {
      title: "HR Recruitment Researcher",
      company: "Shrofile Technologies",
      location: "Hybrid | Gurgaon",
      tag: "Hybrid",
      logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-699d35d083c2e_download.jpg",
    },
    {
      title: "Associate Program Manager",
      company: "TalentXO",
      location: "In Office | Mumbai",
      tag: "Corporate",
      logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/699d3c32ed771_organisation_image-DUYCd15I1b1554843805KhnwAHNZIA.png",
    },
    {
      title: "Video Editor",
      company: "Social Hippi",
      location: "In Office | Bengaluru",
      salary: "20K - 35K / Month",
      tag: "Creative",
      logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/699d34afd3bd2_organisation_image-VRZqrhmf3P20656823739AQKx6W2Pi.png",
    }
  ]

  const updateButtons = () => {
    const el = scrollRef.current
    if (!el) return
    setShowLeft(el.scrollLeft > 0)
    setShowRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 5)
  }

  const scroll = (direction) => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    updateButtons()
    const el = scrollRef.current
    el.addEventListener("scroll", updateButtons)
    return () => el.removeEventListener("scroll", updateButtons)
  }, [])

  return (
    <section className="max-w-7xl mx-auto px-6 py-5">

      <div className="flex items-center justify-between mb-12">

        <div className="flex items-center gap-3">
          <Sparkles className="text-indigo-500" size={22} />
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Jobs
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Discover jobs that match your skills and ambitions.
            </p>
          </div>
        </div>

        <a
          href="/jobs"
          className="px-4 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:opacity-90 transition"
        >
          View All
        </a>

      </div>

      <div className="relative">

        {showLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute -left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center rounded-full bg-white shadow-lg border border-gray-200 hover:scale-105 transition"
          >
            <ChevronLeft size={20} />
          </button>
        )}

        <div
          ref={scrollRef}
          className="flex gap-7 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
        >

          {jobs.map((item, index) => (

            <div
              key={index}
              className="w-[330px] shrink-0 snap-start rounded-3xl p-6 bg-gradient-to-br from-white to-gray-50 border border-gray-200 flex flex-col gap-5 group hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <div className="w-12 h-12 rounded-xl bg-white shadow border border-gray-200 flex items-center justify-center">
                    <img
                      src={item.logo}
                      alt=""
                      className="w-8 h-8 object-contain"
                    />
                  </div>

                  <span className="text-xs text-gray-500">
                    {item.company}
                  </span>

                </div>

                <span className="text-[10px] px-2 py-1 rounded-full bg-indigo-100 text-indigo-600 font-semibold">
                  {item.tag}
                </span>

              </div>

              <h3 className="text-[15px] font-semibold text-gray-900 leading-snug line-clamp-2 group-hover:text-indigo-600 transition">
                {item.title}
              </h3>

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <MapPin size={14} />
                  <span>{item.location}</span>
                </div>

                {item.salary && (
                  <span className="text-xs px-3 py-1 rounded-full bg-emerald-100 text-emerald-600 font-medium">
                    {item.salary}
                  </span>
                )}

              </div>

              <button className="mt-2 w-full py-2 text-sm font-semibold rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:opacity-90 transition">
                Apply Now
              </button>

            </div>

          ))}

        </div>

        {showRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute -right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center rounded-full bg-white shadow-lg border border-gray-200 hover:scale-105 transition"
          >
            <ChevronRight size={20} />
          </button>
        )}

      </div>

    </section>
  )
}