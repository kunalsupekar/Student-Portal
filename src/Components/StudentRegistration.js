// StudentRegistration.js
import React, { useState } from 'react';
import './StudentRegistration.css'; 
import axiosInstance, { BASE_URL } from './API/Url'; 

const StudentRegistration = () => {
  const [formData, setFormData] = useState({

    firstname: '',
    middlename:'',
    lastname: '',
    email: '',
    department:'',
    gender:'',
    age:'',
    address: '',
    mobileNumber:'',
    nationality: '',
    semester: '',
    AddmissionYear:''
    

  });


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Make Axios request to your backend API endpoint
     
      const response = await axiosInstance
      .post(`${BASE_URL}/Api/student/register`, formData);

      setTimeout(() => {
        // Redirect to the next page (replace '/dashboard' with your actual route)
        window.location.href = '/studentlogin';
      }, 20);

      // Handle success (you may want to redirect or show a success message)
      console.log('Registration successful:', response);
    } catch (error) {
      // Handle error (you may want to show an error message)
      console.error('Registration failed:', error);
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
      </form>
    </div>
  );
};

export default StudentRegistration;
