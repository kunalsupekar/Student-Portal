// StudentProfile.js
import React from 'react';
import './StudentProfile.css'; // Import a CSS file for styling if needed
import studentPhoto from './studentPhoto.jpg'; // Replace with the actual photo URL

const StudentProfile = () => {
  const studentInfo = {
    firstName: 'Abhishek',
    lastName: 'Bhosale',
    email: 'abhi@example.com',
    marks: '90%',
    studentID: '12345',
    department: 'ENTC',
    className: '12th Grade',
    prnNumber: 'PRN123',
    address: '123 Main Street, Cityville',
  };

  return (
<>
<main className='sidebar-main'>
      </main>
      <div className="sidebar-cards">
    <div className="profile-container">
      <div className="profile-card">
        <div className="photo-container">
          <img src={studentPhoto} alt="Student" className="student-photo" />
        </div>
        <div className="info-container">
          <div className="info-box">
            <strong>First Name:</strong> {studentInfo.firstName}
          </div>
          <div className="info-box">
            <strong>Last Name:</strong> {studentInfo.lastName}
          </div>
          <div className="info-box">
            <strong>Email:</strong> {studentInfo.email}
          </div>
          <div className="info-box">
            <strong>Marks:</strong> {studentInfo.marks}
          </div>
          <div className="info-box">
            <strong>Student ID:</strong> {studentInfo.studentID}
          </div>
          <div className="info-box">
            <strong>Department:</strong> {studentInfo.department}
          </div>
          <div className="info-box">
            <strong>Class:</strong> {studentInfo.className}
          </div>
          <div className="info-box">
            <strong>PRN Number:</strong> {studentInfo.prnNumber}
          </div>
          <div className="info-box address-box">
            <strong>Address:</strong> {studentInfo.address}
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default StudentProfile;
