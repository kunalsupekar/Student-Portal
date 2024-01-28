import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { BASE_URL } from './API/Url';

function ViewAllStudent() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Make an Axios GET request to fetch data from the server
    axios.get(`${BASE_URL}/Api/student`)
      .then(response => {
        // Update the state with the fetched data
        setStudents(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array to ensure the effect runs once when the component mounts

  return (
    <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
      <MDBTable align='middle'>
        <MDBTableHead>
          <tr style={{ position: 'sticky', top: '0', background: '#fff', zIndex: '1' }}>
            <th scope='col'>Name</th>
            <th scope='col'>PRN</th>
            <th scope='col'>Email</th>
            <th scope='col'>Department</th>
            <th scope='col'>Semester</th>
            <th scope='col'>Mobile no</th>
            <th scope='col'>Last Name</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {students.map(student => (
            <tr key={student.prn}>
              <td>
                <div className='d-flex align-items-center'>
                  {/* You can replace the image source with the actual data */}
                  <img
                    src={student.imageSrc || 'https://mdbootstrap.com/img/new/avatars/8.jpg'}
                    alt=''
                    style={{ width: '45px', height: '45px' }}
                    className='rounded-circle'
                  />
                  <div className='ms-3'>
                    <p className='fw-bold mb-1'>{student.firstname} {student.lastname}</p>
                    <p className='text-muted mb-0'>{student.email}</p>
                  </div>
                </div>
              </td>
              <td>{student.prn}</td>
              <td>{student.email}</td>
              <td>{student.department || 'N/A'}</td>
              <td>{student.semester || 'N/A'}</td>
              <td>{student.mobileNumber || 'N/A'}</td>
              <td>{student.lastname}</td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
    </div>
  );
}

export default ViewAllStudent;
