import React from 'react';
import SidebarTeacher from './DashboardComponents/SidebarTeacher';
import { Route, Routes } from 'react-router-dom';
import AddQuestion from './Question/AddQuestion';
import StudentDashboardCards from './DashboardComponents/StudentDashboardCards';
import './StudentDashboard.css';
import QuestionList from './Question/AllQuestion';
function TeacherDashboard() {
  return (
  
      <>
      <div className="student-dashboard">
        {/* <Navbar /> */}

        <main className='sidebar-main'>
          <div className="side-sidebar">
            {/* Link to Student Profile */}
            <SidebarTeacher/>
          </div>

          <div className="sidebar-cards">
           {/* <StudentDashboardCards/> */}
           <Routes>
           <Route path="/AllQuestion" element={<QuestionList/>} />
             <Route path="/addquestion" element={<AddQuestion/>} />
           </Routes>
          </div>
        </main>
      </div>
    </>
    
  );
}

export default TeacherDashboard;
