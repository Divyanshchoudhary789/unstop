import { useState } from "react";
import {
  Briefcase,
  Clock,
  MapPin,
  Share2,
  Heart,
  BookmarkX,
} from "lucide-react";

export default function InternshipCard({
  title,
  company,
  experience,
  type,
  location,
  skills = [],
  extraSkills = 0,
  categories = [],
  extraCategories = 0,
  salary,
  postedDate,
  daysLeft,
  logo,
}) {
  const [liked, setLiked] = useState(false);
  const [shared, setShared] = useState(false);

  return (
    <div className="bg-white border border-[#E4E7EC] rounded-[20px] px-7 pt-6 pb-5 w-full max-w-[850px] shadow-sm hover:shadow-xl hover:border-[#C8D0DC] transition-all duration-200 cursor-pointer relative">
      <div className="flex justify-between gap-4">
        <div className="flex-1 min-w-0">
          <h3 className="text-[18px] font-bold text-gray-900 leading-snug tracking-[-0.2px] mb-1">
            {title}
          </h3>

          <p className="text-[15px] font-medium text-gray-700 mb-3">
            {company}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-[13.5px] text-gray-600 mb-3">
            <span className="flex items-center gap-1">
              <Briefcase size={14} />
              {experience}
            </span>

            <span className="text-gray-300 text-lg">|</span>

            <span className="flex items-center gap-1">
              <Clock size={14} />
              {type}
            </span>

            <span className="text-gray-300 text-lg">|</span>

            <span className="flex items-center gap-1">
              <MapPin size={14} />
              {location}
            </span>
          </div>

          <div className="text-[13.5px] text-gray-600 mb-3 flex flex-wrap items-center gap-1">
            {skills.map((skill, i) => (
              <span key={i} className="flex items-center gap-1">
                {i > 0 && <span className="text-gray-400 mx-1">·</span>}
                {skill}
              </span>
            ))}
            {extraSkills > 0 && (
              <>
                <span className="text-gray-400 mx-1">·</span>
                <span className="text-gray-500 font-medium">
                  +{extraSkills}
                </span>
              </>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat, i) => (
              <span
                key={i}
                className="bg-gray-100 text-gray-700 text-[12.5px] font-medium px-3 py-1 rounded-full whitespace-nowrap"
              >
                {cat}
              </span>
            ))}

            {extraCategories > 0 && (
              <span className="bg-gray-100 text-gray-500 text-[12.5px] font-semibold px-3 py-1 rounded-full">
                +{extraCategories}
              </span>
            )}

            {salary && (
              <span className="ml-auto bg-green-50 border border-green-200 text-green-700 text-[13.5px] font-bold px-4 py-1 rounded-full flex items-center gap-2 whitespace-nowrap">
                {salary}
                <span className="w-2 h-2 bg-green-500 rounded-full" />
              </span>
            )}
          </div>
        </div>

        <div className="w-[68px] h-[68px] rounded-[14px] border border-[#E4E7EC] flex items-center justify-center bg-white shrink-0">
          <img src={logo} alt="" />
        </div>
      </div>

      <hr className="border-t border-gray-100 my-4" />

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-5 text-[13px] text-blue-600 font-medium">
          <span className="text-gray-500 font-normal">
            Posted {postedDate}
          </span>

          <span className="flex items-center gap-1 text-blue-600">
            <BookmarkX size={14} />
            {daysLeft} days left
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShared(!shared)}
            className={`p-2 rounded-lg transition ${
              shared
                ? "text-blue-600"
                : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            }`}
          >
            <Share2 size={17} />
          </button>

          <button
            onClick={() => setLiked(!liked)}
            className={`p-2 rounded-lg transition ${
              liked
                ? "text-red-500"
                : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            }`}
          >
            <Heart size={17} fill={liked ? "#EF4444" : "none"} />
          </button>
        </div>
      </div>
    </div>
  );
}