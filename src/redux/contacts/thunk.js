import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import { addContact, delContact, getContacts } from 'server/server';

export const getContactsThunk = createAsyncThunk(
  'contacts/get',
  async (_, thunkAPI) => {
    try {
      return await getContacts();
    } catch (error) {
      const notify = () => toast.error('Something went wrong.');
      notify();
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactsThunk = createAsyncThunk('contacts/add', async obj => {
  return await addContact(obj);
});

export const delContactsThunk = createAsyncThunk(
  'contacts/del',
  async (id, thunkAPI) => {
    try {
      return await delContact(id);
    } catch (error) {
      const notify = () => toast.error('Something went wrong.');
      notify();
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
