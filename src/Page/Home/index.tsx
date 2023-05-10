import React, { useEffect } from 'react';
import { fetchGetProducts } from '../../StateManagement/Slice/ProductsSlice';
import { Grid, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../StateManagement/Store';
import ProductList from '../../Components/Product/ProductList';
const Home = () => {
  // Products From Store
  const {
    products: { getError, getLoad, data },
  } = useAppSelector((store) => store);
  // Disptach
  const dispatch = useAppDispatch();
  // Get From UseEffect
  useEffect(() => {
    dispatch(fetchGetProducts());
  }, []);
  // Error , Loading , Products
  if (getError) {
    return <Typography>{getError}</Typography>;
  } else if (getLoad) {
    return <Typography>loading...</Typography>;
  }
  return (
    <Grid container p={2}>
      <Grid item xs={12}>
        <Typography textAlign="center" variant="h3" component="h1" gutterBottom>
          Menu-Products
        </Typography>
        <ProductList data={data} />
      </Grid>
    </Grid>
  );
};

export default Home;
