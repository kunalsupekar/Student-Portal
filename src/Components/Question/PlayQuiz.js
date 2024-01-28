import React, { useState } from 'react';
import axiosInstance2, { BASE_URL_QUIZ } from '../../Components/API/Url3';
import { Button, Container, Form, FormControl, InputGroup, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PlayQuiz = () => {
    const [quizId, setQuizId] = useState('');
    const [questions, setQuestions] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState({});
  
    const fetchQuestions = async () => {
      try {
        const response = await axiosInstance2.post(`${BASE_URL_QUIZ}/quiz/get/${quizId}`);
        setQuestions(response.data);
        // Clear all selected options when fetching new questions
        setSelectedOptions({});
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };
  
    const handleOptionSelect = (questionId, optionNumber) => {
        setSelectedOptions((prevOptions) => ({
          ...prevOptions,
          [questionId]: optionNumber,
        }));
      };
      
      const clearSelectedOption = (questionId) => {
        setSelectedOptions((prevOptions) => {
          const newOptions = { ...prevOptions };
          delete newOptions[questionId];
          return newOptions;
        });
      };
  
    const handleSubmit = async () => {
      try {
        if (quizId && Object.keys(selectedOptions).length > 0) {
          const requestData = Object.entries(selectedOptions).map(([questionId, optionNumber]) => ({
            id: parseInt(questionId, 10),
            response: optionNumber,
          }));
  
          const response = await axiosInstance2.post(`${BASE_URL_QUIZ}/quiz/submit/${quizId}`, requestData);
          // Display score using Toastify
          toast.success(`Your Score: ${response.data}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        } else {
          toast.error('Quiz ID and Selected Options cannot be empty.');
        }
      } catch (error) {
        console.error('Error submitting quiz:', error.response.data);
      }
    };
  
    return (
      <Container>
        <h1 className="mt-4 mb-4">Play Quiz</h1>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Enter Quiz ID"
            value={quizId}
            onChange={(e) => setQuizId(e.target.value)}
          />
          <Button variant="outline-secondary" onClick={fetchQuestions}>
            Fetch Questions
          </Button>
        </InputGroup>
  
        <ListGroup>
          {questions.map((question) => (
            <ListGroup.Item key={question.id}>
              <div>{question.questionTitle}</div>
              <Form>
                <div key={`question_${question.id}`}>
                  {[1, 2, 3, 4].map((optionNumber) => (
                    <Form.Check
                      key={optionNumber}
                      type="radio"
                      id={`question_${question.id}_option${optionNumber}`}
                      label={question[`option${optionNumber}`]}
                      value={optionNumber.toString()}
                      checked={selectedOptions[question.id] === optionNumber.toString()}
                      onChange={() => handleOptionSelect(question.id, optionNumber)}
                      onClick={() => clearSelectedOption(question.id)}
                      style={{
                        backgroundColor:
                          selectedOptions[question.id] === optionNumber.toString()
                            ? '#e2f3ff' // Highlighted background color
                            : 'transparent', // Default background color
                      }}
                    />
                  ))}
                </div>
              </Form>
            </ListGroup.Item>
          ))}
        </ListGroup>
  
        <Button className="mt-3" variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
  
        <ToastContainer />
      </Container>
    );
  };
  
  export default PlayQuiz;