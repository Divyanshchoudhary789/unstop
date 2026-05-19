import "keen-slider/keen-slider.min.css"
import "react-phone-number-input/style.css"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Layout from "./components/Sidebar"

import Home from "./pages/Talent-pages/Home"
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

import InternshipDetail from "./components/InternshipDetail"
import ComingSoon from "./components/ComingSoon"
function App() {
  return (
    <Router>
      <Layout>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/internship" element={<InternshipsHero />} />
          {/* <Route path="/jobs" element={<JobsHero />} /> */}
          <Route path="/competition" element={<CompetitionHero />} />
          <Route path="/hackathon" element={<HackathonHero />} />
          <Route path="/quizzes" element={<QuizzesHero />} />
          <Route path="/scholarship" element={<ScholarshipHero />} />
          <Route path="/workshops" element={<WorkshopHero />} />
          <Route path="/conference" element={<ConferenceHero />} />
          <Route path="/events" element={<EventHero />} />
          <Route path="/fest" element={<FestHero />} />
          {/* <Route path="/mentorship" element={<MentorshipHero />} /> */}
          <Route path="/mentorship" element={<ComingSoon />} />
          {/* <Route path="/mocktest" element={<MockTestHero />} /> */}
          <Route path="/mocktest" element={<ComingSoon />} />
          {/* <Route path="/mockinterview" element={<MockInterviewHero />} /> */}
          <Route path="/mockinterview" element={<ComingSoon />} />
          <Route path="/code" element={<ComingSoon />} />
          <Route path="/courses" element={<ComingSoon />} />

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

          <Route path="/internshipdetail" element={<InternshipDetail />} />
          <Route path="/jobs" element={<ComingSoon />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App