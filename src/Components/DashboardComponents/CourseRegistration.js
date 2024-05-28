import React, { useState, useEffect } from 'react';
import './CourseRegistration.css';
import { BASE_URL_COURSE } from '../API/Url4';

const CourseRegistration = () => {
  const [selectedSemester, setSelectedSemester] = useState(null);
  const [selectedCourses, setSelectedCourses] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [prn, setPrn] = useState(null); // State to hold PRN from session storage
  const [registrationStatus, setRegistrationStatus] = useState(null); // State to hold registration status

  // Function to fetch PRN from session storage
  useEffect(() => {
    const prnFromStorage = sessionStorage.getItem('prn');
    if (prnFromStorage) {
      setPrn(prnFromStorage);
    }
  }, []);

  const semesters = [1, 2, 3, 4, 5];
  const coursesBySemester = {
    1: [
      { name: 'SON', code: 'SON101', credits: 3 },
      { name: 'CDE', code: 'CDE201', credits: 4 },
      { name: 'LDC', code: 'LDC301', credits: 3 },
      { name: 'AM', code: 'AM401', credits: 3 },
    ],
    // Other semesters' courses...
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    const selectedCoursesArray = Object.keys(selectedCourses).filter(
      (course) => selectedCourses[course]
    );

    const requestData = {
      prn: prn, // Use PRN from session storage
      semester: selectedSemester,
      courses: selectedCoursesArray.map(courseName => ({
        name: courseName,
        code: coursesBySemester[selectedSemester].find(course => course.name === courseName).code,
        credits: coursesBySemester[selectedSemester].find(course => course.name === courseName).credits
      })),
    };

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

    // Toggle the selected state of the course
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
                  {/* Render course details here */}
                  <td>{course.name}</td>
                  <td>{course.code}</td>
                  <td>{course.credits}</td>
                  <td>
                    <input
                      type="checkbox"
                      id={`courseCheckbox_${index}`}
                      checked={selectedCourses[course.name]}
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
