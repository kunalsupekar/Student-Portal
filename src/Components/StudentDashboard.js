// StudentDashboard.js
import React from 'react';
import './StudentDashboard.css';
import { Route, Routes } from 'react-router-dom';
import StudentDashboardCards from './DashboardComponents/StudentDashboardCards';
import Sidebar from './DashboardComponents/Sidebar';
import StudentProfile from './StudentProfile'
import GetQuesByID from './Question/GetQuesByID';
import GetQuesByCateg from './Question/GetQuesByCateg';
import PlayQuiz from './Question/PlayQuiz';
import MyCourses from './DashboardComponents/MyCourses';
import CourseRegistration from './DashboardComponents/CourseRegistration';
import PlacementComponent from './DashboardComponents/PlacementComponent';
import Internship from './DashboardComponents/Internship';

function StudentDashboard() {
  return (
    <>
      <div className="student-dashboard">

        <main className='sidebar-main'>
          <div className="side-sidebar">
            <Sidebar />
          </div>

          <div className="sidebar-cards">
           
                      
            <Routes>
            <Route path="/" element={ <StudentDashboardCards/>} />
            <Route path="/mycourse" element={ <MyCourses/>} />
            <Route path="/courseregistration" element={ <CourseRegistration/>} />
            <Route path="/getquebyid" element={<GetQuesByID/>} />
            <Route path="/getquebycategory" element={<GetQuesByCateg/>} />
           
            <Route path="/studentprofile" element={<StudentProfile/>} />
            <Route path="/givequiz" element={<PlayQuiz/>} />

              <Route path="/placements" element={<PlacementComponent/>} />
              <Route path="/internships" element={<Internship/>} />
            </Routes>
          </div>
        </main>
      </div>
    </>
  );
}

export default StudentDashboard;