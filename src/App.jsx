import { useState } from "react"
import "keen-slider/keen-slider.min.css"
import 'react-phone-number-input/style.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Talent-pages/Home"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Talent from "./components/Talent"
import Recruiter from "./components/Recruiter"
import InternshipsHero from "./pages/Talent-pages/Internship"
import JobsHero from "./pages/Talent-pages/Jobs"
import CompetitionHero from "./pages/Talent-pages/Competition"
import HackathonHero from "./pages/Talent-pages/Hackathon"
import QuizzesHero from "./pages/Talent-pages/Quizzes"
import ScholarshipHero from "./pages/Talent-pages/Scholarship"
import WorkshopHero from "./pages/Talent-pages/Workshops"
import ConferenceHero from "./pages/Talent-pages/Conference"
import EventHero from "./pages/Talent-pages/Events"
import FestHero from "./pages/Talent-pages/Fest"
import MentorshipHero from "./pages/Talent-pages/Mentorship"
import MockTestHero from "./pages/Talent-pages/MockTest"
import MockInterviewHero from "./pages/Talent-pages/MockInterview"
import DashboardHeader from "./components/Recuiter-component/Dashboard"
import MyJobsInternships from "./components/Recuiter-component/MyInternship"
import Opportunities from "./components/Recuiter-component/MyOpportunities"
import Festivals from "./components/Recuiter-component/Festivals"
import AssessmentsPanel from "./components/Recuiter-component/Assesments"
import ProfileDropdown from "./components/ProfileDropdown"
import UserProfile from "./components/User"
import JobPost from "./pages/Recruiter/JobPost"
import JobDescription from "./pages/Recruiter/JobDescription"
import Experience from "./pages/Recruiter/Experience"
function App() {
  const [activePanel, setActivePanel] = useState("talent")

  // const isTalentOpen = activePanel === "talent"

  return (
    <Router>
      <Sidebar
        activePanel={activePanel}
        setActivePanel={setActivePanel}
      />

      {/* {activePanel === "talent" && <Talent />}
      {activePanel === "recruiter" && <Recruiter />} */}

      <Navbar isTalentOpen={activePanel === "talent"} />

      <div
        className={`pt-20 transition-all duration-300 ${activePanel === "talent" ? "ml-32" : "ml-52"
          }`}
      >
        <Routes>
          <Route path="/" element={<Home />} />
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
          <Route path="/mentorship" element={<MentorshipHero />} />
          <Route path="/mocktest" element={<MockTestHero />} />
          <Route path="/mockinterview" element={<MockInterviewHero />} />
          <Route path="/dashboard" element={<DashboardHeader />} />
          <Route path="/myjobinternships" element={<MyJobsInternships />} />
          <Route path="/myopportunities" element={<Opportunities />} />
          <Route path="/festivals" element={<Festivals />} />
          <Route path="/assessments" element={<AssessmentsPanel />} />
          <Route path="/profile" element={<ProfileDropdown />} />
          <Route path="/user" element={<UserProfile />} />
          <Route path="/jobpost" element={<JobPost />} />
          <Route path="/jobdescription" element={<JobDescription />} />
          <Route path="/experience" element={<Experience />} />

        </Routes>
      </div>
    </Router>
  )
}

export default App