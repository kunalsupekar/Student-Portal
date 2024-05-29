import React, { useState, useEffect } from 'react';
import {
  Container,
  Navbar,
  NavbarToggler,
  Collapse,
  ListGroup,
  ListGroupItem,
} from 'reactstrap';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
 // const navigate = useNavigate();

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  const handleLogout = () => {
    // Display an alert before logging out
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    
    if (confirmLogout) {
      // Clear sessionStorage
      sessionStorage.removeItem('TeacherData');

      // Redirect to the login page or perform other logout actions
      // For example, you can use React Router to navigate to the login page
      // history.push('/login');

      // You can also use window.location.href = '/login' to reload the entire app
      window.location.href = '/home';
    }
  };

  useEffect(() => {
    // Cleanup: Remove the event listener when the component unmounts
    return () => {
      const label = document.querySelector('label[for=nav-toggle]');
      if (label) {
        label.removeEventListener('click');
      }
    };
  }, []);

  return (
    <div>
      <Collapse isOpen={showSidebar} className="d-lg-block bg-f2f2f2 sidebar" style={{ width: '250px' }}>
        <div className="position-sticky">
          <ListGroup flush className="mx-3 mt-4">
            <h5 className="mb-4 text-center" active aria-current='true'>Teacher Sidebar</h5>

            <ListGroupItem tag={Link} to="teacher" action className='border-0 border-bottom rounded'>
              Main Dashboard
            </ListGroupItem>

            <ListGroupItem tag={Link} to="addquestion" action className='border-0 border-bottom rounded'>
              Add Question
            </ListGroupItem>

            <ListGroupItem tag={Link} to="AllQuestion" action className='border-0 border-bottom rounded'>
              View All Question
            </ListGroupItem>

            <ListGroupItem tag={Link} to="createquiz" action className='border-0 border-bottom rounded'>
              Create Quiz
            </ListGroupItem>

            <ListGroupItem tag={Link} to="viewquestions" action className='border-0 border-bottom rounded'>
              View All Student
            </ListGroupItem>

            <ListGroupItem action className='border-0 border-bottom rounded'>
              <button className="logout-button" onClick={handleLogout}>Logout</button>
            </ListGroupItem>
          </ListGroup>
        </div>
      </Collapse>

      <Navbar expand='lg' light>
        <Container fluid>
          <NavbarToggler
            type='button'
            aria-label='Toggle navigation'
            onClick={toggleSidebar}
          >
            <span className="navbar-toggler-icon"></span>
          </NavbarToggler>
        </Container>
      </Navbar>
    </div>
  );
}

export default Sidebar;
