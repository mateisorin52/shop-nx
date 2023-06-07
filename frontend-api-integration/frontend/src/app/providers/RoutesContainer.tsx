import { Grid } from '@mui/material';
import React from 'react';
import { RouteObject, RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import { mainRoutes } from '../routes/routes';

const router = createBrowserRouter(mainRoutes);
const RoutesContainer: React.FC<{}> = ({}) => {
  return <RouterProvider router={router} />;
};

export default RoutesContainer;
