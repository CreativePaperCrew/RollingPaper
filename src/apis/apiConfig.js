import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_API_URL;

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
