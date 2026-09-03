import { authClient, extractErrorMessage } from '@/shared/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface ResendCodeArgs {
  email?: string;
  phone?: string;
}

export const resendCode = createAsyncThunk<
  void,
  ResendCodeArgs,
  { rejectValue: string }
>('features/resendCode', async (payload, thunkApi) => {
  try {
    await authClient.post('/auth/resend-code', payload);
  } catch (error) {
    const message = extractErrorMessage(error);
    return thunkApi.rejectWithValue(message);
  }
});
