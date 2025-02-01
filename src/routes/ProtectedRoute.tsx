import {Navigate} from 'react-router-dom';
import {PATH} from './path';
import {ReactNode} from 'react';

export const ProtectedRoute = ({children}: {children: ReactNode}) => {
  const authInfo = localStorage.getItem('accessToken');

  if (!authInfo) {
    return <Navigate to={PATH.login} />;
  }

  return authInfo ? children : null;
};
