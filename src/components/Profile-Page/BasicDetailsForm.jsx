import { useState } from "react";
import { getCountries, getCountryCallingCode } from "react-phone-number-input"
import en from "react-phone-number-input/locale/en.json"
const AVATAR =
    "https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/user-avatar/png/35.png";

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
const IconEditSmall = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
    </svg>
);
const IconShieldCheck = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-500">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
    </svg>
);
const IconCheck = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
    </svg>
);
const IconChevronDown = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 pointer-events-none text-gray-700">
        <path d="M7 10l5 5 5-5z" />
    </svg>
);
const IconMyLocation = () => (
    <img
        src="https://cdn.unstop.com/assets/icons/my_location.svg"
        alt="location"
        className="w-[18px] h-[18px]"
    />
);

function Pill({ active, onClick, imgSrc, label }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={[
                "inline-flex items-center gap-2 px-4 py-[7px] rounded-full text-[13.5px] transition-all select-none cursor-pointer",
                active
                    ? "border-2 border-[#3b4cca] text-[#3b4cca] font-semibold bg-white"
                    : "border border-dashed border-gray-300 text-gray-700 bg-white font-normal hover:border-gray-400",
            ].join(" ")}
        >
            {imgSrc && <img src={imgSrc} alt={label} className="w-[20px] h-[20px]" />}
            {label}
        </button>
    );
}

function TInput({ disabled, className = "", ...rest }) {
    return (
        <input
            disabled={disabled}
            {...rest}
            className={[
                "w-full px-4 py-[11px] text-sm rounded-lg border outline-none transition-colors placeholder-gray-400",
                disabled
                    ? "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-white border-gray-200 text-gray-800 focus:border-[#3b4cca]",
                className,
            ].join(" ")}
        />
    );
}

function SLabel({ children, required, className = "" }) {
    return (
        <p className={`text-[13.5px] text-gray-800 mb-[7px] ${className}`}>
            {children}
            {required && <sup className="text-red-500 ml-[2px]">*</sup>}
        </p>
    );
}
const countries = getCountries().map((country) => ({
    code: country,
    name: en[country],
    dialCode: "+" + getCountryCallingCode(country)
}))
export default function BasicDetailsForm() {
    const [country, setCountry] = useState("IN")
    const [phone, setPhone] = useState("")
    const [firstName, setFirstName] = useState("manish");
    const [lastName, setLastName] = useState("sharma");
    const [gender, setGender] = useState("male");
    const [userType, setUserType] = useState("college");
    const [domain, setDomain] = useState("");
    const [course, setCourse] = useState("");
    const [startYear, setStartYear] = useState("");
    const [endYear, setEndYear] = useState("");
    const [org, setOrg] = useState("");
    const [purposes, setPurposes] = useState({
        job: true, compete: false, host: false, mentor: false,
    });
    const [role, setRole] = useState("");
    const [prefLoc, setPrefLoc] = useState("");
    const [currLoc, setCurrLoc] = useState("Jaipur, Rajasthan, India");

    const togglePurpose = (k) => setPurposes((p) => ({ ...p, [k]: !p[k] }));

    const genderOpts = [
        { id: "male", label: "Male", img: "https://d8it4huxumps7.cloudfront.net/uploads/images/656426f95e8ac_male_icon.svg" },
        { id: "female", label: "Female", img: "https://d8it4huxumps7.cloudfront.net/uploads/images/6564270f11fda_female_icon.svg" },
        { id: "more", label: "More Options", img: "https://d8it4huxumps7.cloudfront.net/uploads/images/656427c14318b_others_icon.svg" },
    ];
    const userTypeOpts = [
        { id: "college", label: "College Students", img: "https://d8it4huxumps7.cloudfront.net/uploads/images/65642c1bab02b_college_student_icon.svg" },
        { id: "professional", label: "Professional", img: "https://d8it4huxumps7.cloudfront.net/uploads/images/65642c2b5f9a0_school_student_icon.svg" },
        { id: "school", label: "School Student", img: "https://d8it4huxumps7.cloudfront.net/uploads/images/65642c431d80a_fresher_icon.svg" },
        { id: "fresher", label: "Fresher", img: "https://d8it4huxumps7.cloudfront.net/uploads/images/65642c4d9aaf4_recruiter_icon.svg" },
    ];
    const domainOpts = ["Management", "Engineering", "Arts & Science", "Medicine", "Law", "Others"];
    const purposeOpts = [
        { id: "job", label: "To find a Job", img: "https://d8it4huxumps7.cloudfront.net/uploads/images/66e144e1689d7_quick_reference_all.svg" },
        { id: "compete", label: "Compete & Upskill", img: "https://cdn.unstop.com/assets/icons/award_star.svg" },
        { id: "host", label: "To Host an Event", img: "https://cdn.unstop.com/assets/icons/host.svg" },
        { id: "mentor", label: "To be a Mentor", img: "https://cdn.unstop.com/assets/icons/user-person_apron.svg" },
    ];
    const courseOpts = [
        "MCA (2 Year) (Master of Computer Applications (2-Year Program))",
        "B.Tech (Bachelor of Technology)",
        "MBA (Master of Business Administration)",
        "BCA (Bachelor of Computer Applications)",
        "B.Sc (Bachelor of Science)",
        "B.Com (Bachelor of Commerce)",
        "B.A (Bachelor of Arts)",
        "M.Tech (Master of Technology)",
        "LLB (Bachelor of Laws)",
    ];
    const selected = countries.find(c => c.code === country)
    return (
        <div className="min-h-screen bg-white flex justify-center">
            <div className="w-full max-w-[860px] flex flex-col">

                <div className="sticky top-0 z-10 bg-white flex items-center justify-between px-6 py-[13px] border-b border-gray-100">
                    <strong className="flex items-center gap-2.5 text-[15px] font-semibold text-gray-800 tracking-[-0.1px]">
                        <svg className="w-7 h-7" viewBox="0 0 32 32" style={{ transform: "rotate(-90deg)" }}>
                            <circle cx="16" cy="16" r="12" fill="none" stroke="#e5e7eb" strokeWidth="3" />
                            <circle cx="16" cy="16" r="12" fill="none" stroke="#3b4cca" strokeWidth="3"
                                strokeDasharray="15 100" strokeLinecap="round" />
                        </svg>
                        Basic Details
                    </strong>
                    <div className="flex gap-0.5 text-gray-600">
                        <button className="w-[30px] h-[30px] flex items-center justify-center rounded-full hover:bg-gray-100">
                            <IconEye />
                        </button>
                        <button className="w-[30px] h-[30px] flex items-center justify-center rounded-full hover:bg-gray-100">
                            <IconBulb />
                        </button>
                    </div>
                </div>

                <div
                    className="px-6 pt-6 pb-20 flex flex-col gap-[22px] overflow-y-auto"
                    style={{ maxHeight: "calc(100vh - 112px)" }}
                >

                    <div className="flex gap-5 items-start">
                        <div className="relative shrink-0 w-[124px] h-[124px] rounded-full overflow-hidden bg-indigo-700 group cursor-pointer">
                            <img src={AVATAR} alt="avatar" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-full">
                                <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                                </svg>
                            </div>
                        </div>

                        <div className="flex-1 flex flex-col gap-[14px] pt-1">
                            <div className="flex gap-3">
                                <div className="flex-1">
                                    <SLabel required>First Name</SLabel>
                                    <TInput type="text" value={firstName} onChange={e => setFirstName(e.target.value)}
                                        placeholder="First Name" maxLength={180} />
                                </div>
                                <div className="flex-1">
                                    <SLabel>Last Name</SLabel>
                                    <TInput type="text" value={lastName} onChange={e => setLastName(e.target.value)}
                                        placeholder="Last Name" maxLength={180} />
                                </div>
                            </div>
                            <div>
                                <SLabel required>Username</SLabel>
                                <TInput type="text" defaultValue="gpdfaqxk67258" disabled />
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between mb-[7px]">
                            <SLabel required className="mb-0">Email</SLabel>
                            <button type="button"
                                className="flex items-center gap-1 text-[#3b4cca] text-[13px] font-medium hover:underline">
                                <IconEditSmall /> Update Email
                            </button>
                        </div>
                        <div className="relative">
                            <TInput type="email" defaultValue="manishsharma.dev56@gmail.com" disabled className="pr-11" />
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500">
                                <IconShieldCheck />
                            </span>
                        </div>
                    </div>

                    <div>
                        <SLabel required>Mobile</SLabel>

                        <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden bg-white focus-within:border-[#3b4cca] transition-colors">

                            <div className="flex items-center gap-2 px-2 border-r border-gray-200 relative">

                                <img
                                    src={`https://flagcdn.com/w20/${country.toLowerCase()}.png`}
                                    className="w-5 h-4 rounded-sm"
                                />

                                <span className="text-sm font-medium">
                                    {selected?.dialCode}
                                </span>

                                <select
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                    className="absolute inset-0 opacity-0 cursor-pointer"
                                >
                                    {countries.map((c) => (
                                        <option key={c.code} value={c.code}>
                                            {c.name} ({c.dialCode})
                                        </option>
                                    ))}
                                </select>

                                <svg viewBox="0 0 10 6" className="w-2 h-2 text-gray-500 ml-1">
                                    <path d="M0 0l5 6 5-6z" />
                                </svg>

                            </div>

                            <input
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                maxLength={15}
                                className="flex-1 px-4 py-[11px] text-sm text-gray-800 outline-none bg-transparent"
                            />

                            <button
                                type="button"
                                className="mx-2 px-5 py-1.5 bg-[#3b4cca] hover:bg-[#2f3da8] text-white text-[13px] font-semibold rounded-full"
                            >
                                verify
                            </button>

                        </div>
                    </div>
                    <div>
                        <SLabel required>Gender</SLabel>
                        <div className="flex flex-wrap gap-[10px]">
                            {genderOpts.map(g => (
                                <Pill key={g.id} active={gender === g.id}
                                    onClick={() => setGender(g.id)} imgSrc={g.img} label={g.label} />
                            ))}
                        </div>
                    </div>

                    <div>
                        <SLabel required>User Type</SLabel>
                        <div className="flex flex-wrap gap-[10px]">
                            {userTypeOpts.map(u => (
                                <Pill key={u.id} active={userType === u.id}
                                    onClick={() => setUserType(u.id)} imgSrc={u.img} label={u.label} />
                            ))}
                        </div>
                    </div>

                    <div>
                        <SLabel required>Domain</SLabel>
                        <div className="flex flex-wrap gap-[10px]">
                            {domainOpts.map(d => (
                                <Pill key={d} active={domain === d} onClick={() => setDomain(d)} label={d} />
                            ))}
                        </div>
                    </div>

                    <div>
                        <SLabel required>Course</SLabel>
                        <div className="relative">
                            <select
                                value={course}
                                onChange={e => setCourse(e.target.value)}
                                className={[
                                    "w-full px-4 py-[11px] text-sm rounded-lg border bg-white outline-none appearance-none cursor-pointer pr-10 transition-colors",
                                    course ? "text-gray-800" : "text-gray-400",
                                    "border-gray-200 focus:border-[#3b4cca]",
                                ].join(" ")}
                            >
                                <option value="" disabled>Select Course</option>
                                {courseOpts.map(c => <option key={c} value={c}>{c}</option>)}
                            </select>
                            <span className="absolute right-3 top-1/2 -translate-y-1/2">
                                <IconChevronDown />
                            </span>
                        </div>
                        {!course && (
                            <p className="text-xs text-red-500 font-medium mt-1 text-right">
                                Please consider selecting a course!
                            </p>
                        )}
                    </div>

                    <div>
                        <SLabel required>Course Duration</SLabel>
                        <div className="flex gap-4">
                            <TInput type="number" placeholder="Start Year" value={startYear}
                                onChange={e => setStartYear(e.target.value)} min="1970" max="2026" />
                            <TInput type="number" placeholder="End Year" value={endYear}
                                onChange={e => setEndYear(e.target.value)} min="1970" max="2030" />
                        </div>
                    </div>

                    <div>
                        <SLabel required>Organisation/College</SLabel>
                        <TInput type="text" placeholder="Organisation" value={org}
                            onChange={e => setOrg(e.target.value)} autoComplete="off" />
                    </div>

                    <div>
                        <SLabel required>Purpose</SLabel>
                        <div className="flex flex-wrap gap-[10px]">
                            {purposeOpts.map(p => (
                                <Pill key={p.id} active={purposes[p.id]}
                                    onClick={() => togglePurpose(p.id)} imgSrc={p.img} label={p.label} />
                            ))}
                        </div>
                    </div>

                    <div>
                        <SLabel>Career Goal</SLabel>
                        <div className="border border-gray-200 rounded-lg overflow-hidden focus-within:border-[#3b4cca] transition-colors">
                            <input
                                type="text"
                                placeholder="Select Role"
                                value={role}
                                onChange={e => setRole(e.target.value)}
                                autoComplete="off"
                                className="w-full px-4 py-[11px] text-sm text-gray-800 outline-none bg-white placeholder-gray-400 border-b border-gray-200"
                            />
                            <div className="flex items-center px-4 bg-white">
                                <input
                                    type="text"
                                    placeholder="Preferred Work Location"
                                    value={prefLoc}
                                    onChange={e => setPrefLoc(e.target.value)}
                                    autoComplete="off"
                                    className="flex-1 py-[11px] text-sm text-gray-800 outline-none bg-transparent placeholder-gray-400"
                                />
                                <button type="button" className="ml-2 text-gray-500 hover:text-[#3b4cca] transition-colors">
                                    <IconMyLocation />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div>
                        <SLabel required>Current Location</SLabel>
                        <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden bg-white focus-within:border-[#3b4cca] transition-colors">
                            <input
                                type="text"
                                placeholder="Select Location"
                                value={currLoc}
                                onChange={e => setCurrLoc(e.target.value)}
                                autoComplete="off"
                                required
                                className="flex-1 px-4 py-[11px] text-sm text-gray-800 outline-none bg-transparent placeholder-gray-400"
                            />
                            <button type="button" className="px-3 text-gray-500 hover:text-[#3b4cca] transition-colors">
                                <IconMyLocation />
                            </button>
                        </div>
                    </div>

                    <div className="h-1" />
                </div>

                <div className="sticky bottom-0 bg-white border-t border-gray-100 px-6 py-[14px] flex justify-end">
                    <button
                        type="submit"
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