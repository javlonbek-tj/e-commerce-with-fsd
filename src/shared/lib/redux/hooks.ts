import type { AppDispatch, StateSchema } from '@/app/store';
import { useDispatch, useSelector } from 'react-redux';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector = useSelector.withTypes<StateSchema>();
