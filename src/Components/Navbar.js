import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const updateUserData = () => {
      const studentDataString = sessionStorage.getItem('StudentData');
      const teacherDataString = sessionStorage.getItem('TeacherData');
      const parsedStudentData = studentDataString ? JSON.parse(studentDataString) : null;
      const parsedTeacherData = teacherDataString ? JSON.parse(teacherDataString) : null;
      
      if (parsedStudentData) {
        setIsLoggedIn(true);
        setUserData(parsedStudentData);
      } else if (parsedTeacherData) {
        setIsLoggedIn(true);
        setUserData(parsedTeacherData);
      } else {
        setIsLoggedIn(false);
        setUserData(null);
      }
    };

    // Update user data on mount
    updateUserData();

    // Subscribe to storage change events to update user data
    window.addEventListener('storage', updateUserData);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener('storage', updateUserData);
    };
  }, []); // The empty dependency array ensures this runs only on mount

  // Custom CSS to adjust the navbar's height
  const navbarStyle = {
    height: '50px', // Adjust this value to set the desired height
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary" style={navbarStyle}>
      <a className="navbar-brand" href="/">MyApp</a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          {/* Add additional nav links if needed */}
        </ul>
      </div>
      <div className="ml-auto">
        <div className="nav-item dropdown">
          <div className="dropdown">
            {isLoggedIn ? (
              <div>
                <button className="btn btn-secondary" disabled>
                  Welcome, {userData?.firstname}
                </button>
              </div>
            ) : (
              <div>
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Login
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <Link className="dropdown-item" to="/teacherlogin">Teacher</Link>
                  <Link className="dropdown-item" to="/studentlogin">Student</Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
