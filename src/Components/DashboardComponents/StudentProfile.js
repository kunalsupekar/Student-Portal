import React from 'react';
import { Link } from 'react-router-dom';

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

  const studentData = {
    middlename: 'Anant',
    lastname: 'Supekar',
    email: 'john.doe@example.com',
    department: 'Computer Science',
    gender: 'Male',
    age: 20,
    semester: 3,
    birthdate:'5/5/2003',
    address: '123 Main St, City',
    mobileNumber: '123-456-7890',
    nationality: 'American',
    admissionYear: 2022,
    mothername:'xyz '
  };

  const {
    middlename,
    lastname,
    email,
    department,
    gender,
    age,
    birthdate,
    semester,
    address,
    mobileNumber,
    nationality,
    admissionYear,
    mothername
  } = studentData;

  return (
    <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
              <MDBBreadcrumbItem>
              <a href="#">User</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem>
                <a href="#">User</a>
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
                <p className="text-muted mb-1">Kunal Anant Supekar</p>
                <p className="text-muted mb-4">{department}</p>
                <div className="d-flex justify-content-center mb-2">
                  <MDBBtn>signout!</MDBBtn>
                  <MDBBtn outline className="ms-1">Edit</MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody className="p-0">
                <MDBListGroup flush className="rounded-3">
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fas icon="globe fa-lg text-warning" />
                    <MDBCardText>https://www.linkedin.com/in/kunal-supekar-6b81b2246/</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="github fa-lg" style={{ color: '#333333' }} />
                    <MDBCardText>https://github.com/</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="twitter fa-lg" style={{ color: '#55acee' }} />
                    <MDBCardText>@mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="instagram fa-lg" style={{ color: '#ac2bac' }} />
                    <MDBCardText>mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fab icon="facebook fa-lg" style={{ color: '#3b5998' }} />
                    <MDBCardText>mdbootstrap</MDBCardText>
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
                    <MDBCardText className="text-muted">202101070160</MDBCardText>
                  </MDBCol>
                  
                </MDBRow>
                
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">kunal.supekar@mitaoe.ac.in</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">8767655747</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Mobile</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">(098) 765-4321</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Pune ,Maharashtra</MDBCardText>
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
            <strong className="me-4">Middle Name :</strong> {middlename}
          </li>
          <li className="d-flex mb-1">
            <strong className="me-4">Last Name :</strong> {lastname}
          </li>
          <li className="d-flex mb-1">
            <strong className="me-4">Gender :</strong> {gender}
          </li>
          <li className="d-flex mb-1">
            <strong className="me-4">Mother Name :</strong> {mothername}
          </li>
          <li className="d-flex mb-1">
            <strong className="me-4">Birth Date :</strong> {birthdate}
          </li>
          <li className="d-flex mb-1">
            <strong className="me-4">Age :</strong> {age}
          </li>
          <li className="d-flex mb-1">
            <strong className="me-4">Semester </strong> {semester}
          </li>
          <li className="d-flex mb-1">
            <strong className="me-4">Admission Year:</strong> {admissionYear}
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