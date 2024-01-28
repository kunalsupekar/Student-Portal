import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';

export default function ProfilePage() {

  const handleLogout = () => {
    // Display an alert before logging out
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    
    if (confirmLogout) {
      // Clear sessionStorage
      sessionStorage.removeItem('StudentData');

      // Redirect to the login page or perform other logout actions
      // For example, you can use React Router to navigate to the login page
      // history.push('/login');

      // You can also use window.location.href = '/login' to reload the entire app
      window.location.href = '/home';
    }
  };
  const studentDataString = sessionStorage.getItem('StudentData');
  const studentData = studentDataString ? JSON.parse(studentDataString) : {};

  return (
    <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
              <MDBBreadcrumbItem>
             Home
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem>
           User
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                <p className="text-muted mb-1">{studentData.firstname + " "+studentData.middlename+" " + studentData.lastname}</p>
                <p className="text-muted mb-4">{studentData.department}</p>
                <div className="d-flex justify-content-center mb-2">
                <MDBBtn onClick={handleLogout}>Sign Out</MDBBtn>
                  <MDBBtn outline className="ms-1">Edit</MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody className="p-0">
                <MDBListGroup flush className="rounded-3">
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fas icon="globe fa-lg text-warning" />
                    <MDBCardText>www.linkedin.com.kunal</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="github fa-lg" style={{ color: '#333333' }} />
                    <MDBCardText>www.github.com</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="twitter fa-lg" style={{ color: '#55acee' }} />
                    <MDBCardText>www.twitter.com</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="instagram fa-lg" style={{ color: '#ac2bac' }} />
                    <MDBCardText>www.instagram.com</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="facebook fa-lg" style={{ color: '#3b5998' }} />
                    <MDBCardText>www.facebook.com</MDBCardText>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>PRN</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{studentData.prn}</MDBCardText>
                  </MDBCol>
                  
                </MDBRow>
                
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{studentData.email}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{studentData.mobileNumber}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Admission Year</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{studentData.admissionYear}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{studentData.address}</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

            <MDBRow>
              <MDBCol md="6">
              <MDBCard>
      <MDBCardBody>
        <MDBCardText className="mb-4">
          <span className="text-primary font-italic me-1">Other</span>Information
        </MDBCardText>

        <ul className="list-unstyled">
          <li className="d-flex mb-1">
            <strong className="me-4">Middle Name :</strong> {studentData.middlename}
          </li>
          <li className="d-flex mb-1">
            <strong className="me-4">Last Name :</strong> {studentData.lastname}
          </li>
          <li className="d-flex mb-1">
            <strong className="me-4">Gender :</strong> {studentData.gender}
          </li>
          <li className="d-flex mb-1">
            <strong className="me-4">Country :</strong> {'India'}
          </li>
          <li className="d-flex mb-1">
            <strong className="me-4">Birth Date :</strong> {'5/5/2003'}
          </li>
          <li className="d-flex mb-1">
            <strong className="me-4">Age :</strong> {studentData.age}
          </li>
          <li className="d-flex mb-1">
            <strong className="me-4">Semester </strong> {studentData.semester}
          </li>
          <li className="d-flex mb-1">
            <strong className="me-4">Admission Year:</strong> {studentData.admissionYear}
          </li>
        </ul>
      </MDBCardBody>
    </MDBCard>
              </MDBCol>

              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">Personal</span>  Status bar</MDBCardText>
                    <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>fees</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={100} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Major project</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={67} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Resume</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Syllabus</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={46} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Super 30 project</MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={86} valuemin={0} valuemax={100} />
                    </MDBProgress>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}