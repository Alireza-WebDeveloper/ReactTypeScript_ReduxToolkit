import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Page/Layout';
import Home from './Page/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
