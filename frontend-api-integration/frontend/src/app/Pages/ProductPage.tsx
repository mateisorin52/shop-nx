import React from 'react';
import { useParams } from 'react-router';
import { Grid, Button, Typography, Card, CardContent } from '@mui/material';
import { useGetProducts } from '../providers/useGetProducts';
import { UseQueryResult } from 'react-query';
import { Product } from '../types/types';
import { uiStore } from '../stores/uiStore';
import { observer } from 'mobx-react-lite';

const ProductPage = () => {
  const { productId } = useParams();
  const { data } = useGetProducts({ id: productId }) as UseQueryResult<Product>;
  const { addItemToCart, removeOneQItemFromCart, removeItemFromCart, cart } = uiStore;

  const handleIncrement = () => {
    addItemToCart(data!);
  };
  const handleDecrement = () => {
    removeOneQItemFromCart(data?.id!);
  };
  const handleRemoveFromCart = () => {
    removeItemFromCart(data?.id!);
  };
  const isInCart = () => {
    const filteredItems = cart.find((item) => item.id === data?.id)?.quantity;
    return filteredItems;
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Card>
          <img src={data?.imageUrl} alt={data?.title} style={{ maxWidth: '400px', objectFit: 'cover' }} />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card sx={{ height: '100%' }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              {data?.title}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Price: ${data?.price}
            </Typography>
            <Typography variant="body2" gutterBottom>
              Description: {data?.title}
            </Typography>
            {isInCart() ? (
              <Grid container spacing={1}>
                <Grid item>
                  <Button data-testid={'add-decrement'} variant="outlined" color="primary" onClick={handleDecrement}>
                    -
                  </Button>
                </Grid>
                <Grid sx={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }} item>
                  <Typography data-testid={'num-items'} sx={{ verticalAlign: 'center', textAlign: 'center' }}>
                    {isInCart()}
                  </Typography>
                </Grid>
                <Grid item>
                  <Button data-testid={'add-increment'} variant="outlined" color="primary" onClick={handleIncrement}>
                    +
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="error" onClick={handleRemoveFromCart}>
                    Remove from Cart
                  </Button>
                </Grid>
              </Grid>
            ) : (
              <Button data-testid={'add-cart'} variant="contained" color="primary" onClick={handleIncrement}>
                Add to Cart
              </Button>
            )}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default observer(ProductPage);
