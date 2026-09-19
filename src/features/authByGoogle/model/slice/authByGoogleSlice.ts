import { createSlice } from '@reduxjs/toolkit';
import type { AuthByGoogleSchema } from '../types/authByGoogle';

const initialState: AuthByGoogleSchema = {
  isLoading: false,
  error: undefined,
};

const authByGoogleSlice = createSlice({
  name: 'authByGoogle',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const { actions: authByGoogleActions } = authByGoogleSlice;
export const { reducer: authbyGoogleReducer } = authByGoogleSlice;
