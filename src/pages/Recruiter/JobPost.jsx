import { useState, useMemo } from "react"
import { Sparkles, CircleHelp } from "lucide-react"
import JobTitles from "../../../public/JobTitles.json"
import { useNavigate } from "react-router-dom"
export default function JobPost() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("")
  const [jobTitle, setJobTitle] = useState("")
  const [company, setCompany] = useState("")
  const [showTooltip, setShowTooltip] = useState(false)
  const [suggestions, setSuggestions] = useState([])

  const categories = useMemo(() =>
    JobTitles.map(item => item.category),
    []
  )

  const titlesByCategory = useMemo(() => {
    if (!category) return []

    const selected = JobTitles.find(c => c.category === category)

    return selected?.keywords.map(words => words.join(" ")) || []
  }, [category])

  const handleJobInput = (value) => {

    setJobTitle(value)

    if (!value) {
      setSuggestions([])
      return
    }

    const filtered = titlesByCategory
      .filter(title =>
        title.toLowerCase().includes(value.toLowerCase())
      )
      .slice(0, 6)

    setSuggestions(filtered)
  }

  const selectSuggestion = (title) => {
    setJobTitle(title)
    setSuggestions([])
  }

  return (
    <div className="min-h-screen flex items-center justify-center ">

      <section className="w-full max-w-[500px] flex flex-col items-center">

        <div className="mb-4 text-[#0A66C2]">
          <Sparkles size={32}/>
        </div>

        <h1 className="text-center mb-2">
          <div className="text-xl font-bold text-gray-900">Hi Manish,</div>
          <div className="text-4xl font-light text-gray-900 tracking-tight">
            Find your next great hire
          </div>
        </h1>

        <p className="text-gray-600 text-center mb-8 max-w-md">
          Hirers using SyncLyft are 24% less likely to reopen a role within 12 months
        </p>

        <div className="w-full bg-white shadow-lg rounded-lg p-6 space-y-5">

          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Category
            </label>

            <select
              value={category}
              onChange={(e)=>{
                setCategory(e.target.value)
                setJobTitle("")
                setSuggestions([])
              }}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:border-[#0A66C2] outline-none"
            >
              <option value="">Select category</option>

              {categories.map((cat,index)=>(
                <option key={index} value={cat}>
                  {cat}
                </option>
              ))}

            </select>
          </div>

          <div>

            <div className="flex items-center gap-1 mb-2">
              <label className="text-sm font-semibold text-gray-900">
                Job title
              </label>

              <div
                className="relative"
                onMouseEnter={()=>setShowTooltip(true)}
                onMouseLeave={()=>setShowTooltip(false)}
              >
                <CircleHelp size={16} className="text-gray-400 cursor-pointer"/>

                {showTooltip && (
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 w-60 bg-black text-white text-xs rounded-md p-3 shadow-lg">
                    Select a category first. Suggestions will appear while typing.
                    <div className="absolute left-[-6px] top-1/2 -translate-y-1/2 border-y-[6px] border-y-transparent border-r-[6px] border-r-black"></div>
                  </div>
                )}
              </div>

            </div>

            <div className="relative">

              <input
                type="text"
                value={jobTitle}
                disabled={!category}
                onChange={(e)=>handleJobInput(e.target.value)}
                placeholder="Add the title you are hiring for"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:border-[#0A66C2] outline-none disabled:bg-gray-100"
              />

              {suggestions.length > 0 && (
                <div className="absolute w-full bg-white border border-gray-200 rounded-md mt-1 shadow-lg z-20">

                  {suggestions.map((title,index)=>(
                    <div
                      key={index}
                      onClick={()=>selectSuggestion(title)}
                      className="px-3 py-2 text-sm cursor-pointer hover:bg-gray-100"
                    >
                      {title}
                    </div>
                  ))}

                </div>
              )}

            </div>

          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Company
            </label>

            <input
              type="text"
              value={company}
              onChange={(e)=>setCompany(e.target.value)}
              placeholder="Search for your company"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:border-[#0A66C2] outline-none"
            />
          </div>

          <button className="w-full flex items-center justify-center gap-2 bg-[#0A66C2] hover:bg-[#004182] text-white font-semibold py-3 rounded-full transition">
            <Sparkles size={18}/>
            Write with AI
          </button>

          <button onClick={() => navigate("/jobdescription")} className="w-full border border-gray-500 text-gray-600 hover:bg-gray-100 hover:text-gray-900 font-semibold py-3 rounded-full transition">
            Write on my own
          </button>

        </div>

        <div className="mt-4 text-xs text-gray-600 text-center max-w-md leading-relaxed">
          <p>If you write with AI, we'll use your job title and company details to suggest a job post.</p>
          <p className="mt-2">Limits may apply to free job posts.</p>
        </div>

      </section>
    </div>
  )
}