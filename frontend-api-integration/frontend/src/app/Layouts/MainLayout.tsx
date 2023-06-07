import { Grid } from '@mui/material';

import { observer } from 'mobx-react-lite';
import { Outlet } from 'react-router';
import MainNavigaton from '../Navigation/MainNavigaton';

const MainLayout = observer(() => {
  return (
    <Grid container flexDirection={'column'}>
      <Grid item>
        <MainNavigaton />
      </Grid>{' '}
      <Grid item></Grid>
      <Outlet />
      <Grid item></Grid>
    </Grid>
  );
});

export default MainLayout;
