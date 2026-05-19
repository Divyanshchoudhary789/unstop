import { useState } from "react";
import {
  MapPin, Clock, Banknote, Users, Calendar, Bookmark, Share2,
  Building2, CheckCircle2, Award, Zap, ChevronRight, Play,
  Hourglass, Briefcase, ExternalLink, Copy, X
} from "lucide-react";

const internship = {
  title: "Video Editing / Making",
  company: "91 Trucks",
  location: "Gurgaon, Haryana",
  startDate: "Immediately",
  duration: "2 Months",
  stipend: "₹10,000 – ₹15,000/mo",
  openings: 3,
  applyBy: "8 Apr 2026",
  type: "Full-time · In-office",
  postedToday: true,
  about: "Selected intern's day-to-day responsibilities include editing short-form and long-form videos for social media platforms including Instagram, YouTube, and LinkedIn.",
  skills: ["Adobe After Effects", "Canva", "MS-PowerPoint", "Video Editing", "Video Making"],
  certifications: ["Learn Adobe After Effects", "Learn Video Editing"],
  whoCanApply: [
    "Available for full-time (in-office) internship",
    "Can start between 9th Mar'26 and 13th Apr'26",
    "Available for duration of 2 months",
    "Have relevant skills and interests",
  ],
  otherRequirements: ["Basic knowledge of video editing tools (Premiere Pro, Final Cut Pro, CapCut, After Effects, etc.)"],
  perks: ["Certificate", "Letter of recommendation", "5 days a week"],
  aboutCompany: "With a vision to become India's largest commercial vehicles auto-tech company, 91Trucks is set up by a dedicated team of passionate people, on course to change the face of the Indian commercial vehicle industry. The goal is to ease the commercial vehicle buying process covering the entire journey from research to dealer visits, finance, insurance, and transactions.",
  activity: ["Hiring since March 2026", "1 opportunity posted"],
};

const skillColors = [
  "bg-violet-50 text-violet-700 border-violet-200",
  "bg-blue-50 text-blue-700 border-blue-200",
  "bg-indigo-50 text-indigo-700 border-indigo-200",
  "bg-purple-50 text-purple-700 border-purple-200",
  "bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200",
];

const perkColors = [
  "bg-emerald-50 text-emerald-700 border-emerald-200",
  "bg-teal-50 text-teal-700 border-teal-200",
  "bg-cyan-50 text-cyan-700 border-cyan-200",
];

export default function InternshipDetail() {
  const [saved, setSaved] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="min-h-screen"
      style={{
        background: "linear-gradient(135deg, #dce8f8 0%, #eef1fb 60%, #dde8f5 100%)",
        fontFamily: "'DM Sans', system-ui, sans-serif",
      }}
    >
      {/* ── TOP NAV STRIP ── */}
      <div className="bg-white/80 backdrop-blur border-b border-slate-200 px-6 py-3">
        <div className="max-w-6xl mx-auto flex items-center gap-2 text-[12px] text-slate-400 font-medium">
          <a href="#" className="hover:text-indigo-600 transition-colors">Home</a>
          <ChevronRight size={12} />
          <a href="#" className="hover:text-indigo-600 transition-colors">Internships</a>
          <ChevronRight size={12} />
          <span className="text-slate-700 font-semibold">Video Editing / Making</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col gap-5">

        {/* ── HERO HEADER CARD ── */}
        <div className="bg-white rounded-3xl border border-white shadow-sm overflow-hidden">
          {/* Gradient accent */}
          <div className="h-1.5 bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-400" />

          <div className="p-7">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5">

              {/* Left: Logo + Title */}
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-100 to-violet-100 border border-indigo-100 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Building2 size={28} className="text-indigo-500" />
                </div>
                <div>
                  <h1
                    className="text-[24px] font-black text-slate-900 leading-tight"
                    style={{ letterSpacing: "-0.025em" }}
                  >
                    {internship.title}
                  </h1>
                  <div className="flex items-center gap-2 mt-1.5">
                    <a href="#" className="text-[14px] font-bold text-indigo-600 hover:text-indigo-700 transition-colors">
                      {internship.company}
                    </a>
                    <ExternalLink size={12} className="text-indigo-400" />
                    <span className="text-slate-300">·</span>
                    <span className="flex items-center gap-1 text-[13px] text-slate-500 font-medium">
                      <MapPin size={12} className="text-slate-400" />
                      {internship.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right: Badges */}
              <div className="flex flex-wrap items-center gap-2">
                {internship.postedToday && (
                  <span className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Posted today
                  </span>
                )}
                <span className="text-[11px] font-bold text-slate-500 bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-full">
                  {internship.type}
                </span>
              </div>
            </div>

            {/* ── META STRIP ── */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-5 gap-4 pt-5 border-t border-slate-100">
              {[
                { icon: <Play size={13} />, label: "Start Date", value: internship.startDate, color: "text-violet-500" },
                { icon: <Clock size={13} />, label: "Duration", value: internship.duration, color: "text-blue-500" },
                { icon: <Banknote size={13} />, label: "Stipend", value: internship.stipend, color: "text-emerald-500" },
                { icon: <Hourglass size={13} />, label: "Apply By", value: internship.applyBy, color: "text-rose-500" },
                { icon: <Users size={13} />, label: "Openings", value: `${internship.openings} positions`, color: "text-amber-500" },
              ].map((m, i) => (
                <div key={i} className="flex flex-col gap-1.5">
                  <div className={`flex items-center gap-1 ${m.color}`}>
                    {m.icon}
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{m.label}</span>
                  </div>
                  <p className="text-[13px] font-bold text-slate-800">{m.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── MAIN GRID ── */}
        <div className="flex gap-5 items-start">

          {/* ── LEFT: CONTENT ── */}
          <div className="flex-1 min-w-0 flex flex-col gap-4">

            {/* About */}
            <ContentCard title="About the internship" icon={<Briefcase size={15} className="text-indigo-500" />}>
              <p className="text-[14px] text-slate-600 leading-relaxed">{internship.about}</p>
            </ContentCard>

            {/* Skills */}
            <ContentCard title="Skills required" icon={<Award size={15} className="text-violet-500" />}>
              <div className="flex flex-wrap gap-2 mb-4">
                {internship.skills.map((s, i) => (
                  <span key={i} className={`px-3 py-1.5 text-[12px] font-semibold rounded-xl border ${skillColors[i % skillColors.length]}`}>
                    {s}
                  </span>
                ))}
              </div>
              {internship.certifications.length > 0 && (
                <>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Earn certifications</p>
                  <div className="flex flex-wrap gap-2">
                    {internship.certifications.map((c, i) => (
                      <a key={i} href="#" className="flex items-center gap-1.5 text-[12px] font-semibold text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1.5 rounded-xl hover:bg-indigo-100 transition-colors">
                        <Award size={11} /> {c}
                      </a>
                    ))}
                  </div>
                </>
              )}
            </ContentCard>

            {/* Who can apply */}
            <ContentCard title="Who can apply" icon={<CheckCircle2 size={15} className="text-emerald-500" />}>
              <p className="text-[12px] text-slate-400 font-semibold mb-3">Only those candidates can apply who:</p>
              <div className="flex flex-col gap-2.5">
                {internship.whoCanApply.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[10px] font-black text-emerald-600">{i + 1}</span>
                    </div>
                    <p className="text-[13px] text-slate-700 leading-snug font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </ContentCard>

            {/* Other requirements */}
            <ContentCard title="Other requirements" icon={<Zap size={15} className="text-amber-500" />}>
              <div className="flex flex-col gap-2">
                {internship.otherRequirements.map((r, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                    <p className="text-[13px] text-slate-700 leading-relaxed">{r}</p>
                  </div>
                ))}
              </div>
            </ContentCard>

            {/* Perks */}
            <ContentCard title="Perks" icon={<Award size={15} className="text-teal-500" />}>
              <div className="flex flex-wrap gap-2">
                {internship.perks.map((p, i) => (
                  <span key={i} className={`px-3 py-1.5 text-[12px] font-semibold rounded-xl border ${perkColors[i % perkColors.length]}`}>
                    {p}
                  </span>
                ))}
              </div>
            </ContentCard>

            {/* About Company */}
            <ContentCard title={`About ${internship.company}`} icon={<Building2 size={15} className="text-blue-500" />}>
              <p className="text-[13px] text-slate-600 leading-relaxed mb-5">{internship.aboutCompany}</p>
              <div className="pt-4 border-t border-slate-100">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Activity on platform</p>
                <div className="flex flex-col gap-2">
                  {internship.activity.map((a, i) => (
                    <div key={i} className="flex items-center gap-2 text-[13px] text-slate-600 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                      {a}
                    </div>
                  ))}
                </div>
              </div>
            </ContentCard>

            {/* Bottom apply */}
            <div className="bg-white rounded-3xl border border-white shadow-sm p-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-[14px] font-bold text-slate-800">Ready to apply?</p>
                <p className="text-[12px] text-slate-400 mt-0.5">Deadline: {internship.applyBy}</p>
              </div>
              <button className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 active:scale-95 text-white text-[14px] font-bold px-7 py-3 rounded-2xl transition-all shadow-sm shadow-indigo-200">
                Apply now
              </button>
            </div>

          </div>

          {/* ── RIGHT: STICKY SIDEBAR ── */}
          <div className="hidden lg:flex flex-col gap-4 w-[268px] flex-shrink-0 sticky top-6">

            {/* Apply CTA */}
            <div className="bg-white rounded-3xl border border-white shadow-sm overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-indigo-500 to-purple-500" />
              <div className="p-5 flex flex-col gap-3">

                <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 px-3 py-2.5 rounded-2xl">
                  <Zap size={13} className="text-amber-500 flex-shrink-0" />
                  <p className="text-[12px] font-bold text-amber-700">Be an early applicant</p>
                </div>

                <button className="w-full bg-indigo-500 hover:bg-indigo-600 active:scale-95 text-white text-[14px] font-bold py-3 rounded-2xl transition-all shadow-sm shadow-indigo-200">
                  Apply now
                </button>

                <div className="flex gap-2">
                  <button
                    onClick={() => setSaved(s => !s)}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl border text-[12px] font-semibold transition-all ${saved ? "bg-indigo-50 border-indigo-300 text-indigo-600" : "border-slate-200 bg-slate-50 text-slate-500 hover:border-indigo-300 hover:text-indigo-500"}`}
                  >
                    <Bookmark size={13} fill={saved ? "currentColor" : "none"} />
                    {saved ? "Saved" : "Save"}
                  </button>

                  <div className="relative flex-1">
                    <button
                      onClick={() => setShareOpen(s => !s)}
                      className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-500 hover:border-indigo-300 hover:text-indigo-500 text-[12px] font-semibold transition-all"
                    >
                      <Share2 size={13} /> Share
                    </button>

                    {shareOpen && (
                      <div className="absolute right-0 top-12 bg-white border border-slate-200 rounded-2xl shadow-2xl z-30 overflow-hidden w-48">
                        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
                          <span className="text-[12px] font-bold text-slate-700">Share via</span>
                          <button onClick={() => setShareOpen(false)}><X size={13} className="text-slate-400" /></button>
                        </div>
                        {[
                          { label: "WhatsApp", color: "text-green-600" },
                          { label: "LinkedIn", color: "text-blue-700" },
                          { label: "Facebook", color: "text-blue-500" },
                          { label: "Twitter / X", color: "text-sky-500" },
                        ].map((item, i) => (
                          <button key={i} className={`w-full text-left px-4 py-2.5 text-[12px] font-semibold hover:bg-slate-50 transition-colors ${item.color}`}>
                            {item.label}
                          </button>
                        ))}
                        <button onClick={handleCopy} className="w-full flex items-center gap-2 px-4 py-2.5 text-[12px] font-semibold text-slate-600 hover:bg-slate-50 border-t border-slate-100">
                          <Copy size={12} /> {copied ? "Copied!" : "Copy link"}
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 text-center">Apply before <span className="font-bold text-slate-600">{internship.applyBy}</span></p>
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-white rounded-3xl border border-white shadow-sm p-5">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Quick Info</p>
              <div className="flex flex-col gap-3.5">
                {[
                  { icon: <MapPin size={13} />, label: "Location", value: internship.location, color: "text-blue-400" },
                  { icon: <Clock size={13} />, label: "Duration", value: internship.duration, color: "text-violet-400" },
                  { icon: <Banknote size={13} />, label: "Stipend", value: internship.stipend, color: "text-emerald-400" },
                  { icon: <Hourglass size={13} />, label: "Apply by", value: internship.applyBy, color: "text-rose-400" },
                  { icon: <Users size={13} />, label: "Openings", value: `${internship.openings} positions`, color: "text-amber-400" },
                ].map((row, i) => (
                  <div key={i} className="flex items-center justify-between gap-2">
                    <div className={`flex items-center gap-1.5 ${row.color} flex-shrink-0`}>
                      {row.icon}
                      <span className="text-[11px] font-semibold text-slate-400">{row.label}</span>
                    </div>
                    <span className="text-[12px] font-bold text-slate-700 text-right">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="bg-white rounded-3xl border border-white shadow-sm p-5">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Skills</p>
              <div className="flex flex-wrap gap-1.5">
                {internship.skills.map((s, i) => (
                  <span key={i} className={`px-2.5 py-1 text-[11px] font-semibold rounded-lg border ${skillColors[i % skillColors.length]}`}>
                    {s}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

function ContentCard({ title, icon, children }) {
  return (
    <div className="bg-white rounded-3xl border border-white shadow-sm p-6">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-7 h-7 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
          {icon}
        </div>
        <h2 className="text-[15px] font-black text-slate-900" style={{ letterSpacing: "-0.01em" }}>
          {title}
        </h2>
      </div>
      {children}
    </div>
  );
}