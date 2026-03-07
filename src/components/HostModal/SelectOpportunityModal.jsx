import {
  ArrowLeft,
  Plus,
  Trophy,
  ClipboardCheck,
  Code,
  Presentation,
  Sparkles,
  GraduationCap
} from "lucide-react";

export default function SelectOpportunityModal({ onBack }) {

  const options = [
    {
      icon: Trophy,
      title: "General & Case Competitions",
      desc: "Identify analytical talent and problem-solvers"
    },
    {
      icon: ClipboardCheck,
      title: "Quizzes",
      desc: "Assess domain knowledge efficiently"
    },
    {
      icon: Code,
      title: "Hackathons & Coding Challenges",
      desc: "Evaluate technical skills and abilities in action"
    },
    {
      icon: Presentation,
      title: "Webinars, Conferences & Workshops",
      desc: "Engage with potential candidates through hosting"
    },
    {
      icon: Sparkles,
      title: "Cultural Events",
      desc: "Invite candidates to your college festivals"
    },
    {
      icon: GraduationCap,
      title: "Scholarships",
      desc: "Support promising talent early in their careers"
    }
  ];

  return (
    <div className="fixed inset-0 z-50">

      <div className="absolute inset-0 bg-black/25 backdrop-blur-[1px]" />

      <div className="absolute right-32 top-40">

        <div className="w-[420px] bg-[#f3f4f6] rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.25)] p-5">

          <div className="flex items-center gap-2 mb-4">

            <button
              onClick={onBack}
              className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-blue-100 transition"
            >
              <ArrowLeft size={20} />
            </button>

            <span className="text-[15px] font-semibold text-gray-900">
              Select Opportunity
            </span>

          </div>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden">

            <div className="max-h-[420px] overflow-y-auto">

              {options.map((item, i) => {

                const Icon = item.icon;

                return (
                  <div
                    key={i}
                    className="
                    flex items-center justify-between
                    px-4 py-3
                    border-b last:border-none
                    hover:bg-gray-50
                    transition
                    group
                    "
                  >

                    <div className="flex items-center gap-3">

                      <div className="
                      w-10 h-10
                      border border-gray-200
                      rounded-lg
                      flex items-center justify-center
                      bg-white
                      ">

                        <Icon size={18} />

                      </div>

                      <div className="flex flex-col">

                        <span className="text-[13.5px] font-semibold text-gray-900">
                          {item.title}
                        </span>

                        <span className="text-[11.5px] text-gray-500">
                          {item.desc}
                        </span>

                      </div>

                    </div>

                    <button
                      className="
                      w-9 h-9
                      flex items-center justify-center
                      rounded-full
                      hover:bg-blue-100
                      transition
                      "
                    >
                      <Plus size={18} className="text-gray-500" />
                    </button>

                  </div>
                );

              })}

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}