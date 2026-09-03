import { userActions, type User } from '@/entities/user';
import { authClient, extractErrorMessage } from '@/shared/api';
import { tokenStorage } from '@/shared/lib';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface VerifyCodeArgs {
  email?: string;
  phone?: string;
  code: string;
}

export const verifyCode = createAsyncThunk<
  User,
  VerifyCodeArgs,
  { rejectValue: string }
>('features/verifyCode', async (payload, thunkApi) => {
  try {
    const res = await authClient.post('/auth/verify', payload);
    const {
      user,
      tokens: { accessToken },
    } = res.data;

    tokenStorage.setAccessToken(accessToken);
    thunkApi.dispatch(userActions.setUser(user));
    return user;
  } catch (error) {
    const message = extractErrorMessage(error);
    return thunkApi.rejectWithValue(message);
  }
});
