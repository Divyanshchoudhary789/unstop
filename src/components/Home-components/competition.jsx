import React, { useRef, useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react"

export default function CompetitionsSection() {
  const scrollRef = useRef(null)
  const cardWidth = 306 + 16 // card + gap
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(true)

  const competitions = [
    {
      title: "Meraki 2026: The International Business Plan Competition",
      org: "Fortune Institute of International Business (FIIB), New Delhi",
      location: "New Delhi, Delhi, India",
      prize: "₹ 6,00,000",
      logo:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-699bfbf6232f6_download__1_.jpeg",
    },
    {
      title: "Quadra Clash",
      org:
        "MKSSS's Cummins College of Engineering for Women (CCOEW), Pune",
      location: "Pune, Maharashtra, India",
      logo:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/699d3aae445e6_Cummins_Woman_Engineering_College_Pune.jpeg",
    },
    {
      title: "Quest Arena - Animation Game",
      org: "St Peters Engineering College",
      location: "Medchal, Telangana, India",
      logo:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-699d338948c83_specfiesta.png",
    },
    {
      title: "Structural Showdown",
      org:
        "MKSSS's Cummins College of Engineering for Women (CCOEW), Pune",
      location: "Pune, Maharashtra, India",
      prize: "₹ 27,000",
      logo:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/699d38b54e23b_Cummins_Woman_Engineering_College_Pune.jpeg",
    },
    {
      title: "Meraki 2026: The International Business Plan Competition",
      org: "Fortune Institute of International Business (FIIB), New Delhi",
      location: "New Delhi, Delhi, India",
      prize: "₹ 6,00,000",
      logo:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-699bfbf6232f6_download__1_.jpeg",
    },
    {
      title: "Quadra Clash",
      org:
        "MKSSS's Cummins College of Engineering for Women (CCOEW), Pune",
      location: "Pune, Maharashtra, India",
      logo:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/699d3aae445e6_Cummins_Woman_Engineering_College_Pune.jpeg",
    },
    {
      title: "Quest Arena - Animation Game",
      org: "St Peters Engineering College",
      location: "Medchal, Telangana, India",
      logo:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-699d338948c83_specfiesta.png",
    },
    {
      title: "Structural Showdown",
      org:
        "MKSSS's Cummins College of Engineering for Women (CCOEW), Pune",
      location: "Pune, Maharashtra, India",
      prize: "₹ 27,000",
      logo:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/699d38b54e23b_Cummins_Woman_Engineering_College_Pune.jpeg",
    },
    {
      title: "Meraki 2026: The International Business Plan Competition",
      org: "Fortune Institute of International Business (FIIB), New Delhi",
      location: "New Delhi, Delhi, India",
      prize: "₹ 6,00,000",
      logo:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-699bfbf6232f6_download__1_.jpeg",
    },
    {
      title: "Quadra Clash",
      org:
        "MKSSS's Cummins College of Engineering for Women (CCOEW), Pune",
      location: "Pune, Maharashtra, India",
      logo:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/699d3aae445e6_Cummins_Woman_Engineering_College_Pune.jpeg",
    },
    {
      title: "Quest Arena - Animation Game",
      org: "St Peters Engineering College",
      location: "Medchal, Telangana, India",
      logo:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-699d338948c83_specfiesta.png",
    },
    {
      title: "Structural Showdown",
      org:
        "MKSSS's Cummins College of Engineering for Women (CCOEW), Pune",
      location: "Pune, Maharashtra, India",
      prize: "₹ 27,000",
      logo:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/699d38b54e23b_Cummins_Woman_Engineering_College_Pune.jpeg",
    },
    {
      title: "Meraki 2026: The International Business Plan Competition",
      org: "Fortune Institute of International Business (FIIB), New Delhi",
      location: "New Delhi, Delhi, India",
      prize: "₹ 6,00,000",
      logo:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-699bfbf6232f6_download__1_.jpeg",
    },
    {
      title: "Quadra Clash",
      org:
        "MKSSS's Cummins College of Engineering for Women (CCOEW), Pune",
      location: "Pune, Maharashtra, India",
      logo:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/699d3aae445e6_Cummins_Woman_Engineering_College_Pune.jpeg",
    },
    {
      title: "Quest Arena - Animation Game",
      org: "St Peters Engineering College",
      location: "Medchal, Telangana, India",
      logo:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-699d338948c83_specfiesta.png",
    },
    {
      title: "Structural Showdown",
      org:
        "MKSSS's Cummins College of Engineering for Women (CCOEW), Pune",
      location: "Pune, Maharashtra, India",
      prize: "₹ 27,000",
      logo:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/699d38b54e23b_Cummins_Woman_Engineering_College_Pune.jpeg",
    },
    {
      title: "Techno Blitz - Paper Presentation",
      org: "St Peters Engineering College",
      location: "Medchal, Telangana, India",
      logo:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-699d34c2c494d_specfiesta.png",
    },
  ]

  const updateButtons = () => {
    const el = scrollRef.current
    if (!el) return

    setShowLeft(el.scrollLeft > 0)
    setShowRight(
      el.scrollLeft + el.clientWidth < el.scrollWidth - 5
    )
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
    <div className="max-w-7xl mx-auto px-6 py-2">

      <div className="flex justify-between items-start mb-7">

        <div className="flex items-start gap-4">

          <div className="w-1.5 h-12 bg-color rounded-sm mt-1"></div>

          <div>
            <h2 className="text-[28px] font-semibold text-[#1c1c1c] leading-tight">
              Competitions
            </h2>
            <div className="text-[14px] text-gray-500 font-normal mt-1">
              Uncover the most talked-about competitions today.
            </div>
          </div>

        </div>

        <a
          href="/competitions"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border border-blue-200 color bg-blue-50 px-5 py-2 rounded-full text-[14px] font-semibold transition-all duration-300  group"
        >
          <span>View All</span>

          <span className="w-5 h-5 flex items-center justify-center rounded-full bg-color  transition">
            <ChevronRight
              size={12}
              className="text-white  transition"
            />
          </span>
        </a>
      </div>

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
          {competitions.map((item, index) => (
            <div
              key={index}
              className="w-[400px] shrink-0 snap-start bg-white border border-gray-200 rounded-xl p-4 shadow-sm"
            >
              <div className="flex justify-between gap-4">
                <div className="flex flex-col gap-2">
                  {item.prize && (
                    <div className="text-green-700 text-[12px] font-medium">
                      Prizes worth {item.prize}
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
                  {item.org}
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