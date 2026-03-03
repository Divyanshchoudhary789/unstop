import React from "react";
import { Users, Briefcase, Trophy, BookLock } from "lucide-react"
export default function LeftSide() {
    return (
        <div className="  p-6 text-[#1a1d2e]">
            <div className="flex flex-col gap-5">

                <div className="grid grid-cols-4 gap-4">

                    <StatCard
                        title="Total Candidates"
                        number="0"
                        icon={Users}
                        gradient=" from-[#082a63] via-[#061f47] to-[#041633]"
                    />

                    <StatCard
                        title="Active J&I"
                        number="0"
                        gradient="from-pink-500 to-pink-400"
                        icon={Briefcase}
                        bottomContent={
                            <>
                                <InfoRow label="Total" value="0" />
                                <InfoRow label="Registrations" value="0" />
                            </>
                        }
                    />

                    <StatCard
                        title="Active Opportunities"
                        number="0"
                        gradient="from-amber-500 to-yellow-400"
                        icon={Trophy}
                        bottomContent={
                            <>
                                <InfoRow label="Total" value="1" />
                                <InfoRow label="Registrations" value="0" />
                            </>  
                        }
                    />

                    <StatCard
                        title="Active Assessments"
                        number="0"
                        gradient="from-orange-500 to-orange-400"
                        muted
                        icon={BookLock}
                        bottomContent={
                            <button className="flex items-center gap-2 mt-2 px-3 py-1.5 text-xs font-semibold text-white border border-white/50 bg-white/15 rounded-full hover:bg-white/25 transition">
                                🔒 Upgrade to unlock
                            </button>
                        }
                    />

                </div>

                <div className="bg-white rounded-xl border border-[#e8eaf0] overflow-hidden">

                    <div className="px-5 py-3 text-[15px] font-bold border-b border-[#e8eaf0]">
                        Recent Listing
                    </div>

                    <div className="min-h-[280px] flex items-center justify-center">
                        <div className="flex flex-col items-center gap-4 py-9 px-6 text-center">
                            <img
                                src="https://d8it4huxumps7.cloudfront.net/uploads/images/64dc4c904c175_no_search_result.png"
                                alt="no data"
                                className="w-[270px] h-[240px] opacity-85"
                            />
                            <div className="flex flex-col gap-1">
                                <span className="text-[15px] font-bold">
                                    No data available
                                </span>
                                <span className="text-[13px] text-gray-400">
                                    No Recently listed opportunity found.
                                </span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}


function StatCard({ title, number, gradient, bottomContent, muted, icon: Icon }) {
    return (
        <div
            className={`relative rounded-xl p-4 min-h-[110px] flex flex-col justify-between overflow-hidden cursor-pointer bg-gradient-to-br ${gradient} ${muted ? "opacity-75" : ""
                }`}
        >
            <div className="absolute -top-5 -right-5 w-20 h-20 rounded-full bg-white/10 pointer-events-none" />

            <div className="flex flex-col gap-3 relative z-10">
                <div className="flex items-end justify-between">
                    <div className="text-[28px] font-bold text-white leading-none">
                        {number}
                    </div>
                    {Icon && (
                        <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white/20 text-white">
                            <Icon size={22} />
                        </div>
                    )}
        </div>

                <div className="text-[13px] font-semibold text-white/90">
                    {title}
                </div>
            </div>

            {bottomContent && (
                <div className="mt-3 pt-3 border-t border-white/20 flex flex-col gap-1 relative z-10">
                    {bottomContent}
                </div>
            )}
        </div>
    );
}

function InfoRow({ label, value }) {
    return (
        <div className="flex justify-between text-xs font-medium text-white/85">
            <span>{label}</span>
            <span className="font-bold text-white">{value}</span>
        </div>
    );
}