const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const api = {
  async get(endpoint) {
    try {
      const response = await fetch(`${API_URL}${endpoint}`);
      if (!response.ok) throw new Error('Network response was not ok');
      return await response.json();
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  },

  async post(endpoint, data) {
    try {
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Network response was not ok');
      return await response.json();
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }
};
