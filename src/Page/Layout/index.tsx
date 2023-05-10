import React from 'react';
import { Outlet } from 'react-router';
import Header from '../../Components/Header';
import { Stack } from '@mui/material';
const Layout = () => {
  return (
    <>
      <Header />
      <Stack component="main" mt={10}>
        <Outlet />
      </Stack>
    </>
  );
};

export default Layout;
