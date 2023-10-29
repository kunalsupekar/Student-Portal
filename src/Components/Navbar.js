import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  useEffect(() => {
    // Initialize Bootstrap JavaScript once the component is mounted
    window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  // Custom CSS to adjust the navbar's height
  const navbarStyle = {
    height: '50px', // Adjust this value to set the desired height
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary" style={navbarStyle}>
      <a className="navbar-brand" href="/">Navbar</a>
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
          <li className="nav-item active">
            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">collegess</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Pricing</a>
            
          </li>
        </ul>
      </div>
      <div className="ml-auto"> {/* Pushes the dropdown menu to the right */}
        <div className="nav-item dropdown">
          <div className="dropdown">
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
              <a className="dropdown-item" href="/teacher">Teacher</a>
              <a className="dropdown-item" href="/studentlogin">Student</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
