import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline } from '@mui/material';
import './styles/global.scss';
import { root } from './routes/root';

const router = createBrowserRouter([root])

ReactDOM
  .createRoot(document.getElementById('root') as HTMLElement)
  .render(
    <>
      <CssBaseline/>
      <RouterProvider router={router}/>
    </>
  );
