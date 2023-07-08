/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { IProduct } from '@/types/globalTypes';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface ICart {
  products: IProduct[];
  total: number;
}

const initialState: ICart = {
  products: [],
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const existingProduct = state.products.find(
        (product) => product._id === action.payload._id
      );
      if (existingProduct) {
        existingProduct.quantity = existingProduct.quantity! + 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }

      // Total price add in cheekout option
      state.total += action.payload.price;
    },

    removeOneCart: (state, action: PayloadAction<IProduct>) => {
      const existingProduct = state.products.find(
        (product) => product._id === action.payload._id
      );
      if (existingProduct && existingProduct.quantity! > 1) {
        existingProduct.quantity = existingProduct.quantity! - 1;
      } else {
        state.products = state.products.filter(
          (product) => product._id !== action.payload._id
        );
      }

      // Remove one Product price from CheekOut
      state.total -= action.payload.price;
    },

    removeFromCart: (state, action: PayloadAction<IProduct>) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload._id
      );

      // Total price make 0 if product deleted
      state.total -= action.payload.price * action.payload.quantity!;
    },
  },
});

export const { addToCart, removeFromCart, removeOneCart } = cartSlice.actions;

export default cartSlice.reducer;
