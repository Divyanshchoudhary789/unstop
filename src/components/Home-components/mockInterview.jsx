import React, { useRef, useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function CompanyMockInterviewSection() {
  const scrollRef = useRef(null)
  const cardWidth = 225 + 16
  const [activeTab, setActiveTab] = useState("Tech")
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(true)

  const data = {
    Tech: [
      { role: "Software Engineer", company: "TCS", logo: "https://d8it4huxumps7.cloudfront.net/uploads/new-companies-logo/logos_out/TCS.png" },
      { role: "Backend Developer", company: "Microsoft", logo: "https://d8it4huxumps7.cloudfront.net/uploads/new-companies-logo/logos_out/Microsoft.png" },
      { role: "Software Engineer", company: "Google", logo: "https://d8it4huxumps7.cloudfront.net/uploads/new-companies-logo/logos_out/Google.png" },
      { role: "Backend Developer", company: "Amazon", logo: "https://d8it4huxumps7.cloudfront.net/uploads/new-companies-logo/logos_out/Amazon.png" },
      { role: "DevOps Engineer", company: "Infosys", logo: "https://d8it4huxumps7.cloudfront.net/uploads/new-companies-logo/logos_out/Infosys.png" },
      { role: "Software Engineer", company: "TCS", logo: "https://d8it4huxumps7.cloudfront.net/uploads/new-companies-logo/logos_out/TCS.png" },
      { role: "Backend Developer", company: "Microsoft", logo: "https://d8it4huxumps7.cloudfront.net/uploads/new-companies-logo/logos_out/Microsoft.png" },
      { role: "Software Engineer", company: "Google", logo: "https://d8it4huxumps7.cloudfront.net/uploads/new-companies-logo/logos_out/Google.png" },
      { role: "Backend Developer", company: "Amazon", logo: "https://d8it4huxumps7.cloudfront.net/uploads/new-companies-logo/logos_out/Amazon.png" },
      { role: "DevOps Engineer", company: "Infosys", logo: "https://d8it4huxumps7.cloudfront.net/uploads/new-companies-logo/logos_out/Infosys.png" },
      { role: "Software Engineer", company: "TCS", logo: "https://d8it4huxumps7.cloudfront.net/uploads/new-companies-logo/logos_out/TCS.png" },
      { role: "Backend Developer", company: "Microsoft", logo: "https://d8it4huxumps7.cloudfront.net/uploads/new-companies-logo/logos_out/Microsoft.png" },
      { role: "Software Engineer", company: "Google", logo: "https://d8it4huxumps7.cloudfront.net/uploads/new-companies-logo/logos_out/Google.png" },
      { role: "Backend Developer", company: "Amazon", logo: "https://d8it4huxumps7.cloudfront.net/uploads/new-companies-logo/logos_out/Amazon.png" },
      { role: "DevOps Engineer", company: "Infosys", logo: "https://d8it4huxumps7.cloudfront.net/uploads/new-companies-logo/logos_out/Infosys.png" },
    ],
    Management: [
      { role: "Data Analyst", company: "Deloitte", logo: "https://d8it4huxumps7.cloudfront.net/uploads/new-companies-logo/logos_out/Deloitte.png" },
      { role: "Business Intelligence Analyst", company: "Deloitte India", logo: "https://d8it4huxumps7.cloudfront.net/uploads/new-companies-logo/logos_out/Deloitte India.png" },
      { role: "Data Analyst", company: "EY", logo: "https://d8it4huxumps7.cloudfront.net/uploads/new-companies-logo/logos_out/EY.png" },
    ],
    General: [
      { role: "Graduate Engineer Trainee", company: "Reliance Industries", logo: "https://d8it4huxumps7.cloudfront.net/uploads/new-companies-logo/logos_out/Reliance_Industries.png" },
      { role: "Associate Software Engineer", company: "HCLTech", logo: "https://d8it4huxumps7.cloudfront.net/uploads/new-companies-logo/logos_out/HCLTech.png" },
      { role: "Frontend Developer", company: "Flipkart", logo: "https://d8it4huxumps7.cloudfront.net/uploads/new-companies-logo/logos_out/Flipkart.png" },
    ],
  }

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
  }, [activeTab])

  return (
    <div className="max-w-6xl mx-auto px-6 py-2">

      <div className="flex justify-between items-start mb-7">
        <div className="flex items-start gap-4">
          <div className="w-1.5 h-12 bg-color rounded-sm mt-1"></div>
          <div>
            <h2 className="text-[28px] font-semibold text-[#1c1c1c]">
              Company Mock Interview
            </h2>
            <div className="text-[14px] text-gray-500 mt-1">
              Unravel the art of cracking interviews with AI-powered guided practice.
            </div>
          </div>
        </div>

        <a
          href="/practice/ai-mock-interview"
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

      <div className="flex gap-6 mb-6">
        {["Tech", "Management", "General"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-[14px] font-medium px-3 py-2 border rounded-full transition cursor-pointer  ${
              activeTab === tab
                ? "border-blue-600 text-blue-600"
                : "border-gray-200 text-gray-500 hover:text-blue-600"
            }`}
          >
            {tab}
          </button>
        ))}
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
            transition-all duration-300 cursor-pointer"
          >
            <ChevronLeft size={22} />
          </button>
        )}

        <div
          ref={scrollRef}
          className="flex gap-2 overflow-x-auto scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: "none" }}
        >
          {data[activeTab].map((item, index) => (
            <div
              key={index}
              className="w-[270px] shrink-0 snap-start bg-white border border-gray-200 rounded-xl p-4 shadow-sm text-center  cursor-pointer"
            >
              <img
                src={item.logo}
                alt=""
                className="w-20 h-20 mx-auto object-contain mb-4"
              />

              <div className="font-semibold text-sm  cursor-pointer">{item.role}</div>
              <div className="text-xs text-gray-500 mb-4 ">{item.company}</div>

              <button className="w-full border border-blue-600 color py-2 rounded-full text-sm font-medium cursor-pointer transition">
                Start Interview
              </button>
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
            transition-all duration-300 cursor-pointer"
          >
            <ChevronRight size={22} />
          </button>
        )}
      </div>
    </div>
  )
}