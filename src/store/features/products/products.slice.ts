import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductType } from '../../../utils/types';
import { nanoid } from 'nanoid';

type ProductSliceState = {
  products: ProductType[];
};

const imgsrc =
  'https://www.terhuneorchards.com/wp-content/uploads/2020/06/products-sourdough_boule__37011.1586277058.1000.1200__91546.1587042402.1000.1200.png';

const initialProducts: ProductSliceState = {
  products: [
    {
      id: nanoid(),
      name: 'Whole french bread',
      description: 'made in paris and distinated to the whole world.',
      image: imgsrc,
      rating: 4.5,
      price: 1
    },
    {
      id: nanoid(),
      name: 'Fresh Suiss milk',
      description:
        'semi skimmed milk that comes straight from the alpes farmers.',
      image: imgsrc,
      rating: 4.5,
      price: 1.15
    },
    {
      id: nanoid(),
      name: 'Butter',
      description: 'produced bu us to insure the high quality butter.',
      image: imgsrc,
      rating: 4.5,
      price: 0.8
    }
  ]
};

export const ProductsSlice = createSlice({
  name: 'products',
  initialState: initialProducts,
  reducers: {
    addProduct: (state, action: PayloadAction<ProductType>) => {
      state.products.push(action.payload);
    }
  }
});

export default ProductsSlice.reducer;
export const { addProduct } = ProductsSlice.actions;
