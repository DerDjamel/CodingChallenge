import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../..';
import { CartItemType, ProductType } from '../../../utils/types';

type CartSliceState = {
  items: CartItemType[];
};

const initialCart: CartSliceState = {
  items: []
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCart,
  reducers: {
    addProductToCart: (state, action: PayloadAction<CartItemType>) => {
      //if product already exists then don't add it to the cart
      if (
        state.items.find(
          (item) => item.product.id === action.payload.product.id
        )
      ) {
        return;
      }

      state.items.push(action.payload);
    },
    incrementQuantity: (state, action: PayloadAction<{ id: string }>) => {
      const item = state.items.find(
        (item) => item.product.id === action.payload.id
      );
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action: PayloadAction<{ id: string }>) => {
      const item = state.items.find(
        (item) => item.product.id === action.payload.id
      );
      if (item) {
        // if the product quantity is 1 in the cart and the user decrement then remove the product from the cart
        console.log(item.quantity === 1);
        if (item.quantity === 1) {
          state.items = state.items.filter(
            (item) => item.product.id !== action.payload.id
          );
          return;
        }
        item.quantity -= 1;
      }
    }
  }
});

const items = (state: RootState) => state.cart.items;

export const totals = createSelector([items], (items) => {
  let subtotal: number = 0;
  let discount: number = 0;

  // calculate the subtotal + number of milk/butter products for later calc of dicount
  items.map((item) => {
    subtotal += item.quantity * item.product.price;
  });

  //get the butter cart item
  const butterCartItem = items.find((item) =>
    item.product.name.includes('Butter')
  );

  const milkCartItem = items.find((item) => item.product.name.includes('milk'));

  //calculate discount
  const milkdiscount = Math.trunc((milkCartItem?.quantity || 0) / 4) * 1.15;
  let butterDiscount = 0;
  // apply the butter discount only if there is bread in the cart
  if (items.find((item) => item.product.name.includes('bread'))) {
    butterDiscount =
      Math.trunc((butterCartItem?.quantity || 0) / 2) * (1 * 0.5);
  }

  discount = milkdiscount + butterDiscount;

  return {
    subtotal,
    discount,
    total: subtotal - discount
  };
});

export default cartSlice.reducer;
export const { addProductToCart, incrementQuantity, decrementQuantity } =
  cartSlice.actions;
