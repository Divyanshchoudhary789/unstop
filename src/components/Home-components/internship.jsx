import React, { useRef, useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react"

export default function InternshipsSection() {
  const scrollRef = useRef(null)
  const cardWidth = 355 + 16
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(true)

  const internships = [
    {
      title: "HR Internship",
      company: "Jubilant Agri and Consumer Products Limited",
      location: "In Office | Gurgaon",
      stipend: "10K - 12K / Month",
      logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-699d2b3737d3a_jacpl_logo.png",
    },
    {
      title: "Campus Ambassador Internship",
      company: "Desire4travels",
      location: "Remote",
      logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-680147fae9543_desire4travels_logo-modified.png",
    },
    {
      title: "Sales & Business Development Internship",
      company: "Youngxcode",
      location: "Pan India",
      stipend: "4K - 15K / Month",
      logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/699d272772e19_organisation_image-WYYO3HSQfN1072982762EikLnzGVxV.png",
    },
    {
      title: "Business Development Internship",
      company: "XTechon",
      location: "Remote",
      stipend: "5K / Month",
      logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-699d01a1c5f24_logo.jpg",
    },
    {
      title: "Flutter Developer Internship",
      company: "HxP Technologies",
      location: "Remote",
      logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/699ca0cfb8b61_organisation_image-2FoYCr2ey31632580137xFJ5Yxbigo.png",
    },
    {
      title: "HR Internship",
      company: "Jubilant Agri and Consumer Products Limited",
      location: "In Office | Gurgaon",
      stipend: "10K - 12K / Month",
      logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-699d2b3737d3a_jacpl_logo.png",
    },
    {
      title: "Campus Ambassador Internship",
      company: "Desire4travels",
      location: "Remote",
      logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-680147fae9543_desire4travels_logo-modified.png",
    },
    {
      title: "Sales & Business Development Internship",
      company: "Youngxcode",
      location: "Pan India",
      stipend: "4K - 15K / Month",
      logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/699d272772e19_organisation_image-WYYO3HSQfN1072982762EikLnzGVxV.png",
    },
    {
      title: "Business Development Internship",
      company: "XTechon",
      location: "Remote",
      stipend: "5K / Month",
      logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-699d01a1c5f24_logo.jpg",
    },
    {
      title: "Flutter Developer Internship",
      company: "HxP Technologies",
      location: "Remote",
      logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/699ca0cfb8b61_organisation_image-2FoYCr2ey31632580137xFJ5Yxbigo.png",
    },
    {
      title: "HR Internship",
      company: "Jubilant Agri and Consumer Products Limited",
      location: "In Office | Gurgaon",
      stipend: "10K - 12K / Month",
      logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-699d2b3737d3a_jacpl_logo.png",
    },
    {
      title: "Campus Ambassador Internship",
      company: "Desire4travels",
      location: "Remote",
      logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-680147fae9543_desire4travels_logo-modified.png",
    },
    {
      title: "Sales & Business Development Internship",
      company: "Youngxcode",
      location: "Pan India",
      stipend: "4K - 15K / Month",
      logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/699d272772e19_organisation_image-WYYO3HSQfN1072982762EikLnzGVxV.png",
    },
    {
      title: "Business Development Internship",
      company: "XTechon",
      location: "Remote",
      stipend: "5K / Month",
      logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-699d01a1c5f24_logo.jpg",
    },
    {
      title: "Flutter Developer Internship",
      company: "HxP Technologies",
      location: "Remote",
      logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/699ca0cfb8b61_organisation_image-2FoYCr2ey31632580137xFJ5Yxbigo.png",
    },
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
    <div className="max-w-6xl mx-auto px-6 py-10">

      <div className="flex justify-between items-start mb-7">

        <div className="flex items-start gap-4">
          <div className="w-1.5 h-12 bg-color rounded-sm mt-1"></div>
          <div>
            <h2 className="text-[28px] font-semibold text-[#1c1c1c] leading-tight">
              Internships
            </h2>
            <div className="text-[14px] text-gray-500 font-normal mt-1">
              Unleash internships tailored to your aspirations.
            </div>
          </div>
        </div>

        <a
          href="/internships"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border border-blue-200 color bg-blue-50 px-5 py-2 rounded-full text-[14px] font-semibold transition-all duration-300  group"
        >
          <span>View All</span>
          <span className="w-5 h-5 flex items-center justify-center rounded-full bg-color group-hover:bg-white transition">
            <ChevronRight size={12} className="text-white  transition" />
          </span>
        </a>
      </div>

      {/* CAROUSEL */}
      <div className="relative">

        {showLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute -left-14 top-1/2 -translate-y-1/2 z-20 
             w-12 h-12 flex items-center justify-center
             bg-white border border-gray-200
             shadow-xl rounded-full
             hover:scale-110 hover:shadow-2xl
             transition-all duration-300"
          >
            <ChevronLeft size={22} />
          </button>
        )}

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: "none" }}
        >
          {internships.map((item, index) => (
            <div
              key={index}
              className="w-[355px] shrink-0 snap-start bg-white border border-gray-200 rounded-xl p-4 shadow-sm"
            >
              <div className="flex justify-between gap-4">
                <div className="flex flex-col gap-2">

                  {item.stipend && (
                    <div className="text-green-700 text-[12px] font-medium">
                      {item.stipend}
                    </div>
                  )}

                  <div className="flex items-center gap-1 text-gray-600 text-[12px]">
                    <MapPin size={14} />
                    <span className="line-clamp-1">
                      {item.location}
                    </span>
                  </div>
                </div>

                <img
                  src={item.logo}
                  alt=""
                  className="w-[66px] h-[66px] rounded-md object-cover"
                />
              </div>

              <div className="mt-4">
                <h3 className="text-[14px] font-semibold text-gray-900 leading-snug line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-[12px] text-gray-500 mt-2 line-clamp-1">
                  {item.company}
                </p>
              </div>
            </div>
          ))}
        </div>

        {showRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute -right-14 top-1/2 -translate-y-1/2 z-20
             w-12 h-12 flex items-center justify-center
             bg-white border border-gray-200
             shadow-xl rounded-full
             hover:scale-110 hover:shadow-2xl
             transition-all duration-300"
          >
            <ChevronRight size={22} />
          </button>
        )}
      </div>
    </div>
  )
}