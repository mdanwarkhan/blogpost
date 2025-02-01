import axios from 'axios';

// Set the base URL dynamically based on the environment variable
console.log('env', import.meta.env.VITE_API_BASE_URL)
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

// Create Axios instance
const axiosInstance = axios.create({
  baseURL: apiBaseUrl, // Use the base URL from environment variables
});

export default axiosInstance;
