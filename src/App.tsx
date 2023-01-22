import Cart from './components/Cart';
import NavigationBar from './components/NavigationBar';
import Product from './components/Product';
import ProductsList from './components/ProductsList';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <main className="container mx-auto mt-5">
        <div className="flex justify-between">
          <div className="basis-1/2 p-12">
            <ProductsList />
          </div>
          <div className="basis-1/2 p-4">
            <Cart />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
