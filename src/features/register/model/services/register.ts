import { createAsyncThunk } from '@reduxjs/toolkit';

import { apiClient, extractErrorMessage } from '@/shared/api';
import { registerActions } from '../slice/registerSlice';
import { FormSteps } from '../types/RegisterFormSchema';

interface RegisterArgs {
  email?: string;
  phone?: string;
  password: string;
}

export const register = createAsyncThunk<
  void,
  RegisterArgs,
  { rejectValue: string }
>('features/register', async (payload, thunkApi) => {
  try {
    await apiClient.post('/auth/register', payload);

    thunkApi.dispatch(registerActions.setStep(FormSteps.PASSWORD));
  } catch (error) {
    const message = extractErrorMessage(error);
    return thunkApi.rejectWithValue(message);
  }
});
