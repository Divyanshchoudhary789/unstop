import About from "../assets/about.webp"
import Resume from "../assets/resume.webp"
import Skills from "../assets/skills.webp"
import Work from "../assets/work.webp"
import Education from "../assets/education.webp"
export default function ProfileCompletion({ openEditSection }) {
  return (
    <div className="min-h-screen bg-gray-100 p-6 rounded-xl flex justify-center">
      <div className="w-full max-w-5xl bg-white rounded-xl border border-gray-200">

        <Section
          title="About"
          desc="Craft an engaging story in your bio and make meaningful connections with peers and recruiters alike!"
          action="Add About"
          img={About}
          onClick={() => openEditSection("about")}

        />

        <Divider />

        <ResumeSection 
        onClick={() => openEditSection("resume")} />

        <Divider />

        <Section
          title="Skills"
          desc="Spotlight your unique skills and catch the eye of recruiters looking for your exact talents!"
          action="Add Skills"
          img={Skills}
          onClick={() => openEditSection("skills")}

        />

        <Divider />

        <Section
          title="Work Experience"
          desc="Narrate your professional journey and fast-track your way to new career heights!"
          action="Add Work Experience"
          img={Work}
          onClick={() => openEditSection("experience")}

        />

        <Divider />

        <Section
          title="Education"
          desc="Showcase your academic journey and open doors to your dream career opportunities!"
          action="Add Education"
          img={Education}
          onClick={() => openEditSection("education")}

        />

        <Divider />

        <SocialLinks  
        onClick={() => openEditSection("social")}
        />

        <Divider />

        <StreakSection />

      </div>
    </div>
  );
}
const Section = ({ title, desc, action, img, onClick }) => {
  return (
    <div className="flex justify-between items-center px-8 py-6">
      <div className="max-w-xl">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {title}
        </h3>

        <p className="text-gray-600 text-sm mb-3">
          {desc}
        </p>

        <button
          onClick={onClick}
          className="text-blue-600 font-medium text-sm hover:underline cursor-pointer"
        >
          {action}
        </button>
      </div>

      <img src={img} alt={title} className="w-20 opacity-70" />
    </div>
  )
}
const ResumeSection = ({ onClick }) => {
  return (
    <div className="px-8 py-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Resume
      </h3>

      <div className="flex justify-between items-center bg-blue-50 border border-blue-200 rounded-xl p-6">
        <div className="max-w-xl">
          <h4 className="font-semibold text-gray-800 mb-2">
            Add your Resume & get your profile filled in a click!
          </h4>

          <p className="text-gray-600 text-sm mb-4">
            Adding your Resume helps you to tell who you are and what makes you different—to employers and recruiters
          </p>

          <button
            onClick={onClick}
            className="text-blue-600 font-medium text-sm hover:underline cursor-pointer"
          >
            Upload Resume
          </button>
        </div>

        <img
          src={Resume}
          alt="resume"
          className="w-24 opacity-80"
        />
      </div>
    </div>
  )
}
const Divider = () => (
  <div className="border-t border-gray-200" />
);
import { Plus } from "lucide-react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Github,
  X,


} from "lucide-react";

const SocialLinks = ({onClick}) => {
  const icons = [Facebook, Instagram, Linkedin, Github, X];

  return (
    <div className="px-8 py-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-800">
          Social Links
        </h3>
        <Plus size={18} className="cursor-pointer text-gray-600" />
      </div>

      <div className="flex gap-5 flex-wrap">
        {icons.map((Icon, i) => (
          <div
            key={i}
            className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-100 cursor-pointer transition"
            onClick={onClick}
          >
            <Icon size={18} />
          </div>
        ))}
      </div>
    </div>
  );
};
const StreakSection = () => {
  const months = ["Apr, 2025", "May, 2025", "Jun, 2025", "Jul, 2025", "Aug, 2025", "Sep, 2025"];

  return (
    <div className="px-8 py-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-6">
        Streaks
      </h3>

      <div className="grid grid-cols-6 gap-8 mb-6">
        {months.map((month, i) => (
          <div key={i}>
            <p className="text-sm text-gray-600 mb-2">{month}</p>
            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: 28 }).map((_, index) => (
                <div
                  key={index}
                  className="w-3 h-3 bg-gray-200 rounded-sm"
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-6 text-sm text-gray-700">
        <div className="flex items-center gap-2">
          Activity:
          <div className="w-4 h-4 bg-blue-200 rounded-sm" />
          <div className="w-4 h-4 bg-blue-400 rounded-sm" />
          <div className="w-4 h-4 bg-blue-600 rounded-sm" />
          <div className="w-4 h-4 bg-blue-800 rounded-sm" />
        </div>

        <div>
          Current Streak <span className="font-semibold">9 Days</span>
        </div>

        <div>
          Max Streak <span className="font-semibold">9 Days</span>
        </div>
      </div>
    </div>
  );
};