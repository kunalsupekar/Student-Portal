import React, { useState, useEffect } from 'react';
import {
  Container,
  Navbar,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  ListGroup,
  ListGroupItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleSidebar = () => setShowSidebar(!showSidebar);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  useEffect(() => {
    // Cleanup: Remove the event listener when the component unmounts
    return () => {
      const label = document.querySelector('label[for=nav-toggle]');
      if (label) {
        label.removeEventListener('click', toggleSidebar);
      }
    };
  }, []); 

  return (
    <div>
      <Collapse isOpen={showSidebar} className="d-lg-block bg-f2f2f2 sidebar" style={{ width: '250px' }}>
        <div className="position-sticky">
          <ListGroup flush className="mx-3 mt-4">
            <h5 className="mb-4 text-center"  active aria-current='true'>Teacher Sidebar</h5>

            <ListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded rounded'>
              Main Dashboard
            </ListGroupItem>

            <ListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded' >
              Website traffic
            </ListGroupItem>

            <ListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded'>
              Add Quiz
            </ListGroupItem>

            <ListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded'>
            <Link to="addquestion">
              Add Question
              </Link>
            </ListGroupItem>

            <Link to="AllQuestion">
            <ListGroupItem tag='a'  action className='border-0 border-bottom rounded'>
              View Question
            </ListGroupItem>
            </Link>

            <ListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded'>
              Orders
            </ListGroupItem>

            <ListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded'>
              International
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

          <Nav className="mt-3">
            <NavItem className='me-3 me-lg-0'>
              <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                <DropdownToggle tag="a" className="nav-link hidden-arrow">
                  Profile
                </DropdownToggle>

                <DropdownMenu>
                  <DropdownItem>
                    <DropdownItem href="#">My profile</DropdownItem>
                  </DropdownItem>
                  <DropdownItem>
                    <DropdownItem href="#">Settings</DropdownItem>
                  </DropdownItem>
                  <DropdownItem>
                    <DropdownItem href="#">Logout</DropdownItem>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavItem>
          </Nav>
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
