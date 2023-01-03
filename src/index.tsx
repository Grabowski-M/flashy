import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline } from '@mui/material';
import { ErrorPage } from './components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>
  }
])

ReactDOM
  .createRoot(document.getElementById('root') as HTMLElement)
  .render(
    <>
      <CssBaseline/>
      <RouterProvider router={router}/>
    </>
  );
