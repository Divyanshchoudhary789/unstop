import { GraduationCap } from "lucide-react"
import ProfileCompletion from "./ProfileCompletion"
import { useState, useEffect } from "react"
import EditProfileHeader from "./Profile-Page/ProfileHeader"
import ProfileLeftPanel from "./Profile-Page/ProfileLeftPanel"
import BasicDetailsForm from "./Profile-Page/BasicDetailsForm"
import ResumeForm from "./Profile-Page/ResumeForm"
import SkillsForm from "./Profile-Page/SkillsForm"
import EducationForm from "./Profile-Page/EducationForm"
import WorkExperienceForm from "./Profile-Page/Workexperienceform"
import AccomplishmentsForm from "./Profile-Page/Accomplishmentsform"
import PersonalDetailsForm from "./Profile-Page/Personaldetailsform"
import SocialLinksForm from "./Profile-Page/Sociallinksform"
import AboutForm from "./Profile-Page/AboutForm"
export default function UserProfile() {
  const [activeSection, setActiveSection] = useState("basic")
  const [editOpen, setEditOpen] = useState(false)
  useEffect(() => {
    if (editOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [editOpen])
  const openEditSection = (section) => {
    setActiveSection(section)
    setEditOpen(true)
  }

  <ProfileCompletion openEditSection={openEditSection} />
  const forms = {
    basic: BasicDetailsForm,
    resume: ResumeForm,
    about: AboutForm,
    skills: SkillsForm,
    education: EducationForm,
    experience: WorkExperienceForm,
    accomplishments: AccomplishmentsForm,
    personal: PersonalDetailsForm,
    social: SocialLinksForm
  }

  const ActiveForm = forms[activeSection]
  return (
    <div className="w-full bg-gray-50 min-h-screen">

      <div className="relative">
        <img
          src="https://d8it4huxumps7.cloudfront.net/uploads/images/655b289aa0e26_property_1component_84.png"
          className="w-full h-[220px] object-cover"
          alt="banner"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 -mt-16 relative z-10">
        <div className="bg-white rounded-2xl shadow-md p-6 flex justify-between items-start">

          <div className="flex gap-6 items-center">

            <div className="relative">
              <div className="w-28 h-28 rounded-full bg-orange-200 flex items-center justify-center relative">
                <img
                  src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/user-avatar/png/35.png"
                  className="w-24 h-24 rounded-full"
                  alt="avatar"
                />
              </div>
              <span className="absolute bottom-0 right-0 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                59%
              </span>
            </div>

            <div>
              <h1 className="text-2xl font-semibold capitalize">
                Manish Sharma
              </h1>
              <p className="text-gray-500">@gpdfaqxk67258</p>
              <p className="text-sm mt-1 text-gray-700 flex items-center gap-2">
                <GraduationCap /> ICFAI University, Jaipur
              </p>
            </div>
          </div>

          <button
            onClick={() => setEditOpen(true)}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition cursor-pointer"
          >
            Edit Profile
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-8 grid grid-cols-3 gap-6">

        <div className="col-span-2 space-y-6">

          <ProfileCompletion openEditSection={openEditSection} />
        </div>

        <div className="sticky space-y-6">

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Rankings</h3>
            <div className="flex justify-between mb-3">
              <span>Total Points</span>
              <strong>0</strong>
            </div>
            <div className="flex justify-between">
              <span>Total Badges</span>
              <strong>3</strong>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Streak</h3>
            <div className="grid grid-cols-7 gap-2">
              {Array.from({ length: 28 }).map((_, i) => (
                <div
                  key={i}
                  className="w-4 h-4 bg-gray-200 rounded-sm"
                />
              ))}
            </div>
            <div className="mt-4 text-sm text-gray-600">
              Current Streak: <strong>9 Days</strong>
            </div>
          </div>

        </div>

      </div>
      {editOpen && (
        <div
          className="fixed inset-0 z-[999] bg-black/40 flex justify-end"
          onClick={() => setEditOpen(false)}
        >

          <div
            className="w-full max-w-[1300px] h-screen bg-gray-50 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >

            <EditProfileHeader setEditOpen={setEditOpen} />

            <div className="flex flex-1 min-h-0 gap-6 p-6">

              <div className="w-[30%] overflow-y-auto">
                <ProfileLeftPanel
                  activeSection={activeSection}
                  setActiveSection={setActiveSection}
                />
              </div>

              <div className="w-[70%] flex flex-col min-h-0 bg-white rounded-xl shadow-sm">
                <ActiveForm />
              </div>

            </div>

          </div>

        </div>
      )}
    </div>
  )
}
function ProfileCard({ title, description, action }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-500 text-sm mb-4">{description}</p>
      <button className="text-blue-600 font-medium hover:underline">
        {action}
      </button>
    </div>
  )
}