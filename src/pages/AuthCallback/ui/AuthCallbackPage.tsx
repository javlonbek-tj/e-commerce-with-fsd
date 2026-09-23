import { useEffect, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import { useTranslation } from 'react-i18next';

import { selectUserData } from '@/entities/user';
import {
  exchangeCode,
  selectAuthByGoogleError,
  selectAuthByGoogleIsLoading,
} from '@/features/authByGoogle';
import { useAppDispatch, useAppSelector } from '@/shared/lib';
import { AppRoutes } from '@/shared/config';
import { PageError } from '@/widgets/PageError';
import { PageLoader } from '@/widgets/PageLoader';

const AuthCallbackPage = () => {
  const { t } = useTranslation();
  const hasStarted = useRef(false);
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const code = searchParams.get('code');
  const errorParam = searchParams.get('error');

  const authError = useAppSelector(selectAuthByGoogleError);
  const isLoading = useAppSelector(selectAuthByGoogleIsLoading);
  const userData = useAppSelector(selectUserData);

  useEffect(() => {
    if (!code || hasStarted.current || errorParam) return;

    hasStarted.current = true;
    dispatch(exchangeCode(code));
  }, [code, errorParam, dispatch]);

  useEffect(() => {
    if (userData && !isLoading && !authError) {
      navigate(AppRoutes.HOME, { replace: true });
    }
  }, [userData, isLoading, authError, navigate]);

  if (errorParam) {
    const errorMessage = t(`errors.${errorParam}`, {
      defaultValue: t('errors.GOOGLE_AUTH_ERROR'),
    });
    return <PageError error={errorMessage} />;
  }

  if (!code) {
    return <PageError error={t('errors.GOOGLE_CODE_INVALID')} />;
  }

  if (authError) {
    return <PageError error={authError} />;
  }

  return <PageLoader />;
};

export default AuthCallbackPage;
