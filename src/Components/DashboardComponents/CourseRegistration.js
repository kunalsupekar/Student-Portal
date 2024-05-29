import React, { useState, useEffect } from 'react';
import './CourseRegistration.css';
import { BASE_URL_COURSE } from '../API/Url4';

const CourseRegistration = () => {
  const [selectedSemester, setSelectedSemester] = useState(null);
  const [selectedCourses, setSelectedCourses] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [prn, setPrn] = useState(null);
  const [registrationStatus, setRegistrationStatus] = useState(null);

  useEffect(() => {
    console.log('useEffect is running');
    const studentData = sessionStorage.getItem('StudentData');

    console.log('Raw student data from session storage:', studentData);

    if (studentData) {
      const parsedStudentData = JSON.parse(studentData);
      if (parsedStudentData && parsedStudentData.prn) {
        setPrn(parsedStudentData.prn);
        console.log('PRN from session storage:', parsedStudentData.prn);
      } else {
        console.error('PRN not found in parsed student data');
      }
    } else {
      console.error('No student data found in session storage');
    }
  }, []);

  const semesters = [1, 2, 3, 4, 5, 6, 7, 8];

  const coursesBySemester = {
    1: [
      { name: 'Introduction to Programming', code: 'CSE101', credits: 3 },
      { name: 'Mathematics I', code: 'MATH101', credits: 4 },
      { name: 'Physics I', code: 'PHY101', credits: 3 },
      { name: 'Basic Electrical Engineering', code: 'EEE101', credits: 3 },
      { name: 'Communication Skills', code: 'ENG101', credits: 2 },
    ],
    2: [
      { name: 'Data Structures', code: 'CSE102', credits: 4 },
      { name: 'Mathematics II', code: 'MATH102', credits: 4 },
      { name: 'Physics II', code: 'PHY102', credits: 3 },
      { name: 'Digital Logic Design', code: 'ECE102', credits: 3 },
      { name: 'Engineering Drawing', code: 'ENGR102', credits: 2 },
    ],
    3: [
      { name: 'Object-Oriented Programming', code: 'CSE201', credits: 4 },
      { name: 'Discrete Mathematics', code: 'MATH201', credits: 3 },
      { name: 'Computer Organization', code: 'CSE202', credits: 3 },
      { name: 'Operating Systems', code: 'CSE203', credits: 4 },
      { name: 'Database Management Systems', code: 'CSE204', credits: 3 },
    ],
    4: [
      { name: 'Algorithms', code: 'CSE301', credits: 4 },
      { name: 'Theory of Computation', code: 'CSE302', credits: 3 },
      { name: 'Software Engineering', code: 'CSE303', credits: 3 },
      { name: 'Microprocessors', code: 'ECE301', credits: 3 },
      { name: 'Computer Networks', code: 'CSE304', credits: 4 },
    ],
    5: [
      { name: 'Web Technologies', code: 'CSE401', credits: 3 },
      { name: 'Artificial Intelligence', code: 'CSE402', credits: 4 },
      { name: 'Computer Graphics', code: 'CSE403', credits: 3 },
      { name: 'Embedded Systems', code: 'ECE401', credits: 3 },
      { name: 'Probability and Statistics', code: 'MATH401', credits: 3 },
    ],
    6: [
      { name: 'Machine Learning', code: 'CSE501', credits: 4 },
      { name: 'Distributed Systems', code: 'CSE502', credits: 3 },
      { name: 'Information Security', code: 'CSE503', credits: 3 },
      { name: 'Cloud Computing', code: 'CSE504', credits: 3 },
      { name: 'Elective I', code: 'CSE505', credits: 3 },
    ],
    7: [
      { name: 'Big Data Analytics', code: 'CSE601', credits: 4 },
      { name: 'Human-Computer Interaction', code: 'CSE602', credits: 3 },
      { name: 'Internet of Things', code: 'ECE601', credits: 3 },
      { name: 'Elective II', code: 'CSE603', credits: 3 },
      { name: 'Project I', code: 'CSE604', credits: 3 },
    ],
    8: [
      { name: 'Cyber Security', code: 'CSE701', credits: 4 },
      { name: 'Blockchain Technology', code: 'CSE702', credits: 3 },
      { name: 'Elective III', code: 'CSE703', credits: 3 },
      { name: 'Project II', code: 'CSE704', credits: 6 },
    ],
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    const selectedCoursesArray = Object.keys(selectedCourses).filter(
      (course) => selectedCourses[course]
    );

    const requestData = selectedCoursesArray.map((courseName) => {
      const course = coursesBySemester[selectedSemester].find(
        (course) => course.name === courseName
      );
      return {
        prn: prn,
        semester: selectedSemester,
        name: courseName,
        code: course.code,
        credits: course.credits,
      };
    });

    console.log('Request Data:', JSON.stringify(requestData, null, 2));

    try {
      const response = await fetch(`${BASE_URL_COURSE}/api/courses/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        console.log('Courses registered successfully');
        setRegistrationStatus('success');
      } else {
        console.error('Failed to register courses');
        setRegistrationStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setRegistrationStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSemesterChange = (event) => {
    const selectedSemester = event.target.value;
    setSelectedSemester(selectedSemester);
    setSelectedCourses({});
  };

  const handleCourseCheckboxChange = (course) => {
    const updatedSelectedCourses = { ...selectedCourses };
    updatedSelectedCourses[course] = !updatedSelectedCourses[course];
    setSelectedCourses(updatedSelectedCourses);
  };

  const handleButtonClick = () => {
    handleSubmit();
  };

  return (
    <div className="display-courses-container">
      <h2>Course Registration</h2>
      <label htmlFor="semesterDropdown">Select Semester:</label>
      <select
        id="semesterDropdown"
        value={selectedSemester || ''}
        onChange={handleSemesterChange}
      >
        <option value="" disabled>
          Select Semester
        </option>
        {semesters.map((semester) => (
          <option key={semester} value={semester}>
            Semester {semester}
          </option>
        ))}
      </select>

      {selectedSemester && (
        <div>
          <h3>Courses for Semester {selectedSemester}:</h3>
          <table>
            <thead>
              <tr>
                <th>Course</th>
                <th>Code</th>
                <th>Credits</th>
                <th>Select</th>
              </tr>
            </thead>
            <tbody>
              {coursesBySemester[selectedSemester].map((course, index) => (
                <tr key={index}>
                  <td>{course.name}</td>
                  <td>{course.code}</td>
                  <td>{course.credits}</td>
                  <td>
                    <input
                      type="checkbox"
                      id={`courseCheckbox_${index}`}
                      checked={selectedCourses[course.name] || false}
                      onChange={() => handleCourseCheckboxChange(course.name)}
                    />
                    <label htmlFor={`courseCheckbox_${index}`}></label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {selectedSemester && Object.values(selectedCourses).some((course) => course) && (
        <button className="submit-button" onClick={handleButtonClick} disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      )}

      {registrationStatus && (
        <div>
          {registrationStatus === 'success' ? (
            <p>Registration successful!</p>
          ) : (
            <p>Registration failed. Please try again.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default CourseRegistration;
