// StudentDashboard.js

import React from 'react';
import './StudentDashboard.css';
import { Route, Routes } from 'react-router-dom';
import StudentDashboardCards from './DashboardComponents/StudentDashboardCards';
import Sidebar from './DashboardComponents/Sidebar';
import StudentProfile from './StudentProfile';

function StudentDashboard() {
  return (
    <>
      <div>
        <main className='sidebar-main'>
          <div className="side-sidebar">
            {/* Link to Student Profile */}
        

            <Sidebar />
          </div>
          <div className="sidebar-cards">
            {/* <StudentDashboardCards/> */}
                        {/* Define Routes */}
            <Routes>
              {/* Route for the Student Dashboard Cards */}
              <Route path="/" element={<StudentDashboardCards />} />

              {/* Route for the Student Profile */}
              <Route path="/studentprofile" element={<StudentProfile />} />
            </Routes>
          </div>
        </main>
      </div>
    </>
  );
}

export default StudentDashboard;
