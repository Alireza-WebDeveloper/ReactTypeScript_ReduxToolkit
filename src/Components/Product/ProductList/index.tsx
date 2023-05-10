import React, { useMemo } from 'react';
import { ProductsData } from '../../../StateManagement/Slice/ProductsSlice/index.types';
import { Grid } from '@mui/material';
import ProductItem from '../ProductItem';

const ProductList = (props: { data: ProductsData[] }): JSX.Element => {
  let { data } = props;
  // render Product Item
  const renderProductItem: JSX.Element[] = useMemo(() => {
    return data.map((product: ProductsData): JSX.Element => {
      return (
        <Grid item xl={3} lg={4} md={6} xs={12} key={product.id}>
          <ProductItem product={product} />
        </Grid>
      );
    });
  }, []);
  return (
    <Grid container spacing={3}>
      {renderProductItem}
    </Grid>
  );
};

export default ProductList;
