import React, { useState } from 'react';
import axiosInstance1, { BASE_URL_QUES } from '../../Components/API/Url2';

const GetQuesByCateg = () => {
  const [category, setCategory] = useState('');
  const [fetchedQuestions, setFetchedQuestions] = useState([]);

  const handleFetchQuestions = async () => {
    try {
      const response = await axiosInstance1.get(`${BASE_URL_QUES}/question/category/${category}`);
      setFetchedQuestions(response.data);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  return (
    <div>
      {/* Input for entering category */}
      <label htmlFor="category">Enter Category: </label>
      <input
        type="text"
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      {/* Fetch button */}
      <button onClick={handleFetchQuestions}>Fetch Questions</button>

      {/* Display fetched questions */}
      <div>
        <h2>Fetched Questions:</h2>
        <ul>
          {fetchedQuestions.map(question => (
            <li key={question.id}>
              <strong>ID:</strong> {question.id}<br />
              <strong>Title:</strong> {question.questionTitle}<br />
              <strong>Options:</strong> {question.option1}, {question.option2}, {question.option3}, {question.option4}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GetQuesByCateg;
