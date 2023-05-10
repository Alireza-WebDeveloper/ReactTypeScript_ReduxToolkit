import React from 'react';
import { ProductsData } from '../../../StateManagement/Slice/ProductsSlice/index.types';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const ProductItem = (props: { product: ProductsData }): JSX.Element => {
  const { product } = props;
  const { title, image } = product;
  return (
    <Card>
      <CardMedia
        component={'img'}
        src={image}
        sx={{ height: { xl: '40vh', xs: '50vh' }, objectFit: 'fill' }}
      />
      <CardContent>
        <Typography textAlign="center" variant="h6" component="p">
          {title.slice(0, 30)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductItem;
