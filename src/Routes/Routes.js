import React from 'react';
import {  Routes, Route } from 'react-router-dom';

import { ProductDetails } from "../components/Page/ProductDetails";

import { Home } from '../components/Page/Home';

export const ProductRoutes = () => {
  return (
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product-items/:productsId" element={<ProductDetails />} />
      </Routes>
 
  );
}
