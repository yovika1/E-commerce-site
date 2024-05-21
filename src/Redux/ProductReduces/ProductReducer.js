import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../../Services/Products/ProductService";

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async () => {
    const data = await getProducts();
    return data;
  }
);

const ProductSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: [],
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export default ProductSlice.reducer;
