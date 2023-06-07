import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Badge, InputBase, Grid } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import CartPopover from './CartPopover';
import { observer } from 'mobx-react-lite';
import { uiStore } from '../stores/uiStore';
import { Link } from 'react-router-dom';

const MainNavigation = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { cart, setSearchTerm } = uiStore;
  const [searchState, setSearchState] = useState('');
  const handleOpenCart = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseCart = () => {
    setAnchorEl(null);
  };
  const handleSearch = () => {
    console.log('koko');
    setSearchTerm(searchState);
  };
  const isPopoverOpen = Boolean(anchorEl);

  return (
    <AppBar position="static" sx={{ bgcolor: '#333' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div" sx={{ color: '#fff' }}></Typography>
        <Grid container flexDirection={'row'} alignItems="flex-end" justifyContent={'flex-end'}>
          <Link to={'/'}>
            <Button sx={{ color: '#fff' }}>Home</Button>
          </Link>
          <Button sx={{ color: '#fff' }}>Shop</Button>
          <Button sx={{ color: '#fff' }}>Contact</Button>
          <Grid sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton onClick={handleSearch} sx={{ color: '#fff' }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase
              size="small"
              sx={{
                color: '#fff',
                backgroundColor: 'transparent',
                borderRadius: '999px',
                padding: '3px 10px',
                border: '1px solid #fff',
                marginLeft: '4px',
              }}
              onChange={(e) => {
                setSearchState(e.target.value);
              }}
              placeholder="Search"
            />
          </Grid>
          <Badge badgeContent={cart.reduce((accumulator, item) => accumulator + item.quantity, 0)} color="error">
            <IconButton sx={{ color: '#fff' }} aria-label="cart" onClick={handleOpenCart}>
              <ShoppingCartIcon />
            </IconButton>
          </Badge>
        </Grid>
      </Toolbar>{' '}
      <CartPopover open={isPopoverOpen} anchorEl={anchorEl} onClose={handleCloseCart} />
    </AppBar>
  );
};

export default observer(MainNavigation);
