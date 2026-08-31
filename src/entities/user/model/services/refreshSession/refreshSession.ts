import { authClient } from '@/shared/api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { tokenStorage } from '@/shared/lib';
import { userActions } from '../../slice/userSlice';
import type { User } from '../../types/userSchema';

interface RefreshSessionResponse {
  user: User;
  tokens: { accessToken: string };
}

export const refreshSession = createAsyncThunk<
  void,
  void,
  { rejectValue: string }
>('user/refreshSession', async (_, thunkApi) => {
  try {
    const res = await authClient.post<RefreshSessionResponse>('/auth/refresh');
    const {
      user,
      tokens: { accessToken },
    } = res.data;
    tokenStorage.setAccessToken(accessToken);
    thunkApi.dispatch(userActions.setUser(user));
  } catch {
    thunkApi.dispatch(userActions.clearUser());
    return thunkApi.rejectWithValue('Error refreshing session');
  }
});
