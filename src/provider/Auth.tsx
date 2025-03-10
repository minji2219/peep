import type {ReactNode} from 'react';
import {createContext, useContext, useState} from 'react';

type AuthInfo = {
  userId: string;
};

type AuthContextType = {
  authInfo: AuthInfo | undefined;
  login: (userId: string, accessToken: string, refreshToken: string) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({children}: {children: ReactNode}) => {
  const [authInfo, setAuthInfo] = useState<AuthInfo | undefined>(() => {
    const currentAuthToken = localStorage.getItem('accessToken');
    const currentRefreshToken = localStorage.getItem('refreshToken');
    const userId = localStorage.getItem('userId');
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

  const login = (userId: string, accessToken: string, refreshToken: string) => {
    localStorage.setItem('userId', userId);
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    setAuthInfo({userId});
  };

  const logout = () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setAuthInfo(undefined);
  };

  return (
    <AuthContext.Provider value={{authInfo, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
