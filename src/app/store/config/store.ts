import {
  configureStore,
  type ThunkDispatch,
  type UnknownAction,
} from '@reduxjs/toolkit';

import { type StateSchema } from './StateSchema';
import { userReducer } from '@/entities/user';
import { loginReducer } from '@/features/login';
import { registerReducer } from '@/features/register';

export const createStore = (initialState?: StateSchema) => {
  return configureStore<StateSchema>({
    preloadedState: initialState,
    reducer: {
      user: userReducer,
      loginForm: loginReducer,
      registerForm: registerReducer,
    },
  });
};

export type AppDispatch = ThunkDispatch<StateSchema, unknown, UnknownAction>;
