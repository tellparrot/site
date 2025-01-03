import api from './api.ts';

export const getUserProfile = async () => {
  try {
    const response = await api.get('/api/auth/me');
    return response.data;
  } catch (error) {
    throw new Error(error?.response?.data?.message || error.message);
  }
};

export const updateUserProfile = async (data: { name: string }) => {
  try {
    const response = await api.put('/api/auth/me', data);
    return response.data;
  } catch (error) {
    throw new Error(error?.response?.data?.message || error.message);
  }
};