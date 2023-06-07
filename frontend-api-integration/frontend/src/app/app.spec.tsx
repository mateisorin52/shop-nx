import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { QueryClientProvider } from 'react-query';
import { SnackbarProvider } from 'notistack';
import { ThemeProvider } from '@mui/material';
import App from './App';
import { mainQueryClient } from './providers/mainQueryClient';
import { theme } from './Theme/theme';

import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { uiStore } from './stores/uiStore';
import ProductPage from './Pages/ProductPage';
describe('App', () => {
  it('renders the app without errors', () => {
    render(
      <ThemeProvider theme={theme}>
        <SnackbarProvider
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          maxSnack={2}
          style={{ font: 'status-bar', fontSize: '14px' }}
        >
          <QueryClientProvider client={mainQueryClient}>
            <App />
          </QueryClientProvider>
        </SnackbarProvider>
      </ThemeProvider>
    );
    // You can add more specific assertions here if needed
  });
});
