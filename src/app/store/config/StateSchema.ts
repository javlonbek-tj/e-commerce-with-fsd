import type { UserSchema } from '@/entities/user';
import type { LoginFormSchema } from '@/features/login';
import type { RegisterFormSchema } from '@/features/register';

export interface StateSchema {
  user: UserSchema;
  loginForm: LoginFormSchema;
  registerForm: RegisterFormSchema;
}
