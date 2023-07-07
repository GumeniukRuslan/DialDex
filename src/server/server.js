import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const getContacts = async () => {
  const resp = await axios.get('/contacts');
  return resp.data;
};
export const addContact = async obj => {
  const resp = await axios.post('/contacts', obj);
  return resp.data;
};
export const delContact = async id => {
  const resp = await axios.delete(`/contacts/${id}`);
  return resp.data;
};

export const register = async userData => {
  try {
    const res = await axios.post('/users/signup', userData);
    console.log(res);
    setAuthHeader(res.data.token);
    return res.data;
  } catch (er) {
    console.log(er);
  }
};
export const logIn = async userData => {
  const res = await axios.post('/users/login', userData);
  setAuthHeader(res.data.token);
  return res.data;
};
export const logOut = async () => {
  await axios.post('/users/logout');
  clearAuthHeader();
};

export const refreshUser = async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }

  setAuthHeader(persistedToken);
  const res = await axios.get('/users/current ');
  return res.data;
};
