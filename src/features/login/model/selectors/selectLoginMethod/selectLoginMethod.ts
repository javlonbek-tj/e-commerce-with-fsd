import type { StateSchema } from '@/app/store';

export const selectLoginMethod = (state: StateSchema) =>
  state.loginForm.method;
