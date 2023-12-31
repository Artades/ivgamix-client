import axios from "axios";

// Load environment variables from .env file


// Set axios base URL
axios.defaults.baseURL = process.env.SERVER_API_URL;

// Log the base URL to check if it's correctly set
console.log("Server API URL:", process.env.SERVER_API_URL);

// Axios request interceptor
axios.interceptors.request.use((config) => {
	// You can modify the request config here if needed
	return config;
});

export default axios;
