import React from 'react';
import { Typography, Grid, Button } from '@mui/material';
import { Product } from '../types/types';
import { uiStore } from '../stores/uiStore';

const CartItem: React.FC<{ product: Product & { quantity: number } }> = ({ product }) => {
  const { removeItemFromCart, removeOneQItemFromCart, addItemToCart } = uiStore;
  const handleRemoveFromCart = () => {
    removeItemFromCart(product.id);
  };
  const handleIncrement = () => {
    addItemToCart(product);
  };
  const handleDecrement = () => {
    removeOneQItemFromCart(product.id);
  };

  return (
    <Grid sx={{ padding: 2 }} container alignItems="center" spacing={2}>
      <Grid item>
        <img
          src={product.imageUrl}
          alt={product.title}
          style={{ width: '100px', height: '100px', objectFit: 'cover' }}
        />
      </Grid>
      <Grid item xs>
        <Typography variant="subtitle1">{product.title}</Typography>
        <Typography variant="body2">Price: {product.price}</Typography>
        <Typography variant="body2">Quantity: {product.quantity}</Typography>
      </Grid>
      <Grid item>
        <Button sx={{ margin: 1 }} variant="outlined" color="primary" onClick={handleDecrement}>
          -
        </Button>
        <Button sx={{ margin: 1 }} variant="outlined" color="primary" onClick={handleIncrement}>
          +
        </Button>
        <Button sx={{ margin: 1 }} variant="outlined" color="secondary" onClick={handleRemoveFromCart}>
          Remove
        </Button>
      </Grid>
    </Grid>
  );
};

export default CartItem;
