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
const IconCalendar = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-500">
    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
  </svg>
);
const IconLocation = () => (
  <img src="https://cdn.unstop.com/assets/icons/my_location.svg" alt="location" className="w-[18px] h-[18px]" />
);
const IconX = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
  </svg>
);

function PillRadio({ id, name, label, checked, onChange }) {
  return (
    <label
      htmlFor={id}
      className={[
        "px-4 py-[7px] rounded-full text-[13.5px] cursor-pointer select-none transition-all border",
        checked
          ? "border-2 border-[#3b4cca] text-[#3b4cca] font-semibold bg-white"
          : "border-dashed border-gray-300 text-gray-700 font-normal hover:border-gray-400 bg-white",
      ].join(" ")}
    >
      <input
        type="radio"
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
        className="hidden"
      />
      {label}
    </label>
  );
}

function LocationInput({ placeholder, value, onChange }) {
  return (
    <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden focus-within:border-[#3b4cca] transition-colors bg-white">
      <input
        type="text"
        placeholder={placeholder}
        autoComplete="off"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 px-4 py-[11px] text-sm text-gray-800 outline-none bg-transparent placeholder-gray-400"
      />
      <button type="button" className="px-3 text-gray-500 hover:text-[#3b4cca] transition-colors">
        <IconLocation />
      </button>
    </div>
  );
}

const HOBBIES_POOL = [
  "Reading", "Writing", "Traveling", "Photography", "Painting", "Drawing",
  "Music", "Singing", "Dancing", "Gaming", "Coding", "Cooking", "Baking",
  "Gardening", "Hiking", "Cycling", "Swimming", "Yoga", "Meditation",
  "Blogging", "Vlogging", "Podcasting", "Chess", "Cricket", "Football",
  "Basketball", "Tennis", "Badminton", "Sketching", "Origami", "Knitting",
];

function HobbiesInput({ hobbies, setHobbies }) {
  const [query, setQuery] = useState("");
  const [drop, setDrop]   = useState([]);
  const [show, setShow]   = useState(false);
  const wrapRef           = useRef();

  useEffect(() => {
    if (!query.trim()) { setDrop([]); setShow(false); return; }
    const res = HOBBIES_POOL.filter(
      (h) => h.toLowerCase().includes(query.toLowerCase()) && !hobbies.includes(h)
    ).slice(0, 6);
    setDrop(res); setShow(res.length > 0);
  }, [query, hobbies]);

  useEffect(() => {
    const h = (e) => { if (wrapRef.current && !wrapRef.current.contains(e.target)) setShow(false); };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  const add = (s) => {
    if (!s.trim() || hobbies.includes(s)) return;
    setHobbies((p) => [...p, s]);
    setQuery(""); setShow(false);
  };

  return (
    <div ref={wrapRef} className="flex flex-col gap-2">
      {hobbies.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-1">
          {hobbies.map((h) => (
            <span key={h} className="flex items-center gap-1 px-2.5 py-1 bg-[#e3eafc] text-[#1565c0] text-xs font-medium rounded-full border border-[#1565c0]">
              {h}
              <button type="button" onClick={() => setHobbies((p) => p.filter((x) => x !== h))}
                className="hover:text-red-500 transition-colors"><IconX /></button>
            </span>
          ))}
        </div>
      )}
      <div className="relative">
        <input
          type="text"
          autoComplete="off"
          placeholder="List your hobbies."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); add(query.trim()); } }}
          onFocus={() => query.trim() && setShow(drop.length > 0)}
          className="w-full px-4 py-[11px] text-sm rounded-lg border border-gray-200 bg-white outline-none transition-colors placeholder-gray-400 text-gray-800 focus:border-[#3b4cca]"
        />
        {show && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-20 overflow-hidden">
            {drop.map((h) => (
              <button key={h} type="button"
                onMouseDown={(e) => { e.preventDefault(); add(h); }}
                className="w-full text-left px-4 py-2.5 text-sm text-gray-800 hover:bg-indigo-50 transition-colors">
                {h}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function FLabel({ children, className = "" }) {
  return (
    <p className={`text-[13.5px] text-gray-800 mb-[7px] ${className}`}>{children}</p>
  );
}

export default function PersonalDetailsForm() {
  const [pronoun, setPronoun]           = useState("");
  const [dob, setDob]                   = useState("");
  const [currentAddr, setCurrentAddr]   = useState("");
  const [permanentAddr, setPermanentAddr] = useState("");
  const [copyAddr, setCopyAddr]         = useState(false);
  const [hobbies, setHobbies]           = useState([]);

  const pronounOptions = [
    { id: "He/Him/his",  label: "He/Him/his" },
    { id: "She/Her",     label: "She/Her" },
    { id: "Them/They",   label: "Them/They" },
  ];

  const handleCopyAddr = (checked) => {
    setCopyAddr(checked);
    if (checked) setPermanentAddr(currentAddr);
  };

  return (
    <div className="min-h-screen bg-white flex justify-center font-sans">
      <div className="w-full max-w-[860px] flex flex-col">

        <div className="sticky top-0 z-10 bg-white flex items-center justify-between px-6 py-[14px] border-b border-gray-100">
          <strong className="text-[15px] font-semibold text-gray-800 tracking-[-0.1px]">
            Personal Details
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

          <div className="border border-gray-200 rounded-lg px-4 py-3 flex flex-col gap-3">
            <FLabel className="mb-0">Pronouns</FLabel>
            <div className="flex flex-wrap gap-[10px]">
              {pronounOptions.map((p) => (
                <PillRadio
                  key={p.id}
                  id={p.id}
                  name="pronoun"
                  label={p.label}
                  checked={pronoun === p.id}
                  onChange={() => setPronoun(p.id)}
                />
              ))}
            </div>
          </div>

          <div>
            <FLabel>DOB</FLabel>
            <div className="relative">
              <input
                id="dob"
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                placeholder="DOB"
                max={new Date().toISOString().split("T")[0]}
                className={[
                  "w-full px-4 py-[11px] text-sm rounded-lg border border-gray-200 bg-white outline-none transition-colors focus:border-[#3b4cca] pr-10 cursor-pointer",
                  dob ? "text-gray-800" : "text-gray-400",
                ].join(" ")}
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <IconCalendar />
              </span>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg px-4 py-4 flex flex-col gap-4">

            <div>
              <FLabel>Current Address</FLabel>
              <LocationInput
                placeholder="Select Location"
                value={currentAddr}
                onChange={(v) => {
                  setCurrentAddr(v);
                  if (copyAddr) setPermanentAddr(v);
                }}
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-[7px]">
                <span className="text-[13.5px] text-gray-800">Permanent Address</span>
                <label htmlFor="same-as-permanent" className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    id="same-as-permanent"
                    name="same-as-permanent"
                    checked={copyAddr}
                    onChange={(e) => handleCopyAddr(e.target.checked)}
                    className="w-4 h-4 rounded border-gray-300 accent-[#3b4cca] cursor-pointer"
                  />
                  <span className="text-[13px] text-gray-700 pl-1">Copy Current Address</span>
                </label>
              </div>
              <LocationInput
                placeholder="Select Location"
                value={permanentAddr}
                onChange={setPermanentAddr}
              />
            </div>

          </div>

          <div>
            <FLabel>Hobbies</FLabel>
            <HobbiesInput hobbies={hobbies} setHobbies={setHobbies} />
          </div>

          <div className="h-1" />
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