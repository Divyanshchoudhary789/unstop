import RoleCard from "./RoleCard";
import { ChevronDown, RotateCcw } from "lucide-react";

const mockData = [
    {
        title: "Software Engineer",
        company: "TCS",
        logo: "https://d8it4huxumps7.cloudfront.net/uploads/new-companies-logo/logos_out/TCS.png?d=200x200",
    },
    {
        title: "Embedded Systems Engineer",
        company: "NVIDIA",
        logo: "https://d8it4huxumps7.cloudfront.net/uploads/new-companies-logo/logos_out/NVIDIA.png?d=200x200",
    },
    {
        title: "Software Engineer",
        company: "Accenture",
        logo: "https://d8it4huxumps7.cloudfront.net/uploads/new-companies-logo/logos_out/Accenture.png?d=200x200",
    },
    {
        title: "Software Engineer",
        company: "TCS",
        logo: "https://d8it4huxumps7.cloudfront.net/uploads/new-companies-logo/logos_out/TCS.png?d=200x200",
    },
    {
        title: "Embedded Systems Engineer",
        company: "NVIDIA",
        logo: "https://d8it4huxumps7.cloudfront.net/uploads/new-companies-logo/logos_out/NVIDIA.png?d=200x200",
    },
    {
        title: "Software Engineer",
        company: "Accenture",
        logo: "https://d8it4huxumps7.cloudfront.net/uploads/new-companies-logo/logos_out/Accenture.png?d=200x200",
    },
    {
        title: "Software Engineer",
        company: "TCS",
        logo: "https://d8it4huxumps7.cloudfront.net/uploads/new-companies-logo/logos_out/TCS.png?d=200x200",
    },
    {
        title: "Embedded Systems Engineer",
        company: "NVIDIA",
        logo: "https://d8it4huxumps7.cloudfront.net/uploads/new-companies-logo/logos_out/NVIDIA.png?d=200x200",
    },
    {
        title: "Software Engineer",
        company: "Accenture",
        logo: "https://d8it4huxumps7.cloudfront.net/uploads/new-companies-logo/logos_out/Accenture.png?d=200x200",
    },
];
export default function LeftSection() {
    return (
        <>
            <h2 className="text-2xl font-semibold mb-6">
                Choose From The Top Roles
            </h2>

            <div className="flex items-center gap-4 mb-10">

                {/* Category */}
                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600 font-medium">
                        Category:
                    </span>

                    <button className="flex items-center justify-between h-12 w-56 px-5 rounded-full border border-gray-300 bg-white text-sm">
                        <span>Tech</span>
                        <ChevronDown size={18} className="text-gray-500" />
                    </button>
                </div>

                {/* Company */}
                <button className="flex items-center justify-between h-12 w-56 px-5 rounded-full border border-gray-300 bg-white text-sm">
                    <span className="text-gray-500">Select Company</span>
                    <ChevronDown size={18} className="text-gray-500" />
                </button>

                {/* Role */}
                <button className="flex items-center justify-between h-12 w-56 px-5 rounded-full border border-gray-300 bg-white text-sm">
                    <span className="text-gray-500">Select Role</span>
                    <ChevronDown size={18} className="text-gray-500" />
                </button>

                {/* Clear All */}
                <button className="flex items-center gap-2 h-12 px-6 rounded-full border border-red-600 text-red-600 text-sm font-medium hover:bg-red-50 transition">
                    <RotateCcw size={18} />
                    Clear All
                </button>
            </div>

            <div className="grid grid-cols-3 gap-6">
                {mockData.map((item, i) => (
                    <RoleCard key={i} {...item} />
                ))}
            </div>

            <div className="flex justify-between items-center mt-10 text-sm">
                <div>
                    1 - 24 <strong>/ 194</strong>
                </div>

                <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((n) => (
                        <button
                            key={n}
                            className={`w-9 h-9 rounded ${n === 1
                                ? "bg-black text-white"
                                : "border bg-white"
                                }`}
                        >
                            {n}
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
}