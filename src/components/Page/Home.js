import React from "react";

import ProductList from "../Product/ProductList";
import Banner from "../Banners/Banner";
import Navbar from "../Navbar/Navbar";
import Category from "../category/Category";

export const Home = () => {
 
  return (
    <div className="overflow-x-hidden">
      <Category/>
      <Navbar/>
      <Banner/>
      <ProductList/>
  
    </div>
  );
};
