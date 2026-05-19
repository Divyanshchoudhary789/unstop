import React from "react";

const logos = [
  "https://d8it4huxumps7.cloudfront.net/uploads/images/6928262b69bec_amazon_logo.png?d=180x80",
  "https://d8it4huxumps7.cloudfront.net/uploads/images/69282664232be_coca_cola_logo.png?d=180x80",
  "https://d8it4huxumps7.cloudfront.net/uploads/images/692826d79d4e3_mahindra_logo.png?d=180x80",
  "https://d8it4huxumps7.cloudfront.net/uploads/images/6928274382f7a_samsung_logo.png?d=180x80",
  "https://d8it4huxumps7.cloudfront.net/uploads/images/692827375e3b9_reliance_logo.png?d=180x80",
  "https://d8it4huxumps7.cloudfront.net/uploads/images/69282725c6d83_pepsico_logo.png?d=180x80",
  "https://d8it4huxumps7.cloudfront.net/uploads/images/6928278262d21_tata_logo.png?d=200x200",
];

const TrustedCarousel = () => {
  const data = [...logos, ...logos]; // infinite loop

  return (
    <section className="w-full py-16 bg-gradient-to-b from-white to-blue-50 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">

          <span className="px-4 py-1 rounded-full bg-indigo-100 text-indigo-600 text-xs font-semibold">
            Trusted Companies
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-slate-900">
            Trusted by
            <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent ml-2">
              Industry Leaders
            </span>
          </h2>

          <p className="text-slate-500 text-sm mt-2">
            Thousands of organizations post opportunities on our platform
          </p>

        </div>

        {/* Carousel */}
        <div className="relative">

          {/* Left Gradient Fade */}
          <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-blue-50 to-transparent z-10" />

          {/* Right Gradient Fade */}
          <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-blue-50 to-transparent z-10" />

          <div className="overflow-hidden">

            <div className="flex gap-8 animate-scroll hover:[animation-play-state:paused]">

              {data.map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[160px] h-[70px] rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm hover:shadow-md transition"
                >
                  <img
                    src={logo}
                    alt="company"
                    className="h-8 object-contain opacity-80 hover:opacity-100 transition"
                    draggable="false"
                  />
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

      {/* animation */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-scroll {
            animation: scroll 28s linear infinite;
          }
        `}
      </style>

    </section>
  );
};

export default TrustedCarousel;