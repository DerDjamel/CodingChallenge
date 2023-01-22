import { MdOutlineShoppingCart } from 'react-icons/md';

const NavigationBar = () => {
  return (
    <header className="font-inter px-2 py-2 font-semibold tracking-wide border-b md:py-4 md:px-4 bg-light-primary border-gray-700">
      <nav className="container flex justify-between mx-auto md:justify-around">
        <div>
          <MdOutlineShoppingCart
            style={{ display: 'inline-block' }}
            size={20}
          />{' '}
          Shopping Cart
          <span className="hidden ml-2 md:inline-block">
            | Created By <a href="https://github.com/DerDjamel">DerDjamel</a>
          </span>
        </div>
        <div>Legal Doctrine</div>
      </nav>
    </header>
  );
};

export default NavigationBar;
