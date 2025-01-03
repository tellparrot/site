import api from './api.ts';

export const getEpicsAndTasks = async () => {
  try {
    const response = await api.get('/api/project-management');
    return response.data;
  } catch (error) {
    throw new Error(error?.response?.data?.message || error.message);
  }
};

export const createEpicOrTask = async (data: { type: string; title: string; description: string }) => {
  try {
    const response = await api.post('/api/project-management', data);
    return response.data;
  } catch (error) {
    throw new Error(error?.response?.data?.message || error.message);
  }
};

export const deleteEpicOrTask = async (id: number) => {
  try {
    await api.delete(`/api/project-management/${id}`);
  } catch (error) {
    throw new Error(error?.response?.data?.message || error.message);
  }
};

export const clearAllEpicsAndTasks = async () => {
  try {
    await api.delete('/api/project-management');
  } catch (error) {
    throw new Error(error?.response?.data?.message || error.message);
  }
};