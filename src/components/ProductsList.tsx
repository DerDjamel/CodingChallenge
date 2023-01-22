import { useSelector } from 'react-redux';
import { RootState, useAppSelector } from '../store';
import Product from './Product';
const imgsrc =
  'https://www.terhuneorchards.com/wp-content/uploads/2020/06/products-sourdough_boule__37011.1586277058.1000.1200__91546.1587042402.1000.1200.png';

const ProductsList = () => {
  const { products } = useAppSelector((state) => state.products);
  return (
    <>
      <h2 className="font-semibold uppercase text-2xl mb-2">Products</h2>
      {products.map((product) => {
        return (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            image={imgsrc}
            rating={product.rating}
            price={product.price}
          />
        );
      })}
    </>
  );
};

export default ProductsList;
