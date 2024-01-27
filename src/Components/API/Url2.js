import axios from 'axios';


export const BASE_URL_QUES = 'http://localhost:9999/QUESTION-SERVICE';

const axiosInstance1 = axios.create({
    baseURL: BASE_URL_QUES,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance1;