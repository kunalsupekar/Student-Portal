// TeacherRegistration.js
import React, { useState } from 'react';
import './StudentRegistration.css'; 
import axiosInstance1, { BASE_URL } from './API/Url';
import LoadingSpinner from './LoadingSpinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TeacherRegistration = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    firstname: '',
    middlename: '',
    lastname: '',
    email: '',
    phoneNumber: '',
    department: '',
    gender: '',
    age: '',
    nationality: '',
    address: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axiosInstance1.post(`${BASE_URL}/api/teacher/register`, formData);

      console.log('Registration successful:', response.data);
      setLoading(false);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="container mt-5">
      <h2>Teacher Registration</h2>
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="row">
          {/* First Column */}

          {loading && (
            <LoadingSpinner label="Creating your account..." />
          )}

          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username:</label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password:</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="firstname" className="form-label">First Name:</label>
              <input
                type="text"
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
                id="middlename"
                name="middlename"
                value={formData.middlename}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastname" className="form-label">Last Name:</label>
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
              <label htmlFor="phoneNumber" className="form-label">Phone Number:</label>
              <input
                type="text"
                className="form-control"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
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
              <label htmlFor="nationality" className="form-label">Nationality:</label>
              <input
                type="text"
                className="form-control"
                id="nationality"
                name="nationality"
                value={formData.nationality}
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
        <ToastContainer />
      </form>
    </div>
  );
};

export default TeacherRegistration;
