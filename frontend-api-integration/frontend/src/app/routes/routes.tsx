import { CircularProgress } from '@mui/material';
import { RouteObject } from 'react-router';
import WrongPage from '../components/WrongPage';

import MainLayout from '../Layouts/MainLayout';
import HomePage from '../Pages/HomePage';
import ProductPage from '../Pages/ProductPage';

export const mainRoutes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: 'product/:productId', element: <ProductPage /> },
    ],
  },
  { path: '*', element: <WrongPage /> },
];
