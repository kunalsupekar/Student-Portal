
import React from 'react';


const Internship = () => {
  

  const opportunitiesData = [
    { opportunity: 'Internship at TechGuru Inc.', location: 'PUNE', duration: '3 months', stipend: '25000 RS' },
    { opportunity: 'Research Assistant at ScienceHub', location: 'BANGLORE', duration: '6 months', stipend: '20000 RS' },
    { opportunity: 'Web Development Workshop by CodeMasters', location: 'DELHI', duration: '1 week', stipend: '35000 RS' },
    // Add more opportunities data as needed
  ];

  return (
    <div className="internship-container">

      <h2>Opportunities for Students</h2>
      <ul>
        {opportunitiesData.map((opportunity, index) => (
          <li key={index} className="placement-item">
            <div className="opportunity-content">
              <span className="opportunity-name">Opportunity:</span> {opportunity.opportunity}<br />
              <span className="opportunity-location">Location:</span> {opportunity.location}<br />
              <span className="opportunity-duration">Duration:</span> {opportunity.duration}<br />
              <span className="opportunity-stipend">Stipend:</span> {opportunity.stipend}<br />
            </div>
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Internship;