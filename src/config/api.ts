// Remove trailing slash if present and ensure /api is included
const getBaseUrl = () => {
  const envUrl = import.meta.env.VITE_API_URL;
  if (envUrl) {
    const cleanUrl = envUrl.replace(/\/$/, '');
    return cleanUrl.endsWith('/api') ? cleanUrl : `${cleanUrl}/api`;
  }
  return 'https://sabaysis-backend.vercel.app/api';
};

export const API_BASE_URL = getBaseUrl();

export const API_ENDPOINTS = {
  PRODUCTS: `${API_BASE_URL}/products`,
  SERVICES: `${API_BASE_URL}/services`,
  SEND_EMAIL: `${API_BASE_URL}/send-email`,
  AUTH_LOGIN: `${API_BASE_URL}/auth/login`,
  MESSAGES: `${API_BASE_URL}/messages`,
} as const;
