// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Grid, ThemeProvider } from '@mui/material';
import { SnackbarProvider } from 'notistack';
import { QueryClientProvider } from 'react-query';
import styles from './app.module.scss';
import RoutesContainer from './providers/RoutesContainer';

import NxWelcome from './nx-welcome';
import { mainQueryClient } from './providers/mainQueryClient';
import { theme } from './Theme/theme';

export function App() {
  return (
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
          <RoutesContainer />
        </QueryClientProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
