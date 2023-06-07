import React from 'react';
import { Grid, Button, Typography, Card, CardContent } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { uiStore } from '../stores/uiStore';
import { useGetProducts } from '../providers/useGetProducts';
import { Product } from '../types/types';
import CartPopover from '../Navigation/CartPopover';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const { cart, addItemToCart, searchTerm } = uiStore;
  const products2 = useGetProducts({ search: searchTerm });

  return (
    <Grid container spacing={2}>
      {products2.data?.map((product) => (
        <Grid item xs={12} sm={6} md={3} key={product.id}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

const ProductCard: React.FC<{ product: Product }> = observer(({ product }) => {
  const { cart, addItemToCart, removeItemFromCart, removeOneQItemFromCart } = uiStore;
  const handleAddToCart = () => {
    addItemToCart(product);
  };
  const handleRemoveFromCart = () => {
    removeItemFromCart(product.id);
  };
  const handleIncrement = () => {
    addItemToCart(product);
  };
  const handleDecrement = () => {
    removeOneQItemFromCart(product.id);
  };
  const isInCart = () => {
    const filteredItems = cart.find((item) => item.id === product.id)?.quantity;
    return filteredItems;
  };

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Grid container direction="column" spacing={1}>
          <Link data-testid={`id-${product.id}`} id={`id-${product.id}`} to={`/product/${product.id}`}>
            <Grid item>
              <img src={product.imageUrl} alt={product.title} style={{ height: '400px', objectFit: 'cover' }} />
            </Grid>

            <Typography variant="h6" style={{ fontWeight: 'bold' }}>
              {product.title}
            </Typography>
          </Link>
          <Grid item>
            <Typography variant="body1">${product.price}</Typography>
            {isInCart() ? (
              <Grid container spacing={1}>
                <Grid item>
                  <Button variant="outlined" color="primary" onClick={handleDecrement}>
                    -
                  </Button>
                </Grid>
                <Grid sx={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }} item>
                  <Typography sx={{ verticalAlign: 'center', textAlign: 'center' }}>{isInCart()}</Typography>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary" onClick={handleIncrement}>
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
              <Button variant="contained" color="primary" onClick={handleAddToCart}>
                Add to Cart
              </Button>
            )}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
});

export default observer(HomePage);
