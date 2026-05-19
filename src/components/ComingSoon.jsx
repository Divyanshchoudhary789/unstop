import { useState, useEffect } from "react";
import { Mail, ArrowRight, Twitter, Instagram, Linkedin, Sparkles, Clock } from "lucide-react";

function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(targetDate).getTime() - now;
      if (distance < 0) { clearInterval(interval); return; }
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
}

const FloatingOrb = ({ style, className }) => (
  <div className={`absolute rounded-full blur-3xl animate-pulse pointer-events-none ${className}`} style={style} />
);

const Particle = ({ style }) => (
  <div
    className="absolute w-1 h-1 rounded-full bg-indigo-400 opacity-40 animate-bounce"
    style={style}
  />
);

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(false);
  const timeLeft = useCountdown("2026-06-01T00:00:00");

  const handleSubmit = () => {
    if (!email.includes("@")) return;
    setSubmitted(true);
  };

  const particles = Array.from({ length: 20 }, (_, i) => ({
    top: `${5 + (i * 17) % 90}%`,
    left: `${3 + (i * 23) % 94}%`,
    animationDuration: `${1.5 + (i % 5) * 0.6}s`,
    animationDelay: `${i * 0.2}s`,
    width: `${3 + (i % 3) * 2}px`,
    height: `${3 + (i % 3) * 2}px`,
    opacity: 0.15 + (i % 4) * 0.1,
  }));

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #f0f4ff 0%, #faf5ff 40%, #fdf2f8 70%, #f0f9ff 100%)",
        fontFamily: "'DM Sans', system-ui, sans-serif",
      }}
    >

      {/* ── BACKGROUND ORBS ── */}
      <FloatingOrb className="w-96 h-96 bg-indigo-300 opacity-20" style={{ top: "-80px", left: "-80px", animationDuration: "4s" }} />
      <FloatingOrb className="w-80 h-80 bg-violet-300 opacity-20" style={{ bottom: "-60px", right: "-60px", animationDuration: "5s", animationDelay: "1s" }} />
      <FloatingOrb className="w-64 h-64 bg-pink-300 opacity-15" style={{ top: "30%", right: "10%", animationDuration: "6s", animationDelay: "0.5s" }} />
      <FloatingOrb className="w-56 h-56 bg-sky-300 opacity-15" style={{ bottom: "20%", left: "8%", animationDuration: "4.5s", animationDelay: "1.5s" }} />
      <FloatingOrb className="w-40 h-40 bg-purple-300 opacity-20" style={{ top: "60%", left: "40%", animationDuration: "3.5s", animationDelay: "0.8s" }} />

      {/* Floating particles */}
      {particles.map((p, i) => <Particle key={i} style={p} />)}

      {/* ── CONTENT ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl w-full">

        {/* Badge */}
        <div className="flex items-center gap-2 bg-white/80 backdrop-blur border border-indigo-100 shadow-sm px-4 py-2 rounded-full mb-10">
          <Sparkles size={13} className="text-indigo-500" />
          <span className="text-[12px] font-bold text-indigo-600 uppercase tracking-widest">Something big is coming</span>
        </div>

        {/* Heading */}
        <h1
          className="text-[56px] sm:text-[72px] font-black leading-none text-slate-900 mb-6"
          style={{ letterSpacing: "-0.04em" }}
        >
          We're
          <span className="block bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500 bg-clip-text text-transparent">
            Coming Soon
          </span>
        </h1>

        <p className="text-[16px] text-slate-500 leading-relaxed max-w-md mb-12 font-medium">
          We're crafting something extraordinary. Join our waitlist and be the first to know when we launch.
        </p>

        {/* ── COUNTDOWN ── */}
        <div className="flex items-center gap-3 sm:gap-5 mb-12">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Mins", value: timeLeft.minutes },
            { label: "Secs", value: timeLeft.seconds },
          ].map((unit, i) => (
            <div key={i} className="flex items-center gap-3 sm:gap-5">
              <div className="flex flex-col items-center">
                <div className="bg-white/90 backdrop-blur border border-white shadow-lg rounded-2xl w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                  <span
                    className="text-[28px] sm:text-[36px] font-black text-slate-900 tabular-nums"
                    style={{ letterSpacing: "-0.03em" }}
                  >
                    {String(unit.value).padStart(2, "0")}
                  </span>
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2">{unit.label}</span>
              </div>
              {i < 3 && (
                <span className="text-[24px] font-black text-slate-300 mb-4 select-none">:</span>
              )}
            </div>
          ))}
        </div>

        {/* ── EMAIL FORM ── */}
        {!submitted ? (
          <div className="w-full max-w-md">
            <div
              className={`flex items-center bg-white/90 backdrop-blur rounded-2xl border shadow-md transition-all duration-200 overflow-hidden ${focused ? "border-indigo-400 shadow-indigo-100 shadow-lg" : "border-white"}`}
            >
              <div className="pl-4 text-slate-400 flex-shrink-0">
                <Mail size={16} />
              </div>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                onKeyDown={e => e.key === "Enter" && handleSubmit()}
                placeholder="Enter your email address"
                className="flex-1 px-3 py-4 text-[14px] text-slate-700 font-medium bg-transparent outline-none placeholder-slate-400"
              />
              <button
                onClick={handleSubmit}
                className="m-1.5 flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600 text-white text-[13px] font-bold px-5 py-3 rounded-xl transition-all active:scale-95 shadow-sm flex-shrink-0"
              >
                Notify me
                <ArrowRight size={14} />
              </button>
            </div>
            <p className="text-[11px] text-slate-400 mt-3 font-medium">No spam, ever. Unsubscribe anytime.</p>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2 bg-white/90 backdrop-blur border border-emerald-200 rounded-2xl px-8 py-5 shadow-md w-full max-w-md">
            <div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-1">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <p className="text-[15px] font-black text-slate-800" style={{ letterSpacing: "-0.01em" }}>You're on the list!</p>
            <p className="text-[13px] text-slate-500 font-medium">We'll notify you at <span className="text-slate-700 font-bold">{email}</span></p>
          </div>
        )}

        {/* ── PROGRESS BAR ── */}
        <div className="w-full max-w-md mt-10">
          <div className="flex justify-between text-[11px] font-bold text-slate-400 mb-2">
            <span>Launch progress</span>
            <span className="text-indigo-500">72%</span>
          </div>
          <div className="h-2 bg-white/70 rounded-full overflow-hidden border border-white shadow-inner">
            <div
              className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-400"
              style={{ width: "72%" }}
            />
          </div>
        </div>

        {/* ── SOCIAL LINKS ── */}
        <div className="flex items-center gap-3 mt-10">
          {[
            { icon: <Twitter size={15} />, label: "Twitter" },
            { icon: <Instagram size={15} />, label: "Instagram" },
            { icon: <Linkedin size={15} />, label: "LinkedIn" },
          ].map((s, i) => (
            <button
              key={i}
              className="w-10 h-10 rounded-2xl bg-white/80 backdrop-blur border border-white shadow-sm flex items-center justify-center text-slate-500 hover:text-indigo-600 hover:border-indigo-200 hover:shadow-indigo-100 hover:shadow-md transition-all duration-200"
              title={s.label}
            >
              {s.icon}
            </button>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-[11px] text-slate-400 font-medium mt-8">
          © 2026 · Built with ❤️ · Launching June 2026
        </p>

      </div>
    </div>
  );
}