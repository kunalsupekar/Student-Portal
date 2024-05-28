import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axiosInstance2, { BASE_URL_QUIZ } from '../../Components/API/Url3';

const CreateQuiz = () => {
  const [formData, setFormData] = useState({
    categoryName: '',
    numQuestions: '',
    title: '',
  });

  const [quizId, setQuizId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance2.post(`${BASE_URL_QUIZ}/quiz/create`, formData);
      console.log('Response from backend:', response.data);

      const { quizId } = response.data;
      setQuizId(quizId);
      toast.success(`Quiz created successfully! Quiz ID: ${quizId}`);
    } catch (error) {
      console.error('Error submitting form:', error.response ? error.response.data : error.message);
      toast.error('Error creating quiz. Please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Quiz Entry</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="categoryName" className="form-label">Category Name:</label>
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
          <label htmlFor="numQuestions" className="form-label">Number of Questions:</label>
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
          <label htmlFor="title" className="form-label">Quiz Title:</label>
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

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      {quizId && (
        <div className="mt-4">
          <h2 className="text-success">Quiz created successfully!</h2>
          <p className="lead">Your Quiz ID is: {quizId}</p>
        </div>
      )}

      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
};

export default CreateQuiz;
