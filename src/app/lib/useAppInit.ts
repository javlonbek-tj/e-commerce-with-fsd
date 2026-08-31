import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@/shared/lib';
import { refreshSession } from '@/entities/user';

export const useAppInit = (): void => {
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.user.userData);

  useEffect(() => {
    if (!userData) {
      dispatch(refreshSession());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
