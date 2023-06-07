import React from 'react';
import { Popover, List, ListItem, ListItemText, Popper, Paper, ClickAwayListener, Typography } from '@mui/material';
import { observer } from 'mobx-react';
import { uiStore } from '../stores/uiStore';
import CartItem from '../components/CartItem';

const CartPopover: React.FC<{ open: boolean; anchorEl: any; onClose: () => void }> = ({ open, anchorEl, onClose }) => {
  const { cart } = uiStore;
  const handleClickAway = () => {
    onClose();
  };
  return (
    <Popper open={open} anchorEl={anchorEl} placement="bottom-start">
      <ClickAwayListener onClickAway={handleClickAway}>
        <Paper sx={{ width: 440, backgroundColor: '#fff' }}>
          {cart.length ? (
            <List sx={{ maxHeight: 200, overflow: 'auto' }}>
              {cart.map((item) => {
                return <CartItem product={{ ...item, quantity: item.quantity }} />;
              })}
              {/* Add more items if needed */}
            </List>
          ) : (
            <Typography sx={{ padding: 1.5, textAlign: 'center' }}> No items in the cart</Typography>
          )}
          <Paper sx={{ padding: '10px' }}>
            <Typography>
              Total:${cart.reduce((accumulator, item) => accumulator + item.price * item.quantity, 0)}
            </Typography>
          </Paper>
        </Paper>
      </ClickAwayListener>
    </Popper>
  );
};

export default observer(CartPopover);
