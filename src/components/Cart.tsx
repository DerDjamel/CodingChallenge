import { MdOutlineShoppingCart } from 'react-icons/md';
import { useAppSelector } from '../store';
import { totals } from '../store/features/cart/cart.slice';

import { toCurrency } from '../utils/helpers';
import CartItem from './CartItem';

const Cart = () => {
  const items = useAppSelector((state) => state.cart.items);
  const { subtotal, total, discount } = useAppSelector(totals);

  return (
    <article className="font-inter bg-gray-300 flex flex-col px-10 py-6">
      <section className="flex p-1 justify-start gap-2 items-center">
        <h2 className="font-semibold uppercase text-2xl">Cart</h2>
        <MdOutlineShoppingCart size={20} />
      </section>

      <section>
        {items.map((item) => {
          return (
            <CartItem
              key={item.product.id}
              product={item.product}
              quantity={item.quantity}
            />
          );
        })}
      </section>

      <section className="flex flex-col items-end">
        <div className=" text-right">
          <h4 className="font-semibold text-gray-700">Subtotal</h4>
          <div className="font-semibold">{toCurrency(subtotal)}</div>
        </div>
        <div className="text-right">
          <h4 className="font-semibold text-gray-700">Discount</h4>
          <div className="font-semibold">{toCurrency(discount)}</div>
        </div>
        <div className=" text-right">
          <h4 className="font-semibold text-gray-700">Total</h4>
          <div className="font-semibold">{toCurrency(total)}</div>
        </div>
      </section>
    </article>
  );
};

export default Cart;
