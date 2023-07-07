import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import { logIn, logOut, refreshUser, register } from 'server/server';

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (userData, thunkAPI) => {
    try {
      return await register(userData);
    } catch (error) {
      const notify = () => toast.error('Something went wrong.');
      notify();
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logInThunk = createAsyncThunk(
  'auth/login',
  async (userData, thunkAPI) => {
    try {
      return await logIn(userData);
    } catch (error) {
      const notify = () => toast.error('Something went wrong.');
      notify();
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      return await logOut();
    } catch (error) {
      const notify = () => toast.error('Something went wrong.');
      notify();
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUserThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    try {
      return await refreshUser(_, thunkAPI);
    } catch (error) {
      const notify = () => toast.error('Something went wrong.');
      notify();
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
