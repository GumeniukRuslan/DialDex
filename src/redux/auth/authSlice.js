import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  logInThunk,
  logOutThunk,
  refreshUserThunk,
  registerThunk,
} from './thunk';

const authInitialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
};

const thunkArr = [registerThunk, logInThunk, logOutThunk, refreshUserThunk];

const handleMatches = type => thunkArr.map(thunk => thunk[type]);

const handelPending = state => {
  state.isLoading = true;
};
const handelRejected = state => {
  state.isLoading = false;
};
const handelFulfilled = state => {
  state.isLoading = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: builder => {
    builder
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logInThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOutThunk.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUserThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addMatcher(isAnyOf(...handleMatches('pending')), handelPending)
      .addMatcher(isAnyOf(...handleMatches('rejected')), handelRejected)
      .addMatcher(isAnyOf(...handleMatches('fulfilled')), handelFulfilled);
  },
});

export const authReducer = authSlice.reducer;
