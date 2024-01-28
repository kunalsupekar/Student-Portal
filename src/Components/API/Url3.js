import axios from 'axios';


export const BASE_URL_QUIZ = 'http://localhost:9999/QUIZ-SERVICE';

const axiosInstance2 = axios.create({
    baseURL: BASE_URL_QUIZ,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance2;