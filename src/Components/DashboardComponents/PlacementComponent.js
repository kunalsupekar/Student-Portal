// PlacementComponent.js

import React from 'react';
import './PlacementComponent.css'; // Import the CSS file

// Placeholder image URL


const PlacementComponent = () => {
  const placementData = [
    { company: 'ABC Corporation', position: 'Software Developer', location: 'PUNE', startDate: '2024-03-01', salary: '75000 RS', image: 'https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Amazon-512.png' },
    { company: 'Tech Innovators', position: 'Data Scientist', location: 'MUMBAI', startDate: '2024-05-01', salary: '90000 RS', image: 'https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Amazon-512.png' },
    { company: 'Future Systems', position: 'Software Engineer', location: 'DELHI', startDate: '2024-06-01', salary: '85000 RS', image: 'https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Amazon-512.png' },
    { company: 'Innovate Solutions', position: 'UX Designer', location: 'NOIDA', startDate: '2024-07-01', salary: '78000 RS', image: 'https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Amazon-512.png' },
    // Add more placement data as needed
  ];

 
  return (
    <div className="placement-container">
      <h2>Placement Information</h2>
      <ul>
        {placementData.map((placement, index) => (
          <li key={index} className="placement-item">
            <div className="placement-content">
              <div className="company-info">
                <span className="company-name">Company:</span> {placement.company}<br />
                <span className="position">Position:</span> {placement.position}<br />
                <span className="location">Location:</span> {placement.location}<br />
                <span className="start-date">Start Date:</span> {placement.startDate}<br />
                <span className="salary">Salary:</span> {placement.salary}<br />
              </div>
              {placement.company !== 'ABC Corporation' && (
                <img src={placement.image} alt={placement.company} className="company-image" />
              )}
            </div>
            <br />
          </li>
        ))}
      </ul>

    </div>
  );
};

export default PlacementComponent;