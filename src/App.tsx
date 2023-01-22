import Cart from './components/Cart';
import NavigationBar from './components/NavigationBar';
import Product from './components/Product';
import ProductsList from './components/ProductsList';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <main className="container mx-auto mt-5">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="sm:basis-1/2 basis-full p-12">
            <ProductsList />
          </div>
          <div className="sm:basis-1/2 basis-full p-4">
            <Cart />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
