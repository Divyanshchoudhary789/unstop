import { useState, useRef, useEffect } from "react";

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
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
  </svg>
);

const SUGGESTIONS = [
  "Objectivity",
  "Verification and Validation (V&V)",
  "Financial Services Industry Knowledge",
  "Audience Segmentation",
  "Language Learning Tools",
  "Google Search Console",
  "Business Ethics",
  "Self-Discipline",
  "Angular",
  "Adobe InDesign",
];

const ALL_SKILLS = [
  "JavaScript", "TypeScript", "React", "Angular", "Vue.js", "Node.js",
  "Python", "Java", "C++", "C#", "Go", "Rust", "PHP", "Ruby", "Swift",
  "Kotlin", "Flutter", "React Native", "GraphQL", "REST APIs",
  "SQL", "MySQL", "PostgreSQL", "MongoDB", "Redis", "Firebase",
  "AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "CI/CD",
  "Git", "Linux", "Agile", "Scrum", "Jira", "Figma", "Adobe XD",
  "Photoshop", "Illustrator", "Adobe InDesign", "Google Search Console",
  "SEO", "SEM", "Google Analytics", "Content Marketing", "Copywriting",
  "Business Ethics", "Self-Discipline", "Objectivity", "Angular",
  "Verification and Validation (V&V)", "Financial Services Industry Knowledge",
  "Audience Segmentation", "Language Learning Tools",
  "Data Analysis", "Machine Learning", "Deep Learning", "NLP",
  "TensorFlow", "PyTorch", "Tableau", "Power BI", "Excel",
  "Communication", "Leadership", "Team Management", "Problem Solving",
  "Critical Thinking", "Time Management", "Project Management",
];

export default function SkillsForm() {
  const [addedSkills, setAddedSkills]       = useState([]);
  const [suggestions, setSuggestions]       = useState(SUGGESTIONS);
  const [query, setQuery]                   = useState("");
  const [dropdown, setDropdown]             = useState([]);
  const [showDrop, setShowDrop]             = useState(false);
  const inputRef                            = useRef();
  const wrapRef                             = useRef();

  useEffect(() => {
    if (query.trim().length < 1) { setDropdown([]); setShowDrop(false); return; }
    const q = query.toLowerCase();
    const results = ALL_SKILLS.filter(
      (s) => s.toLowerCase().includes(q) && !addedSkills.includes(s)
    ).slice(0, 8);
    setDropdown(results);
    setShowDrop(results.length > 0);
  }, [query, addedSkills]);

  useEffect(() => {
    const handler = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setShowDrop(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const addSkill = (skill) => {
    if (!skill.trim() || addedSkills.includes(skill)) return;
    setAddedSkills((prev) => [...prev, skill]);
    setSuggestions((prev) => prev.filter((s) => s !== skill));
    setQuery("");
    setShowDrop(false);
    inputRef.current?.focus();
  };

  const removeAdded = (skill) => {
    setAddedSkills((prev) => prev.filter((s) => s !== skill));
    if (SUGGESTIONS.includes(skill)) setSuggestions((prev) => [...prev, skill]);
  };

  const addFromSuggestion = (skill) => {
    setAddedSkills((prev) => [...prev, skill]);
    setSuggestions((prev) => prev.filter((s) => s !== skill));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && query.trim()) {
      e.preventDefault();
      addSkill(query.trim());
    }
  };

  return (
    <div className="min bg-white flex justify-center font-sans">
      <div className="w-full max-w-[860px] flex flex-col">

        <div className="sticky top-0 z-10 bg-white flex items-center justify-between px-6 py-[14px] border-b border-gray-100">
          <strong className="text-[15px] font-semibold text-gray-800 tracking-[-0.1px]">
            Skills
          </strong>
          <div className="flex items-center gap-0.5 text-gray-600">
            <button className="w-[30px] h-[30px] flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors cursor-pointer">
              <IconBulb />
            </button>
          </div>
        </div>

        <div
          className="px-6 pt-5 pb-4 flex flex-col gap-5 "
          style={{ maxHeight: "calc(100vh - 116px)" }}
        >

          {addedSkills.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {addedSkills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-1.5 px-3 py-[6px] rounded-full border border-[#1565c0] bg-[#e3eafc] text-[#1565c0] text-[13px] font-medium select-none"
                >
                  <span>{skill}</span>
                  <button
                    type="button"
                    onClick={() => removeAdded(skill)}
                    className="hover:text-red-500 transition-colors"
                  >
                    <IconClose />
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-col gap-2">
            <label className="text-[13.5px] text-gray-800 font-normal">
              Suggestions
            </label>
            <div className="flex flex-wrap gap-2">
              {suggestions.map((skill) => (
                <button
                  key={skill}
                  type="button"
                  onClick={() => addFromSuggestion(skill)}
                  className="chip flex items-center px-3 py-[6px] rounded-full border border-dashed border-gray-500 bg-white text-gray-900 text-[13px] font-normal cursor-pointer hover:bg-indigo-50 hover:border-gray-500 active:bg-blue-100 active:border-[#1565c0] transition-colors select-none"
                >
                  <span>{skill}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2" ref={wrapRef}>
            <label htmlFor="skills-input" className="text-[13.5px] text-gray-800 font-normal">
              Skills
            </label>
            <div className="relative">
              <div className="input_field autocomplete-wrapper relative">
                <input
                  ref={inputRef}
                  id="skills-input"
                  type="text"
                  autoComplete="off"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  onFocus={() => query.trim() && setShowDrop(dropdown.length > 0)}
                  placeholder="List your skills here, showcasing what you excel at."
                  className="w-full px-4 py-[11px] text-sm border border-gray-200 rounded-lg outline-none focus:border-[#3b4cca] transition-colors placeholder-gray-400 bg-white text-gray-800"
                />

                {showDrop && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-20 overflow-hidden">
                    {dropdown.map((skill) => (
                      <button
                        key={skill}
                        type="button"
                        onMouseDown={(e) => { e.preventDefault(); addSkill(skill); }}
                        className="w-full text-left px-4 py-2.5 text-sm text-gray-800 hover:bg-indigo-50 transition-colors"
                      >
                        {skill}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>

        <div className="sticky bottom-0 bg-white border-t border-gray-100 px-6 py-[14px] flex justify-end">
          <button
            type="button"
            className="flex items-center gap-2 px-7 py-[9px] bg-[#3b4cca] hover:bg-[#2f3da8] active:scale-95 text-white text-sm font-semibold rounded-full transition-all shadow-sm"
          >
            <IconCheck />
            Save
          </button>
        </div>

      </div>
    </div>
  );
}