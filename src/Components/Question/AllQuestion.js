import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';
import axiosInstance1, { BASE_URL_QUES } from '../../Components/API/Url2';

const QuestionList = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Fetch questions from the backend
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await axiosInstance1.get(`${BASE_URL_QUES}/question/allQuestions`);
      const data = response.data;
      setQuestions(data);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  return (
    <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
      <h2 className="text-center mb-4">All Questions</h2>
      <Table striped>
        <thead>
          <tr>
            <th>ID</th>
            <th>Question Title</th>
            <th>Options</th>
            <th>Right Answer</th>
            <th>Difficulty Level</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question) => (
            <tr key={question.id}>
              <td>{question.id}</td>
              <td>{question.questionTitle}</td>
              <td>
                {question.option1}, {question.option2}, {question.option3}, {question.option4}
              </td>
              <td>{question.rightAnswer}</td>
              <td>{question.difficultylevel}</td> {/* Display the actual difficulty level value */}
              <td>{question.category}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default QuestionList;
