import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { BaseApi } from '../../Api';
import { ProductsData, StateData } from './index.types';
const initialState: StateData = {
  data: [],
  getLoad: false,
  getError: '',
};

const fetchGetProducts = createAsyncThunk(
  'fetchGet/Products',
  async (_, ThunkControl) => {
    try {
      const response = await BaseApi.get<ProductsData[]>('/products');
      return response.data;
    } catch (error: any) {
      throw new Error(error);
    }
  }
);

const ProductsSlice = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGetProducts.pending, (state: StateData) => {
      state.getLoad = true;
      state.data = [];
      state.getError = '';
    });
    builder.addCase(
      fetchGetProducts.fulfilled,
      (state: StateData, action: PayloadAction<ProductsData[]>) => {
        state.getLoad = false;
        state.data = action.payload;
        state.getError = '';
      }
    );
    builder.addCase(fetchGetProducts.rejected, (state: StateData, action) => {
      state.getLoad = false;
      state.data = [];
      state.getError = action.error.message || 'Something went Error';
    });
  },
});

export { fetchGetProducts };

export default ProductsSlice.reducer;
