import React from 'react';
import './StudentDashboardCards.css';
import { PieChart } from 'react-minimal-pie-chart';

export default function StudentDashboardCards() {
  const attendanceData = {
    present: 15,
    total: 21,
  };

  const attendancePercentage = (attendanceData.present / attendanceData.total) * 100;
  const formattedAttendance = attendancePercentage.toFixed(2);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Nunito:200,300,400,600,700,900"
        rel="stylesheet"
      />

      <div className="stu-container">
        <div className="row">
          <div className="col-md-4">
            <div className="card card-1">
              <h3>Announcements</h3>
              <p>
                Dear Student, Greetings from MIT Academy of Engineering Alandi! All the First Year
                B-Tech. students are hereby informed that the process for Branch change for the
                Academic year 2023-2024 has started. Attached, please find
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card card-3">
              <h3>Tasks</h3>
              <ul className="student-tasks">
                <li>
                  <input type="checkbox" id="task1" />
                  <label htmlFor="task1">Course Registration</label>
                </li>
                <li>
                  <input type="checkbox" id="task2" />
                  <label htmlFor="task2">Prepare for Exam</label>
                </li>

                <li>
                  <input type="checkbox" id="task3" />
                  <label htmlFor="task3">Submit Project Proposal</label>
                </li>
                {/* Add more tasks as needed */}
              </ul>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card card-2">
              <h3>% Attendance</h3>
              <PieChart
                data={[
                  { title: 'Present', value: attendanceData.present, color: '#36A2EB' },
                  { title: 'Absent', value: attendanceData.total - attendanceData.present, color: '#FF6384' },
                ]}
                reveal={attendanceData.present + '%'}
                label={({ dataEntry }) => `${Math.round(dataEntry.percentage)}%`}
                lengthAngle={360}
                lineWidth={50}
                paddingAngle={4} // Add padding between the chart and the labels
                // radiusLabel={60} // Adjust the radius of the labels
                animate
              />
              <div className="attendance-percentage">
                <strong>Attendance:</strong> <span id="attendancePercentage">{formattedAttendance}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
