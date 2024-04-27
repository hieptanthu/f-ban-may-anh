import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5001',
  timeout: 5000, // Adjust the timeout value as needed
  // Other configuration options...
});

export default api;

