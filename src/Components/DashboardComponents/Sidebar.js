import React, { useState } from 'react';
import { Collapse, ListGroup, ListGroupItem } from 'reactstrap';

import { Link } from 'react-router-dom';

const Sidebar = () => {
  // State to manage the user profile information
  const [userProfile, setUserProfile] = useState({
    name: "WWW ABC XYZ",
    profileImage: "profileicon.png"
  });


  return (
    <div>
      <Collapse className="d-lg-block bg-f2f2f2 sidebar" style={{ width: '250px' }}>
        <div className="position-sticky">
          {/* Updated Student Profile Section */}
          <div className="d-flex align-items-center justify-content-center flex-column mt-4">
            <div className="d-flex align-items-center">
              <h6 className="ms-2 me-4">{userProfile.name}</h6>

              {/* Updated: Add a new profile icon */}
              <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  className="rounded-circle"
  height="60"
  alt="Profile Icon"
  loading="lazy"
/>

            </div>
          </div>

          <ListGroup flush className="mx-3 mt-4">
            {/* Your List Items Here */}
            <ListGroupItem tag={Link} to="" action className='border-0 border-bottom rounded'>
  Main Dashboard
</ListGroupItem>

            <ListGroupItem tag={Link} to="studentprofile" action className='border-0 border-bottom rounded' >
            My Profile
            </ListGroupItem>

            <ListGroupItem tag={Link} to="add" action className='border-0 border-bottom rounded'>
              Add Quiz
            </ListGroupItem>

            <ListGroupItem tag={Link} to="mycourse" action className='border-0 border-bottom rounded'>
              MY Courses
            </ListGroupItem>

            <ListGroupItem tag={Link} to="courseregistration" action className='border-0 border-bottom rounded'>
             
             Course Registration
            </ListGroupItem>

            <ListGroupItem tag={Link} to="placements" action className='border-0 border-bottom rounded'>
            Placements
            </ListGroupItem>

            <ListGroupItem tag={Link} to="internships" action className='border-0 border-bottom rounded'>
              Internships
            </ListGroupItem>

            <ListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded'>
              Partners
            </ListGroupItem>

            <ListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded'>
              Calendar
            </ListGroupItem>

            <ListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded'>
              User
            </ListGroupItem>

            <ListGroupItem tag='a' href='#' action className='border-0 rounded'>
              Sales
            </ListGroupItem>

          </ListGroup>
        </div>
      </Collapse>
    </div>
  );
}

export default Sidebar;
