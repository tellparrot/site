import api from './api';

export const login = async (email: string, password: string) => {
  try {
    console.log("Login request payload:", { email, password });
    console.log("Making login request to server");
    const response = await api.post('/api/auth/login', { email, password });
    console.log("Server login response:", response.data);
    console.log("Login successful, about to return response data");
    return response.data;
  } catch (error) {
    console.error("Login API error details:", error.response || error);
    throw error;
  }
};

export const register = async (email: string, password: string) => {
  try {
    console.log("Making registration request with data:", { email, password });
    const response = await api.post('/api/auth/register', { email, password });
    console.log("Raw response from server:", response);
    console.log("Response data structure:", {
      hasToken: !!response.data.token,
      hasAccessToken: !!response.data.accessToken,
      dataKeys: Object.keys(response.data)
    });
    return {
      accessToken: response.data.token,
      ...response.data
    };
  } catch (error) {
    console.error("Registration error details:", {
      error,
      responseData: error.response?.data,
      responseStatus: error.response?.status,
      responseHeaders: error.response?.headers
    });
    throw new Error(error.response?.data?.error || 'Registration failed');
  }
};

export const logout = async () => {
  try {
    await api.post('/api/auth/logout');
    localStorage.removeItem('accessToken');
  } catch (error) {
    throw new Error(error?.response?.data?.message || error.message);
  }
};