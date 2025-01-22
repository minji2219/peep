import type {ReactNode} from 'react';
import {createContext, useContext, useEffect, useState} from 'react';

type AuthInfo = {
  userId: string;
  accessToken: string;
  refreshToken: string;
};

export const AuthContext = createContext<AuthInfo | undefined>(undefined);

export const AuthProvider = ({children}: {children: ReactNode}) => {
  const currentAuthToken = localStorage.getItem('accessToken');
  const currentRefreshToken = localStorage.getItem('refreshToken');
  const userId = localStorage.getItem('userId');

  const [isReady, setIsReady] = useState(!currentAuthToken);

  const [authInfo, setAuthInfo] = useState<AuthInfo | undefined>(() => {
    // 초기값을 함수로 설정하여 localStorage 값들이 있으면 바로 설정
    if (currentAuthToken && currentRefreshToken && userId) {
      return {
        userId: userId,
        accessToken: currentAuthToken,
        refreshToken: currentRefreshToken,
      };
    }
    return undefined;
  });

  useEffect(() => {
    if (currentAuthToken && currentRefreshToken && userId) {
      setAuthInfo({
        userId: userId,
        accessToken: currentAuthToken,
        refreshToken: currentRefreshToken,
      });
      setIsReady(true);
    }
  }, [currentAuthToken, currentRefreshToken, userId]);

  if (!isReady) return <></>;
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
