import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './features/products/products.slice';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import cartSlice from './features/cart/cart.slice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
