import { useState, useRef, useEffect } from "react";

const IconEye = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className="w-5 h-5">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);
const IconBulb = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className="w-5 h-5">
    <path d="M9 21h6M12 3a6 6 0 0 1 6 6c0 2.22-1.21 4.16-3 5.2V17a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1v-2.8C7.21 13.16 6 11.22 6 9a6 6 0 0 1 6-6z" />
  </svg>
);
const IconCheck = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
  </svg>
);
const IconClose = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
  </svg>
);
const IconChevron = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 pointer-events-none text-gray-700">
    <path d="M7 10l5 5 5-5z" />
  </svg>
);
const IconCalendar = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-500">
    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
  </svg>
);
const IconLocation = () => (
  <img src="https://cdn.unstop.com/assets/icons/my_location.svg" alt="location" className="w-[18px] h-[18px]" />
);
const IconAdd = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
  </svg>
);
const IconAI = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className="w-4 h-4 text-violet-500">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);
const IconX = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
  </svg>
);

function SelectField({ placeholder, options, value, onChange }) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={[
          "w-full px-4 py-[11px] text-sm rounded-lg border border-gray-200 bg-white outline-none appearance-none cursor-pointer pr-10 transition-colors focus:border-[#3b4cca]",
          value ? "text-gray-800" : "text-gray-400",
        ].join(" ")}
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
      <span className="absolute right-3 top-1/2 -translate-y-1/2">
        <IconChevron />
      </span>
    </div>
  );
}

function TInput({ className = "", ...rest }) {
  return (
    <input
      {...rest}
      className={[
        "w-full px-4 py-[11px] text-sm rounded-lg border border-gray-200 bg-white outline-none transition-colors placeholder-gray-400 text-gray-800 focus:border-[#3b4cca]",
        className,
      ].join(" ")}
    />
  );
}

function DateInput({ id, placeholder, value, onChange }) {
  return (
    <div className="relative">
      <input
        id={id}
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={[
          "w-full px-4 py-[11px] text-sm rounded-lg border border-gray-200 bg-white outline-none transition-colors focus:border-[#3b4cca] pr-10 cursor-pointer",
          value ? "text-gray-800" : "text-gray-400",
        ].join(" ")}
      />
      <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
        <IconCalendar />
      </span>
    </div>
  );
}

function FLabel({ children, required, className = "" }) {
  return (
    <p className={`text-[13.5px] text-gray-800 mb-[7px] ${className}`}>
      {children}
      {required && <sup className="text-red-500 ml-[2px]">*</sup>}
    </p>
  );
}

function CheckRow({ id, name, label, checked, onChange }) {
  return (
    <label htmlFor={id} className="flex items-center gap-2 cursor-pointer select-none">
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="w-4 h-4 rounded border-gray-300 accent-[#3b4cca] cursor-pointer"
      />
      <span className="text-[13px] text-gray-700 pl-1">{label}</span>
    </label>
  );
}

const SKILL_POOL = [
  "JavaScript","TypeScript","React","Angular","Vue.js","Node.js","Python","Java","C++","C#",
  "SQL","MongoDB","AWS","Docker","Kubernetes","Git","Agile","Scrum","Machine Learning",
  "Data Analysis","Figma","Adobe XD","Photoshop","Communication","Leadership","Excel","Power BI",
  "Project Management","Product Management","Marketing","Sales","SEO","Content Writing",
];

function SkillInput({ skills, setSkills }) {
  const [query, setQuery] = useState("");
  const [drop, setDrop]   = useState([]);
  const [show, setShow]   = useState(false);
  const wrapRef           = useRef();

  useEffect(() => {
    if (!query.trim()) { setDrop([]); setShow(false); return; }
    const res = SKILL_POOL.filter(
      (s) => s.toLowerCase().includes(query.toLowerCase()) && !skills.includes(s)
    ).slice(0, 6);
    setDrop(res); setShow(res.length > 0);
  }, [query, skills]);

  useEffect(() => {
    const h = (e) => { if (wrapRef.current && !wrapRef.current.contains(e.target)) setShow(false); };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  const add = (s) => {
    if (!s.trim() || skills.includes(s)) return;
    setSkills((p) => [...p, s]);
    setQuery(""); setShow(false);
  };

  return (
    <div ref={wrapRef} className="flex flex-col gap-2">
      {skills.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-1">
          {skills.map((s) => (
            <span key={s} className="flex items-center gap-1 px-2.5 py-1 bg-[#e3eafc] text-[#1565c0] text-xs font-medium rounded-full border border-[#1565c0]">
              {s}
              <button type="button" onClick={() => setSkills((p) => p.filter((x) => x !== s))}
                className="hover:text-red-500 transition-colors"><IconX /></button>
            </span>
          ))}
        </div>
      )}
      <div className="relative">
        <TInput
          type="text" autoComplete="off" placeholder="Add skills"
          value={query} onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); add(query.trim()); } }}
          onFocus={() => query.trim() && setShow(drop.length > 0)}
        />
        {show && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-20 overflow-hidden">
            {drop.map((s) => (
              <button key={s} type="button"
                onMouseDown={(e) => { e.preventDefault(); add(s); }}
                className="w-full text-left px-4 py-2.5 text-sm text-gray-800 hover:bg-indigo-50 transition-colors">
                {s}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function WorkExperienceForm() {
  const [fromUnstop, setFromUnstop]     = useState(false);
  const [designation, setDesignation]   = useState("");
  const [organisation, setOrganisation] = useState("");
  const [empType, setEmpType]           = useState("");
  const [startDate, setStartDate]       = useState("");
  const [endDate, setEndDate]           = useState("");
  const [currentRole, setCurrentRole]   = useState(false);
  const [location, setLocation]         = useState("");
  const [remote, setRemote]             = useState(false);
  const [skills, setSkills]             = useState([]);
  const [description, setDescription]   = useState("");
  const [attachments, setAttachments]   = useState([]);
  const fileRef                         = useRef();

  const isValid = designation && organisation && empType && startDate && (endDate || currentRole);

  const handleAttachment = (e) => {
    const f = e.target.files[0];
    if (f) setAttachments((p) => [...p, f]);
    e.target.value = "";
  };

  return (
    <div className="min-h-screen bg-white flex justify-center font-sans">
      <div className="w-full max-w-[860px] flex flex-col">

        <div className="sticky top-0 z-10 bg-white flex items-center justify-between px-6 py-[14px] border-b border-gray-100">
          <strong className="text-[15px] font-semibold text-gray-800 tracking-[-0.1px]">
            Work Experience
          </strong>
          <div className="flex items-center gap-0.5 text-gray-600">
            <button className="w-[30px] h-[30px] flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
              <IconEye />
            </button>
            <button className="w-[30px] h-[30px] flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
              <IconBulb />
            </button>
          </div>
        </div>

        <div
          className="px-6 pt-5 pb-4 flex flex-col gap-[18px] overflow-y-auto"
          style={{ maxHeight: "calc(100vh - 116px)" }}
        >

          <div className="flex items-center gap-2 text-[13px]">
            <span className="text-gray-500 cursor-pointer hover:underline">Work Experience</span>
            <span className="text-gray-400">/</span>
            <span className="text-[#3b4cca] font-medium">New Experience</span>
          </div>

          <div className="border border-gray-200 rounded-lg px-4 py-3">
            <CheckRow
              id="from_unstop"
              name="fromUnstop"
              label="Got this job from Unstop"
              checked={fromUnstop}
              onChange={setFromUnstop}
            />
          </div>

          <div>
            <FLabel required>Designation</FLabel>
            <SelectField
              placeholder="Select Designation"
              value={designation}
              onChange={setDesignation}
              options={[
                "Software Engineer","Senior Software Engineer","Frontend Developer","Backend Developer",
                "Full Stack Developer","Product Manager","Data Scientist","Data Analyst",
                "DevOps Engineer","UI/UX Designer","Business Analyst","Project Manager",
                "Marketing Manager","Sales Executive","HR Manager","Intern","Fresher","Other",
              ]}
            />
          </div>

          <div>
            <FLabel required>Organisation</FLabel>
            <TInput
              type="text"
              autoComplete="off"
              placeholder="Select Organisation"
              value={organisation}
              onChange={(e) => setOrganisation(e.target.value)}
            />
          </div>

          <div>
            <FLabel required>Employment Type</FLabel>
            <SelectField
              placeholder="Select Employment Type"
              value={empType}
              onChange={setEmpType}
              options={["Full-time","Part-time","Internship","Freelance","Contract","Apprenticeship","Trainee"]}
            />
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <FLabel required>Duration</FLabel>
              <DateInput
                id="start_date"
                placeholder="Start date"
                value={startDate}
                onChange={setStartDate}
              />
            </div>

            <div className="flex-1">
              <p className="text-[13.5px] text-gray-800 mb-[7px] invisible">.</p>
              <DateInput
                id="end_date"
                placeholder="End Date"
                value={endDate}
                onChange={setEndDate}
              />
              <div className="mt-2">
                <CheckRow
                  id="is_current_date"
                  name="is_current_date"
                  label="Currently working in this role"
                  checked={currentRole}
                  onChange={(v) => { setCurrentRole(v); if (v) setEndDate(""); }}
                />
              </div>
            </div>
          </div>

          <div>
            <FLabel>Location</FLabel>
            <div className="relative">
              <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden focus-within:border-[#3b4cca] transition-colors bg-white">
                <input
                  type="text"
                  placeholder="Select Location"
                  autoComplete="off"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="flex-1 px-4 py-[11px] text-sm text-gray-800 outline-none bg-transparent placeholder-gray-400"
                />
                <button type="button" className="px-3 text-gray-500 hover:text-[#3b4cca] transition-colors">
                  <IconLocation />
                </button>
              </div>
            </div>
            <div className="mt-2">
              <CheckRow
                id="is_remote"
                name="remote"
                label="Remote"
                checked={remote}
                onChange={setRemote}
              />
            </div>
          </div>

          <div>
            <FLabel>Skills</FLabel>
            <div className="border border-gray-200 rounded-lg px-3 py-2 focus-within:border-[#3b4cca] transition-colors bg-white">
              <SkillInput skills={skills} setSkills={setSkills} />
            </div>
          </div>

          <div>
            <FLabel>Description</FLabel>
            <textarea
              name="description"
              placeholder="Describe your role here, detailing the responsibilities you handled, the skills you applied and developed, and the significant experiences you gained during your tenure."
              maxLength={1000}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="w-full px-4 py-3 text-sm rounded-lg border border-gray-200 bg-white outline-none transition-colors placeholder-gray-400 text-gray-800 focus:border-[#3b4cca] resize-none"
            />
            <p className="text-right text-xs text-gray-400 mt-1">{description.length}/1000</p>
          </div>

          <div>
            <button
              type="button"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-dashed border-violet-400 text-violet-600 text-[13px] font-medium hover:bg-violet-50 transition-colors"
            >
              <IconAI />
              Generate with AI
            </button>
          </div>

          <div>
            <div className="flex items-center gap-3 flex-wrap">
              <button
                type="button"
                onClick={() => fileRef.current.click()}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-gray-200 text-gray-700 text-[13px] font-medium hover:bg-gray-50 transition-colors"
              >
                <IconAdd />
                Attachments
              </button>
              <input ref={fileRef} type="file" className="hidden" onChange={handleAttachment} />
              {attachments.map((f, i) => (
                <span key={i} className="flex items-center gap-1.5 px-2.5 py-1 bg-gray-100 text-gray-700 text-xs rounded-full border border-gray-200">
                  {f.name}
                  <button type="button"
                    onClick={() => setAttachments((p) => p.filter((_, j) => j !== i))}
                    className="hover:text-red-500 transition-colors"><IconX /></button>
                </span>
              ))}
            </div>
          </div>

          <div className="h-1" />
        </div>

        <div className="sticky bottom-0 bg-white border-t border-gray-100 px-6 py-[14px] flex items-center justify-end gap-3">

          <button
            type="button"
            className="flex items-center gap-2 px-6 py-[9px] border border-gray-300 text-gray-700 text-sm font-semibold rounded-full hover:bg-gray-50 transition-all active:scale-95"
          >
            <IconClose />
            Discard
          </button>

          <button
            type="button"
            disabled={!isValid}
            className={[
              "flex items-center gap-2 px-7 py-[9px] text-white text-sm font-semibold rounded-full transition-all active:scale-95",
              isValid
                ? "bg-[#3b4cca] hover:bg-[#2f3da8] shadow-sm"
                : "bg-gray-300 cursor-not-allowed opacity-60",
            ].join(" ")}
          >
            <IconCheck />
            Save
          </button>
        </div>

      </div>
    </div>
  );
}