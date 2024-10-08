import api from '@/lib/api';

export async function register(data) {
  try {
    const response = await api.post('/auth/register', data);
    return response;
  } catch (error) {
    return error.response;
  }
}

export async function login(username, password) {
  try {
    const response = await api.post('/auth/login', { username, password });
    return response;
  } catch (error) {
    return error.response;
  }
}

export async function logout() {
  try {
    const response = await api.post('/auth/logout');
    return response;
  } catch (error) {
    return error.response;
  }
}

export async function me() {
  try {
    const response = await api.get('/auth/me');
    return response;
  } catch (error) {
    return error.response;
  }
}

export async function updateMe(data) {
  try {
    const response = await api.patch('/auth/me', data);
    return response;
  } catch (error) {
    return error.response;
  }
}

export async function getFeed() {
  try {
    const response = await api.get('/auth/me/feed');
    return response;
  } catch (error) {
    return error.response;
  }
}