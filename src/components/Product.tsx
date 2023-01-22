import { FC, memo } from 'react';
import { toCurrency } from '../utils/helpers';
import Button from './Button';
import Rating from './Rating';
import { ProductType } from '../utils/types';
import { useAppDispatch } from '../store';
import { addProductToCart } from '../store/features/cart/cart.slice';

const Product: FC<ProductType> = ({
  id,
  image,
  name,
  description,
  rating,
  price
}) => {
  const displatch = useAppDispatch();

  return (
    <article className="py-1 px-1 max-h-40 flex justify-evenly items-center font-inter rounded-md border border-gray-600 shadow-md mb-4">
      <div className="basis-1/5 flex justify-center items-center">
        <img className="max-h-24" src={image} alt={`${name} product image`} />
      </div>

      <div className="basis-3/4">
        <div className="flex justify-between">
          <div>
            <h4 className="font-semibold">{name}</h4>
            <p className="text-sm overflow-auto max-h-12">{description}</p>
          </div>

          <div className="flex flex-col items-end">
            <div className="pt-1">
              <Rating stars={rating}></Rating>
            </div>
            <div className="font-semibold">{toCurrency(price)}</div>
          </div>
        </div>

        <div className="flex justify-end p-1">
          <Button
            clickHandler={(e) => {
              e.preventDefault();
              displatch(
                addProductToCart({
                  product: { id, name, description, price, rating, image },
                  quantity: 1
                })
              );
            }}>
            Add to cart
          </Button>
        </div>
      </div>
    </article>
  );
};

export default memo(Product);
