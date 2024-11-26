import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {PATH} from './path';
import Main from '@pages/main';
import Login from '@pages/login';
import Signup from '@pages/signup';
import Questions from '@pages/questions';
import Friends from '@pages/friends';
import {DefaultLayout} from '@components/common/layout';

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: PATH.main,
        element: <Main />,
      },
      {
        path: PATH.signup,
        element: <Signup />,
      },
      {
        path: PATH.questions,
        element: <Questions />,
      },
      {
        path: PATH.friends,
        element: <Friends />,
      },
    ],
  },
  {
    path: PATH.login,
    element: <Login />,
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
