import { useState } from "react"
import "keen-slider/keen-slider.min.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Talent from "./components/Talent"
import Recruiter from "./components/Recruiter"
import InternshipsHero from "./pages/Internship"
import JobsHero from "./pages/Jobs"
import CompetitionHero from "./pages/Competition"
import HackathonHero from "./pages/Hackathon"
import QuizzesHero from "./pages/Quizzes"
import ScholarshipHero from "./pages/Scholarship"
import WorkshopHero from "./pages/Workshops"
import ConferenceHero from "./pages/Conference"
import EventHero from "./pages/Events"
import FestHero from "./pages/Fest"
import MentorshipHero from "./pages/Mentorship"
import MockTestHero from "./pages/MockTest"
function App() {
  const [activePanel, setActivePanel] = useState(null)

  const isTalentOpen = activePanel === "talent"

  return (
    <Router>
      <Sidebar
        activePanel={activePanel}
        setActivePanel={setActivePanel}
      />

      {activePanel === "talent" && <Talent />}
      <Navbar isTalentOpen={isTalentOpen} />

      <div
        className={`pt-20 transition-all duration-300  ${
          isTalentOpen ? "ml-32" : "ml-52"
        }`}
      >
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/recruiter" element={<Recruiter />} />
          <Route path="/internship" element={<InternshipsHero />} />
          <Route path="/jobs" element={<JobsHero />} />
          <Route path="/competition" element={<CompetitionHero />} />
          <Route path="/hackathon" element={<HackathonHero />} />
          <Route path="/quizzes" element={<QuizzesHero />} />
          <Route path="/scholarship" element={<ScholarshipHero />} />
          <Route path="/workshops" element={<WorkshopHero />} />
          <Route path="/conference" element={<ConferenceHero />} />
          <Route path="/events" element={<EventHero />} />
          <Route path="/fest" element={<FestHero />} />
          <Route path= "/mentorship" element={<MentorshipHero />} />
          <Route path= "/mocktest" element={<MockTestHero />} />


        </Routes>
      </div>
    </Router>
  )
}

export default App