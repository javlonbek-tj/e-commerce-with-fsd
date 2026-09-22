import { userActions } from '@/entities/user';
import { authClient, extractErrorMessage } from '@/shared/api';
import { tokenStorage } from '@/shared/lib';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const exchangeCode = createAsyncThunk<
  void,
  string,
  { rejectValue: string }
>('features/authByGoogle', async (code, thunkApi) => {
  try {
    const res = await authClient.get(`/auth/google/verify?code=${code}`);
    const {
      user,
      tokens: { accessToken },
    } = res.data;

    tokenStorage.setAccessToken(accessToken);
    thunkApi.dispatch(userActions.setUser(user));
  } catch (error) {
    const message = extractErrorMessage(error);
    return thunkApi.rejectWithValue(message);
  }
});
