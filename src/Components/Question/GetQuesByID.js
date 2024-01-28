import React, { useState } from 'react';
import axiosInstance1, { BASE_URL_QUES } from '../../Components/API/Url2';

const GetQuesByID = () => {
  const [questionIds, setQuestionIds] = useState('');
  const [fetchedQuestions, setFetchedQuestions] = useState([]);

  const handleFetchQuestions = async () => {
    try {
      // Convert the comma-separated string to an array of integers
      const idsArray = questionIds.split(',').map(id => parseInt(id.trim(), 10));
      console.log('Sending question IDs:', idsArray);
  
      // Send the selected question IDs to the backend
      const response = await axiosInstance1.post(
        `${BASE_URL_QUES}/question/getQuestions`,
        { questionIds: idsArray },
        { headers: { 'Content-Type': 'application/json' } }
      );
      console.log('Response from the backend:', response.data);
  
      // Handle the response from the backend
      setFetchedQuestions(response.data);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  return (
    <div>
      {/* Input for entering question IDs */}
      <label htmlFor="questionIds">Enter Question IDs (comma-separated): </label>
      <input
        type="text"
        id="questionIds"
        value={questionIds}
        onChange={(e) => setQuestionIds(e.target.value)}
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

export default GetQuesByID;
