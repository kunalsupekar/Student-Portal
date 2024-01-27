import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axiosInstance1, { BASE_URL_QUES } from '../../Components/API/Url2';
// ... (previous imports)

const AddQuestion = () => {
  const [formData, setFormData] = useState({
    questionTitle: '',
    options: ['', '', '', ''],
    rightAnswer: '',
    difficultyLevel: '',
    category: '',
  });

  const [successMsg, setSuccessMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'rightAnswer') {
      setFormData({ ...formData, rightAnswer: value, options: formData.options.map((option, index) => (index + 1).toString() === value ? 'on' : option) });
    } else if (name.startsWith('option')) {
      const optionIndex = parseInt(name.slice(6));
      setFormData({ ...formData, options: formData.options.map((option, index) => index === optionIndex - 1 ? value : option) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const submitForm = async () => {
    try {
      console.log('Form Data:', formData);
      const response = await axiosInstance1.post(`${BASE_URL_QUES}/question/add`, formData);
      console.log('Response from backend:', response.data);
      setSuccessMsg('Question is added successfully!');
      window.location.href = '/teacher';
    } catch (error) {
      console.error('Error adding question:', error);
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
                  {formData.options.map((option, index) => (
                    <FormGroup key={index}>
                      <Label for={`option${index + 1}`}>{`Option ${index + 1}:`}</Label>
                      <Input
                        type="text"
                        id={`option${index + 1}`}
                        name={`option${index + 1}`}
                        value={option}
                        onChange={handleChange}
                        required
                      />
                    </FormGroup>
                  ))}

                  {/* Difficulty Level */}
                 
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
                          value={option}
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
                  <FormGroup>
                    <Label for="difficultyLevel">Difficulty Level:</Label>
                    <Input
                      type="select"
                      id="difficultyLevel"
                      name="difficultyLevel"
                      value={formData.difficultyLevel}
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
            </Form>

            {/* Success Message */}
            {successMsg && <p className="text-success mt-3">{successMsg}</p>}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AddQuestion;
