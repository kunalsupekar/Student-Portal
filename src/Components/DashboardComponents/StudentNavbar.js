import React, { useState } from "react";
import "./StudentNavbar.css";

function StudentNavbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

//   const closeDropdown = () => {
//     setDropdownOpen(false);
//   };

  return (
    <div className="stnavbar">
      <div className="profile" onClick={toggleDropdown}>
      <img
  src="/profileicon.png"
  alt="Profile Icon"
  className="profile-icon"
/>

        {isDropdownOpen && (
          <div className="stdropdown">
            <ul>
              <li>
                <a href="/profile">View Profile</a>
              </li>
              <li>
                <a href="/">Logout</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default StudentNavbar;
