import React from "react"
import {
  Briefcase,
  Clock,
  MapPin,
  Share2,
  Heart,
  Users2
} from "lucide-react"

export default function CommanCard({
  title,
  company,
  experience,
  type,
  location,
  skills = [],
  categories = [],
  postedDate,
  daysLeft,
  logo
}) {
  return (
    <a
      href="#"
      target="_blank"
      className="
        block
        bg-white
        border border-[#E6E8EC]
        rounded-2xl
        px-6 py-5
        hover:border-[#D0D5DD]
        transition-all
        duration-200
        
      "
    >
      <div className="flex justify-between gap-8">

        <div className="flex-1">

          <h3 className="text-[20px] font-semibold text-[#1F2937] leading-snug ">
            {title}
          </h3>

          <p className="text-[15px] text-[#323943] mt-1 mb-2">
            {company}
          </p>

          <div className="flex flex-wrap items-center gap-5 text-[14px] text-[#374151] mb-2">

            <div className="flex items-center gap-2">
              <Users2 size={16} />
              {experience}
            </div>

            <div className="flex items-center gap-2">
              <Clock size={16} />
              {type}
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={16} />
              {location}
            </div>
          </div>

          <div className="text-[14px] text-[#374151] mb-2 flex flex-wrap gap-x-3 gap-y-1">
            {skills.map((skill, index) => (
              <span key={index}>
                {skill}
                {index !== skills.length - 1 && <span className="mx-1 text-gray-400">•</span>}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mb-2">
            {categories.map((cat, index) => (
              <span
                key={index}
                className="
                  text-[13px]
                  bg-[#F2F4F7]
                  text-[#344054]
                  px-4 py-1.5
                  rounded-full
                "
              >
                {cat}
              </span>
            ))}
          </div>

        </div>

        <div className="
          w-[72px]
          h-[72px]
          rounded-xl
          border border-[#E6E8EC]
          flex items-center justify-center
          flex-shrink-0
        ">
          <img
            src={logo}
            alt={title}
            className="w-[56px] h-[56px] object-contain"
          />
        </div>
      </div>

      <div className="flex justify-between items-center mt-4 pt-4 border-t border-[#F2F4F7]">

        <div className="flex items-center gap-5 text-[14px] text-[#2563EB]">

          <span>
            Posted {postedDate}
          </span>

          <span className="flex items-center gap-2">
            ⏳ {daysLeft} days left
          </span>

        </div>

        <div className="flex items-center gap-4 text-gray-900">

          <Share2 size={18} className="hover:text-[#2563EB] cursor-pointer" />
          <Heart size={18} className="hover:text-pink-600 cursor-pointer" />

        </div>
      </div>
    </a>
  )
}