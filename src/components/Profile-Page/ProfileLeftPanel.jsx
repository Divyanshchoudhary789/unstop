import { FilePlus } from "lucide-react"

const ProfileLeftPanel = () => {
  const sections = [
    { name: "Basic Details", required: true, active: true },
    { name: "Resume", required: false },
    { name: "About", required: true },
    { name: "Skills", required: true },
    { name: "Education", required: true },
    { name: "Work Experience" },
    { name: "Accomplishments & Initiatives" },
    { name: "Personal Details" },
    { name: "Social Links" },
  ]

  const progress = 59

  return (
    <div className="w-72 space-y-6">

      <div className="relative bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-4 text-white cursor-pointer hover:shadow-xl transition">

        <div className="absolute right-3 top-3 w-16 opacity-80">
          <img
            src="https://d8it4huxumps7.cloudfront.net/uploads/images/6759602d8aecd_resume_image.png"
            alt="Resume"
            className="w-full object-contain"
          />
        </div>

        <div className="flex items-center gap-3 relative z-10">
          <FilePlus size={20} />
          <span className="font-semibold text-sm">
            Create your Resume
          </span>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm">

        <div className="mb-4">
          <strong className="text-sm text-gray-900">
            Complete your Profile
          </strong>
          <p className="text-xs text-gray-500 mt-1">
            Stay ahead of the competition by regularly updating your profile.
          </p>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-600 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-xs font-semibold text-gray-700">
            {progress}%
          </span>
        </div>

        <nav className="space-y-2 max-h-72 overflow-y-auto pr-1">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`
                flex items-center justify-between
                text-sm cursor-pointer
                px-2 py-1.5 rounded-lg
                transition
                ${section.active
                  ? "bg-blue-50 text-blue-700 font-medium"
                  : "hover:bg-gray-100 text-gray-700"}
              `}
            >
              <span>{section.name}</span>

              {section.required && (
                <span className="text-[10px] px-2 py-0.5 rounded-md bg-red-100 text-red-700 border border-red-300">
                  Required
                </span>
              )}
            </div>
          ))}
        </nav>

      </div>
    </div>
  )
}

export default ProfileLeftPanel