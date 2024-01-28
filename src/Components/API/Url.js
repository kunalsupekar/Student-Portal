import axios from 'axios';

export const BASE_URL = 'http://localhost:9999/STUDENT-SERVICE';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;

export const studentLogin = async (credentials) => {
  try {
    const response = await axiosInstance.post('/Api/student/login', credentials);
    
    console.log(response);

    if (response.data) {
      // Assuming you have these functions and variables defined somewhere in your code
      // handleLogin(response.data);
      // setIsLoading(false);
      
      // Store the user data in session storage
      sessionStorage.setItem('StudentData', JSON.stringify(response.data));

      // Redirect the user to /studentdashboard upon successful login
      // Replace this with your actual navigation logic
      //navigate('/studentdashboard');

      // For now, let's log a message to indicate successful login
      console.log('Login successful!');
    } else {
      alert('Invalid Credentials. Please try again.');
      // setIsLoading(false);
    }

    return response.data;
  } catch (error) {
    console.error('Error during login:', error);
    // Handle the error as needed
    // setIsLoading(false);
    throw error; // Optionally rethrow the error for further handling
  }
};
