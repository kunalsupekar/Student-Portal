import React, { useState } from 'react';

function StudentRegistration() {
  const [formData, setFormData] = useState({
    PRN: '',
    firstName: '',
    middlename: '',
    lastName: '',
    gender: '',
    address: '',
    department: '',
    email: '',
    mobileNumber: '',
    nationality: '',
    admissionYear: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add code to handle form submission, e.g., sending data to the server
    // You can use Axios or fetch to make an HTTP POST request to your API
    console.log('Form data submitted:', formData);
  };

  return (
    <div>
      <h2>Student Registration</h2>
      <form onSubmit={handleSubmit}>
        {/* Other form fields */}
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <select
            className="form-control"
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobileNumber">Mobile Number</label>
          <input
            type="text"
            className="form-control"
            id="mobileNumber"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="nationality">Nationality</label>
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
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
}

export default StudentRegistration;
