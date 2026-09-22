import { createSlice } from '@reduxjs/toolkit';
import type { AuthByGoogleSchema } from '../types/authByGoogle';
import { exchangeCode } from '../services/exchangeCode/exchangeCode';

const initialState: AuthByGoogleSchema = {
  isLoading: false,
  error: undefined,
};

const authByGoogleSlice = createSlice({
  name: 'authByGoogle',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(exchangeCode.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(exchangeCode.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(exchangeCode.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { actions: authByGoogleActions } = authByGoogleSlice;
export const { reducer: authbyGoogleReducer } = authByGoogleSlice;
