import { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';

// Lazy loaded pages
const HomePage = lazy(() => import('@/pages/home').then(module => ({ default: module.default })));
const NotFoundPage = lazy(() => import('@/pages/not-found').then(module => ({ default: module.default })));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '*',
        element: <Navigate to="/" replace />,
      },
    ],
  },
]); 