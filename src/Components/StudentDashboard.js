import React from 'react';
import './StudentDashboard.css';

import StudentDashboardCards from './DashboardComponents/StudentDashboardCards';
import Sidebar from './DashboardComponents/Sidebar';


function StudentDashboard() {
  return (
    <>
    <div>
  
    <main className='sidebar-main'>
      <div className="side-sidebar">
   <Sidebar/>
      </div>
      <div className="sidebar-cards">

    <StudentDashboardCards/>
      </div>

    </main>
   {/* <StudentDashboardCards/> */}
    </div>
    </>
  );
}

export default StudentDashboard;
