import React from "react"
import { ArrowRight } from "lucide-react"
import image from "../../assets/home-images/coding.avif"
import conquest from "../../assets/home-images/conquest.avif"

export default function CodingSprintSection() {
    return (
        <div className=" mx-auto  px-6 py-3">
            <div className="flex gap-3 ">

                <a
                    href="/practice/100-days-of-code"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border border-gray-200 rounded-xl px-4 bg-[linear-gradient(92.56deg,#deedfc_51.61%,#bfdcf9_89.19%)] flex transition max-h-[300px] "
                >
                    <div className="w-[50%] mt-7">
                        <h2 className="text-[26px] font-extrabold uppercase text-gray-900 leading-tight">
                            <strong className="text-[50px] color font-extrabold">100</strong> Days
                            <br />
                            Coding Sprint
                        </h2>

                        <p className="text-[14px] text-gray-600 mt-4">
                            Level up your skills daily with <br />
                            our 100-Day Coding Sprint
                        </p>

                        <button className="mt-6 flex items-center gap-2 border border-gray-900 px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-900 hover:text-white transition">
                            Start Now
                            <ArrowRight size={18} />
                        </button>
                    </div>

                    <div className="w-[60%]  flex justify-end ">
                        <img
                            src={image}
                            alt=""
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </a>

                <a
                    href="/practice/coding"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border border-gray-200 rounded-xl px-8 py-10 flex items-center justify-between bg-[linear-gradient(90deg,#fff1bf_42.79%,#ffe589_88.61%)] transition max-h-[300px] "
                >
                    <div className="max-w-[60%]">
                        <h2 className="text-[28px] font-bold text-gray-900 leading-snug uppercase ">
                            <strong className="text-[#D4A500] font-extrabold">Code</strong><br />
                            Conquest
                        </h2>

                        <p className="text-[14px] text-gray-600 mt-4 leading-relaxed">
                            Pick your topics, set your difficulty, <br />
                            and master key concepts with ease!
                        </p>

                        <button className="mt-6 flex items-center gap-2 border border-gray-900 px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-900 hover:text-white transition">
                            Start Now
                            <ArrowRight size={18} />
                        </button>
                    </div>

                    <div className="w-[60%] flex justify-end ">
                        <img
                            src={conquest}
                            alt=""
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </a>

            </div>
        </div>
    )
}