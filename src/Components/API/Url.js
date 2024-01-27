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
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};


