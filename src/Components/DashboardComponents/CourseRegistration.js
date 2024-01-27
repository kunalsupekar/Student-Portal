import React, { useState, useEffect } from 'react';
import './CourseRegistration.css';

const CourseRegistration = () => {
  const [selectedSemester, setSelectedSemester] = useState(null);
  const [selectedCourses, setSelectedCourses] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const semesters = [1, 2, 3, 4, 5];
  const coursesBySemester = {
    1: [
      { name: 'SON', code: 'SON101', credits: 3 },
      { name: 'CDE', code: 'CDE201', credits: 4 },
      { name: 'LDC', code: 'LDC301', credits: 3 },
      { name: 'AM', code: 'AM401', credits: 3 },
    ],
    2: [
      { name: 'Physics', code: 'PHY102', credits: 4 },
      { name: 'SIC', code: 'SIC202', credits: 3 },
      { name: 'English', code: 'ENG302', credits: 3 },
      { name: 'ETT', code: 'ETT402', credits: 3 },
    ],
    3: [
      { name: 'Course A3', code: 'A301', credits: 3 },
      { name: 'Course B3', code: 'B301', credits: 4 },
      { name: 'Course C3', code: 'C301', credits: 3 },
    ],
    4: [
      { name: 'Course A4', code: 'A401', credits: 3 },
      { name: 'Course B4', code: 'B401', credits: 4 },
      { name: 'Course C4', code: 'C401', credits: 3 },
    ],
    5: [
      { name: 'Course A5', code: 'A501', credits: 3 },
      { name: 'Course B5', code: 'B501', credits: 4 },
      { name: 'Course C5', code: 'C501', credits: 3 },
    ],
  };

  useEffect(() => {
    const handleSubmit = async () => {
      setIsSubmitting(true);

      const selectedCoursesArray = Object.keys(selectedCourses).filter(course => selectedCourses[course]);

      const requestData = {
        prn: 202101070160,
        semester: selectedSemester,
        courses: selectedCoursesArray,
      };

      try {
        const response = await fetch('http://localhost:8086/api/courses/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify(requestData),
        });

        if (response.ok) {
          console.log('Courses registered successfully');
        } else {
          console.error('Failed to register courses');
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setIsSubmitting(false);
      }
    };

    // Check if there are selected courses and submit
    if (isSubmitting) {
      handleSubmit();
    }
  }, [isSubmitting, selectedCourses, selectedSemester]);

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
    setIsSubmitting(true);
  };

  return (
    <div className="display-courses-container">
      <h2>Course Registration</h2>
      <label htmlFor="semesterDropdown">Select Semester:</label>
      <select id="semesterDropdown" value={selectedSemester || ''} onChange={handleSemesterChange}>
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

      {selectedSemester && Object.values(selectedCourses).some(course => course) && (
        <button className="submit-button" onClick={handleButtonClick} disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      )}
    </div>
  );
};

export default CourseRegistration;
