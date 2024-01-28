import axios from 'axios';


export const BASE_URL_COURSE = 'http://localhost:9999/COURSE-SERVICE';

const axiosInstance3 = axios.create({
    baseURL: BASE_URL_COURSE,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance3;