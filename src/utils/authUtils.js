// Utility functions for authentication

/**
 * Sets the auth token for axios requests
 * @param {string} token - JWT token
 */
export const setAuthToken = (token) => {
  if (token) {
    return `Bearer ${token}`;
  }
  return null;
};

/**
 * Checks if user is authenticated
 * @returns {boolean} Authentication status
 */
export const isAuthenticated = () => {
  return localStorage.getItem("token") ? true : false;
};

/**
 * Gets the API base URL from environment variables
 * @returns {string} API base URL
 */
export const getApiBaseUrl = () => {
  return import.meta.env.VITE_APP_API_URL || 'http://localhost:5000';
};