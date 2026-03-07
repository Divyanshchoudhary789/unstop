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
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
      <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
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

function FLabel({ children, required }) {
  return (
    <p className="text-[13.5px] text-gray-800 mb-[7px]">
      {children}
      {required && <em className="not-italic text-red-500 ml-0.5 font-normal">*</em>}
    </p>
  );
}

const SKILL_POOL = [
  "JavaScript","TypeScript","React","Angular","Vue.js","Node.js","Python","Java","C++","C#",
  "SQL","MongoDB","AWS","Docker","Kubernetes","Git","Agile","Scrum","Machine Learning",
  "Data Analysis","Figma","Adobe XD","Photoshop","Communication","Leadership","Excel","Power BI",
];

function SkillInput({ skills, setSkills, placeholder = "Add skills" }) {
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
          type="text" autoComplete="off" placeholder={placeholder}
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

export default function EducationForm() {
  const [qualification, setQualification] = useState("");
  const [course, setCourse]               = useState("");
  const [specialization, setSpecialization] = useState("");
  const [college, setCollege]             = useState("");
  const [startYear, setStartYear]         = useState("");
  const [endYear, setEndYear]             = useState("");
  const [courseType, setCourseType]       = useState("");
  const [percentage, setPercentage]       = useState("");
  const [cgpa, setCgpa]                   = useState("");
  const [rollNumber, setRollNumber]       = useState("");
  const [lateralEntry, setLateralEntry]   = useState("");
  const [skills, setSkills]               = useState([]);
  const [description, setDescription]     = useState("");
  const [attachments, setAttachments]     = useState([]);
  const fileRef                           = useRef();

  const isValid = qualification && course && specialization && college && startYear && endYear;

  const handleAttachment = (e) => {
    const f = e.target.files[0];
    if (f) setAttachments((p) => [...p, f]);
  };

  return (
    <div className="min-h-screen bg-white flex justify-center font-sans">
      <div className="w-full max-w-[860px] flex flex-col">

        <div className="sticky top-0 z-10 bg-white flex items-center justify-between px-6 py-[14px] border-b border-gray-100">
          <strong className="text-[15px] font-semibold text-gray-800 tracking-[-0.1px]">
            Education
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
            <span className="text-gray-500 cursor-pointer hover:underline">Education</span>
            <span className="text-gray-400">/</span>
            <span className="text-[#3b4cca] font-medium">New Education</span>
          </div>

          <div>
            <FLabel required>Qualification</FLabel>
            <SelectField
              placeholder="Select Qualification"
              value={qualification}
              onChange={setQualification}
              options={["Class X", "Class XII", "Diploma", "Bachelor's", "Master's", "Ph.D.", "Other"]}
            />
          </div>

          <div>
            <FLabel required>Course</FLabel>
            <SelectField
              placeholder="Select Course"
              value={course}
              onChange={setCourse}
              options={[
                "B.Tech", "B.E.", "B.Sc", "B.Com", "B.A.", "BCA", "BBA",
                "M.Tech", "M.E.", "M.Sc", "M.Com", "M.A.", "MCA", "MBA",
                "LLB", "MBBS", "Ph.D.", "Other",
              ]}
            />
          </div>

          <div>
            <FLabel required>Specialization</FLabel>
            <SelectField
              placeholder="Select Specialization"
              value={specialization}
              onChange={setSpecialization}
              options={[
                "Computer Science", "Information Technology", "Electronics",
                "Mechanical", "Civil", "Electrical", "Data Science",
                "Artificial Intelligence", "Finance", "Marketing",
                "Human Resources", "Operations", "Other",
              ]}
            />
          </div>

          <div>
            <FLabel required>College</FLabel>
            <TInput
              type="text" autoComplete="off" placeholder="College"
              value={college} onChange={(e) => setCollege(e.target.value)}
            />
          </div>

          <div>
            <FLabel required>Duration</FLabel>
            <div className="flex gap-4">
              <TInput
                type="number" placeholder="Start Year" value={startYear}
                onChange={(e) => setStartYear(e.target.value)} min="1970" max="2026"
              />
              <TInput
                type="number" placeholder="End Year" value={endYear}
                onChange={(e) => setEndYear(e.target.value)} min="1970" max="2035"
              />
            </div>
          </div>

          <div>
            <FLabel>Course type</FLabel>
            <SelectField
              placeholder="Select Course Type"
              value={courseType}
              onChange={setCourseType}
              options={["Full Time", "Part Time", "Distance / Correspondence", "Online"]}
            />
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <FLabel>Percentage</FLabel>
              <TInput
                type="number" id="percentage" placeholder="Percentage"
                value={percentage} onChange={(e) => setPercentage(e.target.value)}
                min="0" max="100"
              />
            </div>
            <div className="flex-1">
              <FLabel>CGPA</FLabel>
              <TInput
                type="number" id="cgpa" placeholder="CGPA"
                value={cgpa} onChange={(e) => setCgpa(e.target.value)}
                min="0" max="10" step="0.01"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <FLabel>Roll Number</FLabel>
              <TInput
                type="text" id="roll_number" placeholder="Roll number"
                value={rollNumber} onChange={(e) => setRollNumber(e.target.value)}
              />
            </div>
            <div className="flex-1">
              <FLabel>Are you a Lateral Entry Student?</FLabel>
              <SelectField
                placeholder="Lateral entry"
                value={lateralEntry}
                onChange={setLateralEntry}
                options={["Yes", "No"]}
              />
            </div>
          </div>

          <div>
            <FLabel>Skills</FLabel>
            <div className="border border-gray-200 rounded-lg px-3 py-2 focus-within:border-[#3b4cca] transition-colors bg-white">
              <SkillInput skills={skills} setSkills={setSkills} placeholder="Add skills" />
            </div>
          </div>

          <div>
            <FLabel>Description</FLabel>
            <textarea
              name="description"
              placeholder="Detail your education journey: degrees, accomplishments, skills gained. Share your academic and learning experiences to stand out"
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
                <span key={i}
                  className="flex items-center gap-1.5 px-2.5 py-1 bg-gray-100 text-gray-700 text-xs rounded-full border border-gray-200">
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