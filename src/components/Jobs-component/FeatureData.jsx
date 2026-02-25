import React from "react"

const featuredData = [
  {
    title: "One-Day Internship with Shark-Tank Featured Founders",
    tag: "College Fest",
    logo: "https://d8it4huxumps7.cloudfront.net/images/partners/partners75/698e2ae4cd044_Unstop-Logo-Blue-Large.png?d=68x68",
  },
  {
    title: "Register Now! India Innovates 2026",
    tag: "Hackathons",
    logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-696ccc3c7d843_whatsapp_image_2026-01-18_at_5.33.36_pm.jpeg?d=68x68",
  },
  {
    title: "H&S Brand Champion Challenge",
    tag: "Competition",
    logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-6992daf745a99_opposite_logo.jpg?d=68x68",
  },
  {
    title: "Unstop Weekend Internship",
    tag: "Job",
    logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-69871a5e30892_launch_kit_logo_copy__1_.jpg?d=68x68",
  },
  {
    title: "Virtual Webinar on April 10",
    tag: "Workshops",
    logo: "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/699c1e5eb2cb6_accenture.png?d=68x68",
  }
]

export default function FeaturedSection() {
  return (
    <div className="bg-[#EDEDED] p-4 rounded-3xl max-w-md mx-auto">

      {/* Title */}
      <h2 className="text-[18px] font-semibold text-[#2E2E2E] mb-4">
        Featured
      </h2>

      {/* Card List */}
      <div className="flex flex-col gap-4 bg-white rounded-2xl p-4">

        {featuredData.map((item, index) => (
          <div key={index} className="flex items-center gap-4">

            {/* Logo */}
            <div className="w-12 h-12 rounded-xl border border-gray-200 flex items-center justify-center bg-white">
              <img
                src={item.logo}
                alt={item.title}
                className="w-10 h-10 object-contain"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col">
              <div className="text-[14px] font-semibold text-[#2E2E2E] leading-snug">
                {item.title}
              </div>
              <div className="text-[13px] text-[#7A7A7A] mt-1">
                {item.tag}
              </div>
            </div>

          </div>
        ))}

      </div>
    </div>
  )
}