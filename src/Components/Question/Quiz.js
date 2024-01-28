import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axiosInstance1, { BASE_URL_QUES } from '../../Components/API/Url2';

const AddQuestion = () => {
  const [formData, setFormData] = useState({
    questionTitle: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    rightAnswer: '',
    difficultylevel: '',
    category: '',
  });

  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitForm = async () => {
    try {
      const response = await axiosInstance1.post(`${BASE_URL_QUES}/question/add`, formData);
      console.log('Response from backend:', response.data);
      setSuccessMsg('Question added successfully!');
    } catch (error) {
      console.error('Error adding question:', error);
      setErrorMsg('Failed to add question. Please try again.');
    }
  };

  return (
    <Container>
      <Row className="mt-5">
        <Col md={{ size: 8, offset: 2 }}>
          <div className="question-box">
            <Form>
              <h2 className="text-center mb-4">Add Question</h2>

              <Row>
                <Col md={5}>
                  {/* Question Title */}
                  <FormGroup>
                    <Label for="questionTitle">Question Title:</Label>
                    <Input
                      type="text"
                      id="questionTitle"
                      name="questionTitle"
                      value={formData.questionTitle}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>

                  {/* Options 1-4 */}
                  {['option1', 'option2', 'option3', 'option4'].map((optionName, index) => (
                    <FormGroup key={index}>
                      <Label for={optionName}>{`Option ${index + 1}:`}</Label>
                      <Input
                        type="text"
                        id={optionName}
                        name={optionName}
                        value={formData[optionName]}
                        onChange={handleChange}
                        required
                      />
                    </FormGroup>
                  ))}
                </Col>

                <Col md={6}>
                  {/* Right Answer */}
                  <FormGroup tag="fieldset">
                    <legend>Right Answer:</legend>
                    {[1, 2, 3, 4].map((option) => (
                      <FormGroup key={option} check>
                        <Input
                          type="radio"
                          id={`rightAnswer${option}`}
                          name="rightAnswer"
                          value={option.toString()}
                          checked={formData.rightAnswer === option.toString()}
                          onChange={handleChange}
                        />
                        <Label for={`rightAnswer${option}`}>{`Option ${option}`}</Label>
                      </FormGroup>
                    ))}
                  </FormGroup>

                  {/* Category */}
                  <FormGroup>
                    <Label for="category">Category:</Label>
                    <Input
                      type="text"
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>

                  {/* Difficulty Level */}
                  <FormGroup>
                    <Label for="difficultyLevel">Difficulty Level:</Label>
                    <Input
                      type="select"
                      id="difficultyLevel"
                      name="difficultyLevel"
                      value={formData.difficultylevel}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Difficulty</option>
                      <option value="Hard">Hard</option>
                      <option value="Medium">Medium</option>
                      <option value="Easy">Easy</option>
                    </Input>
                  </FormGroup>

                  {/* Submit Button */}
                  <Button color="primary" onClick={submitForm}>
                    Submit
                  </Button>
                </Col>
              </Row>

              {/* Success and Error Messages */}
              {successMsg && <p className="text-success mt-3">{successMsg}</p>}
              {errorMsg && <p className="text-danger mt-3">{errorMsg}</p>}
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AddQuestion;
