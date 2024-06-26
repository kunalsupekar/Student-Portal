import React from 'react';
import SidebarTeacher from './DashboardComponents/SidebarTeacher';
import { Route, Routes } from 'react-router-dom';
import AddQuestion from './Question/AddQuestion';
// import StudentDashboardCards from './DashboardComponents/StudentDashboardCards';
import './StudentDashboard.css';
import QuestionList from './Question/AllQuestion';
import CreateQuiz from './Question/CreateQuiz';
import ViewAllStudent from './ViewAllStudent';

function Welcome() {
  return (
    <div className="welcome-text">
      <h1>Welcome to the Teacher Dashboard</h1>
      <p>Your central hub for managing questions, quizzes, and students.</p>
    </div>
  );
}

function TeacherDashboard() {
  return (
    <>
      <div className="student-dashboard">
        {/* <Navbar /> */}

        <main className='sidebar-main'>
          <div className="side-sidebar">
            {/* Link to Student Profile */}
            <SidebarTeacher />
          </div>

          <div className="sidebar-cards">
            <Welcome /> {/* Add the welcome text here */}
            {/* <StudentDashboardCards/> */}
            <Routes>
              <Route path="/AllQuestion" element={<QuestionList />} />
              <Route path="/viewquestions" element={<ViewAllStudent />} />
              <Route path="/addquestion" element={<AddQuestion />} />
              <Route path="/createquiz" element={<CreateQuiz />} />
            </Routes>
          </div>
        </main>
      </div>
    </>
  );
}

export default TeacherDashboard;