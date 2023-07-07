import { createAsyncThunk } from '@reduxjs/toolkit';
import { logIn, logOut, refreshUser, register } from 'server/server';

export const registerThunk = createAsyncThunk(
  'auth/register',
  async userData => {
    return await register(userData);
  }
);

export const logInThunk = createAsyncThunk('auth/login', async userData => {
  return await logIn(userData);
});

export const logOutThunk = createAsyncThunk('auth/logout', async () => {
  return await logOut();
});

export const refreshUserThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    return await refreshUser(_, thunkAPI);
  }
);
