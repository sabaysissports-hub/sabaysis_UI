export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const API_ENDPOINTS = {
  PRODUCTS: `${API_BASE_URL}/products`,
  SERVICES: `${API_BASE_URL}/services`,
  SEND_EMAIL: `${API_BASE_URL}/send-email`,
  AUTH_LOGIN: `${API_BASE_URL}/auth/login`,
  MESSAGES: `${API_BASE_URL}/messages`,
};
