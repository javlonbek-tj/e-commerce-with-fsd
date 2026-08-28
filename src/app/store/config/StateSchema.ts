import type { UserSchema } from '@/entities/user';
import type { LoginFormSchema } from '@/features/login';

export interface StateSchema {
  user: UserSchema;
  loginForm: LoginFormSchema;
}
