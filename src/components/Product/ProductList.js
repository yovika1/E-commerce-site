import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../Redux/ProductReduces/ProductReducer";
import { Products } from "../Page/Products/Products";

function ProductList() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.products);
  const loading = useSelector((state) => state.product.loading);

  useEffect(() => {
    console.log(product);
  }, [product]);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  return (
    <div>
      <div className="flex flex-wrap gap-1 justify-center">
        {loading && <div>Loading...</div>}
        {!loading &&
          product.map((item, index) => (
            <div key={index}>
              <Products item={item} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default ProductList;
