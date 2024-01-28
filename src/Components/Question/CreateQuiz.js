import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axiosInstance2, { BASE_URL_QUIZ } from '../../Components/API/Url3';

const CreateQuiz = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    categoryName: '',
    numQuestions: '',
    title: '',
  });

  // State to store quiz data
  const [quizId, setQuizId] = useState(null);

  // Handle form input changes
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Make a POST request to your backend API
      const response = await axiosInstance2.post(`${BASE_URL_QUIZ}/quiz/create`, formData);
      console.log('Response from backend:', response.data);
  
      // Assuming your API returns quizId
      const { quizId } = response.data;
  
      // Update state with the received data
      setQuizId(quizId);
  
      // Display success toast message
      toast.success(`Quiz created successfully! Quiz ID: ${quizId}`);
    } catch (error) {
      console.error('Error submitting form:', error);
  
      // Display error toast message
      toast.error('Error creating quiz. Please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Quiz Entry</h1>

      {/* Form for entering input */}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="categoryName" className="form-label">
            Category Name:
          </label>
          <input
            type="text"
            id="categoryName"
            name="categoryName"
            value={formData.categoryName}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="numQuestions" className="form-label">
            Number of Questions:
          </label>
          <input
            type="number"
            id="numQuestions"
            name="numQuestions"
            value={formData.numQuestions}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Quiz Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      {/* Display Quiz ID */}
      {quizId && (
        <div className="mt-4">
          <h2 className="text-success">Quiz created successfully!</h2>
          <p className="lead">Your Quiz ID is: {quizId}</p>
        </div>
      )}

      {/* Toast container */}
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
};

export default CreateQuiz;
