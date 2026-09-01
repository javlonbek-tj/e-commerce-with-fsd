import type { StateSchema } from '@/app/store';

export const selectRegisterMethod = (state: StateSchema) =>
  state.registerForm.method;
