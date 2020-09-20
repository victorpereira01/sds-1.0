import axios from 'axios';

const api = axios.create({
    baseURL: 'https://sds01-vpc.herokuapp.com'
});

export default api;