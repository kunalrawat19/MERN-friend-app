// import axios from 'axios';

// const API = axios.create({
//   baseURL: process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000/api',
// });

// API.interceptors.request.use((req) => {
//   const token = localStorage.getItem('token');
//   if (token) {
//     req.headers.Authorization = `Bearer ${token}`;
//   }
//   return req;
// });

// export const signUp = (formData) => API.post('/auth/signup', formData);
// export const login = (formData) => API.post('/auth/login', formData);
// export const getUsers = () => API.get('/friends');
// export const sendFriendRequest = (toUserId) => API.post('/friends/send-request', { toUserId });
// export const getRecommendations = () => API.get('/friends/recommend');
