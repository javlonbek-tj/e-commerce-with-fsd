import type { UserSchema } from '@/entities/user';
import type { AuthByGoogleSchema } from '@/features/authByGoogle';
import type { LoginFormSchema } from '@/features/login';
import type { RegisterFormSchema } from '@/features/register';

export interface StateSchema {
  user: UserSchema;
  authByGoogle: AuthByGoogleSchema;
  loginForm: LoginFormSchema;
  registerForm: RegisterFormSchema;
}
