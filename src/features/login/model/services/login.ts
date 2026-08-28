import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { userActions } from '@/entities/user';
import { LOCAL_STORAGE_USER_KEY } from '@/shared/config';

interface LoginArgs {
  email?: string;
  phone?: string;
  password: string;
}

export const login = createAsyncThunk<void, LoginArgs, { rejectValue: string }>(
  'login/login',
  async (authData, thunkApi) => {
    try {
      const res = await axios.post(
        'http://localhost:3000/auth/login',
        authData,
      );
      const user = res.data;

      localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(user));
      thunkApi.dispatch(userActions.setUser(user));
    } catch {
      return thunkApi.rejectWithValue('Invalid credentials');
    }
  },
);
