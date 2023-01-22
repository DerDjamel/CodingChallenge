import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import {
  decrementQuantity,
  incrementQuantity,
  totals
} from '../store/features/cart/cart.slice';
import { toCurrency } from '../utils/helpers';
import { CartItemType } from '../utils/types';

const CartItem: FC<CartItemType> = ({ product, quantity }) => {
  const dispatch = useAppDispatch();
  const { butterDiscount } = useAppSelector(totals);

  return (
    <article className="flex items-center border-b-2 border-gray-400 mb-4 p-2">
      <div className="basis-1/4">
        <img
          className="max-h-24 rounded-full border border-gray-400"
          src={product.image}
          alt={`product image`}
        />
      </div>

      <div className="basis-2/4 flex flex-col justify-around self-stretch">
        <div>
          <h4 className="font-semibold text-sm capitalize">{product.name}</h4>
        </div>
        <div className="flex gap-4 items-center">
          <div className="font-semibold">quantity</div>
          <div className="flex gap-2 items-baseline">
            <button
              onClick={(e) => {
                e.preventDefault();
                dispatch(decrementQuantity({ id: product.id }));
              }}
              className="bg-gray-200 rounded-full font-semibold border border-gray-600 flex justify-center items-center h-5 w-5">
              -
            </button>
            <div>{quantity}</div>
            <button
              onClick={(e) => {
                e.preventDefault();
                dispatch(incrementQuantity({ id: product.id }));
              }}
              className="bg-gray-200 rounded-full font-semibold border border-gray-600 flex justify-center items-center h-5 w-5">
              +
            </button>
          </div>
        </div>
      </div>

      <div className="basis-1/5 text-right font-semibold">
        {butterDiscount > 0 && product.name.includes('bread') ? (
          <>
            <div>
              <span className="text-red-500 line-through">
                {toCurrency(product.price)}
              </span>
            </div>
            <div>{toCurrency(product.price * 0.5)}</div>
          </>
        ) : (
          <div>{toCurrency(product.price * quantity)}</div>
        )}
      </div>
    </article>
  );
};

export default CartItem;
