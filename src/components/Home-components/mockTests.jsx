import React, { useRef, useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Sparkles, Brain } from "lucide-react"

export default function CompanyMockTestsSection() {

  const scrollRef = useRef(null)
  const cardWidth = 276
  const [activeTab, setActiveTab] = useState("Tech")
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(true)

  const data = {
    Tech: [
      { role: "Software Engineer", company: "TCS", logo: "https://d8it4huxumps7.cloudfront.net/uploads/new-companies-logo/logos_out/TCS.png" },
      { role: "Embedded Systems Engineer", company: "NVIDIA", logo: "https://d8it4huxumps7.cloudfront.net/uploads/new-companies-logo/logos_out/NVIDIA.png" },
      { role: "Software Engineer", company: "Accenture", logo: "https://d8it4huxumps7.cloudfront.net/uploads/new-companies-logo/logos_out/Accenture.png" },
      { role: "Backend Developer", company: "Microsoft", logo: "https://d8it4huxumps7.cloudfront.net/uploads/new-companies-logo/logos_out/Microsoft.png" },
      { role: "Cloud Engineer", company: "IBM", logo: "https://d8it4huxumps7.cloudfront.net/uploads/new-companies-logo/logos_out/IBM.png" },
    ],
    Management: [
      { role: "Data Analyst", company: "Deloitte", logo: "https://d8it4huxumps7.cloudfront.net/uploads/new-companies-logo/logos_out/Deloitte.png" },
      { role: "Data Analyst", company: "EY", logo: "https://d8it4huxumps7.cloudfront.net/uploads/new-companies-logo/logos_out/EY.png" },
    ],
    General: [
      { role: "Graduate Engineer Trainee", company: "Reliance", logo: "https://d8it4huxumps7.cloudfront.net/uploads/new-companies-logo/logos_out/Reliance_Industries.png" },
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
    <section className="max-w-7xl mx-auto px-6 py-5">

      <div className="flex items-center justify-between mb-12">

        <div className="flex items-center gap-3">
          <Sparkles className="text-indigo-500" size={22} />
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Company Mock Tests
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Practice real interview style tests and boost your confidence.
            </p>
          </div>
        </div>

        <a
          href="/practice/ai-powered-role-based-mock-tests"
          className="px-4 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:opacity-90 transition"
        >
          View All
        </a>

      </div>

      <div className="flex gap-3 mb-8">
        {["Tech", "Management", "General"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm rounded-full font-medium transition ${
              activeTab === tab
                ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
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
            className="absolute -left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center rounded-full bg-white shadow-lg border border-gray-200 hover:scale-105 transition"
          >
            <ChevronLeft size={20} />
          </button>
        )}

        <div
          ref={scrollRef}
          className="flex gap-7 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
        >

          {data[activeTab].map((item, index) => (

            <div
              key={index}
              className="w-[260px] shrink-0 snap-start rounded-3xl p-6 bg-gradient-to-br from-white to-gray-50 border border-gray-200 flex flex-col items-center text-center gap-5 group hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >

              <div className="w-16 h-16 rounded-2xl bg-white shadow border border-gray-200 flex items-center justify-center">
                <img
                  src={item.logo}
                  alt=""
                  className="w-10 h-10 object-contain"
                />
              </div>

              <div>
                <div className="text-[14px] font-semibold text-gray-900">
                  {item.role}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {item.company}
                </div>
              </div>

              <div className="flex items-center gap-1 text-xs text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                <Brain size={12} />
                AI Mock Test
              </div>

              <button className="w-full py-2 text-sm font-semibold rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:opacity-90 transition">
                Start Test
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