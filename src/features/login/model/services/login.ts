import { createAsyncThunk } from '@reduxjs/toolkit';

import { userActions, type User } from '@/entities/user';
import { apiClient } from '@/shared/api';
import { tokenStorage } from '@/shared/lib';

interface LoginArgs {
  email?: string;
  phone?: string;
  password: string;
}

interface LoginResponse {
  user: User;
  tokens: {
    accessToken: string;
  };
}

export const login = createAsyncThunk<void, LoginArgs, { rejectValue: string }>(
  'login/login',
  async (authData, thunkApi) => {
    try {
      const res = await apiClient.post<LoginResponse>('/auth/login', authData);
      const {
        user,
        tokens: { accessToken },
      } = res.data;

      tokenStorage.setAccessToken(accessToken);
      thunkApi.dispatch(userActions.setUser(user));
    } catch {
      return thunkApi.rejectWithValue('Invalid credentials');
    }
  }
);
