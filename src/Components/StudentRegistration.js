// StudentRegistration.js
import React, { useState } from 'react';
import './StudentRegistration.css'; // Import the CSS file

const StudentRegistration = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    marks:'',
    studentID: '',
    department: '',
    className: '',
    prnNumber: '',
    address: '',

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., API call, data processing)
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container mt-5">
      <h2>Student Registration</h2>
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="row">
          {/* First Column */}
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">First Name:</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">Last Name:</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="marks" className="form-label">Marks/CGPA:</label>
              <input
                type="text"
                className="form-control"
                id="marks"
                name="marks"
                value={formData.marks}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Second Column */}
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="studentID" className="form-label">Student ID:</label>
              <input
                type="text"
                className="form-control"
                id="studentID"
                name="studentID"
                value={formData.studentID}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="department" className="form-label">Department:</label>
              <input
                type="text"
                className="form-control"
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="className" className="form-label">Class:</label>
              <input
                type="text"
                className="form-control"
                id="className"
                name="className"
                value={formData.className}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="prnNumber" className="form-label">PRN Number:</label>
              <input
                type="text"
                className="form-control"
                id="prnNumber"
                name="prnNumber"
                value={formData.prnNumber}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        {/* Address Textarea */}
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address:</label>
          <textarea
            className="form-control"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
};

export default StudentRegistration;
