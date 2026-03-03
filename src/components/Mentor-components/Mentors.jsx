import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const colorThemes = {
  green: {
    banner: "from-green-100 to-green-300",
    border: "border-green-600",
    btn: "border-green-600 text-green-700 hover:bg-green-50",
  },
  blue: {
    banner: "from-blue-100 to-blue-300",
    border: "border-blue-600",
    btn: "border-blue-600 text-blue-700 hover:bg-blue-50",
  },
  purple: {
    banner: "from-purple-100 to-purple-300",
    border: "border-purple-600",
    btn: "border-purple-600 text-purple-700 hover:bg-purple-50",
  },
  pink: {
    banner: "from-pink-100 to-pink-300",
    border: "border-pink-600",
    btn: "border-pink-600 text-pink-700 hover:bg-pink-50",
  },
};

const mentors = [
  {
    name: "Eden Saha",
    rating: "4.5",
    reviews: "270",
    description:
      "Program Manager at Unstop | IIM A, B, C, L and FSM, Delhi Competition Winner | Former Member, Corporate Relations & Placement Division at FSM, New Delhi | Scholarship Holder at CU, Blr",
    photo: "https://d8it4huxumps7.cloudfront.net/uploads/mentors/profile/694048ee05de6.webp?d=150x150",
    isTop: true,
    color: "green",
  },
  {
    name: "Ankit Aggarwal",
    rating: "4.8",
    reviews: "157",
    description:
      "Founder & CEO, Unstop | Where Employers Attract, Assess and Hire 11 Million GenZs",
    photo: "https://d8it4huxumps7.cloudfront.net/uploads/mentors/profile/66d82578dc9e8.webp?d=150x150",
    isTop: false,
    color: "blue",
  },
  {
    name: "Vedansh Dubey",
    rating: "4.9",
    reviews: "344",
    description:
      "Assistant Manager HR @Wipro | MBA @XIMB, Ex-TCS, Nestlé, HT Media | National Winner Tata Steel-a-thon | 150+ Case Competitions",
    photo: "https://d8it4huxumps7.cloudfront.net/uploads/mentors/profile/66e689b11a7f1.webp?d=150x150",
    isTop: true,
    color: "purple",
  },
  {
    name: "Palak Gupta",
    rating: "4.9",
    reviews: "152",
    description:
      "Consulting Analyst @Accenture | MBA (Gold Medalist) @IIM Indore, Ex-IBM, Michael Page, ABG | Top Icons of India, 1000+ Mentored",
    photo: "https://d8it4huxumps7.cloudfront.net/uploads/mentors/profile/65e2d4ade1037.webp?d=150x150",
    isTop: true,
    color: "pink",
  },
  {
    name: "Dhananjay Sharma",
    rating: "4.9",
    reviews: "150",
    description:
      "Corporate Finance Manager @ Somany Impresa Group | IIM Ranchi MBA'24 (Director's Merit List) | Ex-J.P. Morgan Chase & Co. Intern",
    photo: "https://d8it4huxumps7.cloudfront.net/uploads/mentors/profile/679e3964c1cb8.webp?d=150x150",
    isTop: true,
    color: "blue",
  },
  {
    name: "Shiri Agarwal",
    rating: "4.9",
    reviews: "257",
    description:
      "Product @Telstra | MBA @MDI Gurgaon'24 | Rank 6th Unstoppable Mentor | 34 Case Comps Podiums | 97.11 %ile CAT 2021 | Ex Amazon intern | Traveled 19 Countries",
    photo: "https://d8it4huxumps7.cloudfront.net/uploads/mentors/profile/6608ff032d283.webp?d=150x150",
    isTop: true,
    color: "purple",
  },
  {
    name: "Vaibhav Sharma",
    rating: "4.8",
    reviews: "135",
    description:
      "Strategy @ Meesho | IIM Lucknow | Top 15 Unstoppable Mentor | Winner & Finalist - 23+ Nat'l Case Competition",
    photo: "https://d8it4huxumps7.cloudfront.net/uploads/mentors/profile/6629fb360759b.webp?d=150x150",
    isTop: true,
    color: "pink",
  },
  {
    name: "Rutwik Borkar",
    rating: "4.9",
    reviews: "274",
    description:
      "Flipkart | Bain & Co. | Gold Medalist, IIT Madras | XLRI Jamshedpur-BM'24 | Accenture, Wipro (PPI) | P&G, Nestle, PepsiCo LPs | 10+ Corporate Case Comp | HUL Changemakers'22 | KVPY Scholar",
    photo: "https://d8it4huxumps7.cloudfront.net/uploads/mentors/profile/663c31ccbc761.webp?d=150x150",
    isTop: true,
    color: "purple",
  },
  {
    name: "Riya Shrivastava",
    rating: "4.8",
    reviews: "262",
    description:
      "Strategy - CXO's Office @SBI Life | MBA @BITSOM, Ex-Bosch, HP Tech Ventures, Cervin | Founder - Careerlyweb",
    photo: "https://d8it4huxumps7.cloudfront.net/uploads/mentors/profile/65e85c8962e7b.webp?d=150x150",
    isTop: true,
    color: "blue",
  },
  {
    name: "Yash Patel",
    rating: "4.8",
    reviews: "272",
    description:
      "Strategy Manager @ Parag Milk Foods (MD's Office) | 300k+ Impressions | 32x National Case Comp Podiums | Dual MBA – MDI Gurgaon & ESCP Europe | Ex-eBay, L&T",
    photo: "https://d8it4huxumps7.cloudfront.net/uploads/mentors/profile/660a857811b6d.webp?d=150x150",
    isTop: true,
    color: "purple",
  },
];

const CARD_WIDTH = 305 + 16;

function MentorCard({ mentor }) {
  const theme = colorThemes[mentor.color];
  return (
    <div
      className={`flex-shrink-0 w-[305px] bg-white rounded-2xl border-t-4 ${theme.border} shadow-sm overflow-hidden flex justify-center items-center flex-col `}
      style={{ minHeight: 300 }}
    >
      <div className={`h-14 bg-gradient-to-br ${theme.banner} w-full`} />

      <div className="px-3 pb-4 flex flex-col flex-1 -mt-8">
        <div className="relative w-fit mb-2">
          <img
            src={mentor.photo}
            alt={mentor.name}
            width={80}
            height={80}
            className="w-16 h-16 rounded-full border-2 border-white object-cover shadow"
          />
          {mentor.isTop && (
            <img
              src="https://d8it4huxumps7.cloudfront.net/uploads/images/avif/top_mentor_info_icon.png"
              alt="Top Mentor"
              width={30}
              height={30}
              className="absolute -bottom-1 -right-1 w-7 h-7"
            />
          )}
        </div>

        <div className="font-semibold text-sm text-gray-900 truncate leading-tight mb-1">
          {mentor.name}
        </div>

        <div className="flex items-center gap-1 mb-2">
          <img
            src="https://cdn.unstop.com/assets/icons/star.svg"
            alt="star"
            width={14}
            height={14}
            className="w-3.5 h-3.5"
          />
          <span className="text-xs text-gray-700">
            {mentor.rating}{" "}
            <strong className="font-semibold">({mentor.reviews} Reviews)</strong>
          </span>
        </div>

        <p className="text-xs text-gray-600 leading-snug line-clamp-2 flex-1 mb-3">
          {mentor.description}
        </p>

        <button
          className={`w-full border rounded-full py-1.5 text-xs font-semibold transition-colors duration-150 ${theme.btn}`}
        >
          View Profile
        </button>
      </div>
    </div>
  );
}



export default function TopMentors() {
  const containerRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);

  useEffect(() => {
    const calculateMaxIndex = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const track = container.firstElementChild;

      if (!track) return;

      const maxScrollable =
        track.scrollWidth - container.clientWidth;

      const cardWidth = 305 + 16;

      const newMax = Math.ceil(maxScrollable / cardWidth);
      setMaxIndex(newMax > 0 ? newMax : 0);
    };

    calculateMaxIndex();
    window.addEventListener("resize", calculateMaxIndex);

    return () =>
      window.removeEventListener("resize", calculateMaxIndex);
  }, []);
  useEffect(() => {
    if (index > maxIndex) {
      setIndex(maxIndex);
    }
  }, [maxIndex]);

  const prev = () => {
    setIndex((i) => Math.max(0, i - 1));
  };

  const next = () => {
    setIndex((i) => Math.min(maxIndex, i + 1));
  };

  return (
    <div className="flex items-center justify-center p-8">
      <div className="w-full max-w-7xl ">

        <div className="flex items-start justify-between mb-6">
          <div className="flex items-start gap-3">
            <div className="w-1.5 h-12 bg-indigo-600 rounded-full mt-1"></div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Top Mentors
              </h2>
              <p className="text-sm text-gray-500 mt-1 max-w-md">
                In search of excellence? Explore the highest-rated mentors as
                recognized by the learner community.
              </p>
            </div>
          </div>

          <a
            href="/find-a-mentor?tops=TopMentors"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-4 py-1.5 border border-blue-300 rounded-full text-sm font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 transition whitespace-nowrap"
          >
            View All
            <span className="w-5 h-5 rounded-full bg-blue-700 flex items-center justify-center">
              <ArrowRight size={10} className="text-white" />
            </span>
          </a>
        </div>

        <div className="relative ">

          {index > 0 && (
            <button
              onClick={prev}
              className="absolute -left-10 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-gray-200 shadow flex items-center justify-center hover:bg-indigo-600 hover:border-indigo-600 transition group"
            >
              <ChevronLeft size={16} className="text-gray-600 group-hover:text-white" />
            </button>
          )}

          <div ref={containerRef} className="overflow-hidden">
            <div
              className="flex gap-4 transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${index * CARD_WIDTH}px)`,
              }}
            >
              {mentors.map((mentor) => (
                <MentorCard key={mentor.name} mentor={mentor} />
              ))}
            </div>
          </div>

          {index < maxIndex && (
            <button
              onClick={next}
              className="absolute -right-10 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-gray-200 shadow flex items-center justify-center hover:bg-indigo-600 hover:border-indigo-600 transition group"
            >
              <ChevronRight size={16} className="text-gray-600 group-hover:text-white" />
            </button>
          )}

        </div>
      </div>
    </div>
  );
}