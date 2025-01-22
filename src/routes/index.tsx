import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {PATH} from './path';
import Main from '@pages/main';
import Login from '@pages/login';
import Signup from '@pages/signup';
import Questions from '@pages/questions';
import Friends from '@pages/friends';
import {DefaultLayout} from '@components/common/layout';
import {Agree} from '@pages/agree';
import {NavLayout} from '@components/common/layout/NavLayout';
import Mypage from '@pages/mypage';
import {ProtectedRoute} from './ProtectedRoute';

const futureFlags = {
  v7_startTransition: true,
  v7_relativeSplatPath: true,
  v7_fetcherPersist: true,
  v7_normalizeFormMethod: true,
  v7_partialHydration: true,
  v7_skipActionErrorRevalidation: true,
};

const router = createBrowserRouter(
  [
    {
      element: <DefaultLayout />,
      children: [
        {
          path: PATH.agree,
          element: <Agree />,
        },
        {
          path: PATH.signup,
          element: <Signup />,
        },
        {
          element: (
            <ProtectedRoute>
              <NavLayout />
            </ProtectedRoute>
          ),
          children: [
            {
              path: PATH.main,
              element: <Main />,
            },
            {
              path: PATH.questions,
              element: <Questions />,
            },
            {
              path: PATH.friends,
              element: <Friends />,
            },
            {
              path: PATH.mypage,
              element: <Mypage />,
            },
          ],
        },
      ],
    },
    {
      path: PATH.login,
      element: <Login />,
    },
  ],
  {future: futureFlags}
);

export const Router = () => {
  return <RouterProvider router={router} future={futureFlags} />;
};
