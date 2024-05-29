import axios from 'axios';

export const BASE_URL = 'http://localhost:9999/STUDENT-SERVICE';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;

export const teacherLogin = async (credentials) => {
  try {
    const response = await axiosInstance.post('/api/teacher/login', credentials);
    
    console.log(response);

    if (response.data) {
      // Store the user data in session storage
      sessionStorage.setItem('TeacherData', JSON.stringify(response.data));

      // Redirect the user to /teacherdashboard upon successful login
      // Replace this with your actual navigation logic
      //navigate('/teacherdashboard');

      // For now, let's log a message to indicate successful login
      console.log(' Teacher Login successful!');
    } else {
      alert('Invalid Credentials. Please try again.');
    }

    return response.data;
  } catch (error) {
    console.error('Error during login:', error);
    // Handle the error as needed
    throw error; // Optionally rethrow the error for further handling
  }
};
