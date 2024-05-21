import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./ProductReduces/ProductReducer";

const store = configureStore({
  reducer: {
    product : ProductReducer
  },
});

export default store;
