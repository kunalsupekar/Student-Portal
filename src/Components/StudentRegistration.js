// StudentRegistration.js
import React, { useState } from 'react';
import './StudentRegistration.css'; 
import axiosInstance1, { BASE_URL } from './API/Url';
import LoadingSpinner from './LoadingSpinner';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const StudentRegistration = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    // Your form data...
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axiosInstance1.post(`${BASE_URL}/Api/student/register`, formData);

      console.log('Registration successful:', response.data);
      setLoading(false);
    //   window.alert("success");

      // Display a success toast message when registration is successful
      toast.success('Registration successful!');
    } catch (error) {
      console.error('Registration failed:', error);
      setLoading(false);

      // Display an error toast message when registration fails
      toast.error('Registration failed!');
    }
  };

  const genderOptions = ['Male', 'Female', 'Other'];
  const semesterOptions = Array.from({ length: 8 }, (_, index) => (index + 1).toString());

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="container mt-5">
      <h2>Student Registration</h2>
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="row">
          {/* First Column */}

          {loading && (
      <LoadingSpinner label="Creating your account..." />

)}


          <div className="col-md-6">
          <div className="mb-3">
              <label htmlFor="firstname" className="form-label">FirstName:</label>
              <input
                type="firstname"
                className="form-control"
                id="firstname"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="middlename" className="form-label">Middle Name:</label>
              <input
                type="text"
                className="form-control"
                id="middleName"
                name="middlename"
                value={formData.middlename}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">Last Name:</label>
              <input
                type="text"
                className="form-control"
                id="lastname"
                name="lastname"
                value={formData.lastname}
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
             {/* Gender Dropdown */}
        <div className="mb-3">
          <label htmlFor="gender" className="form-label">Gender:</label>
          <select
            className="form-select"
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select Gender</option>
            {genderOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

       

          </div>

          {/* Second Column */}
          <div className="col-md-6">
          <div className="mb-3">
              <label htmlFor="mobileNo" className="form-label">MobileNo:</label>
              <input
                type="text"
                className="form-control"
                id="mobileNo"
                name="mobileNumber"
                value={formData.mobileNumber}
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
              <label htmlFor="age" className="form-label">Age:</label>
              <input
                type="text"
                className="form-control"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Nationality" className="form-label">Nationality:</label>
              <input
                type="text"
                className="form-control"
                id="Nationality"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                required
              />
            </div>

             {/* Semester Dropdown */}
        <div className="mb-3">
          <label htmlFor="semester" className="form-label">Semester:</label>
          <select
            className="form-select"
            id="semester"
            name="semester"
            value={formData.semester}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select Semester</option>
            {semesterOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
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
        <ToastContainer />
      </form>
    </div>
  );
};

export default StudentRegistration;