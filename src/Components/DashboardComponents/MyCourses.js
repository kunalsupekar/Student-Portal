import React, { useState, useEffect } from 'react';
import {MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios'; // Import axios
import { BASE_URL_COURSE } from '../API/Url4';

export default function MyCourses() {
  const [semester, setSemester] = useState('');
  const [apiResponse, setApiResponse] = useState([]);

  // List of all semesters based on unique values in the 'semester' property
  const allSemesters = [...new Set(apiResponse.map(course => course.semester))];

  // Function to filter courses based on the selected semester
  const filterCourses = (selectedSemester) => {
    setSemester(selectedSemester);
  };

  useEffect(() => {
    const prn = 1234567890; // Replace this with the actual PRN
  
    console.log("Fetching data...");
    axios.get(`${BASE_URL_COURSE}/api/courses/student/${prn}`)
      .then(response => {
        console.log("Data received:", response.data);
        setApiResponse(response.data);
      })
      .catch(error => console.error('Error fetching data:', error));

  }, []);
  
  
  // Filter courses based on the selected semester or show all courses
  const filteredCourses = semester
    ? apiResponse.filter((course) => course.semester === parseInt(semester))
    : apiResponse;

  return (
    <div>
      {/* Semester dropdown/select input field */}
      <label htmlFor="semester">Select Semester:</label>
      <select
        id="semester"
        value={semester}
        onChange={(e) => filterCourses(e.target.value)}
      >
        <option value="">All</option>
        {allSemesters.map((semesterValue) => (
          <option key={semesterValue} value={semesterValue}>
            Semester {semesterValue}
          </option>
        ))}
      </select>

      {/* Courses table */}
      <MDBTable align='middle'>
        <MDBTableHead>
          <tr>
            <th scope='col'>Course-Name</th>
            <th scope='col'>Course-Code</th>
            <th scope='col'>Credits</th>
            <th scope='col'>Semester</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {filteredCourses.map((course) => (
            <tr key={course.id}>
              {/* Render course details here */}
              <td>{course.name}</td>
              <td>{course.code}</td>
              <td>{course.credits}</td>
              <td>{`Semester ${course.semester}`}</td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
    </div>
  );
}