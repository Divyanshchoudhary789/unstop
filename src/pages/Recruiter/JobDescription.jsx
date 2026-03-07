import { useState, useRef } from "react"
import {
    Bold,
    Italic,
    List,
    ListOrdered,
    ChevronDown,
    Sparkles,
    HelpCircle
} from "lucide-react"
import { useNavigate } from "react-router-dom"
const defaultDesc = `The ideal candidate is a creative problem solver who will work in coordination with cross-functional teams to design, develop, and maintain our next generation websites and web tools.

Responsibilities
• Revise, edit, proofread & optimize web content
• Work with cross-functionally to enhance overall user experience
• Own various design tasks involved in the web development life cycle

Qualifications
• Bachelor's degree in Computer Science
• 1-2 years experience with HTML, CSS, JavaScript
• Familiarity with backend technologies
• Ability to multitask and prioritize work`

export default function JobDescription() {
    const navigate = useNavigate();
    const [jobTitle, setJobTitle] = useState("Web Developer")
    const [workplaceType, setWorkplaceType] = useState("On-site")
    const [jobType, setJobType] = useState("Full-time")
    const [description, setDescription] = useState(defaultDesc)

    const [showWT, setShowWT] = useState(false)
    const [showJT, setShowJT] = useState(false)

    const editorRef = useRef(null)

    const formatText = (cmd) => {
        document.execCommand(cmd, false, null)
        editorRef.current.focus()
    }

    const handleInput = () => {
        setDescription(editorRef.current.innerText)
    }

    const charCount = description.length

    return (
        <div className=" min-h-screen ">
            <div className="max-w-6xl mx-auto flex gap-6 px-4">

                <div className="flex-1 bg-white rounded-lg shadow border border-gray-50">

                    <div className="border-b px-6 py-4 font-semibold">
                        1 of 2: Review Internship description
                    </div>

                    <div className="p-6">

                        <h2 className="text-xl font-bold mb-6">InternShip details</h2>

                        <div className="grid grid-cols-2 gap-4 mb-6">

                            <div>
                                <label className="flex items-center gap-1 text-sm text-gray-600 mb-1">
                                    Internship title <HelpCircle size={14} />
                                </label>

                                <input
                                    value={jobTitle}
                                    onChange={(e) => setJobTitle(e.target.value)}
                                    className="w-full border border-gray-200 rounded px-3 py-2 focus:outline-none focus:border-blue-600"
                                />
                            </div>

                            <div>
                                <label className="text-sm text-gray-600 mb-1 block">
                                    Company
                                </label>

                                <input
                                    value="Synclyft"
                                    readOnly
                                    className="w-full border border-gray-200 rounded px-3 py-2 bg-gray-50"
                                />
                            </div>

                            <div className="relative">
                                <label className="text-sm text-gray-600 mb-1 block">
                                    Workplace type
                                </label>

                                <button
                                    onClick={() => setShowWT(!showWT)}
                                    className="flex justify-between items-center w-full border border-gray-200 px-3 py-2 rounded"
                                >
                                    {workplaceType}
                                    <ChevronDown size={16} />
                                </button>

                                {showWT && (
                                    <div className="absolute bg-white border w-full rounded shadow mt-1 z-10">
                                        {["On-site", "Hybrid", "Remote"].map(opt => (
                                            <div
                                                key={opt}
                                                onClick={() => {
                                                    setWorkplaceType(opt)
                                                    setShowWT(false)
                                                }}
                                                className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                                            >
                                                {opt}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="relative">
                                <label className="text-sm text-gray-600 mb-1 block">
                                    Internship type
                                </label>

                                <button
                                    onClick={() => setShowJT(!showJT)}
                                    className="flex justify-between items-center w-full border px-3 py-2 rounded"
                                >
                                    {jobType}
                                    <ChevronDown size={16} />
                                </button>

                                {showJT && (
                                    <div className="absolute bg-white border w-full rounded shadow mt-1 z-10">
                                        {[

                                            "Internship"
                                        ].map(opt => (
                                            <div
                                                key={opt}
                                                onClick={() => {
                                                    setJobType(opt)
                                                    setShowJT(false)
                                                }}
                                                className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                                            >
                                                {opt}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                        </div>

                        <button className="flex items-center gap-2 border  px-4 py-1 rounded-full text-sm hover:bg-gray-100 mb-6">
                            <Sparkles size={16} />
                            Write new with AI
                        </button>

                        <h2 className="text-xl font-bold mb-2">
                            Description <span className="text-red-500">*</span>
                        </h2>

                        <div className="border border-gray-300 rounded">

                            <div className="flex border-b bg-gray-50">

                                <button
                                    onClick={() => formatText("bold")}
                                    className="p-2 hover:bg-gray-200"
                                >
                                    <Bold size={16} />
                                </button>

                                <button
                                    onClick={() => formatText("italic")}
                                    className="p-2 hover:bg-gray-200"
                                >
                                    <Italic size={16} />
                                </button>

                                <button
                                    onClick={() => formatText("insertUnorderedList")}
                                    className="p-2 hover:bg-gray-200"
                                >
                                    <List size={16} />
                                </button>

                                <button
                                    onClick={() => formatText("insertOrderedList")}
                                    className="p-2 hover:bg-gray-200"
                                >
                                    <ListOrdered size={16} />
                                </button>

                            </div>

                            <div
                                ref={editorRef}
                                contentEditable
                                suppressContentEditableWarning
                                onInput={handleInput}
                                dangerouslySetInnerHTML={{
                                    __html: defaultDesc.replace(/\n/g, "<br>")
                                }}
                                className="min-h-[320px] p-4 outline-none text-sm leading-6"
                            />

                        </div>

                        <div className="text-right text-xs text-gray-500 mt-1">
                            {charCount.toLocaleString()}/10,000
                        </div>

                    </div>

                    <div className=" px-6 py-4 flex justify-between">

                        <button className="text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-full cursor-pointer">
                            Preview
                        </button>

                        <div className="flex gap-2">

                            <button onClick={() => navigate("/jobpost")} className="border px-4 py-2 rounded-full hover:bg-gray-100 cursor-pointer">
                                Back
                            </button>

                            <button onClick={() => navigate("/experience")} className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 cursor-pointer">
                                Next
                            </button>

                        </div>

                    </div>

                </div>

                <div className="w-[280px] space-y-3">

                    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                        <div className="flex gap-3">

                            <div className="w-14 h-14 bg-black text-white flex items-center justify-center font-bold rounded">
                                S
                            </div>

                            <div>
                                <div className="font-semibold">
                                    {jobTitle}
                                </div>

                                <div className="text-sm text-gray-500">
                                    Synclyft
                                </div>

                                <div className="text-xs text-gray-500">
                                    Jaipur, Rajasthan
                                </div>

                                <div className="text-xs text-gray-500">
                                    {workplaceType}
                                </div>

                            </div>

                        </div>

                        <div className="mt-2 text-sm text-gray-500">
                            Saved as <b>Draft</b>
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                        <div className="font-semibold mb-1">
                            Target your internsip to the right people
                        </div>

                        <p className="text-sm text-gray-600">
                            Include a job description and required skills to attract the right candidates.
                        </p>
                    </div>

                </div>

            </div>
        </div>
    )
}