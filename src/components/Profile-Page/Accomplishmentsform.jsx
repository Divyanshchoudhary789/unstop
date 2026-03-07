import { useState } from "react";

const IconBulb = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className="w-5 h-5">
    <path d="M9 21h6M12 3a6 6 0 0 1 6 6c0 2.22-1.21 4.16-3 5.2V17a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1v-2.8C7.21 13.16 6 11.22 6 9a6 6 0 0 1 6-6z" />
  </svg>
);

const CARDS = [
  {
    id: "certificates",
    label: "Add Certificates",
    desc: "Boost your profile with a certificate to impress employers",
    img: "https://d8it4huxumps7.cloudfront.net/uploads/images/65e1cb825e267_vector_2.svg",
    bg: "bg-purple-50",
    border: "border-purple-100",
    hover: "hover:border-purple-300 hover:bg-purple-100",
  },
  {
    id: "projects",
    label: "Add Projects",
    desc: "Boost your profile with a project to impress employers",
    img: "https://d8it4huxumps7.cloudfront.net/uploads/images/65e1cba13fecd_docx_8_1.svg",
    bg: "bg-blue-50",
    border: "border-blue-100",
    hover: "hover:border-blue-300 hover:bg-blue-100",
  },
  {
    id: "achievements",
    label: "Add Achievements",
    desc: "Boost your profile with a achievement to impress employers",
    img: "https://d8it4huxumps7.cloudfront.net/uploads/images/65e1cbc4efcff_trophy_167_1.svg",
    bg: "bg-orange-50",
    border: "border-orange-100",
    hover: "hover:border-orange-300 hover:bg-orange-100",
  },
  {
    id: "responsibility",
    label: "Add Responsibility",
    desc: "Boost your profile with a responsibility to impress employers",
    img: "https://d8it4huxumps7.cloudfront.net/uploads/images/66c80be282795_responsibility.png",
    bg: "bg-green-50",
    border: "border-green-100",
    hover: "hover:border-green-300 hover:bg-green-100",
  },
];

export default function AccomplishmentsForm() {
  const [active, setActive] = useState(null);

  return (
    <div className="min-h-screen bg-white flex justify-center font-sans">
      <div className="w-full max-w-[860px] flex flex-col">

        <div className="sticky top-0 z-10 bg-white flex items-center justify-between px-6 py-[14px] border-b border-gray-100">
          <strong className="text-[15px] font-semibold text-gray-800 tracking-[-0.1px]">
            Accomplishments &amp; Initiatives
          </strong>
          <div className="flex items-center gap-0.5 text-gray-600">
            <button className="w-[30px] h-[30px] flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors cursor-pointer">
              <IconBulb />
            </button>
          </div>
        </div>

        <div className="px-6 pt-6 pb-6 overflow-y-auto">

          <div className="grid grid-cols-2 gap-4">
            {CARDS.map((card) => (
              <button
                key={card.id}
                type="button"
                onClick={() => setActive(active === card.id ? null : card.id)}
                className={[
                  "accomp-btn flex flex-col items-start gap-2 p-5 rounded-xl border-2 text-left transition-all cursor-pointer outline-none",
                  card.bg,
                  card.border,
                  card.hover,
                  active === card.id ? "ring-2 ring-offset-1 ring-[#3b4cca]" : "",
                ].join(" ")}
              >
                <div className="flex items-center justify-between w-full">
                  <div className="logo w-10 h-10 flex items-center justify-center">
                    <img
                      src={card.img}
                      alt={card.label}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                </div>

                <h4 className="text-[14px] font-semibold text-gray-800 leading-tight">
                  {card.label}
                </h4>

                <p className="text-[12.5px] text-gray-500 leading-relaxed">
                  {card.desc}
                </p>
              </button>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}