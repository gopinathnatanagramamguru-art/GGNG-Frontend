const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Helper to fetch options with optional authorization
const getHeaders = () => {
  const token = localStorage.getItem('adminToken');
  const headers = {
    'Content-Type': 'application/json',
  };
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  return headers;
};

export const api = {
  // Auth API
  login: async (username, password) => {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || 'Login failed');
    }
    return res.json();
  },
  
  verifyToken: async () => {
    const res = await fetch(`${API_URL}/auth/me`, {
      headers: getHeaders(),
    });
    if (!res.ok) throw new Error('Token verification failed');
    return res.json();
  },

  // Exhibits API
  getExhibits: async () => {
    const res = await fetch(`${API_URL}/exhibits`);
    if (!res.ok) throw new Error('Failed to fetch exhibits');
    return res.json();
  },

  createExhibit: async (exhibitData) => {
    const res = await fetch(`${API_URL}/exhibits`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(exhibitData),
    });
    if (!res.ok) throw new Error('Failed to create exhibit');
    return res.json();
  },

  updateExhibit: async (id, exhibitData) => {
    const res = await fetch(`${API_URL}/exhibits/${id}`, {
      method: 'PUT',
      headers: getHeaders(),
      body: JSON.stringify(exhibitData),
    });
    if (!res.ok) throw new Error('Failed to update exhibit');
    return res.json();
  },

  deleteExhibit: async (id) => {
    const res = await fetch(`${API_URL}/exhibits/${id}`, {
      method: 'DELETE',
      headers: getHeaders(),
    });
    if (!res.ok) throw new Error('Failed to delete exhibit');
    return res.json();
  },

  // Courses API
  getCourses: async () => {
    const res = await fetch(`${API_URL}/courses`);
    if (!res.ok) throw new Error('Failed to fetch courses');
    return res.json();
  },

  createCourse: async (courseData) => {
    const res = await fetch(`${API_URL}/courses`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(courseData),
    });
    if (!res.ok) throw new Error('Failed to create course');
    return res.json();
  },

  updateCourse: async (id, courseData) => {
    const res = await fetch(`${API_URL}/courses/${id}`, {
      method: 'PUT',
      headers: getHeaders(),
      body: JSON.stringify(courseData),
    });
    if (!res.ok) throw new Error('Failed to update course');
    return res.json();
  },

  deleteCourse: async (id) => {
    const res = await fetch(`${API_URL}/courses/${id}`, {
      method: 'DELETE',
      headers: getHeaders(),
    });
    if (!res.ok) throw new Error('Failed to delete course');
    return res.json();
  },

  // Events API
  getEvents: async () => {
    const res = await fetch(`${API_URL}/events`);
    if (!res.ok) throw new Error('Failed to fetch events');
    return res.json();
  },

  createEvent: async (eventData) => {
    const res = await fetch(`${API_URL}/events`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(eventData),
    });
    if (!res.ok) throw new Error('Failed to create event');
    return res.json();
  },

  updateEvent: async (id, eventData) => {
    const res = await fetch(`${API_URL}/events/${id}`, {
      method: 'PUT',
      headers: getHeaders(),
      body: JSON.stringify(eventData),
    });
    if (!res.ok) throw new Error('Failed to update event');
    return res.json();
  },

  deleteEvent: async (id) => {
    const res = await fetch(`${API_URL}/events/${id}`, {
      method: 'DELETE',
      headers: getHeaders(),
    });
    if (!res.ok) throw new Error('Failed to delete event');
    return res.json();
  },

  // Inquiries API
  submitInquiry: async (inquiryData) => {
    const res = await fetch(`${API_URL}/inquiries`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inquiryData),
    });
    if (!res.ok) throw new Error('Failed to submit inquiry');
    return res.json();
  },

  getInquiries: async () => {
    const res = await fetch(`${API_URL}/inquiries`, {
      headers: getHeaders(),
    });
    if (!res.ok) throw new Error('Failed to fetch inquiries');
    return res.json();
  },

  updateInquiryStatus: async (id, status) => {
    const res = await fetch(`${API_URL}/inquiries/${id}`, {
      method: 'PUT',
      headers: getHeaders(),
      body: JSON.stringify({ status }),
    });
    if (!res.ok) throw new Error('Failed to update inquiry status');
    return res.json();
  },

  deleteInquiry: async (id) => {
    const res = await fetch(`${API_URL}/inquiries/${id}`, {
      method: 'DELETE',
      headers: getHeaders(),
    });
    if (!res.ok) throw new Error('Failed to delete inquiry');
    return res.json();
  },
};
export default api;
